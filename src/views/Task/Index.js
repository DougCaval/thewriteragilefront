import React, { useState, useEffect } from "react";
import * as S from "./styles";
import api from "../../sevices/api";
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import TypeIcons from "../../utils/typeIcons";
import { format } from "date-fns";
import { Navigate } from "react-router-dom";
import isConnected from "../../utils/isConnected";
//import EstoriasPdf from "../../Report/Estorias/estorias";

function Task({ match }) {
  const [lateCount, setLateCount] = useState();
  const [type, setType] = useState();
  const [redirect, setRedirect] = useState(false);

  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [euComo, setEuComo] = useState();
  const [euQuero, setEuQuero] = useState();
  const [para, setPara] = useState();
  const [cenarios, setCenarios] = useState();
  const [detalhesTecnicos, setDetalhesTecnicos] = useState();
  const [prototipos, setPrototipos] = useState();
  const [ambientes, setAmbientes] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
 

  async function lateVerify() {
    await api.get(`/estorias/filter/late/${isConnected}`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  async function LoadTaskDetail() {
    await api.get(`/estorias/${match.params.id}`).then((response) => {
      setId(response.data.id);
      //setMacaddress(response.data.macaddress);
      setType(response.data.type);
      setTitle(response.data.title);
      setEuComo(response.data.euComo);
      setEuQuero(response.data.euQuero);
      setPara(response.data.para);
      setCenarios(response.data.cenarios);
      setDetalhesTecnicos(response.data.detalhesTecnicos);
      setPrototipos(response.data.prototipos);
      setAmbientes(response.data.ambientes);
      setDate(format(new Date(response.data.when), "yyyy-MM-dd"));
      setHour(format(new Date(response.data.when), "HH:mm"));
      setDone(response.data.done);
    });
  }

  async function Save() {
    //Valida????o dos dados

    if (!title) {
      return alert("Voc?? precisa informar o t??tulo da tarefa");
    } else if (!euComo) {
      return alert("Voc?? precisa informar a descri????o do EU COMO na est??ria");
    } else if (!euQuero) {
      return alert("Voc?? precisa informar a descri????o do EU QUERO na est??ria");
    } else if (!para) {
      return alert("Voc?? precisa informar a descri????o do PARA na est??ria");
    } else if (!cenarios) {
      return alert("Voc?? precisa informar a descri????o dos CENARIOS na est??ria");
    } else if (!detalhesTecnicos) {
      return alert("Voc?? precisa informar a descri????o dos DETALHES T??CNICOS na est??ria");
    } else if (!prototipos) {
      return alert("Voc?? precisa informar a descri????o dos PROT??TIPOS na est??ria");
    } else if (!ambientes) {
      return alert("Voc?? precisa informar a descri????o dos AMBIENTES na est??ria");
    } else if (!type) {
      return alert("Voc?? precisa informar o tipo da tarefa");
    } else if (!date) {
      return alert("Voc?? precisa informar a data da tarefa");
    } else if (!hour) {
      return alert("Voc?? precisa informar  a hora da tarefa");
    }

    if (match.params.id) {
      await api
        .put(`./estorias/${match.params.id}`, {
          macaddress: isConnected,
          type,
          title,
          euComo,
          euQuero,
          para,
          cenarios,
          detalhesTecnicos,
          prototipos,
          ambientes,
          when: `${date}T${hour}:00.000`,
        })
        .then(() => setRedirect(true));
    } else {
      await api
        .post("./estorias", {
          macaddress: isConnected,
          type,
          title,
          euComo,
          euQuero,
          para,
          cenarios,
          detalhesTecnicos,
          prototipos,
          ambientes,
          when: `${date}T${hour}:00.000`,
        })
        .then(() => setRedirect(true));
    }
  }

  async function Remove() {
    const res = window.confirm("Deseja realmente remover a est??ria?");
    if (res === true) {
      api.delete(`/estorias/${match.params.id}`).then(() => setRedirect(true));
    }
  }
  useEffect(() => {
    if(!isConnected)
    setRedirect(true);
    LoadTaskDetail();
  }, [LoadTaskDetail]);

  return (
    <S.Container>
      {redirect && <Navigate to="/" />}
      <Header lateCount={lateCount} />

      <S.Form>
        <S.TypeIcons>
          {TypeIcons.map(
            (icon, index) =>
              index > 0 && (
                <button type="button" onClick={() => setType(index)}>
                  <img
                    src={icon}
                    alt="Tipo de est??ria"
                    className={type && type !== index && "inative"}
                  />
                </button>
              )
          )}
        </S.TypeIcons>
        <S.Input>
          <span>T??tulo da est??ria </span>
          <input
            type="text"
            placeholder="Escreva um t??tulo para sua est??ria..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
        </S.Input>

        <S.TextArea>
          <span>Eu como ...</span>
          <textarea
            rows={5}
            placeholder="Eu como empresa , lider, gerente, dono do produto, etc... "
            onChange={(e) => setEuComo(e.target.value)}
            value={euComo}
          />
        </S.TextArea>
        <S.TextArea>
          <span>Quero ...</span>
          <textarea
            rows={5}
            placeholder="Eu quero que seja desenvolvido, construido, alterado, etc..."
            onChange={(e) => setEuQuero(e.target.value)}
            value={euQuero}
          />
        </S.TextArea>
        <S.TextArea>
          <span>Para ...</span>
          <textarea
            rows={5}
            placeholder="Para que possamos chegar ao resultado ..."
            onChange={(e) => setPara(e.target.value)}
            value={para}
          />
        </S.TextArea>
        <S.TextArea>
          <span>Crit??rios de Aceite </span>
          <textarea
            rows={5}
            placeholder=" - Apenas para membros cadastrados etc..."
            onChange={(e) => setCenarios(e.target.value)}
            value={cenarios}
          />
        </S.TextArea>
        <S.TextArea>
          <span>Detalhes t??cnicos</span>
          <textarea
            rows={5}
            placeholder="Para esse desenvolvimento ser?? neces??rio ..."
            onChange={(e) => setDetalhesTecnicos(e.target.value)}
            value={detalhesTecnicos}
          />
        </S.TextArea>
        <S.TextArea>
          <span>Prot??tipos</span>
          <textarea
            rows={5}
            placeholder="Links dos prot??tipos desenvolvidos, urls, etc..."
            onChange={(e) => setPrototipos(e.target.value)}
            value={prototipos}
          />
        </S.TextArea>
        <S.TextArea>
          <span>Ambientes</span>
          <textarea
            rows={5}
            placeholder="Ambientes que ser??o impactados ser??o ... "
            onChange={(e) => setAmbientes(e.target.value)}
            value={ambientes}
          />
        </S.TextArea>
        <S.Input>
          <span>Data</span>
          <input
            type="date"
            placeholder="Data final para entrega desta atividade."
            onChange={(e) => setDate(e.target.value)}
            value={date}
          ></input>
         
        </S.Input>
        <S.Input>
          <span>Hora</span>
          <input
            type="time"
            placeholder="Hora final para entrega desta atividade."
            onChange={(e) => setHour(e.target.value)}
            value={hour}
          />
         
        </S.Input>
        <S.Options>
          <div>
            <input
              type="checkbox"
              checked={done}
              onChange={() => setDone(!done)}
            />
            <span>Conclu??do</span>
          </div>
          {match.params.id && (
            <button type="button" onClick={Remove}>
              EXCLUIR
            </button>
          )}
        </S.Options>
        <S.Save>
          <button type="button" onClick={Save}>
            SALVAR
          </button>
        </S.Save>
        {match.params.id && ( 
           <S.Pdf>
           <button type="button" onClick={EstoriasPdf}>
               Gerar PDF
             </button>
           </S.Pdf>
        )}
       
      </S.Form>

      <Footer />
    </S.Container>
  );
}

export default Task;
