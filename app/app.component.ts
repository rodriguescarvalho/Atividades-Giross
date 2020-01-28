import { Component } from '@angular/core';
import { Placeholder } from '../../node_modules/@angular/compiler/src/i18n/i18n_ast';
import { type } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'treinandoprogiross';
}


//var app = angular.module("angular-tabela", []);

app.controller('AngularTabela', ['$cope', function($cope){ 


  $cope.tabela = [];
  $cope.row = "";

  $cope.addRow = function(){
    $cope.tabela.push($cope.row);
    $cope.row ="";
    console.log($cope.tabela);
  };

$cope.removeRow = function(index) {
  $cope.tabela.splice(index, 1);
}


} ]);