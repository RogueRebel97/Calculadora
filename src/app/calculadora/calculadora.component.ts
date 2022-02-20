import { Binary } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  //Declaro las varioables del componente
  public titulo: string;
  public num1: any;
  public num2: any;
  public resultado: any;
  public historial: Array<string>;

  constructor() {
    this.titulo = 'Calculadora';
    this.num1 = null;
    this.num2 = null;
    this.resultado = null;
    this.historial = [];
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  limpiar(): void {
    this.num1 = null;
    this.num2 = null;
    this.resultado = null;
    this.historial = [];
  }

  // Suma los numeros y añade la operacion al historial
  sumar(): void {
    this.resultado = Number(this.num1) + Number(this.num2);
    this.historial.push(this.num1 + ' + ' + this.num2 + ' = ' + this.resultado);
    this.num1 = null;
    this.num2 = null;
  }

  // Resta los num y añade la op al historial.
  restar(): void {
    this.resultado = Number(this.num1) - Number(this.num2);
    this.historial.push(this.num1 + ' - ' + this.num2 + ' = ' + this.resultado);
    this.num1 = null;
    this.num2 = null;
  }

  //Multiplicar
  mult(): void {
    this.resultado = Number(this.num1) * Number(this.num2);
    this.historial.push(this.num1 + ' x ' + this.num2 + ' = ' + this.resultado);
    this.num1 = null;
    this.num2 = null;
  }

  //Dividr
  div(): void {
    this.resultado = Number(this.num1) / Number(this.num2);
    this.historial.push(this.num1 + ' / ' + this.num2 + ' = ' + this.resultado);
    this.num1 = null;
    this.num2 = null;
  }
  // Binario
  bin(): void {
    let num: number = this.num1;
    this.resultado = this.num1 + ' en binario es ' + num.toString(2);
    this.historial.push(this.resultado);
    this.num1 = null;
  }
}
