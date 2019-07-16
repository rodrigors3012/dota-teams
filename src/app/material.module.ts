import {NgModule} from '@angular/core';
import {MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  imports: [
      MatToolbarModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatTableModule,
      MatSortModule
  ],
  exports: [
      MatToolbarModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatTableModule,
      MatSortModule
  ]
})
export class MaterialModule {}
