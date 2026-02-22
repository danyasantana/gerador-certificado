import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { BaseUi } from "./_components/base-ui/base-ui";
import { CommonModule } from '@angular/common';
import { CertificadoService } from './_services/certificado';




@Component({
  selector: 'app-root',
  imports: [Navbar, BaseUi, RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'gerador-certificado';
  exibeNavbar: boolean = true;


  constructor(private certificadoService: CertificadoService) {}


  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados
      ? JSON.parse(certificados)
      : [];
  }
}
