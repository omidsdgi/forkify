import View from './view';
import icons from 'url:../../img/icons.svg';
import RecipeView from './recipeView';

class PaginationView extends View{
  _parentElement=document.querySelector('.pagination');

  _generateMarkup(){

  }
}

export default new PaginationView()