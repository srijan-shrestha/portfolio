import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro"

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="section">
        <Contact/>
      </div>
    </div>
  );
}

export default App;
