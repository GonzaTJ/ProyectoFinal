import { Component, OnInit } from '@angular/core';
import { persona } from '../Model/Persona.model';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  persona: persona = new persona("","","");
  
  constructor(public personaService: PersonaService) { }


  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
