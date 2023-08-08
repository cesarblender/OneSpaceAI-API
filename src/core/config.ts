const config = {
  port: process.env.PORT || 3000,
  huggingfaceApiKey: process.env.HF_API_KEY,
  dbURI: process.env.DB_URI,
  production: process.env.NODE_ENV === 'production',
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET || "",
    refreshSecret: process.env.JWT_REFRESH_SECRET || "",
    accessTokenDuration: process.env.JWT_ACCESS_TOKEN_DURATION || "2m",
    refreshTokenDuration: process.env.JWT_REFRESH_TOKEN_DURATION || "10m",
  }
};

export default config;
