import React, { useState } from "react";
import * as S from "./styles";
import Qr from "qrcode.react";
import { Redirect } from "react-router-dom";

//nossos componentes
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";

function QrCode() {
  const [mac, setMac] = useState();
  const [redirect, setRedirect] = useState(false);

  async function SaveMac() {
    if (!mac) alert("Você precisa informar um Token válido!");
    else {
      await localStorage.setItem("@estorias/macaddress", mac);
      setRedirect(true);
      window.location.reload();
    }
  }

  return (
    <S.Container>
      {redirect && <Redirect to={"/"} />}
      <Header></Header>

      <S.Content>
        <h1>Capture o QRCODE pelo Celular</h1>

        <S.QrCodeArea>
          <Qr value="getmacaddress" size={350}></Qr>
        </S.QrCodeArea>
        <S.ValidationCode>
          <span>Digite o token que apareceu no Celular </span>
          <input
            type="text"
            onChange={(e) => setMac(e.target.value)}
            value={mac}
          />
          <button type="button" onClick={SaveMac}>
            SINCRONIZAR
          </button>
        </S.ValidationCode>
        <p>suas atividades serão sincronizadas com o Celular</p>
      </S.Content>
      <Footer></Footer>
    </S.Container>
  );
}

export default QrCode;
