import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { SAVED_RECIPE, REMOVE_RECIPE } from '../utils/mutations';

import Auth from '../utils/auth';
import { removeRecipeId, saveRecipeIds } from '../utils/localStorage';

const SavedRecipes = () => {
    const { loading, data } = useQuery(GET_ME);
    const [removeRecipe, { error}] = useMutation(REMOVE_RECIPE);
    const userData = data?.me || {};
  
    // use this to determine if `useEffect()` hook needs to run again
    // const userDataLength = Object.keys(userData).length;

    if(!userData?.username) {
  
        return (
          <h4>
            You need to be logged in to see this page. Use the navigation links above to sign up or log in!
          </h4>
        );
    }
      

       // create function that accepts the recipe's mongo _id value as param and deletes the recipe from the database

  const handleDeleteRecipe = async (recipeId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await removeRecipe({
        variables: {recipeId: recipeId},
      });

      if (!response) {
        throw new Error("something went wrong!");
      }

      // upon success, remove recipe's id from localStorage
      removeRecipeId(recipeId);
    } catch (err) {
      console.error(err);
    }
  };

    // if data isn't here yet, say so
    if (loading) {
        return <h2>LOADING...</h2>;
      }
    
        // sync localStorage with what was returned from the userData query
        
        const savedRecipeIds = userData.savedRecipes.map((recipe) => recipe.recipeId);
        saveRecipeIds(savedRecipeIds);
        

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved recipes!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedRecipes.length
            ? `Viewing ${userData.savedRecipes.length} saved ${userData.savedRecipes.length === 1 ? 'recipe' : 'recipes'}:`
            : 'You have no saved recipes!'}
        </h2>
        <CardColumns>
          {userData.savedRecipes.map((recipe) => {
            return (
              <Card key={recipe.recipeId} border='dark'>
                {recipe.image ? <Card.Img src={recipe.image} alt={`The cover for ${recipe.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <p className='small'>Authors: {recipe.authors}</p>
                  <Card.Text>{recipe.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteRecipe(recipe.recipeId)}>
                    Delete this recipe!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};



export default SavedRecipes
