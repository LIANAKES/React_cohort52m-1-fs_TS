import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Home from "pages/Home/Home";
import About from "pages/About/About";
import Users from "pages/Users/Users";
import User from "pages/Users/components/User/User";
import EcoSolutions from "pages/Clients/components/EcoSolutions/EcoSolutions";
import FoodiesHub from "pages/Clients/components/FoodiesHub/FoodiesHub";
import TechNova from "pages/Clients/components/TechNova/TechNova";
import Clients from "pages/Clients/Сlients";
//BrowserRouter - компонент из react-router-dom, который позволяет нам работать с маршрутами
// по всему приложению
//lessons
// import Lesson06 from './lessons/Lesson06/Lesson06'
// import Lesson07 from './lessons/Lesson07/Lesson07'
// import Lesson08 from './lessons/Lesson08/Lesson08'
// import Lesson09 from './lessons/Lesson09/Lesson09'
// import Lesson10 from './lessons/Lesson10/Lesson10'
// import Lesson12 from './lessons/Lesson12/Lesson12';

//homeworks
// import Homework08 from './homeworks/Homework08/Homework08'
// import Homework09 from './homeworks/Homework09/Homework09'
// import Homework10 from './homeworks/Homework10/Homework10'
// import Homework12 from 'homeworks/Homework12/Homework12';

// import Lesson07 from './lessons/Lesson07/Lesson07';
// import Lesson08 from './lessons/Lesson08/Lesson08';
// import Lesson09 from './lessons/Lesson09/Lesson09';
// import Lesson10 from './lessons/Lesson10/Lesson10';
// import Lesson11 from './lessons/Lesson11_Practice/Lesson11';

// consultations
// import Consultation03 from './consultations/Consultation03/Consultation03'
// import Consultation_04 from './consultations/Consultation_04/Consultation_04'

function App() {
  return (
    //BrowserRouter - компонент из react-router-dom, который позволяет нам работать с маршрутами
    // по всему приложению
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        {/* Routes - собирает все маршруты приложения */}
        <Routes>
          {/* Route - компонент, в который передаётся маршрут и контент, 
         который нужно отрисовать по этому маршруту в Layout */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user" element={<User />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/technova" element={<TechNova />} />
          <Route path="/clients/ecosolutions" element={<EcoSolutions />} />
          <Route path="/clients/foodieshub" element={<FoodiesHub />} />
        </Routes>
      </Layout>
      {/* --Topic: TypeScript - Introduction */}
      {/* <Lesson06/> */}
      {/* <Consultation03 /> */}
      {/* --Topic: TypeScript - Object types, enum */}
      {/* <Lesson07 /> */}
      {/* --Topic: Styling components */}
      {/* <Lesson08 /> */}
      {/* <Homework08 /> */}
      {/* --Topic: Control components, useEffect */}
      {/* <Lesson09 /> */}
      {/* <Consultation_04 /> */}
      {/* <Homework09 /> */}
      {/* --Topic: useEffect, axios */}
      {/* <Lesson10 /> */}
      {/* <Homework10 /> */}
      {/* --Topic: formik, yup */}
      {/*<Lesson12 />*/}
      {/*<Homework12 />*/}/
    </BrowserRouter>
  );
}

export default App;
