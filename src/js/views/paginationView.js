import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View{
  _parentElement= document.querySelector('.pagination');

  _generateMarkup(){
    const numPages=Math.ceil(this._data.results.length / this._data.resultsPerPage);
    console.log(numPages);
    const currPage=this._data.page;
    // Page 1, and there are other pages
    if (currPage ===1 && numPages>1){
      return `
       <button class="btn--inline pagination__btn--next">
            <span>Page ${currPage+1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `
    }

    //Last page
    if(currPage === numPages && numPages >1){
      return `
       <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPage-1}</span>
          </button>
      `
    }
    //other page
    if( currPage < numPages ){
    // Page 1, and there are No other pages
      return `other page`
    }
      return `
     first
      `
  }
}

export default new PaginationView()