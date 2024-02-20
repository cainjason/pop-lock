import React from 'react';
import styled from 'styled-components';

function Body() {
  return (
    <BodyContainer>
      <BodyInfo>
        <button> Submit </button>
      </BodyInfo>
    </BodyContainer>
  )
}

export default Body;

const BodyContainer = styled.div``;

const BodyInfo = styled.div`
 button {
    background-color: white;
    border-radius: 50px;
    margin-right: 200px;
    margin-top: 400px;
    border-color: green;
    height: 50px;
    width: 100px;
    font-size: larger;
    font-weight: bolder;
    border-style: solid;
    color: green;
    font-size: larger;
    font-weight: bold;    
}

button:hover {
    cursor: pointer;
    background-color: orange;
    color: white;
    border-radius: 50px;
    margin-right: 200px;
    margin-top: 400px;
    border-color: green;
    height: 50px;
    width: 100px;
    font-size: larger;
    font-weight: bolder;
    border-style: solid;
    font-size: larger;
    font-weight: bold;    
}
`;
