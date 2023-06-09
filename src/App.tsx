import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ParamCheck from "./pages/ParamCheck";
import About from "./pages/About";
import NotFount from "./pages/NotFound";
import Header from "../components/Header";
import BackTest from "./pages/BackTest";
import CreateRootTest from "./pages/CreateRootTest";

function App() {
  console.log("test");
  return (
    <div className="App">
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:id" element={<ParamCheck />} />
          <Route path="/backTest" element={<BackTest />} />
          <Route path="/createRootTest" element={<CreateRootTest />} />
        </Route>
        <Route path="*" element={<NotFount />} />
      </Routes>
    </div>
  );
}

export default App;
