export type EntityT = {
  id: string;
};

export type PostT = EntityT & {
  name: string;
  body: string;
};

export type PostByIdT = { [id: string]: PostT };
