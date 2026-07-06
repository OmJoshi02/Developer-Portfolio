import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      {/* Purple Glow */}
      <div className="fixed -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[180px] pointer-events-none" />

      {/* Blue Glow */}
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[180px] pointer-events-none" />

      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;