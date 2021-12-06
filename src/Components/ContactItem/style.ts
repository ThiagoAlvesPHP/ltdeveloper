import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid #EEE;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  transition: all ease .6s;

  &:hover {
    box-shadow: 4px 4px 10px #212121;

    .icon-area {
      .icon {
        background-color: #EEE;
        color: #212121;
      }
    }
  }

  .icon-area {
    width: 80px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      width: 50px;
      height: 50px;
      border-radius: 35px;
      background-color: #212121;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #FFF;
      transition: all ease .6s;
    }
  }

  .content-contact {
    flex: 1;

    .title {
      font-size: 18px;
      margin: 0;
      margin-bottom: 10px;
      font-weight: bold;
      pointer-events: none;
    }

    .body {
      font-size: 14px;
      color: #999;
      pointer-events: none;
    }

    .link {
      font-size: 14px;
      color: #434343;
      text-decoration: none;
    }
  }

  @media (max-width: 425px) {
    .content-contact {
      .title {
        font-size: 14px;
      }

      .body {
        font-size: 12px;
      }

      .link {
        font-size: 12px;
      }
    }
  }
`;