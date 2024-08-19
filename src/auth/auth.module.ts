import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.sevice";
import { JwtModule } from "@nestjs/jwt";
import config from "src/config/config";
import { UserModule } from "src/user/user.module";


@Module({
    imports: [
        
        UserModule,

        JwtModule.register({
            global: true,
            secret: config.jwtSecret,
            signOptions: { expiresIn: '60m' },
        }),

    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}