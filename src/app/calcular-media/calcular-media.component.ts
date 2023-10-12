import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']
})
export class CalcularMediaComponent {
  ac1 : number = 0;
  ac2 : number = 0;
  ag : number = 0;
  af : number = 0;
  mediaFinal : number = 0;
  corTexto : string = 'black'

calcular(){
  this.mediaFinal = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45)
  this.mediaFinal = parseFloat(this.mediaFinal.toFixed(2));
}

get mediaFinalCSSClass() {
  return this.mediaFinal >= 5 ? 'text-success' : 'text-danger';
}

}
