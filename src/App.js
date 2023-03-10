import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Route,Routes,BrowserRouter} from "react-router-dom"
import "./style.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
