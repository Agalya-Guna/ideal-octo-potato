import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Voter } from '../classes/voter';
import { ApiService } from '../services/api.service';
import { InputService } from '../services/input.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  voter:Voter = new Voter();
 
  signinForm:FormGroup;
  submitted:boolean=false;
  namepattern="^[A-Z]{1}[a-z]{3,15}$";
  idpattern="^[1-9]{1,}$";
  constructor(private formBuilder:FormBuilder,private input:InputService,private router:Router,private api:ApiService){

    this.signinForm=this.formBuilder.group({
      name:new FormControl('',[Validators.required,Validators.pattern(this.namepattern)]),
      id:new FormControl('',[Validators.required,Validators.pattern(this.idpattern)]),
      gender:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
     city:new FormControl('',[Validators.required])
      

    })
  }

  ngOnInit(): void {
    this.state="--select--";
    this.city="--select--";
     this.state=this.input.state();
     console.log(this.state);
     
   }

  get f(){
    return this.signinForm.controls;
   }



  onSubmit(){
    console.log("inside");  
    console.log(this.voter);
   
  
    this.submitted=true;
    if(this.signinForm.valid){
      var x: number = +this.voter.state;
      this.voter.state = this.state[x-1].name;
      console.log(this.voter.state);
      console.log(this.voter.city);
      console.log("success");
     
      this.api.postVoter(this.voter).subscribe({
       next:(res)=>{ console.log(res);
        Swal.fire({
          title:'Your Response has been Registered Successfully',
          text:'Thank you!',
          icon:'success'
        });
        this.router.navigate(['']);
       },
       error:()=>{
        Swal.fire({
          title:'Oops :( ',
          text:'Id is Already Exist! Please Try with Other Id!!',
          icon:'error'
        });
        this.router.navigate(['/reg']);
       }
      });

      return ;
    }else{
      console.log("Failed");
    }
  }
 
 

 state:any=[];
 city:any=[];
 onSelect(state:any){
   console.log(state.target.value);
   this.city=this.input.city().filter(e=>e.id==state.target.value);
   console.log(this.city);
  }
    
}
