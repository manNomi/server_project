const headerIconData = {
  setting: {
    resource: "./image/header/setting.svg",
  },
  alert: {
    resource: "./image/header/alert.svg",
  },
  camera: {
    resource: "./image/header/camera.svg",
  },
  mic: {
    resource: "./image/header/mic.svg",
  },
  search: { resource: "./image/header/search.svg" },
  logo: { resource: "./image/header/logo.svg" },
};

const Header = () => {
  return (
    <header className="header white">
      <HeaderLogoBox iconObj={headerIconData} />
      <SearchContainer iconObj={headerIconData} />
      <HeaderIconList iconObj={headerIconData} />
    </header>
  );
};
