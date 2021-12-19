import Controller from "./Controller.js";
import Store from "./store.js";
import storage from "./storage.js";
import SearchForm from "./views/SearchForm.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  const store = new Store(storage);

  const views = {
    searchForm: new SearchForm(),
  };

  new Controller(store, views);
}
