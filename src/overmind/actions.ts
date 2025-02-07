import { Context } from ".";

export const doSuccessFetching = ({ state }: Context) => {
  state.send("START_FETCHING");
  state.send("FETCHING_SUCCES");
};

export const doFailedFetching = ({ state }: Context) => {
  state.send("START_FETCHING");
  state.send("FETCHING_ERROR");
};

export const changeSelected = ({ state }: Context) => {
  state.send("CHANGE_SELECTED");
};

export const onInitializeOvermind = (overmindInstance: Context) => {
  overmindInstance.reaction(
    (state) => [state.selected] as const,
    () => {
      console.warn("reaction fired");
      overmindInstance.actions.doFailedFetching();
    },
  );
};
