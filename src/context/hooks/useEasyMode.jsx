import { useContext } from "react";
import { EasyModeContext } from "../EasyModeContext";

export function useEasyModeContext() {
  return useContext(EasyModeContext);
}
