import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-created',
  templateUrl: './cursos-created.component.html',
  styleUrls: ['./cursos-created.component.scss']
})
export class CursosCreatedComponent implements OnInit {

  validated: boolean = false;
  notValidated:boolean = false; 

  ngInvalid:boolean = true;

  usuario : any= 
    {
    id: 1,
    name: null,
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",

  }
  // {
  //   id: 2,
  //   name: "Ervin Howell",
  //   username: "Antonette",
  //   email: "Shanna@melissa.tv",
  //   phone: "010-692-6593 x09125",
  //   website: "anastasia.net",
  // },
  // {
  //   id: 3,
  //   name: "Clementine Bauch",
  //   username: "Samantha",
  //   email: "Nathan@yesenia.net",
  //   phone: "1-463-123-4447",
  //   website: "ramiro.info",
  // },
  

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(form: any) {
    
    console.log(form)
    console.log(this.usuario)

  }

  isValidInput(event:any){
      // this.isValidInput = event.value

      console.log(event)
  }

}
