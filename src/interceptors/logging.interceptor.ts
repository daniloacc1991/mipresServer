import { ExecutionContext, Injectable, NestInterceptor, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const statusCode = response.statusCode;
    const now = Date.now();
    return call$.pipe(
      tap(() => {
        Logger.log(`URL: ${request.url}, Method: ${request.method}, Status: ${statusCode}, Time Response: ${Date.now() - now}ms`, 'Request');
      }),
    );
  }
}
