import React, { ReactElement } from "react";

import Card from "components/Card";
import PhotoPerfil from "components/PhotoPerfil";

import * as S from "./styles";

interface Props {}

export default function HomeTemplate({}: Props): ReactElement {
  return (
    <S.Wrapper>
      <PhotoPerfil />
      <Card title="Leandro Hermes">
        <S.ContainerInfo>
          <span>Sinop - Mato Grosso</span>
          <a
            href="https://api.whatsapp.com/send?phone=556699977294&text="
            title="Enviar mensagem pelo WhatsApp"
          >
            (66) 9 9977-7294
          </a>
          <a
            href="mailto:leandro.aparecido.hermes@gmail.com"
            title="Enviar um email para leandro.aparecido.hermes@gmail.com"
          >
            leandro.aparecido.hermes@gmail.com
          </a>
        </S.ContainerInfo>
      </Card>
    </S.Wrapper>
  );
}
