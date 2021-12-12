import PhotoPerfil from "components/PhotoPerfil";
import React from "react";
import { ContainerPerfio, Wrapper, WrapperMenu } from "./styles";

export default function Header() {
  return (
    <Wrapper>
      <ContainerPerfio>
        <PhotoPerfil />
      </ContainerPerfio>
      <WrapperMenu>
        <ul>
          <li>aaa</li>
          <li>aa22</li>
        </ul>
      </WrapperMenu>
    </Wrapper>
  );
}
