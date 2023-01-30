export type Genre = {
  id: number;
  genre: string;
};

export type Genres = Omit<Genre, "id">;