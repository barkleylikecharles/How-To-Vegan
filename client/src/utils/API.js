export const searchRecipes = (query) => {
    return fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&includeIngredients&addRecipeInformation&apiKey=fc4f60d3201641da841c267cc0cf409e`);
  };

  export const searchDining = (query) => {
    return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-41.7658,72.6734&radius=500&types=food&name=harbour&key=AIzaSyBDhheGyZ1A_-E4vfpS3saQRGebunq5krE`);
  };