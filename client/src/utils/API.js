export const searchRecipes = (query) => {
    return fetch(`https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=fc4f60d3201641da841c267cc0cf409e`);
  };