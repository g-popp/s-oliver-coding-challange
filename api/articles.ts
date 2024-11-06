const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const getArticles = async () => {
  const response = await fetch(`${API_URL}/articles`);
  return await response.json();
};
