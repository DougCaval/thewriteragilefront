import React , { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import notificacao from "../../assets/notificacao.png"
import * as S from "./styles";
import { Link } from 'react-router-dom';
import api from '../../sevices/api';
import isConnected from '../../utils/isConnected';

function Header({  clickNotification }) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/estorias/filter/late/${isConnected}`)
    .then((response) => {
      setLateCount(response.data.length);
    })
  }

    useEffect(()=>{
      lateVerify();
    })

    async function LogOut(){
      localStorage.removeItem('@estorias/macaddress');
      window.location.reload();
    }

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="logo" />
      </S.LeftSide>
      <S.RightSide>
    < Link to="/">Dahboard</Link>
    <span className="dividir"/>
    < Link to="/estorias">Novo Documento</Link>
    <span className="dividir"/>
    { !isConnected ?
     < Link to="/qrcode">SINCRONIZAR TOKEN</Link>
     :
     <button type="button" onClick={LogOut}>ENCERRAR SINCRONIA</button> 
     }
   
    {  
    lateCount &&
    <>

      <span className="dividir"/>
      < button onClick={clickNotification} id="notification">
          <img src={notificacao} alt = "Notificação"/><span>{lateCount}</span>
      </button>
      </>
    
    }
  

      </S.RightSide>
    </S.Container>
  );
}

export default Header;