import { useContext } from "react";
import contextStore from "../store/ContextStore";

export const useContextStore = () => useContext(contextStore);
