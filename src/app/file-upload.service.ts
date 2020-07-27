import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private handleError: HandleError;
  private endpoint = '';

  constructor(
    private httpClient: HttpClient,
    private httpErrorHandler: HttpErrorHandler
    ) {
      this.handleError = httpErrorHandler.createHandleError('FileUploadService');
    }

  headersConfig = {'Content-Type': 'file'};


    postFile(fileToUpload: File): Observable<boolean> {
      const formData: FormData = new FormData();
      formData.append('fileKey', fileToUpload, fileToUpload.name);

      return this.httpClient
        .post(this.endpoint, formData, { headers: this.headersConfig })
        .pipe(map(() => true));
    }
}
