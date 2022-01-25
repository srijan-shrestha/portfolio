import Topbar from "./components/topbar/Topbar";
import Main from "./components/main/Main";
import Contact from "./components/contact/Contact";
import About from './components/About/About';
import Skills from './components/Skills/Skills';

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <Main/>
      <About/>
      <Skills/>
      <div className="section">
        <Contact/>
      </div>
    </div>
  );
}

export default App;
