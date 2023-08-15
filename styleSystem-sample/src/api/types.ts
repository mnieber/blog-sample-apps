export type EntityT = {
  id: string;
};

export type ThemeT = EntityT & {
  name: string;
};

export type ThemeByIdT = { [id: string]: ThemeT };
