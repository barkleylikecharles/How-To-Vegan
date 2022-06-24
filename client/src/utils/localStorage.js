export const getSavedRecipeIds = () => {
    const savedRecipesIds = localStorage.getItem('saved_recipes')
    ? JSON.parse(localStorage.getItem('saved_recipes'))
    : [];

  return savedRecipesIds;
}

export const saveRecipeIds = (recipeIdArr) => {
    if (recipeIdArr.length) {
      localStorage.setItem('saved_recipes', JSON.stringify(recipeIdArr));
    } else {
      localStorage.removeItem('saved_recipes');
    }
  };

  export const removeRecipeId = (recipeId) => {
    const savedRecipesIds = localStorage.getItem('saved_recipes')
      ? JSON.parse(localStorage.getItem('saved_recipes'))
      : null;
  
    if (!savedRecipesIds) {
      return false;
    }

    const updatedSavedRecipesIds = savedRecipesIds?.filter((savedRecipeId) => savedRecipeId !== recipeId);
    localStorage.setItem('saved_books', JSON.stringify(updatedSavedRecipesIds));
  
    return true;
  
}