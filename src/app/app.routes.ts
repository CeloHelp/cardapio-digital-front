import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'produtos',
    loadComponent: () =>
      import('./features/produtos/pages/listar-produtos/listar-produtos.component')
        .then(m => m.ListarProdutosComponent)
  },
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full'
  }
];


