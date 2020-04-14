import { Action } from "redux";

interface FooAction extends Action<"FOO"> {
  payload: string;
}
export type RootState = { foo: string };

export const reducer = (state = { foo: "" }, action: FooAction): RootState => {
  switch (action.type) {
    case "FOO":
      return { ...state, foo: action.payload };
    default:
      return state;
  }
};
