import React from 'react';
import '../styles/Cotation.css';
import { useState } from 'react';
import imgCotacao from '../img/imgCotacao.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import ConversaoServices from '../services/conversaoService';

const service = new ConversaoServices();


const Cotation = () => {

    const [valorConversao, setValor] = useState()
    const[moedaLocal, setMoedaLocal] = useState()
    const[moedaConversao, setMoedaConversao] = useState()

    const valorChange = (event) => {
        setValor(event.target.value)
    }

    const moedaLocalChange = (event) =>{
        setMoedaLocal(event.target.value)
    }

    const moedaConversaoChange = (event) =>{
        setMoedaConversao(event.target.value)
    } 

    return(
        <div className="containerCotation">
            <div className='form'>
                <h1>Conversão de Moeda</h1>
                <div className='conversionArea'>
                    <label>
                        <FontAwesomeIcon icon={faMoneyBill}/>
                        Digte o valor para conversão
                    </label>
                    <input type='text' id='inpValorConversao' onChange={valorChange} autoComplete='off'/>
                </div>
                <div className='containerMoeda'>
                    <div className='moedaOpcaoContainer'>
                        <select id='moedaLocal' onChange={moedaLocalChange} className='slcMoeda'>
                            <option selected>Selecione uma moeda local...</option>
                            <option value='BRL'>Real</option>
                            <option value='USD'>Dólar</option>
                            <option value='EUR'>Euro</option>                     
                        </select>
                    </div>
                    <FontAwesomeIcon icon={faRightLeft} style={{marginTop: '10px'}}/>
                    <div className='moedaOpcaoContainer'>
                        <select id='moedaLocal' onChange={moedaConversaoChange} className='slcMoeda'>
                            <option selected>Selecione uma moeda de conversão...</option>
                            <option value='BRL'>Real</option>
                            <option value='USD'>Dólar</option>
                            <option value='EUR'>Euro</option>
                        </select>
                    </div>
                </div> 
                <button type='button' className='btnCotacao' onClick={() => service.ConverteMoeda(moedaLocal, moedaConversao, valorConversao)}>Converter</button>
                <span id='spResult' className='spResult'>Valor</span>
            </div>
            <div className='imgContainer'>
                <img alt='problemas ao carregar a imagem' src={imgCotacao}/>
            </div>
        </div>
    )
}

export default Cotation;

