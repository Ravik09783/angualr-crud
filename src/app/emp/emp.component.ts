import { Component , OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit{

  constructor(
    private user:UserService,
    private router: Router
  ){

  }

  apiGetData:any;

  ngOnInit(): void {
    this.data = localStorage.getItem("userDetails")
    this.data = JSON.parse(this.data)
    console.log(this.data)

    this.user.getUserDetails().subscribe(res=>{
      this.apiGetData = res;
      console.log("Api user data",res)
    })
  }


  userData:any =[]
  data:any;

  submitDetails(data: any, data1:any){

    console.log("WWWWWWWWWWWWWWWW", data, data1)

    this.user.postUserDetails({name:data, lname:data1}).subscribe(res=>{
      console.log("YOursdkjhdfsjkhfksdjhfskjhfdkj")
      this.ngOnInit()
    })

   


    return false;
  }

  edit(id:number){
    console.log("Edit function is calling")
    this.router.navigate([`/edit/${id}`])
  }
  delete(id:number){


    this.user.deleteUserDetails(id).subscribe(res=>{
      console.log("DELETE", res)
    })


  }

}
