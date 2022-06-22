import { gql } from '@apollo/client';

export const ME_QUERY = gql`
{
    me {
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
