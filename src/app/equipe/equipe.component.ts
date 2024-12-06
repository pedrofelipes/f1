import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-equipe',
  standalone: true,
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss'],
})
export class EquipeComponent {
  @Input() nome!: string;
  @Input() logo!: string;
}
