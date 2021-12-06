import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  transition: all ease .3s;

  &:hover {
    box-shadow: 4px 4px 10px #000;
  }

  .content-flat {
    width: 100% - 1px;
    flex: 1;
    border: 1px solid #EEE;
    border-bottom: 0;
    padding: 30px 20px;

    .price {
      font-size: 34px;
      margin: 0;
    }

    .title {
      font-size: 24px;
      margin: 0;
      margin-bottom: 20px;
      text-align: left;
    }

    .type-flat {
      font-size: 18px;
      color: #212121;
      margin: 0;
      margin-bottom: 40px;

      span {
        color: #999;
      }
    }

    .list-benefits {
      display: flex;
      flex-direction: column;
      font-size: 16px;

      .item-benefit {
        margin: 5px 0;
        display: flex;
        align-items: center;

        svg {
          font-size: 25px;
          margin-right: 5px;
        }
      }
    }
  }

  .button-contract {
    width: 100%;
    height: 50px;
    background-color: #212121;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size: 16px;
    cursor: pointer;
    transition: all ease .3s;

    &:hover {
      background-color: #82C300;
    }
  }
`;