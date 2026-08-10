import * as model from './model.js';
import recipeView from './views/recipeView';
import searchView from './views/searchView';

import 'core-js/stable'
import 'regenerator-runtime/runtime'


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
    const query= searchView.getQuery();
    if(!query) return;

    await model.loadSearchResults(query)
    console.log(model.state.search.results);

  } catch (error) {
    console.log(error)
  }
}
controlSearchResult()

const init=function(){
  recipeView.addHandlerRender(controlRecipes);
}
init()