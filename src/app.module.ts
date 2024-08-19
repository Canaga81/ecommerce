import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import config from './config/config';
import { ProfileModule } from './profile/profile.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

@Module({

  imports: [

    AuthModule,
    UserModule,
    ProfileModule,
    ProductModule,
    CategoryModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(
      {

        type: 'postgres',
        host: config.database.host,
        port: +config.database.port,
        username: config.database.username,
        password: config.database.password,
        database: config.database.name,
        entities: [`${__dirname}/**/*.entity.{ts,js}`],
        synchronize: true,
        logging: true,
        
      }),

  ],

  controllers: [AppController],
  providers: [AppService],
  
})

export class AppModule {}