import { useContext } from "react";
import { LeadersContext } from "../LeaderboardContext";

export function useLeaderContext() {
  return useContext(LeadersContext);
}
