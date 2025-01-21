import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { CreateAccountController } from './controllers/create-account.controller';
import { envSchema } from './env';
import { AuthenticateController } from './controllers/authenticate-controller';
import { AuthModule } from './auth/auth.module';
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controlller';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [CreateAccountController, AuthenticateController, FetchRecentQuestionsController],
  providers: [PrismaService],
})
export class AppModule {}
