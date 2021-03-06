import { Component, OnInit } from '@angular/core';
import { observable, Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
    
  `,
  styles: []
})
export class AppComponent implements OnInit {

  title = 'RXJS';

  ngOnInit(): void {
    // this.minhaPromise('Thiago')
    //   .then(result => console.log(result));

    // this.minhaPromise('Thiago')
    //   .then(result => console.log(result))
    //   .catch(erro => console.log(erro));

    // this.minhaObservable('Thiago')
    //   .subscribe(
    //     result => console.log(result),
    //     error => console.error(error),
    //     () => console.log('Fim!') 
    //   );

    const observer = {
      next: valor => console.log('next: ', valor),
      error: error => console.error('error: ', error),
      complete: () => console.log('complete: Fim!')
    }

    // const obs = this.minhaObservable('Thiago');
    // obs.subscribe(observer);

    const obs = this.usuarioObservable('Admin', 'admin@email.com');
    const subs = obs.subscribe(observer);

    setTimeout(() => {
      subs.unsubscribe();
      console.log('Conex??o fechada: ' + subs.closed);
    }, 3500)

  }

  minhaPromise(nome: string): Promise<string> {
    let nomeCorreto: string = 'Thiago';
    return new Promise((resolve, reject) => {
      if (nome === nomeCorreto) {
        setTimeout(() => {
          resolve(`Seja bem vindo ${nomeCorreto}`)
        }, 5000);
      } else {
        reject(`Ops voc?? n??o ?? o ${nomeCorreto}`)
      }
    });
  }

  minhaObservable(nome: string): Observable<string> {
    return new Observable(subscriber => {
      if (nome === 'Thiago') {
        subscriber.next('Ol?? ' + nome);
        subscriber.next('Ol?? de novo ' + nome);
        setTimeout(() => {
          subscriber.next(`Seja bem vindo ${nome}`)
        }, 5000);
        subscriber.complete();
      } else {
        subscriber.error('Ops! Voc?? n??o ?? o Thiago!');
      }
    });
  }

  usuarioObservable(nome: string, email: string): Observable<Usuario> {
    return new Observable(subscriber => {
      if (nome === 'Admin') {
        let usuario = new Usuario(nome, email);
        
        setTimeout(() => {
          subscriber.next(usuario);
        }, 1000);
        setTimeout(() => {
          subscriber.next(usuario);
        }, 2000);
        setTimeout(() => {
          subscriber.next(usuario);
        }, 3000);
        setTimeout(() => {
          subscriber.next(usuario);
        }, 4000);
        setTimeout(() => {
          subscriber.complete();
        }, 5000);
      } else {
        subscriber.error('Ops! Voc?? n??o ?? usu??rio Admin');
      }
    });
  }
}

export class Usuario {

  nome: string;
  email: string;

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }

}
