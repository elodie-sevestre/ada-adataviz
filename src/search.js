import { loading } from "./main";
import { setQuery, setOffset, query, offset } from "./state";

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  const userSearch = searchInput.value;
  setQuery(userSearch.toLowerCase());
  setOffset(0);
  loading(query, offset, false);
  searchInput.value = "";
});
