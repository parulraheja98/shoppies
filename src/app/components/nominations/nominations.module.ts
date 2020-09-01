import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { NominationsComponent } from "./nominations.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { ClipboardModule } from "@angular/cdk/clipboard";

@NgModule({
  declarations: [NominationsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    MatSnackBarModule,
    ClipboardModule,
    MatIconModule
  ],
  exports: [NominationsComponent],
})
export class NominationsModule {}
