import styled from 'styled-components';
import React from 'react';

const Checkbox = styled.input`
  position: absolute;
  left: -99999px;

  &:checked + span::after {
    content: "";
    position: absolute;
    left: 12px;
    top: 8px;
    width: 10px;
    height: 20px;
    border: solid #4f4b46;
    border-width: 0 4px 4px 0;
    transform: rotate(45deg);
  }
`;

const Box = styled.span`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 52px;
  margin-bottom: 15px;
  min-height: 35px;
  font-size: 16px;
  padding-top: 3px;
  margin-top: 10px;
  font-weight: normal;

  &::before {
    content: "";
    border: 1px solid #677a8e;
    background: transparent;
    width: 35px;
    height: 35px;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

export default props => (
  <div>
    <Checkbox props={props} type="checkbox" />
    <Box>{props.label}</Box>
  </div>
);
