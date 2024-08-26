export const inputFocus = (event) => {
  event.target.parentElement.classList.add("search_box_focusOn");
  event.target.parentElement.parentElement.classList.add(
    "search_outline_focusOn"
  );
  document
    .getElementById("search_inner_logo")
    .classList.add("search_hidden_focusOn");
};
export const inputBlur = (event) => {
  event.target.parentElement.classList.remove("search_box_focusOn");
  event.target.parentElement.parentElement.classList.remove(
    "search_outline_focusOn"
  );
  document
    .getElementById("search_inner_logo")
    .classList.remove("search_hidden_focusOn");
};
