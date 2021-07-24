import styled from "styled-components";

export const Container = styled.section`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 0;
  background: #fff;
  min-height: 70vh;

  & h1{
    text-align:center;
    font-size: 2rem;
    height: 50px;
    &:after{
      display: block;
      content: '';
      width: 50px;
      height: 5px;
      background: #58D66D;
      margin: auto;
      margin-top: 10px;
    }
  }
  
  .cart{
    min-height: 30px;
    width: 600px;
    border: 2px solid #000;
    margin: 0 auto;
  }
  .finalizar{
    width: 600px;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    & button{
      background: #38C973;
      color: #fff;
      border: none;
      padding: 10px 15px;
      text-transform: uppercase;
      cursor: pointer;
      transition: background .2s ease-in-out;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
      &:hover{
        background: #127E3E;
      }
    }
  }

  .alert{
    display: block;
    width: 100%;
    padding: 10px 15px;
    text-align: center;
    flex-grow: 2;
  }
`
export const CartWrapper = styled.ul`
  display: flex;
  width: 100%;
  min-height: 0;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
`
export const CartItem = styled.li`
  display: flex;
  gap: 5px;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  .cart_item__title, .cart_item__price{
    display: block;
  }
  .remover{
    width: 20px;
    color: #000;
    border: none;
    background: #fff;
    cursor: pointer;
  }
`
export const CartTotal = styled.li`
  display: flex;
  gap: 5px;
  padding: 10px 15px;
  justify-content: space-between;
  border-top: 2px solid #000;
  background: #fafafa;
  & h4{
    font-weight: 500;
    display: block;
  }
`

export const Alert = styled.div`
  margin-top: 20px;
  padding: 10px 15px;
  text-align: center;
  border: 2px solid #000;
  background: #FF3B3B;
  color: #fff;
  width: 300px;
  margin: 0 auto;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
`