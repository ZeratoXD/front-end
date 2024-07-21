import React, { useContext, useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import ExibirProduto from './ProductShow'
import './ModalExibirProduto.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Product';
import { buscar } from '../../../services/Service';
import { Dna } from 'react-loader-spinner';
import CardProduto from '../cardProdutos/CardProduto';

function ModalExibirProduto() {
  
  return (
    <>
    <Popup
      trigger={
        <button className="border border-meddium-orange rounded px-4 bg-meddium-orange py-2.5 text-center text-sm items-center font-bold text-white-new hover:bg-dark-orange">
          Ver mais
        </button>
      }
      modal
    >
      <p>Olá</p>
      {/* <ExibirProduto produto={undefined} /> */}
    </Popup>
  </>
  )
}

export default ModalExibirProduto