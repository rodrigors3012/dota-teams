import {NgModule} from '@angular/core';
import {MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatPaginatorModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
      MatToolbarModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatTableModule,
      MatSortModule,
      MatTabsModule,
      MatPaginatorModule
  ],
  exports: [
      MatToolbarModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatTableModule,
      MatSortModule,
      MatTabsModule,
      MatPaginatorModule
  ]
})

/**
 * Module for storing any imports from Angular Material. 
 */
export class MaterialModule {}
