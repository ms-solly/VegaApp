import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "./index.css";
const Home = lazy(() => import("./pages/home"));
import App from "./App";
import Feed from "./pages/Feed";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// AOS.init();
// const Service = lazy(() => import("./component/services"));

// const Pricing = lazy(() => import("./component/pricing"));
// const About = lazy(() => import("./component/about"));
// const Contact = lazy(() => import("./component/contact"));
// const Register = lazy(() => import("./component/startforms/register"));
// const Login = lazy(() => import("./component/startforms/login"));



// import NotFoundd from "./component/pages/NotFound";
// import NavUpside from "./component/NavUpside";
// import NavBottom from "./component/NavBottom";



  render(() => 
    <Router root={<App/>}>

    <Route path="/" element={<Home />} />
    <Route path="/feed" element={<Feed />} />

</Router>
  
    , document.getElementById("root"));


