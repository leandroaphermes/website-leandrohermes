import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React from "react";

import * as S from "./styles";

export type NavLinkProps = { children: React.ReactNode } & LinkProps;

export default function NavLink({
  href,
  children,
  ...restProps
}: NavLinkProps) {
  const router = useRouter();

  const isAcitive = router.pathname == href;

  return (
    <S.MenuItem isActive={isAcitive}>
      <Link href={href} {...restProps}>
        {children}
      </Link>
    </S.MenuItem>
  );
}
