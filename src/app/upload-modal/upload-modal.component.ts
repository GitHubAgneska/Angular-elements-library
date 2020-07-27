import { Component, OnInit, EventEmitter, Output, Input , OnChanges, SimpleChanges} from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss']
})
export class UploadModalComponent implements OnInit {

  public group: FormGroup;
  public fileToUpload: File = null;
  public imgPath = '';
  public url = '';

  // public element = HTMLImageElement;

  constructor(
    private fileUploadService: FileUploadService
  ) {
    this.group = new FormGroup({ fileName: new FormControl() });
  }

  ngOnInit(): void { }

  handleInput(event: any) {

    const loadFile = () =>  {
      const output = document.getElementById('output') as HTMLInputElement;
      output.src = URL.createObjectURL(event.target.file);
      output.onload = () => { URL.revokeObjectURL(output.src);
      };
    };
    loadFile();

  }

  uploadFile() {
    this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
