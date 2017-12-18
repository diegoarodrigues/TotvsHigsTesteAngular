import { Desconto } from '../desconto';

import { Component, OnInit } from '@angular/core';

import { Hero }    from '../hero';
import { ProgramaDeDesconto }    from '../ProgramaDeDesconto';
import { DropdownService } from '../services/dropdown.service';

import "rxjs/add/operator/map";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  descontos: Desconto[];

  constructor(
    private dropdowServcice: DropdownService
  ){
    //this.listaDesconto();
  }
 

  //powers = ['Really Smart', 'Super Flexible',
//            'Super Hot', 'Weather Changer'];

  //model = new Hero(18, '', this.powers[0], '');
  model = new ProgramaDeDesconto('', 'diego', '', '');

  submitted = false;

  onSubmit() {
     this.submitted = true; 
     this.dropdowServcice.postProgramaDesconto(this.model)
     .subscribe((data) => {console.log(data)} )
  }

  newHero() {
    //this.model = new Hero(42, '', '');
    this.model = new ProgramaDeDesconto('', '', '', '');
  }

  ngOnInit(){
     this.dropdowServcice.getListaDesconto()
     .subscribe(dados => {this.descontos = dados; this.listaDesconto(dados) });
    
    //this.descontos = [{"descontoId":"30B8E24C-89E3-E711-8EDD-386077F13219","nome":"Desconto 30% - Fora de alta temporada"},{"descontoId":"31B8E24C-89E3-E711-8EDD-386077F13219","nome":"ALL Inclusive por metade do preço"},{"descontoId":"32B8E24C-89E3-E711-8EDD-386077F13219","nome":"Upgrade de quarto sem custo adicional"}];
    //console.log(this.descontos)
  }

  listaDesconto(dados){
    //console.log(dados)
    this.descontos = dados;
    //console.log(this.descontos[0].descontoId);
  }
  

}