import { MongooseModule } from '@nestjs/mongoose';
import  { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:uiDfmrsLmzbsDUNk@cluster0.smv0c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
