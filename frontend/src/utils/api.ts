export const API_URL = "http://localhost:5000/api/health";

export const fetchMessage = async () => {
  const res = await fetch(API_URL, { credentials: "include" });
  if (!res.ok) throw new Error("Failed to fetch message");
  return res.json();
};
