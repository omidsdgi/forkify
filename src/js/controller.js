import * as model from './model.js';
import recipeView from './views/recipeView';

import 'core-js/stable'
import 'regenerator-runtime/runtime'

const recipeContainer = document.querySelector('.recipe');
// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

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
    await model.loadSearchResults('pizza')
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