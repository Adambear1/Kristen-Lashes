import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Subscribe from "./pages/Subscribe";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { Context } from "./components/Context";

function App() {
  const [value, setValue] = useState("Lashes");
  const _val = useMemo(
    () => ({
      value,
      setValue,
    }),
    [value, setValue]
  );
  return (
    <>
      <Context.Provider value={_val}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/about" component={About} />
            <Route path="/subscribe" component={Subscribe} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </Context.Provider>
    </>
  );
}
export default App;
