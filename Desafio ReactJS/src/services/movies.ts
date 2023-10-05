import { MovieProps } from "../types/movie";
import { api } from "./api";

export async function getMovies() {
  const { data } = await api.get<MovieProps[]>("/products");

  return data;
}
