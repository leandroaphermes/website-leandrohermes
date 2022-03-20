import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { UrlObject } from "url";

declare type Url = string | UrlObject;

export type SubMenuItemProps = {
  href: Url;
  isActive: boolean;
};

export type NavLinkProps = {
  children: React.ReactNode;
  onClick?: (
    e: React.MouseEvent<HTMLElement>,
    navItem: SubMenuItemProps
  ) => void;
} & LinkProps;

import * as S from "./styles";

export default function NavLink({
  href,
  children,
  onClick,
  ...restProps
}: NavLinkProps) {
  const router = useRouter();

  const isActive = router.pathname == href;

  const navItem: SubMenuItemProps = {
    href: href,
    isActive: isActive,
  };

  return (
    <S.MenuItem
      isActive={isActive}
      onClick={(e) =>
        typeof onClick === "function" ? onClick(e, navItem) : null
      }
    >
      <Link href={href} {...restProps}>
        {children}
      </Link>
    </S.MenuItem>
  );
}
