import { createContext, useEffect, useState } from "react";
import { getLeaders } from "../api";

export const LeadersContext = createContext(null);

export const LeadersProvider = ({ children }) => {
  const [leaders, setLeaders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await getLeaders();
        setLeaders(response.leaders);
      } catch (error) {
        console.log(error.error);
      } finally {
        setLoaded(true);
      }
    };
    fetchLeaders();
  }, []);
  return <LeadersContext.Provider value={{ leaders, setLeaders, loaded }}>{children}</LeadersContext.Provider>;
};
