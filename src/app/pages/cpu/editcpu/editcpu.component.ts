import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Newperson } from 'src/app/models/newperson';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-editcpu',
  templateUrl: './editcpu.component.html',
  styleUrls: ['./editcpu.component.css']
})
export class EditcpuComponent implements OnInit {

  person: Person=null;
  dni="";
  name ="";
    lastname="";
    phone="";
    type="";

  constructor(
    
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(){
   
    const id= this.activatedRoute.snapshot.params.id;
    // this.personService.searchByDni(id).subscribe(
    //   data=>{
    //     this.person=data;
    //   },
    //   err =>{
    //     this.toastr.error(err.error.mensaje,'Fail',{
    //       timeOut:3000
    //     });
        
    //     this.router.navigate(['/dashboard/edit']);
        
    //   }
    // );
  }

  onUpdate(){
     
  const newperson = new Newperson(
    this.person.dni,
    this.person.name,
    this.person.lastname,
    this.person.phone,
    this.person.type,      
    );
    
    this.personService.updatePerson(newperson).subscribe(
      data=>{
        console.log(data);
        this.toastr.success('Persona Actualizada','OK',{
          timeOut:3000
        });
        this.router.navigate(['/dashboard/persons']);

      },err=>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000
        });
      }      
    );
  };
}
