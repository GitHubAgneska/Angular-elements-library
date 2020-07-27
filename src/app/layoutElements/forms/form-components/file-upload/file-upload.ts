import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../field.interface';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.html',
  styleUrls: ['./file-upload.scss']
})
export class FileUploadComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;

  constructor() {}


  showFileUpload = false;
  public imgToUpload: File = null;
  public imgPath = '';
  imgURL: any;
  url = '';

  public inputStatus = true;
  public imgNameForInput: string;
  public fileToUpload: File = null;
  public uploadedData: any;
  public modal: any = 'upload-modal';

  ngOnInit() { }

  openModal() {}
}
