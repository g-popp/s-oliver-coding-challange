const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const getArticles = async () => {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const response = await fetch(`${API_URL}/articles`);
  return await response.json();
};
