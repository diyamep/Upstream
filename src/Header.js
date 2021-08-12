import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  Redirect,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: rgb(39, 117, 197);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Link = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <>
      <Nav>
        <Logo>Upstream Home Assignment</Logo>
        <Menu>
          {location.pathname !== "/home" && (
            <Item>
              <Link
                onClick={() => {
                  history.goBack();
                }}
              >
                Back
              </Link>
            </Item>
          )}
          {location.pathname !== "/home" && (
            <Item>
              <Link
                onClick={() => {
                  history.push("/home");
                  return <Redirect to="/home" />;
                }}
              >
                Home
              </Link>
            </Item>
          )}
          {location.pathname !== "/profile" && (
            <Item>
              <Link
                onClick={() => {
                  history.push("/profile");
                  return <Redirect to="/profile" />;
                }}
              >
                Profile
              </Link>
            </Item>
          )}
          {location.pathname !== "/counter" && (
            <Item>
              <Link
                onClick={() => {
                  history.push("/counter");
                  return <Redirect to="/counter" />;
                }}
              >
                Counter
              </Link>
            </Item>
          )}
        </Menu>
      </Nav>
    </>
  );
};

export default Header;
