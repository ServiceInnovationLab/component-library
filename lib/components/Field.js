import PropTypes from 'prop-types';

import RadioGroup from '../components/RadioGroup';
import CheckboxText from '../components/CheckboxText';
import Legend from '../elements/Legend';
import Fieldset from '../elements/Fieldset';
import Input from '../elements/Input';
import Instructions from '../elements/Instructions';
import React from 'react';
import DynamicRadioGroup from './DynamicRadioGroup';

const Field = ({ props }) => (
  <Fieldset>
    <Legend>{props.title}</Legend>

    {props.radioGroup && <div>
      {props.helpText && <Instructions dangerouslySetInnerHTML={{__html: props.helpText}} />}
      <RadioGroup
        name={props.name}
        values={props.values}
      />
    </div>}

    {props.dynamicRadioGroup && <div>
      {props.helpText && <Instructions dangerouslySetInnerHTML={{__html: props.helpText}} />}
      <DynamicRadioGroup
        dynamicName={props.dynamicName}
        dynamicTitle={props.dynamicTitle}
        dynamicValues={props.dynamicValues}
        name={props.name}
        values={props.values}
      />
    </div>}

    {props.textField && <div>
      <Input
        name={props.name}
        type="text"
      />
      {props.helpText && <Instructions dangerouslySetInnerHTML={{__html: props.helpText}} />}
      {props.checkboxText && <CheckboxText
        label={props.label}
        name={props.checkboxName}
      />}
    </div>}
  </Fieldset>

);


export default props => (
  <Field props={props} />
);

Field.propTypes = {
  checkboxName: PropTypes.string,
  checkboxText: PropTypes.bool,
  dynamicName: PropTypes.string,
  dynamicRadioGroup: PropTypes.bool,
  dynamicTitle: PropTypes.string,
  dynamicValues: PropTypes.array,
  helpText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  radioGroup: PropTypes.object,
  textField: PropTypes.array,
  title: PropTypes.string,
  values: PropTypes.array
};
