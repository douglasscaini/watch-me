import { MainProvider } from "./hooks/useContextMovies";
import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

export function App() {
  return (
    <MainProvider>
      <SideBar />
      <Content />
    </MainProvider>
  );
}
