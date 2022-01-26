import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  
  .slider {
    width: 700px;
    height: 400px;
    display: flex;
    position: relative;

    .arrow-left {
      position: absolute;
      top: 45%;
      left: 32px;
      z-index: 10;
      
      svg {
        font-size: 32px;
        color: #FFF;
        transition: all ease .3s;

        &:hover {
          color: #009BD1;
        }
      }
    }

    .arrow-right {
      position: absolute;
      top: 45%;
      right: 32px;
      z-index: 10;
      
      svg {
        font-size: 32px;
        color: #FFF;
        transition: all ease .3s;

        &:hover {
          color: #009BD1;
        }
      }
    }
  }

  @media (max-width: 768px) {
    align-items: center;

    .slider {
      width: 400px;
      height: 300px;

      .arrow-left {
        top: 40%;
      }
  
      .arrow-right {
        top: 40%;
      }
    }
  }

  @media (max-width: 425px) {
    .slider {
      width: 300px;
      height: 230px;

      .image {
        .bottom {
          display: flex;
          justify-content: center;

          .title-project {
            font-size: 20px;
          }
        }
      }

      .arrow-left {
        top: 40%;
      }
  
      .arrow-right {
        top: 40%;
      }
    }
  }
`;