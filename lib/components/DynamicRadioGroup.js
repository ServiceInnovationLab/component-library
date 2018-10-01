import styled from 'styled-components';
import Input from '../elements/Input';
import Label from '../elements/Label';
import Legend from '../elements/Legend';
import Span from '../elements/Span';
import RadioWrapper from '../elements/RadioWrapper';
import React from 'react';

class DynamicRadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  toggle() {
    this.setState({show: !this.state.show});
  }

  render() {
    let props = this.props.props;

    return (
      <div>
        <RadioWrapper data-radio-group>
          <div>
            {props.values && props.values.map(item => {
              return <Label>
                <Input name={props.name} type="radio" value={item.toLowerCase()} onClick={()=>this.toggle()}/>
                <Span>{item}</Span>
              </Label>
            })}
          </div>
      </RadioWrapper>

      {this.state.show && <SecondaryWrapper>
        <Legend>{props.dynamicTitle}</Legend>
        <RadioWrapper data-radio-group>
          <div>
            {props.dynamicValues && props.dynamicValues.map(item => {
              return <Label>
              <Input name={props.dynamicName} type="radio" value={item.toLowerCase()}/>
              <Span>{item}</Span>
            </Label>
            })}
          </div>
        </RadioWrapper>
      </SecondaryWrapper>}
    </div>

    );
  }
}

const SecondaryWrapper = styled.div`
  margin-top: 40px;
`;

export default props => (
  <DynamicRadioGroup props={props} />
);
