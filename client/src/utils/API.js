export const searchRecipes = (query) => {
    return fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&includeIngredients&addRecipeInformation&apiKey=fc4f60d3201641da841c267cc0cf409e`);
  };

  export const searchDining = (query) => {
    return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-41.7658,72.6734&radius=500&types=food&name=harbour&key=AIzaSyB-O3fHzc3MbMi-GSsdCFCZ0UhxYaTI10A`);
  };

  // yelpApiKey="1w6Jlu9SwNHeYjADhK3mR4sAYx1Ol9h8mrfH1WZLx1mwgd8tnehX56aihPDc1IgxZYAqnsHyvoYA_QgrfPm8Mpei4RYNT5llk_Jpz9fdl3asSYoPEOC3P4SNZRC6YnYx"