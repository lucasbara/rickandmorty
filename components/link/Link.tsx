import { FC } from "react";
import NextLink from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  props?: any;
}

const Link: FC<Props> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
      <a {...props} style={{ color: "inherit", textDecoration: "none" }}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
