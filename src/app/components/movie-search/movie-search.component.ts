import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent implements OnInit {
  @Output() update = new EventEmitter();
  movieGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.movieGroup = this.formBuilder.group({
      title: '',
    });
  }

  ngOnInit(): void {
    // As title changes we are emitting the updated value of title to movies component.
    this.movieGroup.valueChanges.subscribe((value) => {
      this.update.emit(value.title);
    });
  }
}
