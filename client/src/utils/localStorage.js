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
  
};
export const getSavedDiningIds = () => {
  const savedDiningIds = localStorage.getItem('saved_dining')
  ? JSON.parse(localStorage.getItem('saved_dining'))
  : [];

return savedDiningIds;
}

export const saveDiningIds = (diningIdArr) => {
  if (diningIdArr.length) {
    localStorage.setItem('saved_dining', JSON.stringify(diningIdArr));
  } else {
    localStorage.removeItem('saved_dining');
  }
};

export const removeDiningId = (diningId) => {
  const savedDiningIds = localStorage.getItem('saved_dining')
    ? JSON.parse(localStorage.getItem('saved_dining'))
    : null;

  if (!savedDiningIds) {
    return false;
  }

  const updatedSavedDiningIds = savedDiningIds?.filter((savedDiningId) => savedDiningId !== diningId);
  localStorage.setItem('saved_dining', JSON.stringify(updatedSavedDiningIds));

  return true;

}