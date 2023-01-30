export type Genre = {
  id: number;
  genre: string;
};

export type Genres = Omit<Genre, "id">;

export type User = {
  id: number;
  name: string;
};

export type Users = Omit<User, "id">;
export type UserId = Omit<User, "name">;