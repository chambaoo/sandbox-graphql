import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './schema/schema';
import { UserService } from './services/UserService';

const app = express();

// UserServiceのインスタンスを作成
const userService = new UserService();

// リゾルバ関数
const root = {
  hello: (): string => "Hello world!",
  user: ({ id }: { id: string }) => userService.getUserById(id),
};

// GraphQLハンドラの作成と使用
app.use("/graphql", createHandler({ schema, rootValue: root }));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
});