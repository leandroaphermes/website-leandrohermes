import Header from "components/Header";
import React, { ReactElement } from "react";
import { Wrapper, Main, Content } from "./styles";

interface BasePageProps {
  children: React.ReactNode;
}

export default function BasePage({ children }: BasePageProps): ReactElement {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Content>{children}</Content>
      </Main>
    </Wrapper>
  );
}
