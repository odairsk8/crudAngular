import { LoaderState } from './shared/loader/loader-state';
import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { LoaderService } from './shared/loader/loader.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-root',
  template: '<block-ui><router-outlet></router-outlet></block-ui>'
})
export class AppComponent implements OnInit, OnDestroy {
  
 
  public title = 'app works!';

  private subscription: Subscription;

  @BlockUI() blockUI: NgBlockUI;

  public constructor(private viewContainerRef: ViewContainerRef,
                      private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.subscription = this.loaderService.loaderState
    .subscribe((state: LoaderState) => {
      if (state.show)
        this.blockUI.start();
      else
        this.blockUI.stop();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
