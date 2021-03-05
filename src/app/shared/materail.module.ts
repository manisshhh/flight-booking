import { NgModule } from '@angular/core'
import { MatButtonModule} from '@angular/material/button'
import { MatCheckboxModule} from '@angular/material/checkbox'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule} from '@angular/material/icon'
import { MatTableModule} from '@angular/material/table'
import { MatButtonToggleModule} from '@angular/material/button-toggle'
import { MatInputModule } from '@angular/material/input'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatPaginatorModule } from '@angular/material/paginator'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'

@NgModule({
  imports:[
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
    MatTableModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
    MatTableModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MaterialModule { }
