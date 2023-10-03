import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Page1 from './Page1';
import Teste from "./Teste";
import Login from "./Login";
import ImageUploadPage from "./ImageUploadPage";

export const Router = () => {
   return(
        <BrowserRouter>
            <Routes>
                <Route element = { <Home /> } path="/" />
                <Route element = { <Page1 /> } path="/page1" />
                <Route element = { <Teste /> } path="/Teste" />
                <Route element = { <Login /> } path="/Login" />
                *<Route element = { <ImageUploadPage /> } path="/UploadPage" />
            </Routes>
       </BrowserRouter>
   )
}