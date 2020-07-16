import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  public modalWindow: boolean;

  constructor() {
    this.modalWindow = true;
  }

  ngOnInit() {
  }

  public close() {

    if (this.modalWindow) {
      this.closeModal.emit(null);
    }
  }


}
