import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private aRoute: ActivatedRoute) { }
  public details;
  ngOnInit() {
    const id = parseInt(this.aRoute.snapshot.paramMap.get('id'), 36);
    this.details = id;
  }

}
