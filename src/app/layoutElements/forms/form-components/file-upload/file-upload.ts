import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../field.interface';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.html',
  styleUrls: ['./file-upload.scss']
})
export class FileUploadComponent implements OnInit {

  constructor(
  ) { }

  field: FieldConfig;
  group: FormGroup;

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

// =======================================================/ END /===================================================================//


  // +++++++++++++++++++++++++++++++++++ tests file upload = pb with 'event.target.result ' =+++++++++++++++++++
/*  toggleFileUpload(){
this.showFileUpload = !this.showFileUpload;
}
*/

/* onSelectFile(event:any) {
  if (event.target.files && event.target.files[0]) {
  let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      const element = event.target as HTMLElement;
      //this.url = element.result;
    }
  }
}

(change)="onSelectFile($event.target.files)"

onSelectFile(files: FileList) {
  this.imgToUpload = files.item(0);
  console.log(event);
  let reader = new FileReader();

  if(files && files.length) {
  reader.readAsDataURL(this.imgToUpload);
  console.log("THIS IS URL: " + this.url);  // read file as data url

  reader.onload = () => {  // called once readAsDataURL is completed
    this.group.patchValue({
      file: reader.result
  });
    //this.url = event.target.result;
  }
}
} */
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


