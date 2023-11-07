import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({providedIn: "root"})
export class WindowWrapper
 {
  constructor() { }
  
  public get NativeWindow(): Window
  {
    return window;
  }
}