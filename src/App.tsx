import { Routes, Route } from "react-router-dom";
import Character from "./Pages/Character";
import Home from "./Pages/Home";

function App() {
  return (
    <div className='bg-black bg-opacity-80 py-2 h-screen overflow-y-auto'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:characterName" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
