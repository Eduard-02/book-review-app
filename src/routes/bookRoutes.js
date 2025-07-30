import express from "express";
import cloudinary from "../lib/cloudinary.js";
import Book from "../models/Book.js";
import protectRoute from "../middleware/auth.middleware.js";

const router = express.Router();

// Create a book review
router.post("/", protectRoute, async (req, res) => {
	try {
		const { title, caption, rating, image } = req.body;

		if (!title || !caption || !rating || !image)
			return res.status(400).json({ message: "Please provide all fields" });

		// Upload the image to cloudinary
		const uploadResponse = await cloudinary.uploader.upload(image);
		const imageUrl = uploadResponse.secure_url;
		
		// Save to the DB
		const newBook = new Book({
			title,
			caption,
			rating,
			image: imageUrl,
			user: req.user._id
		});

		await newBook.save();

		res.status(201).json(newBook);
	} catch (error) {
		console.log("Error creating book", error);
		res.status(500).json({ message: error.message })
	}
});

// Get all book reviews
router.get("/", protectRoute, async (req, res) => {
	try {
		const page = req.query.page || 1;
		const limit = req.query.limit || 5;
		const skip = (page -1) * limit;

		const books = await Book.find()
			.sort({ createdAt: -1 }) // descending order
			.skip(skip)
			.limit(limit)
			.populate("user", "username profileImage");

		const totalBooks = await Book.countDocuments();

		res.send({
			books,
			currentPage: page,
			totalBooks,
			totalPages: Math.ceil(totalBooks / limit)
		});

	} catch (error) {
		console.log("Error in getting all book reviews");
		res.status(500).json({ message: "Internal server error" });
	}
});

// Delete review
router.delete("/:id", protectRoute, async (req, res) => {
	try {
		const book = await Book.findById(req.params.id);
		if (!book) return res.status(404).json({ message: "Review not found" });
		
		// Check if User is the creator of the review
		if (book.user.toString() != req.user._id.toString())
			return res.status(401).json({ message: "Unauthorized" });

		// Delete image from Cloudinary
		if (book.image && book.image.includes("cloudinary")) {
			try {
				const publicId = book.image.split("/").pop().split("."[0]);
				await cloudinary.uploader.destroy(publicId);
			} catch (deleteError) {
				console.log("Error deleting image from Cloudinary", deleteError);
			}
		};

		await book.deleteOne();

		res.json({ message: "Review deleted successfully" });
	} catch (error) {
		console.log("Error deleting review", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

// Get the reviews by the current User
router.get("/user", protectRoute, async (req, res) => {
	try {
		const reviews = await Book.find({ user: req.user._id }).sort({ createdAt: -1 });
		res.json(reviews);
	} catch (error) {
		console.log("Get User reviews error:", error.message);
		res.status(500).json({ message: "Server error" });
	}
});

export default router;