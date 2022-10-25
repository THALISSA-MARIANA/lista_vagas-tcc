import { Component, OnInit } from '@angular/core';
import { Vaga, VagaService } from 'src/app/servico/vaga.service';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.page.html',
  
})
export class VagaPage implements OnInit {
vagas: Vaga[];

  constructor(private service: VagaService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
    this.vagas =response;
    })
  }

}
