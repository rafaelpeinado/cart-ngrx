import { Component, OnInit } from '@angular/core';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public faShoppingCart = FontAwesome.faShoppingCart;

  constructor() { }

  ngOnInit(): void {
  }

}
