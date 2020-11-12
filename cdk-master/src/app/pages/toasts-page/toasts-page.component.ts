import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/ui/services/toast.service';
import { FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './toasts-page.component.html',
  styleUrls: ['./toasts-page.component.scss']
})
export class ToastsPageComponent implements OnInit {

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

  showToast(){

            if(this.f.vPos.value == 'top'){
              if(this.f.hPos.value == 'top'){
                this.toastService.openSnackBar_tt(this.f.title.value, this.f.body.value, this.f.type.value, this.f.duration.value, this.f.showDuration.value, this.f.hasCloseButton.value, this.f.showTitle.value)
              }
              else if(this.f.hPos.value == 'center'){
                this.toastService.openSnackBar_tc(this.f.title.value, this.f.body.value, this.f.type.value, this.f.duration.value, this.f.showDuration.value, this.f.hasCloseButton.value, this.f.showTitle.value)
              }
              else if(this.f.hPos.value == 'bottom'){
                this.toastService.openSnackBar_tb(this.f.title.value, this.f.body.value, this.f.type.value, this.f.duration.value, this.f.showDuration.value, this.f.hasCloseButton.value, this.f.showTitle.value)
              }
            }
            else if(this.f.vPos.value == 'bottom'){
              if(this.f.hPos.value == 'top'){
                this.toastService.openSnackBar_bt(this.f.title.value, this.f.body.value, this.f.type.value, this.f.duration.value, this.f.showDuration.value, this.f.hasCloseButton.value, this.f.showTitle.value)
              }
              else if(this.f.hPos.value == 'center'){
                this.toastService.openSnackBar_bc(this.f.title.value, this.f.body.value, this.f.type.value, this.f.duration.value, this.f.showDuration.value, this.f.hasCloseButton.value, this.f.showTitle.value)
              }
              else if(this.f.hPos.value == 'bottom'){
                this.toastService.openSnackBar_bb(this.f.title.value, this.f.body.value, this.f.type.value, this.f.duration.value, this.f.showDuration.value, this.f.hasCloseButton.value, this.f.showTitle.value)
              }
            }
            else{
              this.toastService.openSnackBar('Default toast', 'This is default toast message with title, button and duration', true, true, true)
            }
          }
        }