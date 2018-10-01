import styled from 'styled-components';

const Instructions = styled.p`
  font-size: 17px;
  margin-top: 0;
  margin-bottom: 0;

  + [data-radio-group] {
    margin-top: 30px;
  }
`;

export default Instructions;
