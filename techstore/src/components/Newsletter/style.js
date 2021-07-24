import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin: auto;
  padding: 20px 0;
  background: #fff;
  border: 1.5px solid #000;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, .1);
  & h4{
    font-size: 1.3rem;
    text-align: center;
    padding: 10px 0;
    width: 350px;
  }

  & form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    gap: 10px;
    & input[type=email] {
      width: 100%;
      height: 40px;
      padding-left: 10px;
      font-size: 1.1rem;
    }

    & button{
      background: #38C973;
      color: #fff;
      height: 35px;
      font-size: 1rem;
      text-transform: uppercase;
      cursor: pointer;
      border:none;
      transition: background, .2s ease-in-out;
      &:hover{
        background: #127E3E;
      }
    }
  }

  .aviso{
    padding: 10px;
    text-align: center;
  }
`