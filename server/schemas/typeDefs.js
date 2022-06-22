const { gql } = require('apollo-server-express')

const typeDefs = gql`

type Query {
    me: User
}

type User {
    _id: ID!
    username: String!
    email: String!
    recipeCount: Int 
    savedRecipes: [Recipe] 
}

type Recipe {
    recipeId: ID!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
}

input savedRecipe {
    description: String!
    title: String!
    recipeId: String!
    image: String
    lik: String
    authors: [String]
}

type Auth {
    token: ID
    user: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveRecipe(input: savedRecipe!): User
    removeRecipe(recipeId: ID!): User
}

`;

// export the typeDefs
module.exports = typeDefs;