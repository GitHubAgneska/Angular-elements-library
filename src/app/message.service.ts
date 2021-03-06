import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    messages: string[] = [];

    add(message: string) {
        this.messages.push(message);
    }

    clear() {
        this.messages = [];
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

// source: https://stackblitz.com/angular/jrlxnmobgoe?file=src%2Fapp%2Fmessage.service.ts
