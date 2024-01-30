import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParteunoComponent } from './parteuno/parteuno.component';
import { PartedosComponent } from './partedos/partedos.component';
import { PartetresComponent } from './partetres/partetres.component';
import { PartecuatroComponent } from './partecuatro/partecuatro.component';
import { PartecincoComponent } from './partecinco/partecinco.component';
import { ParteseisComponent } from './parteseis/parteseis.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParteunoComponent, PartedosComponent, PartetresComponent, PartecuatroComponent, PartecincoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'colegio-tail';
}
