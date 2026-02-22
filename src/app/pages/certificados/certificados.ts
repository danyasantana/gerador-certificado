import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButton],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class CertificadosComponent implements OnInit {
  certificados: Certificado[] = [];


  constructor(private CertificadoService: CertificadoService) {}


  ngOnInit(): void {
    this.certificados = this.CertificadoService.certificados;
  }
}
