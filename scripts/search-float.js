const overlay = document.querySelector(".overlay");

const searchFloatWindow = document.querySelector(".search-container");
const activateSearchFloatWindow = document.querySelector(".search-box-form");

const searchBoxContainer = document.querySelector(".search-box-container");
const searchBarFloating = document.querySelector("#search-bar");

const searchTextVisual = document.querySelector(".search-box-bar");

activateSearchFloatWindow.addEventListener("click", (e) => {
  searchBoxContainer.classList =
    "search-box-container search-box-container-none";
  searchFloatWindow.classList = "search-container search-container-big";
  overlay.classList = "overlay";
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      searchBarFloating.focus();
    });
  });
});

overlay.addEventListener("click", (e) => {
  searchTextVisual.textContent = searchBarFloating.value;

  searchBoxContainer.classList = "search-box-container";
  searchFloatWindow.classList = "search-container search-container-none";
  overlay.classList = "overlay overlay-none";
});
