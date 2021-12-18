import Link from "next/link";
import React from "react";

import * as S from "./styles";

export default function Menu() {
  return (
    <S.Wrapper>
      <S.MenuItem>
        <Link href="/">Home</Link>
      </S.MenuItem>
      <S.MenuItem>
        <Link href="/projetos">Projetos</Link>
      </S.MenuItem>
      <S.MenuItem>
        <Link href="/sobre-min">Sobre Min</Link>
      </S.MenuItem>
    </S.Wrapper>
  );
}
