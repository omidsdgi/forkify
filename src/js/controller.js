import * as model from './model';



import 'core-js/stable'
import 'regenerator-runtime/runtime'
import recipeView from './views/recipeView';

const recipeContainer=document.querySelector('.recipe');

const timeout= function(s){
  return new Promise(function (_, reject){
    setTimeout(function(){
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s *  1000)
  });
}

// https://forkify-api.jonas.io

/////////////////////////////////////////////////



const controlRecipes= async function(){
  try {
    const id=window.location.hash.slice(1)
    console.log(id);

    if (!id) return
    renderSpinner(recipeContainer)

    // 1) Loading recipe
  await model.loadRecipe(id)

    // Rendering recipe
    recipeView.render(model.state.recipe);
  }catch (error) {
   alert(error);
  }
}
showRecipe().catch(error => console.log(error));


['hashchange','load'].forEach(ev=>window.addEventListener(ev, showRecipe));
