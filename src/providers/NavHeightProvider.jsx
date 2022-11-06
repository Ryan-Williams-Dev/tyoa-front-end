import { createContext, useState } from "react";

export const navHeightContext = createContext();

export default function NavHeightProvider(props) {
  const [navHeight, setNavHeight] = useState(0);

  const setHeight = (height) => {
    setNavHeight(height);
  };

  const navHeightData = { setHeight, navHeight };

  return (
    <navHeightContext.Provider value={navHeightData}>
      {props.children}
    </navHeightContext.Provider>
  );
}
