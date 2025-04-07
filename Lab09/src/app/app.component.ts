import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { InputFormatDirective } from './input-format.directive';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, InputFormatDirective, FormsModule,  HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello-World';
}
