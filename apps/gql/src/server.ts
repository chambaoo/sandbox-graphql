import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './schema';

// The root provides a resolver function for each API endpoint
const root = {
  hello() {
    return "Hello world!"
  },
}
 
const app = express();
 
// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
);

// Start the server at port
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");

