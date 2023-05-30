import React from "react";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import List from "./Pages/List";
import Reviews from "./Pages/Reviews";
import Home from "./Pages/Home";

const App = () => {
    
    return (
        <>
            <NavBar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/list" element={<List />}/>
                    <Route path="/reviews" element={<Reviews />}/>
                </Routes>
            </div>
        </>

    )
}

export default App;