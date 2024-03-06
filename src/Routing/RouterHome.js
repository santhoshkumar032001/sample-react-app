import { Routes,Route } from "react-router";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";

export function RouterHome()
{
    return <>
           <Routes>

            <Route path="/" element={<Home></Home>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="contact" element={<Contact></Contact>}></Route>

           </Routes>
    
    </>
}