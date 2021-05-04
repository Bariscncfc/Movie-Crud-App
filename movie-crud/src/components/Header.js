import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fixedMenuStyle, menuStyle } from "../helpers/styleHelper";
import { Visibility, Container, Menu, Image } from "semantic-ui-react";

class Header extends Component {
  state = {
    menuFixed: null,
    overlayFixed: false,
  };

  stickTopMenu = () => this.setState({ menuFixed: true });
  unStickTopMenu = () => this.setState({ menuFixed: null });

  render() {
    const { menuFixed } = this.state;
    return (
      <div>
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
              <Menu.Item as={Link} to="/movies">
                Filmler
              </Menu.Item>
              <Menu.Item as="a">Film Ekle</Menu.Item>
            </Container>
          </Menu>
        </Visibility>
      </div>
    );
  }
}

export default Header;
