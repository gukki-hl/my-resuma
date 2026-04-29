import { ReactNode } from "react";

interface ClientProps {
  children: ReactNode;
}

function client({ children }: ClientProps) {
  return <div>{children}</div>;
}

export default client;
