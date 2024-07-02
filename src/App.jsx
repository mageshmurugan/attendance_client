import "./App.css";
import Home from "./pages/Home";
import Classroom from "./pages/Classroom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class" element={<Classroom />} />
      </Routes>
    </>
  );
}
// <>
//   <nav>
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/book">Book</Link>
//       </li>
//       <li>
//         <Link to="/booklist">Booklist</Link>
//       </li>
//     </ul>
//   </nav>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/book" element={<Book />} />
//     <Route path="/booklist" element={<Booklist />} />
//   </Routes>
// </>
export default App;
