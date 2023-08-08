const config = {
  port: process.env.PORT || 3000,
  huggingfaceApiKey: process.env.HF_API_KEY,
  dbURI: process.env.DB_URI,
  production: process.env.NODE_ENV === 'production',
};

export default config;
