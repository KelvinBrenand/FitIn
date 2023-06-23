import React from "react"
import {HashRouter as Router, Routes, Route} from "react-router-dom"
// import { Fragment } from "react"

import Index from "./pages/index/Index.js"
import SignUp from "./pages/signup/Signup.js"
import Home from "./pages/home/Home.js"
import { AuthProvider } from "./contexts/auth";
import useAuth from "./hooks/useAuth.js"

export default function App(){

    const Private = ({ Item }) => {
        const { signed } = useAuth();
        return signed > 0 ? <Item /> : <Index/>;
    };

    return(
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Index/>} />
                    <Route path='/home' element={<Private Item={Home} />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path="*" element={<Index/>} />
                </Routes>
            </Router>
        </AuthProvider>
    )
}