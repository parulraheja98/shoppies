import { Movie } from './movie.model';

export interface MovieSearchResponse {
  Response: string;
  Search?: Movie[];
  Error?: string;
  totalResults?: number;
}
