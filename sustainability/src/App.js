import React from "react";
import { Navbar } from "./includes/NavBar";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Footer } from "./includes/Footer";
import { Signup } from "./components/Signup";
import { Tool } from "./components/Tool";
import { SurveyPage } from "./components/SurveyPage";
import { EditSurvey } from "./components/EditSurveyPage"
import AuthProvider from "./Authentication/AuthProvider";
import SurveyComponent from "./surveycomponents/Survey";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
          <Routes>
            <Route exact path="/" name="Home" index element={<Home />} />
            <Route path="/login" name="Login" element={<Login />} />
            <Route path="/signup" name="Signup" element={<Signup />} />
            <Route path="/tool" name="tool" element={<Tool />} />
            <Route path="/survey" name="survey" element={<SurveyComponent/>} />
            <Route path="/surveypage" name="surveypage"element={<SurveyPage/>} />
            <Route path="/edit-survey/:surveyName" name="surveyedit"element={<EditSurvey/>} />
          </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
