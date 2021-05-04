import "./App.css";
import { Link, Route } from "react-router-dom";
import { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Header } from "semantic-ui-react";

import MoviesPage from "./components/pages/MoviesPage";
import Footer from "./components/Footer";
import Headerjs from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container text style={{ marginTop: "2em" }}>
            <Header as="h1">BeyazPerde Film Platformu</Header>
            <p>
              Yüzlerce filme ait bilgi platformu olan BeyazPerde uygulamasına
              hoş geldiniz.
            </p>
          </Container>
          <Headerjs />
          <Container text>
            <Route path="/movies" component={MoviesPage}></Route>
          </Container>
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
