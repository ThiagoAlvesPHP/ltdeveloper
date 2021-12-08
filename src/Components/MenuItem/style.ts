import styled from 'styled-components';

export const Container = styled.li`
  margin: 0 5px;

  a {
    color: #FFF;
    text-decoration: none;
    opacity: .6;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    transition: all ease .6s;
    margin-bottom: -3px;

    span {
      margin-bottom: 5px;
    }

    .bar {
      height: 3px;
      width: 0;
      transition: all ease .6s;
    }
  }

  a:hover {
    opacity: 1;

    .bar {
      width: 100%;
      height: 3px;
      background-color: #82C300;
    }
  }

  a.active {
    opacity: 1;
    
    .bar {
      width: 100%;
      height: 3px;
      background-color: #82C300;
    }
  }

  @media (max-width: 425px) {
    width: 90%;
    height: 40px;
    border-radius: 10px;
    overflow: hidden;

    a {
      width: 100%;
      height: 40px;
      color: #212121;
      position: relative;

      span {
        flex: 1;
        display: flex;
        line-height: 37px;
        padding: 0 20px;
        box-sizing: border-box;
      }

      .bar {
        position: absolute;
        bottom: 0;
      }
    }

    a:hover {
      background-color: rgba(130, 195, 0, .6);

      span {
        color: #FFF;
      }
    }
  }
`;