import React, {lazy} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import ThemeProvider from "./components/generic/ThemeContext";
import ScreenProvider from "./components/generic/ScreenContext";
import AuthProvider from "./components/generic/AuthContext";

const Home = lazy(() => import("./components/home/Home"))
const Layout = lazy(() => import("./components/layout/Layout"))

function App() {
    return <Router>
        <ThemeProvider>
            <ScreenProvider>
                <AuthProvider>
                    <Layout>
                        <Routes>
                            <Route path={"/"} element={<Home />} />
                        </Routes>
                    </Layout>
                </AuthProvider>
            </ScreenProvider>
        </ThemeProvider>
    </Router>
}

export default App;
