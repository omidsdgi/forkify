import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View{
  _parentElement= document.querySelector('.pagination');

  _generateMarkup(){
    const numPages=Math.ceil(this._data.results.length / this._data.resultsPerPage);
    console.log(numPages);
    // Page 1, and there are other pages

    // Page 1, and there are No other pages

    //Last page

    //other page
    return numPages;
  }
}

export default new PaginationView()