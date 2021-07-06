import type { ReactNode, VFC } from "react";
import { Footer } from "src/components/footer";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <main className="min-h-screen bg-red-300">{props.children}</main>
      <Footer />
    </div>
  );
};
