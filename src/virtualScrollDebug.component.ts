import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from 'rxjs/Subscription';

import {IVirtualScrollWindow, ScrollObservableService} from 'od-virtualscroll';

@Component({
  selector: 'od-virtual-scroll-debug',
  styles: [`
    .od-debug-header {
      margin-bottom: 5px;
    }

    .od-debug-panel {
      background: pink;
      bottom: 10px;
      border: 10px solid pink;
      border-radius: 2px;
      color: white;
      font-family: sans-serif;
      min-width: 300px;
      padding: 15px;
      position: absolute;
      left: 10px;
      text-align: left;
      z-index: 10;
    }

    .od-debug-panel td:nth-child(2) {
      text-align: right;
    }

    .od-debug-group {
      font-size: 14px;
      padding-left: 5px;
      margin: 5px 0px;
      width: 100%;
    }`],
  template: `
    <div class="od-debug-panel">
      <div>Scroll Window</div>
      <table *ngIf="scrollWin !== undefined" class="od-debug-group">
        <tr><td>Item width</td><td> {{scrollWin.itemWidth}} px</td><tr>
        <tr><td>Item height</td><td> {{scrollWin.itemHeight}} px</td><tr>
        <tr><td>Virtual items</td><td> {{scrollWin.numVirtualItems}}</td><tr>
        <tr><td>Virtual rows</td><td> {{scrollWin.numVirtualRows}}</td><tr>
        <tr><td>Virtual height</td><td> {{scrollWin.virtualHeight}} px</td><tr>
        <tr><td>Additional rows</td><td> {{scrollWin.numAdditionalRows}}</td><tr>
        <!--<tr><td>Scrolled</td><td> {{scrollWin.scrollPercentage|percent:'2.2-2'}}</td><tr>-->
        <tr><td>Actual rows</td><td> {{scrollWin.numActualRows}}</td><tr>
        <tr><td>Actual columns</td><td> {{scrollWin.numActualColumns}}</td><tr>
        <tr><td>Actual height</td><td> {{scrollWin.actualHeight}} px</td><tr>
        <tr><td>Actual items</td><td> {{scrollWin.numActualItems}}</td><tr>
        <tr><td>Start row</td><td> {{scrollWin.visibleStartRow}}</td><tr>
        <tr><td>End row</td><td> {{scrollWin.visibleEndRow}}</td><tr>
      </table>
    </div>`
})
export class VirtualScrollDebugComponent implements OnInit, OnDestroy {
  scrollWin: IVirtualScrollWindow;
  private _subs: Subscription[] = [];

  constructor(private _scrollObs: ScrollObservableService) {}

  ngOnInit() {
    this._subs.push(this._scrollObs.scrollWin$.subscribe(([scrollWin]) => {
      this.scrollWin = scrollWin;
    }));
  }

  ngOnDestroy() {
    this._subs.forEach(sub => sub.unsubscribe());
  }
}
