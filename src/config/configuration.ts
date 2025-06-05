export default () => {
  console.log('Environment Variables:', {
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT,
  });

  return {
    port: parseInt(process.env.PORT as string || '3000', 10),
    database: {
      uri: process.env.MONGODB_URI || 'mongodb+srv://ganbourmarwan9:Souad%4020%23%23@cluster0.ita61rb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    },
    jwt: {
      secret: process.env.JWT_SECRET || 'your-super-secret-key-change-this-in-production',
      expiresIn: process.env.JWT_EXPIRATION || '24h',
    },
    cors: {
      origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    },
    swagger: {
      title: 'Auth API',
      description: 'The Auth API description',
      version: '1.0',
    },
  };
}; 