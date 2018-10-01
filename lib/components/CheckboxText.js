import Label from '../elements/Label';
import React from 'react';
import Checkbox from '../elements/Checkbox';

const CheckboxText = ({ props }) => (
  <div>
    <Label>
      <Checkbox
        label={props.label}
      />
    </Label>
  </div>
);


export default props => (
  <CheckboxText props={props} />
);
