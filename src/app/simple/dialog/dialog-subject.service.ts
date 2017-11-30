import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/* dialog的事件枚举 */
const enum dialogEvent {
  onShow,
  onShown,
  onHide,
  onHidden,
  onConfirm,
  onCancel,
  onDestroy
}

@Injectable()
export class DialogSubjectService extends Subject<any> {
  dialogId: string;
  eventsQueue = {};

  constructor() {
    super();
    this.subscribe((value: string) => {
      const eventQueue: Array<Function> = this.eventsQueue[value] || [];
      eventQueue.forEach(cb => {
        if (cb) {
          cb();
        }
      });
    });
  }

  destroy(type: any = 'onCancel') {
    if (!this.isStopped && !this.closed) {
      this.next(type);
    }
  }

  on(eventType: string, cb: Function) {
    if (this.eventsQueue[eventType]) {
      this.eventsQueue[eventType].push(cb);
    } else {
      this.eventsQueue[eventType] = [cb];
    }
  }

}
