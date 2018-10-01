import styled from 'styled-components';

const Section = styled.section`
  overflow: auto;
  background: ${props => props.alt && '#fafafa'}
`;

export default Section;
