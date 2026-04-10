import "./style.css";
import { requestAPI } from "./api.js";
import { query, offset, setTotalCount } from "./state.js";
import { renderList } from "./render.js";
import "./search.js";
import "./pagination.js";

export const loading = async (query, offset, append) => {
  const data = await requestAPI(query, offset);
  renderList(data.results, append);
  setTotalCount(data.total_count);
  const counterContainer = document.getElementById("counter");
  counterContainer.classList.add("hidden");
  if (query) {
    counterContainer.classList.remove("hidden");
    const counterBorn = document.querySelector("span");
    counterBorn.textContent = `${data.total_count}`;
  }
};

loading(query, offset, true);
