import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      recipeCount
      savedRecipes {
        recipeId
        authors
        description
        title
        image
        link
      }
    }
  }
}`;

export const SAVE_RECIPE = gql`
mutation SaveRecipe($input: savedRecipe!) {
  saveRecipe(input: $input) {
    _id
    username
    email
    recipeCount
    savedRecipes {
      recipeId
      authors
      description
      title
      image
      link
    }
  }
}`; 

export const REMOVE_RECIPE = gql`
mutation RemoveRecipe($recipeId: ID!) {
  removeRecipe(recipeId: $recipeId) {
    _id
    username
    email
    recipeCount
    savedRecipes {
      recipeId
      authors
      description
      title
      image
      link
    }
  }
}
`;