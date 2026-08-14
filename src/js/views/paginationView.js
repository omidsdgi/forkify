import View from './view';
import icons from 'url:../../img/icons.svg';
import RecipeView from './recipeView';

class PaginationView extends View{
  _parentElement=document.querySelector('.pagination');

  _generateMarkup(){
    const numPages= Math.ceil(this._data.results.length / this._data.resultsPerPage)
    console.log(numPages);
  }
}

export default new PaginationView()