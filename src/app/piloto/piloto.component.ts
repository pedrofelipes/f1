import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-piloto',
  standalone: true,
  templateUrl: './piloto.component.html',
  styleUrls: ['./piloto.component.scss'],
})
export class PilotoComponent {
  @Input() nome!: string;
  @Input() foto!: string;
}
