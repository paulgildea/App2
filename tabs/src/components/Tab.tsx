import React from "react";
import { Welcome } from "./sample/Welcome";
import { useTeamsFx } from "./sample/lib/useTeamsFx";
import {Provider as RTProvider, themeNames, Communication, CommunicationOptions } from '@fluentui/react-teams';

var showFunction = Boolean(process.env.REACT_APP_FUNC_NAME);

export default function Tab() {
  const { themeString } = useTeamsFx();
  return (
    <div className={themeString === "default" ? "" : "dark"}>
      <RTProvider themeName={themeNames.Default} lang="en-US">
        <Communication option={CommunicationOptions.Default} />
      </RTProvider>
    </div>
  );
}
