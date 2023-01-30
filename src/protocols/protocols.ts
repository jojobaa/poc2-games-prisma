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

export type Game = {
  id: number;
  name_game: string;
  genre_id: number;
};

export type Games = Omit<Game, "id">;

export type GameJoin = {
  id: number;
  name_game: string;
  genre: string;
};

export type GameGenre = {
  genre: string;
};