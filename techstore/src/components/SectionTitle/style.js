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
`