import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarItem(termino: string) {
    if (termino === ""){
      return
    }
    console.log(termino);
    this.router.navigate(['/items'], { queryParams: { search: termino } });
  }


}
