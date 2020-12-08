import { ReadExcelComponent } from './components/read-excel/read-excel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'read-excel', component: ReadExcelComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'read-excel' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
