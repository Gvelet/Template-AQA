import { LocatorProps } from "./component";

export type FillProps = { validateValue?: boolean } & LocatorProps;
export type FilesSet = string | string[];
export type TypeOptions = {delay?: number, validateValue?: boolean;}