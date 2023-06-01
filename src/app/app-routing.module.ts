import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { ContatoComponent } from './components/contato/contato.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path:'Home',
    component: IndexComponent
  },
  {
    path:'Cardapio',
    component: CardapioComponent
  },
  {
    path:'Contato',
    component: ContatoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
