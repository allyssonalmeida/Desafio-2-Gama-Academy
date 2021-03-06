import {FooterContainer} from "./style";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () =>{
  return(
    <FooterContainer>
      <div className="copy">
        <p>Projeto Desenvolvido como parte do Desafio#2 do Programa Hiring Coders 2021</p>
        <span>&copy; Alguns Diretos Reservados</span>
      </div>
      <nav>
        <a href="http://github.com/allyssonalmeida"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/allysson-fernando-guedes-de-almeida-515437bb/"><FaLinkedin /></a>
      </nav>
    </FooterContainer>
  );
}

export default Footer;