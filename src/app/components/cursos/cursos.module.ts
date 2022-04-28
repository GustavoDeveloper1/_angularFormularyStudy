import { CursosService } from './../../services/cursos.service';
import { RouterModule } from '@angular/router';
import { CursosRoutingModule } from './cursos.routing.module';

import { CursosComponent } from './cursos.component'
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CursosCreatedComponent } from './cursos-created/cursos-created.component';
import { CursosEditComponent } from './cursos-edit/cursos-edit.component';


@NgModule({

    imports: [
        CommonModule,
        CursosRoutingModule,
        RouterModule,

    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursosCreatedComponent,
        CursosEditComponent

    ],
    providers: [CursosService, ],

})

export class CursosModules { }