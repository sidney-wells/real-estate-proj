const { GraphQLServer } = require('graphql-yoga');
const fetch = require('node-fetch');

const typeDefs = `
  type Query {
    getApartments: [Apartment!]!
  }
  type Apartment {
    region: String!
    subregion: String!
    apartmenttype: String!
    quarter: String!
    year: String!
    averagerent: String
  }
`;

const resolvers = {
  Query: {
    getApartments: async () => {
      const response = await fetch(
        'https://data.colorado.gov/resource/gmnt-hhfe.json'
      );
      return response.json();
    },
  },
};

const options = { port: 4000 };
const server = new GraphQLServer({ typeDefs, resolvers });
server.start(options, () =>
  console.log('Server is running on localhost:' + options.port)
);
