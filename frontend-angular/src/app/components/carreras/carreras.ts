import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarreraService } from '../../services/carrera';
import { Carrera } from '../../models/carrera';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carreras',
  standalone:true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './carreras.html',
  styleUrl: './carreras.css'
})

export class CarreraComponent implements OnInit {

  carreras: Carrera[] = [];
  carrera: Carrera = {nombre: '', duracion: ''};
  editando: Boolean = false;
  idEditando: number | null = null;

  constructor (private carreraService: CarreraService) {}

  ngOnInit(): void {
      this.getCarrera();
  }

  //cargar desde le backend
  getCarrera(): void {
    this.carreraService.getCarrera().subscribe( data => {
      this.carreras = data;
    });
  }

  //crear o actualizar una carrera  
  guardarCarrera(): void {
    if (this.editando && this.idEditando !== null ) {
      // si estamos editando
      this.carreraService.updateCarrera(this.idEditando, this.carrera).subscribe(() => {
        this.getCarrera();
        this.resetFormulario();
      });
    } else {
      // Si no estamos iditando, creamos un nueva carrera
      this.carreraService.addCarrera(this.carrera).subscribe(() => {
        this.getCarrera();
        this.resetFormulario();
      })
    }
  }

  // llenar registro de una carrera o editar
  editar(carrera: Carrera): void {
    this.carrera = {...carrera};
    this.editando = true;
    this.idEditando = carrera.id!;
  }

  // eliminar una carrera
  eliminar(id: number): void {
    this.carreraService.deleteCarrera(id).subscribe(() => {
      this.getCarrera();
    })
  }

  //Restablecer una carrera a su forma original
  resetFormulario(): void {
    this.carrera = {nombre: '', duracion:''};
    this.editando = false;
    this.idEditando = null;
  }
}
