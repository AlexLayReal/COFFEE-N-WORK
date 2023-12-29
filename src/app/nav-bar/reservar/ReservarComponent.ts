import { Component, OnInit } from '@angular/core';
import { coffeeUser } from "./CoffeeUser";
import { dataService } from './data.service';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css',]
})
export class ReservarComponent implements OnInit{

  
  ngOnInit(): void {
      
  }

  roomOption = '';
  retoggleRoomOption(value: string) {
    this.roomOption = this.roomOption === value ? '' : value;
  };
  
  
  coffeeUserModel = new coffeeUser('Coffee Worker', 'coffie@work.com', 666777888, '', '', '', 'Asuntos para asuntar', 'Ey Coffie tienes coffee?');

  constructor(private _dataService: dataService) { }
  onSubmit(){
    this._dataService.enroll(this.coffeeUserModel)
      .subscribe(
        data => console.log('Enviado', data)
      )
  }
}

