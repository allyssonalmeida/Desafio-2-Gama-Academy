import styled from "styled-components";

export const HeaderContainer = styled.header`
  grid-column: 2;
  display: flex;
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
`