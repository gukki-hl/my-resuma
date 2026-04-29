import { ReactNode } from "react";
import Client from "./client";

type Props = {
  children: ReactNode;
};

function LocaleLayout({ children }: Props) {
  return <Client>{children}</Client>;
}

export default LocaleLayout;
