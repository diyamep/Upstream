import React, { useState } from "react";
import Header from "./Header";
import styled from "styled-components";

function Counter() {
  const [count, setCount] = useState(0);

  const Grid = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;

  const Col = styled.div`
    display: flex;
  `;

  const MyButton = styled.button`
    background: ${(props) => (props.primary ? props.mainColor : "white")};
    color: ${(props) => (props.primary ? "white" : props.mainColor)};

    display: block;
    font-size: 1em;
    margin: 1em;
    padding: 0.5em 1em;
    border: 2px solid ${(props) => props.mainColor};
    border-radius: 15px;
  `;

  return (
    <div className="App">
      <Header />
      <h2>{count}</h2>
      <Grid>
        <Col>
          <MyButton
            mainColor="rgb(39, 117, 197)"
            onClick={() => setCount(count - 1)}
            primary
          >
            -
          </MyButton>
          <MyButton
            mainColor="rgb(39, 117, 197)"
            onClick={() => setCount(count + 1)}
            primary
          >
            +
          </MyButton>
        </Col>
      </Grid>
    </div>
  );
}

export default Counter;
