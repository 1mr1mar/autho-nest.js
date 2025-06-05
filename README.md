# Authentication Backend - Simple Guide

## What This Project Does
This is a simple authentication system that lets users:
1. Register (create a new account)
2. Login (access their account)

## How to Use

### 1. Register a New User
Send this request to create a new account:
```bash
curl -X POST http://localhost:3000/auth/register \
-H "Content-Type: application/json" \
-d '{"email": "your@email.com", "password": "yourpassword"}'
```

### 2. Login
Send this request to login:
```bash
curl -X POST http://localhost:3000/auth/login \
-H "Content-Type: application/json" \
-d '{"email": "your@email.com", "password": "yourpassword"}'
```

Both will give you back a token like this:
```json
{
  "access_token": "your.jwt.token"
}
```

## How It Works (Simple Explanation)

### 1. Registration Process
When you register:
1. Your password is encrypted (made secure)
2. Your email and encrypted password are saved
3. You get a special token (JWT) to use later

### 2. Login Process
When you login:
1. The system checks if your email exists
2. It verifies your password
3. If correct, you get a new token

### 3. Security Features
- Passwords are never stored as plain text
- Each email can only be used once
- Tokens expire after 24 hours

## Project Structure

```
src/
├── auth/                 # Authentication stuff
│   ├── auth.controller.ts    # Handles requests
│   ├── auth.service.ts       # Main logic
│   └── jwt.strategy.ts       # Token handling
├── users/                # User management
│   ├── users.service.ts      # User operations
│   └── schemas/             # Database structure
└── config/               # Settings
    └── configuration.ts      # Environment setup
```

## Setup

1. Create a `.env` file with:
```
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=3000
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run start:dev
```

## Common Issues

1. **Can't Connect to Database**
   - Check your MongoDB connection string
   - Make sure MongoDB is running

2. **Registration Fails**
   - Email might already be used
   - Password must be at least 6 characters
   - Email must be valid format

3. **Login Fails**
   - Check if email exists
   - Verify password is correct

## Technologies Used
- NestJS (Backend framework)
- MongoDB (Database)
- JWT (Authentication tokens)
- bcrypt (Password security)

## Next Steps
1. Add password reset
2. Add email verification
3. Add user profiles
4. Add more security features

## Need Help?
- Check the error messages
- Make sure all environment variables are set
- Verify your MongoDB connection
- Check if the server is running
