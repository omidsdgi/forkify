import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';

import 'core-js/stable'
import 'regenerator-runtime/runtime'
import paginationView from './views/paginationView';


if (module.hot) {
  module.hot.accept();
}
const controlRecipes= async function(){
  try {
    const id=window.location.hash.slice(1)

    if (!id) return
    recipeView.renderSpinner()

    // 1) Loading recipe
  await model.loadRecipe(id)

    // Rendering recipe
    recipeView.render(model.state.recipe);
  }catch (error) {
    recipeView.renderError();
  }
}

const controlSearchResults= async function(){
  try{
    // 1) Get search results
    const query= searchView.getQuery();
    if(!query) {
      resultsView.renderSpinner('Please enter a search query!');
      return
    }

    resultsView.renderSpinner();

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    resultsView.render(model.getSearchResultsPage());

    //4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err){
    resultsView.renderError();
  }
}

const init=function(){
recipeView.addHandlerRender(controlRecipes);
searchView.addHandlerSearch(controlSearchResults);
}
init()