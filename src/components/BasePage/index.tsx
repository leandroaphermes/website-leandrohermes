import Header from "components/Header";
import React, { ReactElement } from "react";
import { Wrapper, Main } from "./styles";

interface Props {
  children: React.ReactNode;
}

export default function BasePage({ children }: Props): ReactElement {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
}
