import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import "rxjs/add/operator/map";
import { ProgramaDeDesconto } from '../ProgramaDeDesconto';


@Injectable()
export class DropdownService {

  constructor(private http: Http) { }

  getListaDesconto(){
    return this.http.get('http://localhost:56261/api/ProgramaDeDesconto/ListaDesconto')
    .map((response) => response.json())

      //.map(res: Response) => res.json())
      
  }

  postProgramaDesconto(programaDeDesconto: ProgramaDeDesconto){
    return this.http.post('http://localhost:56261/api/ProgramaDeDesconto/Add',programaDeDesconto)
    .map((response) => response.json())

      //.map(res: Response) => res.json())
      
  }

}
