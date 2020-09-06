import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSearchResultsModule } from '../movie-search-results/movie-search-results.module';
import { MovieSearchModule } from '../movie-search/movie-search.module';
import { NominationsModule } from '../nominations/nominations.module';
import { MovieComponent } from './movie.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [MovieComponent],
  imports: [
    CommonModule,
    MovieSearchResultsModule,
    MovieSearchModule,
    NominationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,
  ],
  exports: [MovieComponent],
})
export class MovieModule {}
