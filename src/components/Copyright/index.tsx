import React, { FC } from "react";

const Copyright: FC = () => {
  return (
    <div className="text-sm leading-relaxed text-gray-200">
      Feito com 💜 no NLW da{" "}
      <a
        className="underline hover:text-gray-100"
        target="blank"
        rel="noreferrer"
        href="https://rocketseat.com.br"
      >
        Rocketseat{" "}
      </a>
    </div>
  );
};

export default Copyright;
