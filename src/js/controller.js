import * as model from './model.js';
import recipeView from './views/recipeView';

import 'core-js/stable'
import 'regenerator-runtime/runtime'

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
  alert(err)
}
}
const events=['hashchange', 'load'];
events.forEach(ev=>window.addEventListener(ev,controlRecipes))
