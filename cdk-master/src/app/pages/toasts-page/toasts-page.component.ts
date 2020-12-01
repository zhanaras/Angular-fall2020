import { Component, EventEmitter, HostBinding, HostListener, OnInit, Output } from '@angular/core';
import { ToastService } from 'src/app/ui/services/toast.service';
import { FormBuilder } from '@angular/forms';
import { TOAST_TRIGGER, CLOSE_ANIMATION } from './toast-animations'
// import { randomInt } from 'crypto';

@Component({
  templateUrl: './toasts-page.component.html',
  styleUrls: ['./toasts-page.component.scss'],
  animations: [TOAST_TRIGGER]
})
export class ToastsPageComponent implements OnInit {

  state: 'top-start-show' | 'top-center-show' | 'top-end-show' | 'bottom-start-show' | 'bottom-center-show' | 'bottom-end-show' | 'top-start-hide' | 'top-center-hide' | 'top-end-hide' | 'bottom-start-hide' | 'bottom-center-hide' | 'bottom-end-hide';

  constructor(private toastService: ToastService,
              private fb: FormBuilder){}

  

  toastForm = this.fb.group({
    title: ['Toast title'],
    body: ['This is the message'],
    type: [''],
    duration: [],
    showTitle: [false],
    hasCloseButton: [false],
    showDuration: [false],
    vPos:[''],
    hPos:['']
  })

  ngOnInit(): void {
  }

  get f() {
    return this.toastForm.controls;
  }

  showDur = this.f.showDuration.value;

  showToasts(){
    this.toastService.openSnackBar(this.f.title.value, this.f.body.value, this.f.type.value, this.f.duration.value, this.f.showDuration.value, this.f.hasCloseButton.value, this.f.showTitle.value, this.f.vPos.value, this.f.hPos.value);
  }
  
  rand(){
    let randNum = Math.floor((Math.random() * 10) + 1)
    if(randNum===3){
      try {
      throw new Error('got three');
      } catch (ex) {
        this.toastService.openSnackBarError('Error', 'You got three', 'fail', true, true)
        console.log(ex.message);
      }
    }
    else{
      this.toastService.openSnackBarError('Success', 'It is not three', 'success', true, true)
      console.log(randNum);
    }
  }

}