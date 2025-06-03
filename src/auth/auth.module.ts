import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'your_jwt_secret', // غيّره في بيئة الإنتاج
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy],  // أضف JwtStrategy هنا
  controllers: [AuthController],
})
export class AuthModule {}

