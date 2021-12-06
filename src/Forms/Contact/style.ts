import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    height: 60px;
    border: 0;
    border-radius: 10px;
    outline: 0;
    background-color: #EEE;
    margin-bottom: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 16px;
    transition: all ease .3s;

    &.warning {
      border: 1px solid #FF3333;
    }

    &.success {
      border: 1px solid #82C300;
    }

    &:focus {
      border: 0 !important;
      background-color: #82C300;
      color: #FFF;

      &::placeholder {
        color: #FFF;
      }
    }
  }

  textarea {
    width: 100%;
    height: 400px;
    border: 0;
    border-radius: 10px;
    outline: 0;
    background-color: #EEE;
    margin-bottom: 40px;
    padding: 20px;
    box-sizing: border-box;
    font-size: 16px;
    resize: none;
    transition: all ease .3s;

    &.warning {
      border: 1px solid #FF3333;
    }

    &.success {
      border: 1px solid #82C300;
    }

    &:focus {
      border: 0 !important;
      background-color: #82C300;
      color: #FFF;

      &::placeholder {
        color: #FFF;
      }
    }
  }

  button {
    width: 100%;
    height: 60px;
    border: 0;
    border-radius: 10px;
    outline: 0;
    background-color: #212121;
    color: #FFF;
    font-size: 16px;
    transition: all ease .3s;

    &.success {
      background-color: #0081A0;
      cursor: pointer;
    }
  }
`;