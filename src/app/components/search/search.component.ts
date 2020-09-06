import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() heading: string;
  @Input() placeholder: string;
  @Output() update = new EventEmitter();
  searchGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.searchGroup = this.formBuilder.group({
      title: '',
    });
  }

  ngOnInit(): void {
    // As title changes we are emitting the updated value of title to movies component.
    this.searchGroup.valueChanges.subscribe((value) => {
      this.update.emit(value.title);
    });
  }
}
