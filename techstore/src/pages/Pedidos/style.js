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

  @media(max-width: 1200px){
    grid-column: 1;
  }
`

export const Alert = styled.div`
  margin: 0 auto;
  padding: 10px 15px;
  text-align: center;
  border: 2px solid #000;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
`
export const PedidosWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 600px;

  @media(max-width: 768px){
    width: 90vw;
  }
`
export const PedidoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #000;
  transition: background .2s ease-in-out;
  .ver_pedido{
    background: #38C973;
    color: #fff;
    padding: 10px 15px;
    &:hover{
      background: #127E3E;
    }
  }

  @media(max-width: 768px){
    font-size: .9rem;
    padding: 5px 0;
    flex-wrap: wrap;
    align-items: center;
    & div{
      display: block;
      width: 60vw;
    }
    .ver_pedido{
      background: #38C973;
      color: #fff;
      padding: 5px 10px;
      &:hover{
        background: #127E3E;
      }
    }
  }
`