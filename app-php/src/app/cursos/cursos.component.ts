import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor( 
    private http: HttpClient,
    private cursoService: CursoService
    ) { }
  //URL base
  url = "http://localhost/api/php/";

  //Vetor cursos
  vetor:Curso[] = [];

  //Objeto da classe curso
  curso = new Curso();

  ngOnInit(): void {
    //Ao iniciar o sistema, deverá listar os cursos
    this.selecao();
  }

  // cadastrar(){
  //   this.cursoService.cadastrarCurso(this.curso).subscribe(
  //     (res:Curso[]) => {
  //       //adicionando dados ao vetor
  //       this.vetor = res;

  //       //limpar os atributos
  //        this.curso.nomeCurso = null
  //        this.curso.valorCurso = null

  //        //atualizar listagem
  //        this.selecao();
  // //     }
  //   )

  // }
  selecao(){
    this.cursoService.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )
  }

  mostrar(){
    console.log(this.cursoService.obterCursos())
  }

  alterar():void{
    alert("Alterar");
  }

  remover():void{
    alert("Exluir");
  }
}
