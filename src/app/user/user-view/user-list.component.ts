import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserViewComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}

  navigateToDetails(id:any){
    this.router.navigate([`./${id}`], { relativeTo : this.activatedRoute })
  }
}
