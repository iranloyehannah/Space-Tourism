import "./App.css";
// =================== Component===================
import Home from "./component/Home";
import Menu from "./component/Menu";
import Destination from "./component/Destination";
import Crew from "./component/Crew";
import Technology from "./component/Technology";

// =================== Routers ===================
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full h-screen relative">
        {/* NavBar */}
        <div className="absolute z-20 w-full top-0 left-0">
          <Menu />
        </div>
        {/* Contents */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          <Route path="/crew" element={<Crew />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
        </Routes>
      </div>
    </section>
  );
}

export default App;
