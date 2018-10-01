import styled from 'styled-components';
import RadioGroup from '../components/RadioGroup';
import Legend from '../elements/Legend';
import Fieldset from '../elements/Fieldset';
import Input from '../elements/Input';
import React from 'react';

const Header = styled.div`
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4em;
  text-align: left;
  background-color: #e4e4e4;
  padding: 10px 55px 10px 20px;
  position: relative;
`;

const Body = styled.div`
  text-align: left;
  background-color: #e4e4e4;
  margin-top: 0;
  padding: 8px 20px 20px;
`;

const Wrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: column;
  position: relative;
  box-sizing: inherit;
`;

class Accordian extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  toggle() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return <Wrapper data-accordian="true">
      <Header onClick={() => this.toggle()}>{this.props.header}</Header>
      {this.state.show && <Body>{this.props.body}</Body>}
    </Wrapper>
  }
}


export default Accordian;
