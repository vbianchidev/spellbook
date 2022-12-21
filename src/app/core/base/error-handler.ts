import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: Error) {
    console.error(error.message);
  }
}

export const DEFAULT_ERROR_HANDLER = {
  provide: ErrorHandler,
  useClass: GlobalErrorHandler,
};
