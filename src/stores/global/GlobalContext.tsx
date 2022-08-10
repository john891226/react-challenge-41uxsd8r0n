import { createContext, Dispatch, useContext, useReducer } from "react";
import { ProductType } from "../../types/products";
import { ChildrenCmp } from "../../types/react";
import { GlobalActions } from "./GlobalContextActions";

export interface IGlobalState {
  loading: boolean;
}

interface GlobalState {
  state: IGlobalState;
  dispatch: Dispatch<GlobalActions>;
}

const initialState: IGlobalState = {
  loading: false,
};

const GlobalContext = createContext<GlobalState>({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state: IGlobalState, action: GlobalActions): IGlobalState => {
  switch (action.type) {
    case "SetLoading":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }: ChildrenCmp) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
