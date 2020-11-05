import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-views-mesa',
  templateUrl: './views-mesa.component.html',
  styleUrls: ['./views-mesa.component.css']
})
export class ViewsMesaComponent implements OnInit {
  items: any;
  public mesas: any = [];
  public mesasDisponible: any = [];
  public mesasEditar: any = [];
  itemEditar: any = {firstname: '' };
  itemConfirmacion: any = {estado: 'Confirmado'};
    constructor(private con: ConexionService) {
    this.con.retornaItems().subscribe(items => {
      this.items = items;
      // console.log(this.items);
    });
    this.con.retornarMesas().subscribe((res: any) => {
      this.mesas = res;
      // console.log(this.mesas);
      for (const mesa of this.mesas) {
          this.mesasDisponible.push(mesa);
      }
      // console.log(this.mesasDisponible);
    });
     }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  editarMesa(mesa){
    this.mesasEditar = {id: mesa.id, numeroMesa: mesa.id, estado: 'disponible'};
    this.con.editarmesa(this.mesasEditar);
 }
 // tslint:disable-next-line:typedef
 editarMesaR(mesa){
   this.mesasEditar = {id: mesa.id, numeroMesa: mesa.id, estado: 'reservado'};
   this.con.editarmesa(this.mesasEditar);

}
editarMesaOc(mesa){
  this.mesasEditar = {id: mesa.id, numeroMesa: mesa.id, estado: 'ocupado'};
  this.con.editarmesa(this.mesasEditar);
}

}
