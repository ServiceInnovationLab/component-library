import styled from 'styled-components';

const Fieldset = styled.fieldset`
  display: flex;
  flex-flow: column;
  margin: 40px 0 0;
  border: none;
  padding: 0;

  + [data-accordian] {
    margin-top: 30px;
  }
`;

export default Fieldset;
