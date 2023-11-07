import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WindowWrapper } from './windowWrapper.service';
@Injectable({providedIn: "root"})
export class WindowService
 {
  constructor(private windowWrapper: WindowWrapper) { }
  
  public Alert(alertMessage: string): void 
  {
    this.windowWrapper.NativeWindow.alert(alertMessage);
  }
  public Close(): void 
  {
    this.windowWrapper.NativeWindow.close();
  }
}