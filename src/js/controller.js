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
    console.error(err)
}
}

const init=function(){
  recipeView.addHandlerRender(controlRecipes);
}
init()