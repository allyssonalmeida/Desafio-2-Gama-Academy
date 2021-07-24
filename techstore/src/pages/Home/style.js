import styled from "styled-components";

export const HomeContainer = styled.section`
  grid-column: 2;
  
  @media(max-width: 1200px){
    grid-column: 1;
  }
`
export const Banner = styled.div`
  height: 300px;
  width: 100%;
  margin: 10px 0;

  @media(max-width: 768px){
    height: auto;
    & img{
      object-fit: contain;
      height: auto;
      width: 100%;
    }
  }
`
export const ProdutoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 50px;

  @media(max-width: 1200px){
    flex-wrap: wrap;
    padding: 0 10px;
  }

  @media(max-width: 768px){
    justify-content: space-around;

  }
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

    .produto__titulo, .produto__preco{
      font-size: 1rem;
    }
  }
`
