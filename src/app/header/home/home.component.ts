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
      "_id": "1",
      "index": 0,
      "balance": "$1,768.09",
      "picture": "http://placehold.it/32x32",
      'age': 30,
      "name": "Harrington Talley",
      "gender": "male",
      "company": "NIPAZ",
      "email": "harringtontalley@nipaz.com",
      "phone": "+1 (940) 437-2961",
      "address": "716 Bethel Loop, Springville, Alabama, 6884",
      "registered": "2017-01-28T10:40:22 -06:-30"
    },
    {
      "_id": "2",
      "index": 1,
      "balance": "$1,432.83",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "name": "Belinda Robertson",
      "gender": "female",
      "company": "COMCUR",
      "email": "belindarobertson@comcur.com",
      "phone": "+1 (928) 452-3377",
      "address": "455 Bath Avenue, Kennedyville, Rhode Island, 7749",
      "registered": "2015-08-27T05:49:22 -06:-30"
    },
    {
      "_id": "3",
      "index": 2,
      "balance": "$3,043.42",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "name": "Buckley Flowers",
      "gender": "male",
      "company": "BOINK",
      "email": "buckleyflowers@boink.com",
      "phone": "+1 (888) 522-3777",
      "address": "605 Clara Street, Hachita, Illinois, 7416",
      "registered": "2016-05-22T12:59:04 -06:-30"
    },
    {
      "_id": "4",
      "index": 3,
      "balance": "$3,176.32",
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "name": "Deborah Meyers",
      "gender": "female",
      "company": "GEEKNET",
      "email": "deborahmeyers@geeknet.com",
      "phone": "+1 (872) 519-2669",
      "address": "518 Bushwick Avenue, Leland, New Hampshire, 6606",
      "registered": "2017-09-22T05:25:19 -06:-30"
    },
    {
      "_id": "5",
      "index": 4,
      "balance": "$3,170.69",
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "name": "Stevens Murray",
      "gender": "male",
      "company": "XYMONK",
      "email": "stevensmurray@xymonk.com",
      "phone": "+1 (945) 444-3496",
      "address": "824 Montieth Street, Alderpoint, Marshall Islands, 1275",
      "registered": "2014-01-27T07:10:56 -06:-30"
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSelectUser(details) {
    this.router.navigate(['/details', details._id]);
  }

}
