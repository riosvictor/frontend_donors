import React, { Component } from 'react';
import "./styles.css";

class Header extends Component {
  showForm() {
    document.querySelector('.form').classList.toggle('hide');
  }

  render() {
    return (
      <header>
        <img
          className="logo"
          src="/logo.png"
          alt="DOE" />
        <h2>A sua doação importa</h2>
        <p>Até 3 vidas com 1 doação</p>
        <p>Mais de 38.000 doações são necessárias todos os dias</p>
        <p>Apenas 1,9% da população brasileira, doa sangue</p>
        <button onClick={() => this.showForm()}>Quero ajudar</button>
      </header>
    );
  }
}

export default Header;