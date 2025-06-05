export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/auth-db',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'super-secret',
    expiresIn: process.env.JWT_EXPIRATION || '1h',
  },
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  },
  swagger: {
    title: 'Auth API',
    description: 'The Auth API description',
    version: '1.0',
  },
}); 