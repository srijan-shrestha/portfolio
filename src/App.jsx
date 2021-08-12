import Topbar from "./components/topbar/Topbar";
import Main from "./components/main/Main";
import Contact from "./components/contact/Contact";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <Main/>
      <div className="section">
        <Contact/>
      </div>
    </div>
  );
}

export default App;
