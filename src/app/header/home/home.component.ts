import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  details = [
    {
      '_id': '1',
      'age': 30,
      'name': 'Ajay',
    },
    {
      '_id': '2',
      'age': 24,
      'name': 'Srinath',
    },
    {
      '_id': '3',
      'age': 28,
      'name': 'Srikanth',
    },
    {
      '_id': '4',
      'age': 32,
      'name': 'Vamsi',
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSelectUser(details) {
    this.router.navigate(['/details', details._id]);
  }

}
