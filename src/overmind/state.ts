import { statemachine } from "overmind";

type State =
  | { current: "INITIAL" }
  | { current: "FETCHING" }
  | { current: "ERROR" }
  | { current: "READY" };

type Events =
  | {
      type: "START_FETCHING";
    }
  | {
      type: "FETCHING_SUCCES";
    }
  | { type: "FETCHING_ERROR" }
  | { type: "CHANGE_SELECTED" };

type BaseState = {
  selected: boolean;
};

const fooStateMachine = statemachine<State, Events, BaseState>({
  INITIAL: {
    START_FETCHING: () => {
      return { current: "FETCHING" };
    },
    CHANGE_SELECTED: (_, state) => {
      const currentSelected = state.selected;
      state.selected = !currentSelected;
    },
  },
  READY: {
    START_FETCHING: () => {
      return { current: "FETCHING" };
    },

    CHANGE_SELECTED: (_, state) => {
      const currentSelected = state.selected;
      state.selected = !currentSelected;
    },
  },
  ERROR: {
    START_FETCHING: () => {
      return { current: "FETCHING" };
    },

    CHANGE_SELECTED: (_, state) => {
      const currentSelected = state.selected;
      state.selected = !currentSelected;
    },
  },
  FETCHING: {
    FETCHING_SUCCES: () => {
      return { current: "READY" };
    },
    FETCHING_ERROR: () => {
      return { current: "ERROR" };
    },
  },
});

export const state = fooStateMachine.create(
  {
    current: "INITIAL",
  },
  { selected: false },
);
