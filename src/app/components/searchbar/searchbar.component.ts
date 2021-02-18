import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
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

  @ViewChild('buscarTexto') buscarTexto: ElementRef;

  irAlHome() {
    this.buscarTexto.nativeElement.value ="";
    this.router.navigate(["/"]);
  }
  

  buscarItem(termino: string) {
    if (termino === ""){
      return
    }
    this.router.navigate(['/items'], { queryParams: { search: termino } });
  }


}
