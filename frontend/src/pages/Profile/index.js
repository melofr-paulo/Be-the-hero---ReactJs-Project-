import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';
import './styles.css';

import api from '../../Services/api';

import logoImg from '../../assets/logo.svg';


export default function Profile(){
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();
  const ongID = localStorage.getItem('ongID');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongID,
      }
    }).then(Response => {
      setIncidents(Response.data);
    })
  }, [ongID])

  async function handleDeleteIncident(id){
    try {
      await api.delete(`Incidents/${id}`, {
        headers:{
          Authorization: ongID,
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (error) {
      alert('ERRO ao deletar caso, tente novamente!')
    }
  }

  function handleLogout(){
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem Vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041"/>
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        {
          incidents.map(incident => (
            <li key={incident.id}>
              <strong>CASO:</strong>
              <p>{incident.title}</p>
            
              <strong>DESCRIÇÃO:</strong>
              <p>{incident.description}</p>
          
              <strong>VALOR:</strong>
              <p>{Intl.NumberFormat('pt-br', {style: 'currency', currency:'BRL'}).format(incident.value)}</p>
        
              <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                <FiTrash2 size={20} color="#aa88b3"/>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}