import * as colors from '../styles/color-palette';
import { darken } from 'polished';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ bgColor }) => colors[bgColor] };
  border: none;
  border-radius: 2px;
  color: ${({ fontColor }) => colors[fontColor] };
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: 0 12px;
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    background: ${({ hoverColor }) => darken(.1, colors[hoverColor]) };
  }
`;

Button.defaultProps = {
  bgColor: 'success',
  fontColor: 'white',
  hoverColor: 'lightYellow'
};

export default Button;
