import uuid from "react-uuid";
import { useEffect } from "react";
import { Data } from "../Context/DataContext";
export const actionStatus = {
  ALL: "all",
  ACTIVCE: "activce",
  COMPLETE: "complete",
  CLEAR_COMPLETE: "clear complete",
  UPDATE: "update",
  DELETE: "delete",
  KEYDOW: "key down",
};

export const MAX_PAGE = 5;
export const THEME = {
  light: "light",
  dark: "dark",
};


