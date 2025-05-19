import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService, Produto } from '/Projetos-Dev/cardapio-digital-front/cardapio-digital/src/app/core/services/produto.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listar-produtos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss']
})
export class ListarProdutosComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

 ngOnInit(): void {
  console.log('ngOnInit foi chamado!');
  this.produtoService.getProdutos().subscribe({
    next: (res) => {
      console.log('Produtos recebidos:', res);
      this.produtos = res;
    },
    error: (err) => console.error('Erro ao buscar produtos:', err)
  });
}

}


