import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Project/Projects";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import Others from "./pages/Others";
import Skills from "./pages/skills/Skills";


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/projects" element={<Projects/>}/>
     <Route path="/frontend" element={<Frontend/>}/>
     <Route path="/backend" element={<Backend/>}/>
     <Route path="/others" element={<Others/>}/>
     <Route path="/skills" element={<Skills/>}/>

    </Routes>
   </BrowserRouter>
    
  );
}

export default App;
