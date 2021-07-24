import styled from "styled-components";

export const HomeContainer = styled.section`
  grid-column: 2;
`
export const Banner = styled.div`
  height: 300px;
  width: 100%;
  background: lightgray;
  margin: 10px 0;
`
export const ProdutoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 50px;
`
export const Produto = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  
  .produto__img{
    object-fit: contain;
    width: 100%;
    object-position: center;
  }
  .produto__titulo{
    font-size: 1.3rem;
  }
  .produto__preco{
    font-size: 1.1rem;
  }

  @media(max-width: 768px){
    max-width: 45%;
    gap: 5px;
  }
`
