import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstudianteService } from '../../services/estudiante';
import { Estudiante } from '../../models/estudiante';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-estudiantes',
  standalone:true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './estudiantes.html',
  styleUrl: './estudiantes.css'
})

export class EstudiantesComponent implements OnInit {

  estudiantes: Estudiante[] = [];
  estudiante: Estudiante = {nombre:'', email:'', carrera_id:0};
  editando: Boolean = false;
  idEditando: number | null = null;

  constructor (private estudianteService: EstudianteService) {}
  
    ngOnInit(): void {
        this.getEstudiante();
    }
  
    //cargar desde le backend
    getEstudiante(): void {
      this.estudianteService.getEstudiante().subscribe( data => {
        this.estudiantes = data;
      });
    }
  
    //crear o actualizar un estudiante
    guardarEstudiante(): void {
      if (this.editando && this.idEditando !== null ) {
        // si estamos editando
        this.estudianteService.updateEstudiante(this.idEditando, this.estudiante).subscribe(() => {
          this.getEstudiante();
          this.resetFormulario();
        });
      } else {
        // Si no estamos iditando, creamos un nuevo estudiante
        this.estudianteService.addEstudiante(this.estudiante).subscribe(() => {
          this.getEstudiante();
          this.resetFormulario();
        })
      }
    }
  
    // llenar el registro de estudiante a editar
    editar(estudiante: Estudiante): void {
      this.estudiante = {...estudiante};
      this.editando = true;
      this.idEditando = estudiante.id!;
    }
  
    // eliminar un estudinate
    eliminar(id: number): void {
      this.estudianteService.deleteEstudiante(id).subscribe(() => {
        this.getEstudiante();
      })
    }
  
    // Restablecer el registro a su forma original
    resetFormulario(): void {
      this.estudiante = {nombre: '', email:'', carrera_id:0};
      this.editando = false;
      this.idEditando = null;
    }
  }
