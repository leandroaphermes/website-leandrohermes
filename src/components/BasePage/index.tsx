import Header from "components/Header";
import React, { ReactElement, useState } from "react";
import { Wrapper, Main, Content } from "./styles";

interface BasePageProps {
  children: React.ReactNode;
}

export default function BasePage({ children }: BasePageProps): ReactElement {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Wrapper isCollapsed={isCollapsed}>
      <Header
        isCollapsed={isCollapsed}
        onOpenMenu={() => setIsCollapsed(false)}
        onCloseMenu={() => setIsCollapsed(true)}
      />
      <Main>
        <Content>{children}</Content>
      </Main>
    </Wrapper>
  );
}
