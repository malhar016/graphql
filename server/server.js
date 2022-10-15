import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  schema {
    query: Query
  }
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => 'Hello world!',
  },
};

console.log("some super awesome functionality");
console.log("added finishing touches...");

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await server.listen({ port: 9000 });
console.log(`Server running at ${url}`);