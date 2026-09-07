import * as model from './model';



import 'core-js/stable'
import 'regenerator-runtime/runtime'
import recipeView from './views/recipeView';



// https://forkify-api.jonas.io

/////////////////////////////////////////////////



const controlRecipes= async function(){
  try {
    const id=window.location.hash.slice(1)
    console.log(id);

    if (!id) return
    recipeView.renderSpinner()

    // 1) Loading recipe
  await model.loadRecipe(id)

    // Rendering recipe
    recipeView.render(model.state.recipe);
  }catch (error) {
    console.log(error);
  }
}
controlRecipes().catch(error => console.log(error));


const init=function(){
recipeView.addHandlerRender(controlRecipes);
}
init()