import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ConsultaPreco } from '../_models/consultaPreco';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaPrecoService {

  baseUrl: string = environment.apiUrl;
  preco : ConsultaPreco | undefined;

  constructor(private httpClient : HttpClient) { }

  getPrecoProduto(codprod : String){
    return this.httpClient.get<ConsultaPreco>(this.baseUrl + 'consulta-preco?codprod=' + codprod)
    .pipe(
      map((response : ConsultaPreco) =>{
        return response;
      })
    )
  }
}
