import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Page1 from './Page1';
import Teste from "./Teste";


export const Router = () => {
   return(
        <BrowserRouter>
            <Routes>
                <Route element = { <Home /> } path="/" />
                <Route element = { <Page1 /> } path="/page1" />
                <Route element = { <Teste /> } path="/Teste" />
            </Routes>
            {/* <Route component = { Home }  path="/" exact />
            <Route component = { Sobre }  path="/sobre" />
            <Route component = { Usuario }  path="/usuario" /> */}
       </BrowserRouter>
   )
}