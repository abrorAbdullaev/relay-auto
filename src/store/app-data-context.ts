import React  from "react";
import { AppData } from "../models/app-data";

export const AppDataContext = React.createContext<AppData & { dispatch: any }>({
  trucks: { },
  dispatch: undefined as any,
});
