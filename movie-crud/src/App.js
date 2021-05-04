import "./App.css";
import { Link, Route } from "react-router-dom";
import { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from "semantic-ui-react";

import MoviesPage from "./components/pages/MoviesPage";
import MoviesList from "./components/MoviesList";

const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  marginBottom: "1em",
  marginTop: "4em",
  transition: "box-shadow 0.5s ease, padding 0.5s ease",
};

const fixedMenuStyle = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
};

const overlayStyle = {
  float: "left",
  margin: "0em 3em 1em 0em",
};

const fixedOverlayStyle = {
  ...overlayStyle,
  position: "fixed",
  top: "80px",
  zIndex: 10,
};

const overlayMenuStyle = {
  position: "relative",
  left: 0,
  transition: "left 0.5s ease",
};

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: "800px",
};

class App extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  };

  stickOverlay = () => this.setState({ overlayFixed: true });

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickOverlay = () => this.setState({ overlayFixed: false });

  unStickTopMenu = () => this.setState({ menuFixed: false });
  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Container text style={{ marginTop: "2em" }}>
            <Header as="h1">Sticky Example</Header>
            <p>
              This example shows how to use lazy loaded images, a sticky menu,
              and a simple text container
            </p>
          </Container>

          <Visibility
            onBottomPassed={this.stickTopMenu}
            onBottomVisible={this.unStickTopMenu}
            once={false}
          >
            <Menu
              borderless
              fixed={menuFixed ? "top" : undefined}
              style={menuFixed ? fixedMenuStyle : menuStyle}
            >
              <Container text>
                <Menu.Item>
                  <Image
                    size="mini"
                    src="https://www.flaticon.com/svg/vstatic/svg/1101/1101793.svg?token=exp=1620130906~hmac=536da889277fc740a6bcf9d7b92dd877"
                  />
                </Menu.Item>
                <Menu.Item header>BEYAZPERDE</Menu.Item>
                <Menu.Item as="a">
                  <Link to="movies">Filmler</Link>
                </Menu.Item>
                <Menu.Item as="a">Film Ekle</Menu.Item>
              </Container>
            </Menu>
          </Visibility>

          <Container text>
            <Visibility
              offset={80}
              once={false}
              onTopPassed={this.stickOverlay}
              onTopVisible={this.unStickOverlay}
              style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
            />
          </Container>
          <Route path="/movies" component={MoviesPage}></Route>

          <Segment
            inverted
            style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
            vertical
          >
            <Container textAlign="center">
              <Grid columns={4} divided stackable inverted>
                <Grid.Row>
                  <Grid.Column>
                    <Header inverted as="h4" content="Group 1" />
                    <List link inverted>
                      <List.Item as="a">Link One</List.Item>
                      <List.Item as="a">Link Two</List.Item>
                      <List.Item as="a">Link Three</List.Item>
                      <List.Item as="a">Link Four</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column>
                    <Header inverted as="h4" content="Group 2" />
                    <List link inverted>
                      <List.Item as="a">Link One</List.Item>
                      <List.Item as="a">Link Two</List.Item>
                      <List.Item as="a">Link Three</List.Item>
                      <List.Item as="a">Link Four</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column>
                    <Header inverted as="h4" content="Group 3" />
                    <List link inverted>
                      <List.Item as="a">Link One</List.Item>
                      <List.Item as="a">Link Two</List.Item>
                      <List.Item as="a">Link Three</List.Item>
                      <List.Item as="a">Link Four</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column>
                    <Header inverted as="h4" content="Footer Header" />
                    <p>
                      Extra space for a call to action inside the footer that
                      could help re-engage users.
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Divider inverted section />
              <Image src="/logo.png" centered size="mini" />
              <List horizontal inverted divided link size="small">
                <List.Item as="a" href="#">
                  Site Map
                </List.Item>
                <List.Item as="a" href="#">
                  Contact Us
                </List.Item>
                <List.Item as="a" href="#">
                  Terms and Conditions
                </List.Item>
                <List.Item as="a" href="#">
                  Privacy Policy
                </List.Item>
              </List>
            </Container>
          </Segment>
        </header>
      </div>
    );
  }
}

export default App;
