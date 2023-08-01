import React from "react";

const AiDesktop = ({ children }) => {
  return (
    <section className="w-screen h-screen bg-primary p-12 font-firaCode">
      <div className="w-full h-full bg-secondary rounded-lg px-5 flex flex-col">
        {children}
      </div>
    </section>
  );
};

export default AiDesktop;
