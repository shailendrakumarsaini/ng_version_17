import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpInterceptorFn } from '@angular/common/http';

// @Injectable()
// export class HeaderInterceptor implements HttpInterceptor {

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         debugger;
//         req = req.clone({
//             setHeaders : {
//                 'Content-Type' : 'application/json',
//                 'Access-Control-Allow-Origin' : '*',
//                 'Authrization Berar' : 'abcd'
//             }
//         });
//         console.log('Interceptor called');
//         return next.handle(req);
//     }

// }

export const HeaderInterceptor: HttpInterceptorFn = (request, next) => {
  console.log('Interceptor Called');
  // request = request.clone({
  //   setHeaders: {
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*'
  //   }
  // });

  return next(request);
};
