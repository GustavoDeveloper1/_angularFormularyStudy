import { RouterModule } from '@angular/router';
import { CursosRoutingModule } from './cursos.routing.module';

import { CursosComponent } from './cursos.component'
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CursosCreatedComponent } from './cursos-created/cursos-created.component';
import { CursosEditComponent } from './cursos-edit/cursos-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({

    imports: [
        CommonModule,
        CursosRoutingModule,
        RouterModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursosCreatedComponent,
        CursosEditComponent

    ],
    providers: [ ],

})

export class CursosModules { }