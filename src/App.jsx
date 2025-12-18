 import { BrowserRouter,Route,Router,Routes,Routs } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Contact from "./Contact";

function App(){
  return(
    <BrowserRouter>
    <Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/Products" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
              <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Navbar>

    </BrowserRouter>
  )
}
export default App 
