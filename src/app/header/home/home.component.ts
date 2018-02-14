import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public selectedId;
  details = [
    {
      '_id': 1,
      'age': 30,
      'name': 'Ajay',
      'index': 0
    },
    {
      '_id': 2,
      'age': 24,
      'name': 'Srinath',
      'index': 1
    },
    {
      '_id': 3,
      'age': 28,
      'name': 'Srikanth',
      'index': 2
    },
    {
      '_id': 4,
      'age': 32,
      'name': 'Vamsi',
      'index': 3
    }
  ];
  constructor(private router: Router, private aRoute: ActivatedRoute) { }

  ngOnInit() {
    this.aRoute.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'), 36);
      this.selectedId = id;
    });
  }
  onSelectUser(detail) {
    this.router.navigate(['/details', detail._id]);
  }
  isSelected(detail) {
    return detail._id === this.selectedId;
  }

}
