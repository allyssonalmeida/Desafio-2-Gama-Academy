import styled from "styled-components";

export const FooterContainer = styled.footer`
  grid-column: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 10px 0;
  margin-top: 50px;
  background: #fff;

  & nav{
    display: flex;
    gap: 10px;
    justify-content: space-between;

    & a{
      font-size: 2rem;

      &:hover{
        color: #58D66D;
      }
    }
  }
  .copy{
    font-size: .875rem;
  }

  @media(max-width: 1200px){
    grid-column: 1;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    text-align: center;
    min-height: 20px;
    margin-top: 10px;
  }
`