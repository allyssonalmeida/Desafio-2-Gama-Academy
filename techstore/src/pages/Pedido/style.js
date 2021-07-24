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

  & table{
    width: 600px;
    margin: 0 auto;
    text-align: left;
    border: 1px solid #d3d3d3;
    border-collapse: collapse;
    & tr {
      border: 1px solid #d3d3d3;
      & td, th {
        padding: 2px 5px;
      }
    }
    & h2{
      padding: 10px 0;
      font-size: 1rem;
      font-weight: 500;
    }

    & span{
      font-weight: 500;
      font-size: .775rem;
      display: block;
      padding: 5px 0;
    }

    .title, .total{
      background: rgba(230, 230, 230);
    }
    .total td{
      font-size: 1rem;
      padding: 10px;
    }
  }
`