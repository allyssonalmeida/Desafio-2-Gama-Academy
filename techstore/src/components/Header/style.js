import styled from "styled-components";

export const HeaderContainer = styled.header`
  grid-column: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background: #fff;

  .logo{
    object-fit: contain;
    object-position: center;
    height: 50px;
  }
  .cart{
    font-size: 1.5rem;
    & span{
      font-size: 1rem;
    }
  }
  & nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    & a{
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  @media(max-width: 1200px){
    grid-column: 1;
  }

  @media(max-width: 768px){
    width: 100%;
    justify-content: center;
    gap: 20px;
  }
`