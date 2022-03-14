import React, { ReactElement } from "react";

import Title from "components/Title";
import CardProjeto, { CardProjetoProps } from "components/CardProjeto";

import * as S from "./styles";

type HomeTemplateProps = { projects: CardProjetoProps[] };

export default function ProjetosTemplate({
  projects,
}: HomeTemplateProps): ReactElement {
  return (
    <>
      <Title size="xxlarge">Projetos</Title>
      <S.GridWrapper>
        {projects.map((project) => (
          <S.GridItem key={project.title}>
            <CardProjeto
              title={project.title}
              description={project.description}
              url={project.url}
              language={project.language}
            />
          </S.GridItem>
        ))}
      </S.GridWrapper>
    </>
  );
}
