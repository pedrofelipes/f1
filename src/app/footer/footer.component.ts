import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

siteName = 'FormulaNews' ;
slogan = 'As notícias mais atualizadas de Formula 1!'
direitos = 'Todos os direitos reservados.'
}
