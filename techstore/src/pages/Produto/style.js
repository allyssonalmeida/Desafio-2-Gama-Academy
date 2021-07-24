import styled from "styled-components"

export const Container = styled.section`
  grid-column: 2;
  display: grid;
  grid-template-columns: 50px 300px 2fr 50px;
  grid-gap: 20px;
  justify-content: center;
  min-height: 70vh;
  background: #fff;
  color: #000;
  padding: 50px 0;
  margin: auto;
  & img{
    grid-column: 2;
    grid-row: 1 / -1;
    object-fit: contain;
    width: 100%;
  }

  .dados{
    grid-column: 3;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & button{
      width: 250px;
      padding: 10px 15px;
      border: none;
      background: #58D66D;
      color: #fff;
      font-size: 1rem;
      text-transform: uppercase;
      border-radius: 5px;
      cursor: pointer;
      transition: background .2s ease-in-out;
      &:hover{
        background: #127E3E;
      }
    }
  }
`

export const Alert = styled.div`
  margin-top: 20px;
  padding: 10px 15px;
  text-align: center;
  border: 2px solid #000;
  background: #58D66D;
  color: #fff;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
`