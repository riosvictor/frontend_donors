import React, { useState } from 'react';
import api from '../../services/api';
import "./styles.css";

function FormDonor(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [blood, setBlood] = useState('');

  async function handleSubmit(e){
    await api.post('/donors', {
      name,
      email,
      blood
    });
    
    setName('');
    setEmail('');
    setBlood('');
}

  
  return (
    <section className="form hide">
      <h2>Entre na lista de doadores</h2>
      <form className="form-donor" onSubmit=  {handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome Completo"
          value={name} 
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email} 
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          name="blood"
          placeholder="Tipo sanguíneo"
          value={blood} 
          onChange={e => setBlood(e.target.value)}
          required
        />

        <button type="submit">Quero ajudar</button>
      </form>
    </section>
  );
}

export default FormDonor;