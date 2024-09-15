import { Route, Router, Routes } from "solid-app-router";
import Home from "./pages/home";
import Feed from "./pages/Feed";

function App() {
  return (
    <Router>

        <Route path="/" component={Home} />
        <Route path="/feed" component={Feed} />

    </Router>
  );
}

export default App;
