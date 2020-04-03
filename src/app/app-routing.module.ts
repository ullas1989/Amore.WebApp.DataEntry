import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionComponent } from './components/question/question.component';
import { PackComponent } from './components/pack/pack.component';

const routes: Routes = [
  {
    path: 'question',
    component: QuestionComponent,
  },
  {
    path: 'pack',
    component: PackComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
