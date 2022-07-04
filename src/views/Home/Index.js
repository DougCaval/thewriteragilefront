import React, { useState, useEffect } from "react";
import * as S from "./styles";
import api from "../../sevices/api";
import { Link, Navigate } from "react-router-dom";

//nossos componentes
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import FilterCard from "../../components/FilterCard/Index";
import TaskCard from "../../components/TaskCard/Index";
import isConnected from "../../utils/isConnected";

function Home() {
  const [filterActived, setFilterActived] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();
  const [redirect, setRedirect] = useState(false);

  async function loadTasks() {
    await api
      .get(`/estorias/filter/${filterActived}/${isConnected}`)
      .then((response) => {
        setTasks(response.data);
      });
  }

  async function lateVerify() {
    await api.get(`/estorias/filter/late/${isConnected}`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  function Notification() {
    setFilterActived("late");
  }

  useEffect(() => {
    loadTasks();
    // alert(isConnectd);
    if (!isConnected) setRedirect(true);
    lateVerify();
  }, [filterActived]);

  return (
    <S.Container>
      {redirect && <Navigate to="/qrcode" />}
      <Header lateCount={lateCount} clickNotification={Notification} />
      <S.FilterArea>
        <button onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos" actived={filterActived === "all"} />
        </button>
        <button onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje" actived={filterActived === "today"} />
        </button>
        <button onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={filterActived === "week"} />
        </button>
        <button onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês" actived={filterActived === "month"} />
        </button>
        <button onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano" actived={filterActived === "year"} />
        </button>
      </S.FilterArea>

      <S.Title>
        <h3>
          {filterActived === "late"
            ? "Suas estórias prontas "
            : "Suas estórias pendentes"}
        </h3>
      </S.Title>

      <S.Content>
        {tasks.map((t) => (
          <Link to={`/estorias/${t._id}`}>
            <TaskCard
              type={t.type}
              title={t.title}
              when={t.when}
              macaddress = {t.macaddress}
              done={t.done}
            ></TaskCard>
          </Link>
        ))}
      </S.Content>

      <Footer />
    </S.Container>
  );
}

export default Home;
