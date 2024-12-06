import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carro',
  standalone: true,
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.scss'],
})
export class CarroComponent {
  @Input() modelo!: string;
  @Input() imagem!: string;
}
