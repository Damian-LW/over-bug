import "./App.css";

import React from "react";
import { useActions, useAppState } from "./overmind";

export function App() {
  const { current, selected } = useAppState();
  const { changeSelected, doSuccessFetching, doFailedFetching } = useActions();
  return (
    <section>
      <div>halo</div>
      <div>{current}</div>
      <div
        style={{ cursor: "pointer", background: "pink" }}
        onClick={doSuccessFetching}
      >
        doSuccessFetching
      </div>
      <div
        style={{ cursor: "pointer", background: "pink" }}
        onClick={doFailedFetching}
      >
        doFailedFetching
      </div>
      <input type="checkbox" checked={selected} onChange={changeSelected} />
      {"<-- clik to fire riection"}
    </section>
  );
}
