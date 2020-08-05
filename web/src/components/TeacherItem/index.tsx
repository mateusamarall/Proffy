import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";
function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/37390930?s=460&u=e72e2e0ce6ae28b21c775c7fbb2f97223c1b88a5&v=4"
          alt="Mateus Amaral"
        />
        <div>
          <strong>Mateus Amaral</strong>
          <span>Física</span>
        </div>
      </header>
      <p>
        Sendo Professor de física a mais de 8 anos mostrando a física com uma
        comunicação simples e moderna e claro com experimentos.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
