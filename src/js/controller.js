import * as model from './model';
import recipeView from './views/recipeView';

import 'core-js/stable'
import 'regenerator-runtime/runtime'
import searchView from './views/searchView';


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
    if(!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    console.log(model.state.search.results);
  } catch (err){
    console.log(err);
  }
}

const init=function(){
recipeView.addHandlerRender(controlRecipes);
searchView.addHandlerSearch(controlSearchResults);
}
init()