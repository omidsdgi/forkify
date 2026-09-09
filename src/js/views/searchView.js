class SearchView {
  #parentEl=document.querySelector('.search')

  getQuery(){
    return this.#parentEl.querySelector('.search__filed').value
  }
}

export default new SearchView();