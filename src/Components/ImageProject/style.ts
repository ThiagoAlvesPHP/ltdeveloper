import styled from 'styled-components';

// TYPE
import { PropsBackground } from '../../types/background';

export const Container = styled.div<PropsBackground>`
  opacity: 0;
  transition: all ease 1s;

  &.active {
    opacity: 1;
    transition: all ease 1s;
    cursor: pointer;
  }

  .image {
    width: 700px;
    height: 400px;
    border-radius: 10px;
    background-image: url('${props => props.background}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;

    .bottom {
      width: 100%;
      height: 100px;
      position: absolute;
      bottom: 0;
      background: linear-gradient(to bottom, transparent, #212121);
      padding: 0 20px;
      display: flex;
      align-items: flex-end;
      box-sizing: border-box;

      .title-project {
        font-size: 34px;
        color: #FFF;
        text-shadow: 3px 2px 2px #212121;
      }
    }
  }

  @media (max-width: 768px) {
    .image {
      width: 400px;
      height: 300px;
    }
  }

  @media (max-width: 425px) {
    .image {
      width: 300px;
      height: 230px;

      .bottom {
        .title-project {
          font-size: 24px;
        }
      }
    }
  }
`;