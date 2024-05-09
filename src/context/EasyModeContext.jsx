import { createContext, useState } from "react";

export const EasyModeContext = createContext(null);

export function EasyModeProvider({ children }) {
  const [easyGameMode, setEasyGameMode] = useState(false);
  function easyModeToggle() {
    setEasyGameMode(prevState => !prevState);
  }

  return <EasyModeContext.Provider value={{ easyGameMode, easyModeToggle }}>{children}</EasyModeContext.Provider>;
}
