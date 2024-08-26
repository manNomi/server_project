const makeSearchContainer = (imgOBJ) => {
  const { mic, search } = imgOBJ;

  // 검색 컨테이너
  const searchContainer = makeTag({
    tagName: "div",
    tagClass: "search_container",
  });

  // 검색 박스 , 입력영역
  const searchOutline = makeTag({ tagName: "div", tagClass: "search_outline" });
  const searchBox = makeTag({ tagName: "div", tagClass: "search_box" });

  const searchHiddenIcon = makeTag({
    tagName: "div",
    tagClass: "search_hidden",
    tagId: "search_inner_logo",
  });
  searchHiddenIcon.classList.add("svg");
  searchHiddenIcon.style.backgroundImage = `url(${search.resource})`;

  const searchInput = makeTag({ tagName: "input", tagClass: "search_input" });
  searchInput.placeholder = "검색";
  searchInput.addEventListener("focus", inputFocus);
  searchInput.addEventListener("blur", inputBlur);

  searchBox.appendChild(searchInput);
  searchOutline.appendChild(searchBox);
  searchOutline.appendChild(searchHiddenIcon);

  // 검색 버튼
  const searchBtn = makeTag({ tagName: "button", tagClass: "search_btn" });
  const searchImg = makeTag({
    tagName: "div",
    tagClass: "search_btn_img",
  });
  searchImg.style.backgroundImage = `url(${search.resource})`;
  searchImg.classList.add("svg");
  searchBtn.appendChild(searchImg);

  searchContainer.appendChild(searchOutline);
  searchContainer.appendChild(searchBtn);
  searchContainer.appendChild(makeHeaderIcon(mic.resource));

  searchBarResizeEvent(searchContainer);
  window.addEventListener("resize", () =>
    searchBarResizeEvent(searchContainer)
  );

  return searchContainer;
};
