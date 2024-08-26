import { makeAside } from "./aside/ui/aside.js";
import { makeHeader } from "./header/ui/header.js";
import { makeMain } from "./main/ui/main.js";

const makeHome = () => {
  const root = document.getElementById("root");
  // root.appendChild(makeAside());
  // root.appendChild(makeHeader());
  root.appendChild(makeMain());
  alert(makeMain());
};
makeHome();
console.log(123);
