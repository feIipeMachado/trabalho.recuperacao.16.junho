import React from "react";
import "./Chat.css";
import { useState } from "react";

export function Chat(props) {
  const mensagens = [
    {
      conteudo: "Oi...",
      enviado: false,
      visualizada: true
    },
    {
      conteudo: "Tu não me ama mais?",
      enviado: false,
      visualizada: true
    },
    {
      conteudo: "Oi, boa tarde",
      enviado: true,
      visualizada: false
    },
    {
      conteudo: "Quem é você mesmo?",
      enviado: true,
      visualizada: false
    }
  ];

  const [mostrar, setMostrar] = useState("escondendo");

  const mostrarBotao = (evento) => {
    evento.preventDefault();
    setMostrar("mostrando");
  };

  const esconderBotao = (evento) => {
    evento.preventDefault();
    setMostrar("escondendo");
  };

  return (
    <div
      onMouseEnter={(evento) => mostrarBotao(evento)}
      onMouseLeave={(evento) => esconderBotao(evento)}
    >
      {mensagens.map((mensagem, index) => (
        <h3
          key={index}
          className={"mensagem " + (mensagem.enviado ? "enviada" : "recebida")}
        >
          {mensagem.conteudo}
          <button className={mostrar}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </button>

          <svg
            className={
              mensagem.visualizada ? "svgVisualizada" : "svgNaoVisualizada"
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M374.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 86.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
          </svg>
        </h3>
      ))}
    </div>
  );
}
