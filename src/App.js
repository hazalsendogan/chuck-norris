import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar, NavItem } from "reactstrap";
import Home from "./components/Home";
import RandomJokes from "./components/Random/RandomJokes";
import SearchJokes from "./components/Search/SearchJokes";
function App() {
  return (
    <Container>
      <Navbar>
        <Nav>
          <NavItem>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/random">
              Random Jokes
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/search">
              Search Jokes
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/random" element={<RandomJokes />}></Route>
        <Route path="/search" element={<SearchJokes />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
