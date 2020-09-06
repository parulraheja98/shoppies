import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../shared/models/movie.model';
import { swingInAndOut } from 'src/app/shared/animations/trigger';
import { NominationService } from 'src/app/services/nomination.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'nominations',
  templateUrl: './nominations.component.html',
  styleUrls: ['./nominations.component.scss'],
  animations: [swingInAndOut],
})
export class NominationsComponent implements OnInit {
  @Output() delete = new EventEmitter();
  @Input() movies: Movie[];
  constructor(
    private readonly nominationService: NominationService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  /*
   * Removes the nomination from the DB.
   */
  onRemove(index: number) {
    const id = this.movies[index].imdbID;
    this.nominationService.deleteNomination(id).then(() => {
      this.showDeleteNotification(this.movies[index]);
      this.movies.splice(index, 1);
      // Update the movies parent component with new nominations value.
      this.delete.emit(this.movies);
    });
  }

  /*
   * Show delete toast message when a movie gets removed from nomination list.
   */
  showDeleteNotification(movie: Movie) {
    this.snackbar.open(
      /* message= */ `Movie "${movie.Title}" removed from nominations`,
      /* action= */ null,
      {
        duration: 2000,
        panelClass: ['danger'],
      }
    );
  }

  /*
   * Returns the current url.
   */

  getRouterUrl() {
    return window.location.href;
  }

  /*
   * Display a toast message when user clicks on share button.
   */
  onCopyNomLink() {
    this.snackbar.open(
      /* message= */ 'Nominations link copied to clipboard',
      /* action= */ null,
      {
        duration: 2000,
        panelClass: ['success'],
      }
    );
  }
}
