import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningComponent } from './warning.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [WarningComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, FlexLayoutModule],
  entryComponents: [WarningComponent],
})
export class WarningModule {}
