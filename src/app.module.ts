import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProfileModule } from './profile/profile.module';
const { ApolloServerPluginLandingPageLocalDefault } = require(
  '@apollo/server/plugin/landingPage/default',
);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      graphiql: false,
       plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ProfileModule,
  ],
})
export class AppModule { }
