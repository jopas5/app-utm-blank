import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventosService } from './eventos.service';
import { Observable } from 'rxjs';
import io from 'socket.io-client';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url = "http://10.42.0.1:3001/";
  public url_socket = "http://192.168.2.95/";
  public url_repositorio = "http://192.168.2.95:99/";   
  public url_jsreport = "http://192.168.2.95:5488/api/report";
  public url_becas = "http://192.168.2.95/becas/becas/principal/";
  //BECAS
  public datos_persona: any;

  

  ////PRUEBA
  //public url_prueba = "http://10.42.0.1:3000/";
  private url_prueba = 'http://localhost:3000'; 

  public pass_jsreport = "admin:password";

  public _token: any = null;
  public socket: any;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  // private headers = new HttpHeaders().set('access-token', '' + (!localStorage.getItem(this.eventos._AUTH_TOKEN) ? this._token : localStorage.getItem(this.eventos._AUTH_TOKEN)))
  
  constructor(
    private http: HttpClient,
    private eventos: EventosService
  ) {
    // this.conectar();
  }

  set token(token: any) {
    this._token = token;
  }

  get token() {
    return this._token;
  }

  isLoggedIn() {
    return this.token = localStorage.getItem(this.eventos._AUTH_TOKEN);
  }

  // INICIO DASHBOARD
  autenticar(datos: any): Observable<any> {
    return this.http.post(this.url + 'autenticar', datos, { headers: this.headers });
  }

  get_modulos(datos: any): Observable<any> {
    this._token = localStorage.getItem(this.eventos._AUTH_TOKEN);
    this.headers = new HttpHeaders().set('access-token', this._token)
    return this.http.post(this.url + 'get_modulos', datos, { headers: this.headers });
  }

  get_roles(datos: any): Observable<any> {
    return this.http.post(this.url + 'get_roles', datos, { headers: this.headers });
  }

  mostrar_menu(datos: any): Observable<any> {
    return this.http.post(this.url + 'mostrar_menu', datos, { headers: this.headers });
  }

  cambiar_clave(datos: any): Observable<any> {
    return this.http.post(this.url + 'cambiar_clave', datos, { headers: this.headers });
  }

  obtener_catalogo(datos: any): Observable<any> {
    return this.http.post(this.url + 'generales/obtener_catalogo', datos, { headers: this.headers });
  }
  // FIN DASHBOARD

  // INICIO PLAN ESTRATEGICO
  obtener_configuracion(datos: any): Observable<any> {
    return this.http.post(this.url + 'generales/obtener_configuracion', datos, { headers: this.headers });
  }

  obtener_objetivos_estrategicos(datos: any): Observable<any> {
    return this.http.post(this.url + 'dpi/obtener_objetivos_estrategicos', datos, { headers: this.headers });
  }

  guardar_objetivo_estrategico(datos: any): Observable<any> {
    return this.http.post(this.url + 'dpi/guardar_objetivo_estrategico', datos, { headers: this.headers });
  }

  //Pruebas
  obtener_Personas() {
    return this.http.get(`${this.url_prueba}/personas`);
  }
  guardar_Personas(persona: any) {
    return this.http.post(`${this.url_prueba}/guardar_personas`, persona);
  }

  get_lista_periodos() {
    return this.http.get(this.url_becas + 'get_lista_periodos');
  }

  get_estudiantes(data:any) { 
    return this.http.get(this.url_becas + 'get_estudiantes/'+data);
  }
  
   obtener_Estado(item: any){
    this.datos_persona = item;
  };

  obtener_Estado2(){
    return this.http.get(this.url_becas + "get_estados/" + this.datos_persona.r_idpersonal + "/" + this.datos_persona.r_periodo);
  };

  obtener_Estadobeca(anio_inicio: number){
    return this.http.get(this.url_becas + "get_becados_estados/" + anio_inicio);
  }

  get_periodo_ano() {
    return this.http.get(this.url_becas + 'get_periodo_ano');
  }
  
  obtener_becados(anio_inicio: number){
    return this.http.get(this.url_becas + "get_becados/" + anio_inicio);
  }
   no_aprobados() {
    return this.http.get(this.url_becas + 'get_becados_estados_no');
   }
  
  conectar() {
    if (typeof (this.socket) != "undefined") {
      try {
        this.socket.disconnect();
        console.log("Conectar Web Socket..." + this.url_socket);
        this.socket = io(this.url_socket);
        this.login_web_socket().subscribe(dato => { });

      } catch (error) {
        console.log("Error al conectar Web Socket")
      }
      return;
    } else {
      console.log("Conectar Web Socket..." + this.url_socket);
      this.socket = io(this.url_socket);
      this.login_web_socket().subscribe(dato => { });
    }
  }

  login_web_socket() {
    let observable = new Observable(observer => {
      this.socket.on('connect', () => {
        console.log("web socket conectado");
        this.socket.emit('login', /*this.eventos.usuario.idpersonal*/-1, 'PERSONAL', 'APP', moment().format('YYYYMMDDHHmmss'));
      });
    })
    return observable;
  }

  obtener_notificacion() {
    let observable = new Observable(observer => {
      this.socket.on('notificacion', (data: any) => {
        observer.next(data);
      });
    });
    return observable;
  }

  iniciar_soket() {
    console.log("iniciar web socket");
    this.obtener_notificacion().subscribe(notificacion => {

    });
  }

}
