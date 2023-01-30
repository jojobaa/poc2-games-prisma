export type Genre = {
  genre: string;
};

export type GamePost = {
  name_game: string;
  review: number;
  genre_id: number;
};

export type Game = {
  id: number;
  name_game: string;
  review: number;
  genres: {
    genre: string;
  };
};

export type GameJoin = {
  id: number;
  name_game: string;
  review: number;
  genre: string;
};

export type GameId = {
  id: string;
};

export type GameReview = Omit<GamePost, "name_game" | "genre_id">;