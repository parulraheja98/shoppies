import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/shared/models/movie.model';
import { NominationService } from 'src/app/services/nomination.service';
import { MovieSearchResponse } from 'src/app/shared/models/movie-search-response.model';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movies: Movie[];
  nominations: Movie[];
  title: string;
  isLoading: boolean;
  error: string;
  page: number;
  totalResults: number;
  constructor(
    private movieService: MovieService,
    private nominationService: NominationService
  ) {
    this.isLoading = false;
    this.page = 1;
  }

  ngOnInit(): void {
    this.nominationService.getNominations().then((resp: Movie[]) => {
      this.nominations = resp;
    });
  }

  /*
   * Search movies on input title change.
   */

  searchMovies(title: string) {
    this.title = title;
    // Reset to page 1 when title changes.
    this.page = 1;
    if (!title.trim()) {
      this.movies = null;
      this.error = null;
      return;
    }
    this.getMovies(this.title, this.page);
  }

  /*
   * Display user-friendly error message for movie search.
   */

  private handleErrorSearch(error: string) {
    switch (error) {
      case 'Incorrect IMDb ID.':
        return 'Invalid Movie entered.';
      case 'Too many results.':
        return 'There are too many results found. Please try again with specific characters.';
      default:
        return error;
    }
  }

  /*
   * Updates the nominations list when nomination get added.
   */
  onNominationsAdd(nomination: Movie) {
    this.nominations = this.nominations
      ? [nomination, ...this.nominations]
      : [nomination];
  }

  /*
   * Updates the nominations list when nomination gets deleted.
   */

  onNominationDelete(nominations: Movie[]) {
    this.nominations = nominations;
  }

  /*
   * Checks if the number of nominations have reached max value of 5.
   */
  isNominationsLenMax() {
    return (
      this.nominations &&
      this.nominations.length === NominationService.MAX_NOMINATIONS_LENGTH
    );
  }

  /*
   * Get next page search results for movie.
   */
  navigateNextPage(page: number) {
    this.getMovies(this.title, page);
  }

  /*
   * Get movies by title and page.
   */
  private getMovies(title: string, page: number) {
    this.isLoading = true;
    this.movieService
      .getMovies(title, page)
      .subscribe((result: MovieSearchResponse) => {
        this.error = result.Error ? this.handleErrorSearch(result.Error) : null;
        this.isLoading = false;
        this.movies = result.Search;
        this.page = page;
        this.totalResults = result.totalResults;
      });
  }
}
