import { Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import {Blogs} from "./pages/Blogs";
import {Contact} from "./pages/Contact";
import {Resume} from "./pages/Resume";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

     
    </div>
  );
}

export default App;
