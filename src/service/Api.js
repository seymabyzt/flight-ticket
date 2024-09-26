const url = "http://localhost:3000/flights";

export const get = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("404 not found");
  }
  const result = await response.json();
  return result;
};