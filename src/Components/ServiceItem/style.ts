import styled from 'styled-components';

// TYPE
import { PropsBackground } from '../../types/background';

export const Container = styled.div<PropsBackground>`
  width: 100%;
  height: 550px;
  display: flex;

  .content-service {
    width: 50%;
    height: 100%;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: all ease .3s;

    &.hidden {
      opacity: 0;
      pointer-events: none;
    }

    .title {
      font-size: 34px;
      color: #FFF;
      margin: 0;
      margin-bottom: 20px;
    }

    .line {
      max-width: 498px;
      width: 100%;
      height: 3px;
      display: flex;
      margin: 0;
      margin-bottom: 40px;

      span {
        flex: 1;
        height: 100%;
        margin: 0 20px;
        background-color: #FFF;
      }
    }

    .body {
      font-size: 18px;
      color: #FFF;
      font-family: 'Tienne';
      text-align: center;
    }
  }

  .image-service {
    width: 50%;
    height: 100%;
    background-image: url('${props => props.background}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .background-shadow {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .6);
    }
  }

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;

    .content-service {
      width: 100%;
      height: 400px;
      order: 1;
    }

    .image-service {
      width: 100%;
      height: 400px;
      order: 0;
    }
  }

  @media (max-width: 425px) {
    .content-service {
      .title {
        font-size: 24px;
      }

      .body {
        font-size: 14px;
      }
    }
  }
`;