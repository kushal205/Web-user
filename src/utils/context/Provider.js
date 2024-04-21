import React, { useState } from "react";

export const context = React.createContext(null);

export default function Provider({ children }) {
  //context states
  const [selectedSport, setSelectedSport] = useState();
  const [refreshSport, setRefreshSport] = useState(false);
  //store
  const store = {
    data: { selectedSport, refreshSport },
    action: { setSelectedSport, setRefreshSport },
  };
  //provider component
  return <context.Provider value={store}>{children}</context.Provider>;
}
