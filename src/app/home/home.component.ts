import { Component } from '@angular/core';
import { Usuario } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  estaCargando = false;
  public usuarios: Usuario[] = [
    new Usuario(1, 'Naruto', 'Uzumaki', 'naruto@mail.com', 16, true, '6to', 8, new Date('2000-01-03')),
    new Usuario(3, 'Sasuke', 'Uchiha', 'sasuke@mail.com', 16, false, '5to', 5, new Date('2001-05-14')),
    new Usuario(4, 'Kakashi', 'Hatake', 'kakashi@mail.com', 16, false, '4to', 7, new Date('1999-02-24')),
    new Usuario(5, 'Sakura', 'Haruno', 'sakura@mail.com', 29, true, '6to', 10, new Date('2000-08-12')),
    new Usuario(6, 'Itachi', 'Uchiha', 'itachi@mail.com', 21, true, '5to', 9, new Date('2001-07-24')),
  ];


}
