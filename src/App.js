import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Room} from "./components/Room";
import Home from "./components/Home";


function App() {
  return (
      <div className="App">
          <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="room/:roomId" element={<Room/>}/>
          </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
