import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import { resolvers } from '../resolvers/resolvers';

// Define the User type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

// Define the Query type
const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: resolvers.Query.hello,
    },
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: resolvers.Query.user,
    },
  },
});

// Define the schema
export const schema = new GraphQLSchema({
  query: QueryType,
});
