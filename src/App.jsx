import "./App.css";

import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  Wgpt4,
} from "./containers";
import { NavBar, Brand, CTA } from "./components";

function App() {
  return (
    <div className="App">
      <div className="header gradient-bg">
        <NavBar />
        <Header />
        <Brand />
      </div>
      <Wgpt4 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
