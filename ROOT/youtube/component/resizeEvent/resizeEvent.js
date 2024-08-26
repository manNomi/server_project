const resizeValue = 790;
const asideResizeEvent = (aside) => {
  if (window.innerWidth > resizeValue) {
    aside.style.display = "flex";
  } else {
    aside.style.display = "none";
  }
};
const mainResizeEvent = (main) => {
  if (window.innerWidth > resizeValue) {
    main.classList.remove("none");
  } else {
    main.classList.add("none");
  }
};

const resizeSearchValue = 500;
const searchBarResizeEvent = (search) => {
  if (window.innerWidth > resizeSearchValue) {
    search.style.display = "flex";
  } else {
    search.style.display = "none";
  }
};

// 미디어 쿼리 쓰는것이 좋다 -> 화면사이즈를 조작하는 방법
