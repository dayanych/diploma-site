export const getApiConfig = () => ({
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:4004',
});
