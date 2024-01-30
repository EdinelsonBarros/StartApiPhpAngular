import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Curso } from './curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  url = "http://localhost/api/php/";
  vetor:Curso[] = [];

  constructor( private http: HttpClient) { }

  //Obter todos os cursos
  obterCursos():Observable<Curso[]>{
    return this.http.get<Curso[]>(this.url+"listar");
  }

  
  //Método para cadastrar curso
  // cadastrarCurso(c:Curso): Observable<Curso[]>{
  //   return this.http.post(this.url+"cadastrar", {cursos:c})
  //     .pipe(map((res) =>{
  //       this.vetor.push(res['cursos']);
  //       return this.vetor
  //     }))
  // }

  // removerCurso(c:Curso): Observable<Curso[]>{
  //   const params = new HttpParams().set("idCurso", c.idCurso?.toString());
  //   return this.http.delete(this.url+"excluir", {params: params})
  //   .pipe(map((res)=> {
  //     const filtro = this.vetor.filter((curso)=> {
  //       return +curso['idCurso'] !== +c.idCurso;
  //     })
  //     this.vetor = filtro;
  //   }))
  // }
  




}
