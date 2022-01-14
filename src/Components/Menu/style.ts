import styled from 'styled-components';

import { PropShowMenu } from '../../types/menu';

export const Conatiner = styled.div<PropShowMenu>`
  width: 100%;
  height: 50px;

  .button-menu {
    display: none;
  }

  .menu-area {
    width: 100%;
    height: 50px;

    .exit-menu {
      display: none;
    }

    .button-menu {
      display: none;
    }

    .menu {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 425px) {
    .button-menu {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 20px;
      box-sizing: border-box;

      svg {
        font-size: 28px;
        color: #FFF;
        position: fixed;
        z-index: 30;

        &.dark {
          color: #000;
        }
      }
    }

    .menu-area {
      width: 100%;
      height: 100vh;
      position: fixed;
      right: 0;
      top: 0;
      background-color: rgba(0, 0, 0, .6);
      z-index: 30;
      overflow: hidden;
      opacity: ${props => props.showMenu ? 1 : 0};
      ${props => props.showMenu ? 'pointer-events: all;' : 'pointer-events: none;'}
      transition: all ease .3s;

      .exit-menu {
        display: block;
        position: absolute;
        color: #FFF;
        top: 10px;
        right: 300px;
        font-size: 30px;
        opacity: ${props => props.showMenu ? 1 : 0};
        transition: all ease .6s;
      }

      .menu {
        width: 290px;
        height: 100%;
        background-color: #FFF;
        border-top-left-radius: 40px;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 40px;
        box-sizing: border-box;
        position: absolute;
        right: ${props => props.showMenu ? '0' : '-290px'};
        transition: all ease .9s;
      }
    }
  }
`;