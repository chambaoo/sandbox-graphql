import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './schema/schema';

// Dummy user data
const users = [
  { id: '01J389TGR4HCXY2N105HD4Y6AS', name: 'abc-dummy', email: 'abcabc-dummy@example.com' },
  { id: '01J389TNWGEQP3QCGES42H7ZWA', name: 'xyz-dummy', email: 'xyzabc-dummy@example.com' },
];

// The root provides a resolver function for each API endpoint
const root = {
  hello() {
    return "Hello world!"
  },
  user({ id }: { id: string }) {
    return users.find(user => user.id === id) || null;
  }
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

