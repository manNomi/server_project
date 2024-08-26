const makeTag = (tagData) => {
  const { tagName, tagClass, tagId } = tagData;
  const tag = document.createElement(tagName);
  if (tagClass != null) {
    tag.className = tagClass;
  }
  if (tagId != null) {
    tag.id = tagId;
  }
  return tag;
};
