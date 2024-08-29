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
import { OrderModule } from './order/order.module';
import { UploadModule } from './upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({

  imports: [

    AuthModule,
    
    UserModule,
    ProfileModule,
    ProductModule,
    CategoryModule,
    OrderModule,
    UploadModule,
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
        migrations: [`${__dirname}/**/migrations/*.js`],
        migrationsRun: true,
        synchronize: true,
        logging: true,
        
      }),

      ServeStaticModule.forRoot({
        serveRoot: '/uploads',
        rootPath: join(__dirname, '../uploads'),
      }),

  ],

  controllers: [AppController],
  providers: [AppService],
  
})

export class AppModule {}