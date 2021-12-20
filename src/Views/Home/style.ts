import styled from 'styled-components';
import { PropsBackground } from '../../types/background';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Header = styled.header<PropsBackground>`
  width: 100%;
  height: 540px;
  background-color: #F00;
  background-image: url('${props => props.background}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  .background-shadow {
    width: 100%;
    height: 100%;
    background-color: rgba(33, 33, 33, .8);
    display: flex;
    flex-direction: column;

    .banner {
      width: 100%;
      height: 420px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .logo {
        width: 200px;
        margin-bottom: 40px;
      }

      .quote {
        font-size: 16px;
        color: #CCC;
        margin: 0;
        margin-bottom: 20px;
      }

      .author {
        font-size: 16px;
        color: #FFF;
        margin: 0;
      }
    }
  }

  @media (max-width: 425px) {
    .background-shadow {
      .banner {
        padding: 20px;
        box-sizing: border-box;

        .quote {
          text-align: center
        }
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 550px;
  background-color: #FFF;
  margin-top: -35px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const About = styled.section`
  width: 100%;
  height: 550px;
  padding: 80px;
  box-sizing: border-box;

  .container {
    width: 100%;
    height: 100%;
    display: flex;

    .content-about {
      flex: 1;
      height: 100%;
      opacity: 1;
      transition: all ease .3s;

      &.hidden {
        opacity: 0;
        pointer-events: none;
      }

      .title {
        font-size: 34px;
        margin: 0;
        margin-bottom: 40px;
      }

      .body {
        font-size: 16px;
        color: #666;
        margin: 0;
      }
    }

    .abstract-about {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      transition all ease .3s;

      &.hidden {
        opacity: 0;
        pointer-events: none;
      }

      .square1,
      .square2,
      .square3 {
        width: 330px;
        height: 330px;
        border-radius: 10px;
      }

      .square1 {
        position: absolute;
        background-color: #212121;
        z-index: 15;
      }

      .square2 {
        position: absolute;
        background-color: #EEEEEE;
        z-index: 10;
        transform: rotate(0deg);
        transition: all ease .6s;

        &.rotate {
          transform: rotate(5deg);
        }
      }

      .square3 {
        background-color: #212121;
        z-index: 5;
        transform: rotate(0deg);
        transition: all ease .9s;

        &.rotate {
          transform: rotate(10deg);
        }
      }
    }
  }

  // 4k Monitor
  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      max-width: 1360px;
    }
  }
  
  // Tablet
  @media (max-width: 980px) {
    height: auto;

    .container {
      flex-direction: column;

      .content-about {
        margin-bottom: 80px;
      }
    }
  }

  @media (max-width: 425px) {
    padding: 40px 20px;

    .container {
      .abstract-about {
        .square1,
        .square2,
        .square3 {
          width: 280px;
          height: 280px;
        }
      }
    }
  }
`;

export const Services = styled.section`
  width: 100%;
  height: 1650px;
  background-color: #212121;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Plans = styled.section`
  width: 100%;
  height: 550px;
  background-color: #FFF;

  .container {
    width: 100%;
    height: 100%;
    padding: 40px 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    opacity: 1;
    transition: all ease .3s;

    &.hidden {
      opacity: 0;
      pointer-events: none;
    }

    >.title {
      font-size: 34px;
      text-align: center;
      margin: 0;
      margin-bottom: 40px;
    }
  
    .plans-content {
      width: 100%;
      flex: 1;
      display: flex;
      justify-content: space-around;

      &.mobile {
        display: none;
      }
    }
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      max-width: 1360px;
    }
  }

  @media (max-width: 1100px) {
    .container {
      .plans-content {
        &.desktop {
          display: none;
        }

        &.mobile {
          display: flex;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      .plans-content {
        &.mobile {
          .swiper-slide {
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }

  @media (max-width: 425px) {
    .container {
      padding: 40px 20px;
    }
  }
`;

export const BannerSecondary = styled.section<PropsBackground>`
  width: 100%;
  height: 550px;
  background-image: url('${props => props.background}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  .background-shadow {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      font-size: 34px;
      color: #FFF;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 425px) {
    height: 250px;
    
    .background-shadow {
      padding: 0 20px;
      box-sizing: border-box;
      
      .title {
        font-size: 24px;
        
      }
    }
  }
`;

export const Projects = styled.section`
  width: 100%;
  height: 550px;
  background-color: #212121;
  overflow: hidden;

  .container {
    width: 100%;
    height: 100%;
    padding: 30px 80px;
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
      font-weight: bold;
      color: #FFF;
      pointer-events: none;
      margin: 0;
      margin-bottom: 20px;
    }

    .slider-area {
      flex: 1;
      width: 100%;
    }
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      max-width: 1360px;
    }
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Contact = styled.section`
  width: 100%;
  height: 800px;
  background-color: #FFF;

  .container {
    width: 100%;
    height: 100%;
    padding: 40px 80px;
    box-sizing: border-box;
    display: flex;
    opacity: 1;
    transition: all ease .3s;

    &.hidden {
      opacity: 0;
      pointer-events: none;
    }

    .info-company {
      padding-rigth: 20px;
      flex: 1;
      box-sizing: border-box;

      .map-company {
        width: 100%;
        height: 300px;
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid #EEE;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all ease .6s;
        overflow: hidden;

        &:hover {
          box-shadow: 4px 4px 10px #212121;
        }
      }
    }

    .contact-area {
      padding-left: 20px;
      flex: 1;
      box-sizing: border-box;
    }
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      max-width: 1360px;
    }
  }

  @media (max-width: 768px) {
    height: auto;

    .container {
      flex-direction: column;

      .info-company {
        margin-bottom: 40px;
        padding: 0;
      }

      .contact-area {
        padding: 0;
      }
    }
  }

  @media (max-width: 425px) {
    .container {
      padding: 40px 20px;
    }
  }
`;

export const Baseboard = styled.section`
  width: 100%;
  height: 50px;
  background-color: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #FFF;
`;

export const GoToScrollTop = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #212121;
  cursor: pointer;
  transition: all ease .3s;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #FFF;
  z-index: 15;

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    background-color: #EEE;
    color: #212121;
  }
`;

