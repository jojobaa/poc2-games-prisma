export type Genre = {
  id: number;
  genre: string;
};

export type Genres = Omit<Genre, "id">;

export type Game = {
  id: number;
  name_game: string;
  review: number;
  genre_id: number;
  genre?: string;
};

export type Games = Omit<Game, "id">;

export type GameJoin = {
  id: number;
  name_game: string;
  review: number;
  genre: string;
};

export type GameGenres = Omit<Game, "id" | "title" | "playtime" | "genre_id">;

export type GameId = {
  id: string;
};

export type GamePlaytime = Omit<Game, "id" | "title" | "genre_id" | "genre">;