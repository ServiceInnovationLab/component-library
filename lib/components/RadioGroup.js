import styled from 'styled-components';
import Input from '../elements/Input';
import Label from '../elements/Label';
import Span from '../elements/Span';
import RadioWrapper from '../elements/RadioWrapper';
import React from 'react';

const RadioGroup = ({ props }) => (
  <RadioWrapper data-radio-group>
    <div>
      {props.values && props.values.map(item => {
        return <Label>
        <Input name={props.name} type="radio" value={item.toLowerCase()} />
        <Span>{item}</Span>
      </Label>
      })}
    </div>
  </RadioWrapper>
);


export default props => (
  <RadioGroup props={props} />
);
