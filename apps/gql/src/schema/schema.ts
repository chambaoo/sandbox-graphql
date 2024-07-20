import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import { resolvers } from '../resolvers/resolvers';

// Define the Query type
const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: resolvers.Query.hello,
    },
  },
});

// Define the schema
export const schema = new GraphQLSchema({
  query: QueryType,
});
