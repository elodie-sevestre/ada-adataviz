import { loading } from "./main.js";
import { query, offset, totalCount, setOffset } from "./state.js";

const moreLoadButton = document.getElementById("load-more");

moreLoadButton.addEventListener("click", () => {
  setOffset(offset + 8);
  loading(query, offset, true);
  if (offset >= totalCount) {
    moreLoadButton.classList.add("hidden");
  }
});
