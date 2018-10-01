import styled from 'styled-components';

const RadioWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: column;
  position: relative;
  box-sizing: inherit;

  input {
    position: absolute;
    left: -9999px;
    margin: 0;

    &:checked + span {
      background-color: #677a8e;
      border-color: #677a8e;
      color: #fff;
    }
  }

  label:first-child > span {
    border-top-left-radius: 18px;
    border-bottom-left-radius: 18px;
  }

  label:last-child > span {
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
  }
`;

export default RadioWrapper;
