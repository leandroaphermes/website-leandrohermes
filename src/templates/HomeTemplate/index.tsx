import React, { ReactElement } from "react";
import BasePage from "components/BasePage";

interface Props {}

export default function HomeTemplate({}: Props): ReactElement {
  return (
    <BasePage>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem magni
        cupiditate debitis sint sapiente, dolore unde voluptatum molestiae
        aliquam suscipit excepturi quo ex nihil corporis voluptates quidem
        laudantium laboriosam. Ea?
      </p>
    </BasePage>
  );
}
