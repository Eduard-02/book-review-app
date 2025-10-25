import { Platform } from "react-native";
import Constants from "expo-constants";

const extra = Constants?.expoConfig?.extra ?? Constants?.manifest?.extra;
const configuredUrl = extra?.apiUrl ?? process.env.EXPO_PUBLIC_API_URL;

const localUrl = Platform.select({
  android: "http://10.0.2.2:5000",
  default: "http://localhost:5000",
});

export const API_BASE_URL = (configuredUrl || localUrl).replace(/\/$/, "");
export const API_URL = `${API_BASE_URL}/api`;
