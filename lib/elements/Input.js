import styled from 'styled-components';
import React from 'react';

const Input = styled.input`
  font-family: Fira Sans,sans-serif;
  font-size: 16px;
  display: inline-block;
  border-radius: 5px;
  padding: 8px 20px;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 25px;
  width: 100%;

  &[type=text] {
    border: 1px solid #677a8e;
  }
`;

export default props => (

  <Input type={props.type} name={props.name} />

);
