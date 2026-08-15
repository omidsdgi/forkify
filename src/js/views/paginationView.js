import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View{
  _parentElement=document.querySelector('.pagination');

  addHandlerClick(handler){
    this._parentElement.addEventListener('click', function(e){
      e.preventDefault();
      const btn= e.target.closest('.btn--inline');
      console.log(btn);
      handler();
    });
  }
  _generateMarkup(){
    const curPage= this._data.page
    const numPages= Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    )
    const prevButton=`
     <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span> Page ${curPage-1} </span>
          </button>
    `
    const nextButton=`
    <button class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
    `
    console.log(curPage,numPages);

    // Page 1, and there are other pages
    if (curPage === 1 && numPages>1){
      return `${nextButton}
      `
    }

    // Last page
    if (curPage === numPages && numPages>1){
      return `${prevButton}`
      }

    // Other page
    if (curPage < numPages){
      return `${prevButton} ${nextButton}`
    }

    //Page 1, and there are No other pages
    return ''
  }
}

export default new PaginationView()