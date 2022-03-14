import Tag from "components/Tag";
import Title from "components/Title";
import React from "react";

import * as S from "./styles";

export type CardProjetoProps = {
  title: string;
  description: string;
  url: string;
  language?: string;
};

export default function CardProjeto({
  title,
  description,
  url,
  language,
}: CardProjetoProps) {
  return (
    <S.Wrapper>
      <S.Link target="_blank" href={url} referrerPolicy="no-referrer">
        <Title size="xlarge">{title}</Title>
        {language && <Tag color="#fa5">{language}</Tag>}
        <S.Description>{description}</S.Description>
      </S.Link>
    </S.Wrapper>
  );
}
