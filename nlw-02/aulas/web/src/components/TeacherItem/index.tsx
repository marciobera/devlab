import React from "react";

import "./styles.css";
import whastappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/7188397?s=460&u=31cc3c61a4c3a8a156b9f6dd52a01d38df40fd3c&v=4" />
        <div>
          <strong>Marcio Bera</strong>
          <span>Informática</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologicas de quimica avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratórios e por mudar a vida das
        pessoas através de experiencias.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whastappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
