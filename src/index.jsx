import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

// const Service = lazy(() => import("./component/services"));
const Home = lazy(() => import("./component/pages/home"));
// const Pricing = lazy(() => import("./component/pricing"));
// const About = lazy(() => import("./component/about"));
// const Contact = lazy(() => import("./component/contact"));
const Register = lazy(() => import("./component/startforms/register"));
const Login = lazy(() => import("./component/startforms/login"));



import "tailwindcss/tailwind.css";

import "./index.css";
import NotFoundd from "./component/pages/NotFound";
import NavUpside from "./component/NavUpside";
import NavBottom from "./component/NavBottom";

const App = props => (
  <>

  {/* <Home/> */}
    {props.children}
  </>
);

render(() => (
  
  <Router root={App}>
       <Route path="/" component={Home}/>
    <Route path="/auth/register" component={Register}/>
    <Route path="/auth/login" component={Login}/>
    <Route path="*404" component={NotFoundd}/>
  </Router>
),document.getElementById("root"));

