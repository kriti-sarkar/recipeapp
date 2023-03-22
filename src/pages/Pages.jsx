import React from "react";
import Home from "./Home";
import Recipe from "./Recipe";
import { Route, Routes} from "react-router-dom";
import Searched from "./Searched";
import Cuisine from "./Cuisine";

function Pages() {
    return (
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/recipe/:name" element={<Recipe />} />
            <Route path="/searched/:search" element={<Searched />} />
        </Routes>
        
    );
}

export default Pages;