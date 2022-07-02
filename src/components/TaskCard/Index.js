import React, { useMemo } from "react";

import * as S from "./styles";

import { format } from "date-fns";
import typeIcons from "../../utils/typeIcons";

function TaskCard({ type, title, when , done , macaddress }) {
  const date = useMemo(() => format(new Date(when), "dd/MM/yyyy"));
  const hour = useMemo(() => format(new Date(when), "HH:mm"));
  return (
    <S.Container done={done} >
      <S.TopCard>
        <img src={typeIcons[type]} alt="Ícone da tarefa" />
        <h3>{title}</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>{date}</strong>
        <span>{hour}</span>
        <span>{macaddress}</span>
      </S.BottomCard>
    </S.Container>
  );
}

export default TaskCard;
