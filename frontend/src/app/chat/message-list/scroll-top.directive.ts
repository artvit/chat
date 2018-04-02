import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { debounceTime, filter, map, pairwise } from "rxjs/operators";
import { Subscription } from "rxjs/Subscription";
import { fromEvent } from "rxjs/observable/fromEvent";

@Directive({
  selector: '[chatScrollTop]'
})
export class ScrollTopDirective implements AfterViewInit, OnDestroy {
  @Input() scrollPercent: number = 90;

  @Output() scrolledUp: EventEmitter<void> = new EventEmitter<void>();
  private scrolledUpEvents: Observable<any>;

  private subscription: Subscription;
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.scrolledUpEvents = fromEvent(this.elementRef.nativeElement, 'scroll')
      .pipe(
        map((e: any) => ({
          scrollHeight: e.target.scrollHeight,
          scrollTop: e.target.scrollTop,
          clientHeight: e.target.clientHeight
        })),
        pairwise(),
        filter(positions => this.isUserScrollingUp(positions) && this.isScrollExpectedPercent(positions[1])),
        debounceTime(250)
      );
    this.subscription = this.scrolledUpEvents.subscribe(() => this.scrolledUp.emit());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private isUserScrollingUp = (positions) => {
    return positions[0].scrollTop > positions[1].scrollTop;
  };

  private isScrollExpectedPercent = (position) => {
    return (position.scrollTop / position.scrollHeight) < 1 - (this.scrollPercent / 100);
  };

}
