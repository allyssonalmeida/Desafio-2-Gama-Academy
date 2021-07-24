import styled from "styled-components";

export const Container = styled.section`
  grid-column: 2;
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
  @media(max-width: 768px){
    width: 90vw;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 800px;
  padding: 20px 0;
  margin: auto;

  & h2{
    grid-column: 1 / -1;
    display: block;
    padding: 10px 20px;
    background: #E0E0E0;
    font-size: 1.1rem;
  }

  .w-50{
    grid-column: span 1;
  }

  @media(max-width: 768px){
    width: 80vw;
    grid-template-columns: 1fr;
  }
`
export const FormGroup = styled.div`
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;

  & input[type=text], input[type=email], input[type=phone], input[type=date]{
    width: 100%;
    height: 35px;
    font-size: .9rem;
    padding: 5px;  
  }

  & button{
    height: 35px;
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
`
