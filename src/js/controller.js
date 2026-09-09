import * as model from './model';
import recipeView from './views/recipeView';

import 'core-js/stable'
import 'regenerator-runtime/runtime'
import searchView from './views/searchView';


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
    recipeView.renderError();
  }
}

const controlSearchResults= async function(){
  try{
    const query= searchView.getQuery();
    if(!query) return;

    await model.loadSearchResults(query);
    console.log(model.state.search.results);
  } catch (err){
    console.log(err);
  }
}
controlSearchResults()

const init=function(){
recipeView.addHandlerRender(controlRecipes);
}
init()