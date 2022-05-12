import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group(
      {
        
      }
    )
   }

  ngOnInit(): void {
  }

}
