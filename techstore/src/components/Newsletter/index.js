import {useState} from "react";
import {Container} from "./style";

const Newsletter = () =>{
  const [email, setEmail] = useState('');
  const [cadastro, setCadastro] = useState(false);
  const [botao, setBotao] = useState('Confirmar');
  function handleForm(e) {
    setBotao("Confirmando...");
    e.preventDefault();
    let dados = {
      email: email,
    }
    localStorage.setItem('newsletter', JSON.stringify(dados));
    setTimeout(()=>{
      setEmail('');
      setCadastro(true);
      setBotao('Confirmar');
    }, 1000);
    setTimeout(()=>{
      setCadastro(false);
    }, 6000);

  };
  return(
    <Container>
      <h4>Receba todas as nossas promoções no seu E-mail!</h4>
      <form onSubmit={handleForm}>
        <input 
          type="email" 
          id="email" 
          inputMode="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} placeholder="joãofilho@email.com" 
        />
        <button type="submit"> {botao} </button>
      </form>
      {cadastro ? <div className="aviso"> Tudo certo! Você receberá todas as nossas novidades no seu e-mail. </div>: ''}
    </Container>
  )
}

export default Newsletter;