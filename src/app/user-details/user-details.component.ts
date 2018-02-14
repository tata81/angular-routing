import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private aRoute: ActivatedRoute, private router: Router) { }
  public detailsId;
  ngOnInit() {
    // const id = parseInt(this.aRoute.snapshot.paramMap.get('id'), 36);
    // this.details = id;
    this.aRoute.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'), 36);
      this.detailsId = id;
    });
  }
  goPrevious() {
    const previousId = this.detailsId - 1;
    this.router.navigate(['/details', previousId]);
  }
  goNext() {
    const nextId = this.detailsId + 1;
    this.router.navigate(['/details', nextId]);
  }
  goBack() {
    const selectedId = this.detailsId ? this.detailsId : null;
    this.router.navigate(['/home', {id: selectedId}]);
  }
}
