import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'criarumaconta',
    loadChildren: () => import('./criarumaconta/criarumaconta.module').then( m => m.CriarumacontaPageModule)
  },
  {
    path: 'esqueciasenha',
    loadChildren: () => import('./esqueciasenha/esqueciasenha.module').then( m => m.EsqueciasenhaPageModule)
  },
  {
    path: 'vagas',
    loadChildren: () => import('./vagas/vaga.module').then( m => m.VagasPageModule)
  },
  {
    path: 'vaga',
    loadChildren: () => import('./pagina/vaga/vaga.module').then( m => m.VagaPageModule)
  },
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
