import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1: number[] = [300, 400, 500];
  public colores1: object[] = [
    { backgroundColor: [ '#9e120e', '#ff5800', '#ffb414' ]}
  ];

  public labels2: string[] = ['Download Sales2', 'In-Store Sales2', 'Mail-Order Sales2'];
  public data2: number[] = [30, 400, 70];
  public colores2: object[] = [
    { backgroundColor: [ '#9e120e', '#ff5800', '#ffb414' ]}
  ];

  public labels3: string[] = ['Download Sales3', 'In-Store Sales3', 'Mail-Order Sales3'];
  public data3: number[] = [1250, 690, 18];
  public colores3: object[] = [
    { backgroundColor: [ '#9e120e', '#ff5800', '#ffb414' ]}
  ];

  public labels4: string[] = ['Download Sales4', 'In-Store Sales4', 'Mail-Order Sales4'];
  public data4: number[] = [600, 1000, 5000];
  public colores4: object[] = [
    { backgroundColor: [ '#9e120e', '#ff5800', '#ffb414' ]}
  ];

}
