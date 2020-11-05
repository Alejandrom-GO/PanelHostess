import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';
import * as jquery from 'jquery';


@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {
  jquery: any;
  items: any;
  public mesas: any = [];
  public mesasDisponible: any = [];
  public mesasEditar: any = [];
  itemEditar: any = {firstname: '' };
  itemConfirmacion: any = {estado: 'confirmado'};
    constructor(private con: ConexionService) {
    this.con.retornaItems().subscribe(items => {
      this.items = items;
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
    eliminar(id){
    this.con.eliminar(id);
    // console.log(id);
    }
    // tslint:disable-next-line:typedef
    editar(item){
       console.log(item);
       this.itemEditar = item;
    }
    // tslint:disable-next-line:typedef
    confirmar(item){
      console.log(item);
      this.itemConfirmacion = item;
    }
    // tslint:disable-next-line:typedef
    editarform(){
      this.con.editar(this.itemEditar);
    }
    // tslint:disable-next-line:typedef
    cerrar(){
      jquery('body').removeClass('modal-open');
      jquery('.modal-backdrop').remove();
    }
  }
