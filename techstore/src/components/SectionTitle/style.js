import styled from "styled-components";

export const TitleWrapper = styled.h1`
  display: block;
  padding: 10px 0;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 50px;
  margin-bottom: 10px;
  &:after{
    content: "";
    display: block;
    height: 5px;
    width: 50px;
    background: #7DDF8D;
    margin: 5px 0;
  }
  @media(max-width: 768px){
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1.3rem;
    padding: 0 15px;
    &:after{
      height: 3px;
      width: 30px;
    }
  }
`