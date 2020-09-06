import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../shared/models/movie.model';
import { swingInAndOut } from 'src/app/shared/animations/trigger';
import { MatDialog } from '@angular/material/dialog';
import { WarningComponent } from '../warning/warning.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NominationService } from 'src/app/services/nomination.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'movie-search-results',
  templateUrl: './movie-search-results.component.html',
  styleUrls: ['./movie-search-results.component.scss'],
  animations: [swingInAndOut],
})
export class MovieSearchResultsComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() nominations: Movie[];
  @Input() title: string;
  @Input() isLoading: boolean;
  @Input() error: string;
  @Input() page: number;
  @Input() totalResults: number;
  @Output() update = new EventEmitter();
  @Output() nextPage = new EventEmitter();
  pageSize = 10;
  constructor(
    private nominationService: NominationService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onNominate(movie: Movie) {
    // If nominations length is 5 we show warning to delete existing nominations.
    if (this.nominations.length === NominationService.MAX_NOMINATIONS_LENGTH) {
      this.showWarningDialog();
      return;
    }
    this.nominationService.createNomination(movie).then(() => {
      this.showAddNotification(movie);
      // We send the value of nominated movie to the movie component to update list of nominations.
      this.update.emit(movie);
    });
  }

  showWarningDialog() {
    this.dialog.open(WarningComponent, {
      data: {
        message:
          'Nominations more than 5 are not allowed. Please delete existing nominations.',
      },
    });
  }

  /*
   * Show toast messages every time user nominates a new movie.
   */
  showAddNotification(movie: Movie) {
    this.snackbar.open(
      /* message= */ `Movie "${movie.Title}" nominated`,
      /* action= */ null,
      {
        duration: 2000,
        panelClass: ['success'],
      }
    );
  }
  /*
   * Check if a movie is already nominated.
   */
  isMovieNominated(movie: Movie) {
    return this.nominations?.find((nom) => nom.imdbID === movie.imdbID);
  }

  /*
   * Get next page movie search results.
   */
  getNext(event: PageEvent) {
    const page = event.pageIndex + 1;
    this.nextPage.emit(page);
  }
}
