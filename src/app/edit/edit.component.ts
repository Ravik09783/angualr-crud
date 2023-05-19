import { Component , OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  editForm= new FormGroup({
    name: new FormControl(''),
    lname:new FormControl(''),
   
  })




  constructor(
    private user:UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ){

  }

  editUserData:any


  ngOnInit() {

    this.user.getUserDetailsById(this.route.snapshot.params['id']).subscribe(res=>{
      this.editUserData = res
      this.editForm= new FormGroup({
        name: new FormControl(this.editUserData['name']),
      lname:new FormControl(this.editUserData['lname']),
    
      })
    })
  
  }

  onSubmit(){
    console.log("1111111111",this.editForm.value)

    this.user.updateUserDetails(this.route.snapshot.params['id'], this.editForm.value).subscribe(res=>{
      console.log("Edit Success")
      console.log(res)
    })

    this.router.navigate([''])
    // this.user.
  }




  }

