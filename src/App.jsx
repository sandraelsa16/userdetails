import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";
import AddUser from "./Components/AddUser";

function App() {
  return (
    <>
      <Header  />
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/adduser" element={<AddUser/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
