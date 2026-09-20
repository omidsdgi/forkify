import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View{
  _parentElement= document.querySelector('.pagination');

  _generateMarkup(){
    // Page 1, and there are other pages

    // Page 1, and there are No other pages

    //Last page

    //other page
  }
}

export default new PaginationView()