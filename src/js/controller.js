import * as model from './model.js';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultView from './views/resultView';

import 'core-js/stable'
import 'regenerator-runtime/runtime'


if (module.hot) {
  module.hot.accept();
}
const controlRecipes=async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    //loading recipe
    await model.loadRecipe(id)

  //Rendering recipe
    recipeView.render(model.state.recipe);
}catch (err) {
    recipeView.renderError();
}
}

const controlSearchResult= async function () {
  try{
    resultView.renderSpinner();

    //1)Get search query
    const query= searchView.getQuery();
    if(!query) return;

    //2) Load search results
    await model.loadSearchResults(query)

    //3) Render results
    console.log(model.state.search.results);
    // resultView.render(model.state.search.results)
    resultView.render(model.getSearchResultsPage(1));
  } catch (error) {
    console.log(error)
  }
}
controlSearchResult()

const init=function(){
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResult);
}
init()