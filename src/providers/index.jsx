import React from "react";

import { MenuProvider } from "./MenuProvider.jsx";

function AppProvider(props) {
  return (
    <MenuProvider>
        {props.children}
    </MenuProvider>
  );
}

export default AppProvider;