import React from "react";
import ChefAI from "../../components/ChefAI";

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ChefAI />
    </>
  );
}

