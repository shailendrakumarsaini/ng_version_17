import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  id ?:string;
  constructor(private router :Router, private activatedRoute :ActivatedRoute){}


  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params)=>{
    //   this.id = params['id']
    // });
    this.activatedRoute.data.subscribe((res)=>{
      console.log(res);
      console.log(res['data']);
    });
  }

  navigateToUsers(){
    this.router.navigate([`user`])
  }

}
