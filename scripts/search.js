const searchForm = document.querySelector(".search-form");
const searchBar = document.querySelector("#search-bar");
const searchBarIcon = document.querySelector("#search-bar-icon");

const searchChooseEngine = document.querySelector("#search-bar-icon");
const searchChooseFloat = document.querySelector("#engine-choose");

let selectedEngine = "google";

const engineSelect = (engine, query) => {
  switch (engine) {
    case "google": {
      return `https://www.google.com/search?q=${query}`;
    }
    case "yandex": {
      return `https://ya.ru/search/?text=${query}`;
    }
    case "duckduckgo": {
      return `https://duckduckgo.com/?q=${query}`;
    }
    case _: {
      return `https://www.google.com/search?q=${query}`;
    }
  }  
};

const searchIconSelect = (engine) => {
  switch (engine) {
    case "google": {
      searchBarIcon.style.backgroundImage = "url('../assets/search/google.png')";
      break;
    }
    case "yandex": {
      searchBarIcon.style.backgroundImage = "url('/assets/search/yandex.png')"
      break;
    }
    case "duckduckgo": {
      searchBarIcon.style.backgroundImage = "url('/assets/search/duckduckgo.png')"
      break;
    }
    case _: {
      searchBarIcon.style.backgroundImage = "url('/assets/search/google.png')"
      break;
    }
  }  
};


searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (searchBar.value === "") reutrn;

  const query = searchBar.value;

  const url = engineSelect(selectedEngine, query)

  window.open(url, "_blank")
});

let flagOpenEngine = false;

searchChooseEngine.addEventListener("click", (e)=> {
  if (flagOpenEngine === false) {
    searchChooseFloat.classList = "engine-choose";

    searchBar.classList = "search-bar search-bar-engine-choose"

    flagOpenEngine = true;
  } else {
    searchChooseFloat.classList = "engine-choose engine-hide";

    searchBar.classList = "search-bar"

    flagOpenEngine = false;
  }
})

searchChooseFloat.addEventListener("change", (e) => {
  if (e.target.name === "engine") {
    selectedEngine = e.target.value;
    
    searchChooseFloat.classList = "engine-choose engine-hide";
    searchBar.classList = "search-bar"

    searchIconSelect(e.target.value);

    flagOpenEngine = false;
  }
});