const tag = "[Controller]";

export default class Controller {
  constructor(store, {searchForm}) {
    console.log(tag, 'constructor');
    this.store = store;

    this.searchForm = searchForm;
    this.subscribeViewEvents();
  }

  subscribeViewEvents(){
    this.searchForm
      .on("@submit", e => this.search(e.detail.value))
      .on("@reset", () => this.reset())
  }

  search(keyword){
    console.log(tag, keyword);
  }
  
  reset() {
    console.log(tag, this.searchForm.inputElement.value);
  }
}
