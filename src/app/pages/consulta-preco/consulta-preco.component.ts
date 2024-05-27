import { Component } from '@angular/core';
import { ConsultaPreco } from '../../_models/consultaPreco';
import { ConsultaPrecoService } from '../../_services/consulta-preco.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consulta-preco',
  templateUrl: './consulta-preco.component.html',
  styleUrl: './consulta-preco.component.scss'
})
export class ConsultaPrecoComponent {
 consultaPreco : ConsultaPreco | undefined;
 codprod : string = '';

 constructor(
  private precoService : ConsultaPrecoService,
  private toastr : ToastrService
){}

    getPreco(){
      if(this.codprod.length == 0){
        this.toastr.error('Informe o código do produto.');
        return;
      }
      this.precoService.getPrecoProduto(this.codprod).subscribe(
        (response : ConsultaPreco) => {
          console.log(response);
          this.consultaPreco = response;
        },
        (error) =>{
           this.toastr.error(error.error.message);
        }
      );
    }
}
