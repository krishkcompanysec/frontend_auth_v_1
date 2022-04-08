import Login from "./login";
import Signup from "./signup";
import Admin from "./admin";
//................................//
import {BrowserRouter,Routes,Route} from "react-router-dom";
//................................//

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
        
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
