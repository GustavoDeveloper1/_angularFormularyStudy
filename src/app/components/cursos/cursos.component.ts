import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos:any = [{}]
  constructor( private userServices: CursosService) { }

  ngOnInit(): void {

    this.cursos = this.userServices.getUsuarios()

  }



}
