import * as model from './model.js';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultView from './views/resultView';

import 'core-js/stable'
import 'regenerator-runtime/runtime'
import paginationView from './views/paginationView';
import bookmarksView from './views/bookmarksView';

if (module.hot) {
  module.hot.accept();
}


const controlRecipes=async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 0)Update results view to mark selected search result
    resultView.update(model.getSearchResultsPage())

    // 1)Updating bookmarks view
    bookmarksView.update(model.state.bookmarks)

    // 2)loading recipe
    await model.loadRecipe(id)

  // 3)Rendering recipe
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
    resultView.render(model.getSearchResultsPage());

    //4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error)
  }
}
controlSearchResult()

const controlPagination= function (goToPage) {
  //1) Render new results
  resultView.render(model.getSearchResultsPage(goToPage));

  //2) Render new pagination buttons
  paginationView.render(model.state.search);
}

const controlServings=function(newServings){
   // update the recipe serving(in state)
  model.updateServing(newServings)

  // update the recipe view
  // recipeView.render(model.state.recipe );
  recipeView.update(model.state.recipe );
}

const controlAddBookmark=  function () {
  // 1) Add/ remove bookmark
 if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe)
  else model.deleteBookmark(model.state.recipe.id)
  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
}

const controlBookmarks = function(){
  bookmarksView.render(model.state.bookmarks);
}

const init=function(){
  bookmarksView.addHandlerRender(controlBookmarks)
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);

}
init()
const clearBookmarks = function(){
  localStorage.removeItem('bookmarks')
}
