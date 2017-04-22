import {Injectable} from '@angular/core';

import {CmdOption, CreateRowCmd, IVirtualScrollWindow, ScrollObservableService} from 'od-virtualscroll';

import {Subscription} from 'rxjs/Subscription';

import {consoleBanner} from './banner';
import {CmdOptionNames} from './cmdNames';
import {ILoggable} from './log/log';
import {ItemRenderCmdLogger} from './log/logItemRenderCmd';
import {RowRenderCmdLogger} from './log/logRowRenderCmd';
import {ScrollWinLogger} from './log/logScrollWin';
import {LogSource} from './logSource';

@Injectable()
export class ConsoleWriterService {
  private _subs: {[key: number]: Subscription} = {};

  private _defaultLoggerMap: {[key: number]: ILoggable} = {
    [LogSource.ScrollWindow]: new ScrollWinLogger(),
    [LogSource.CreateRow]: new RowRenderCmdLogger(),
    [LogSource.ShiftRow]: new RowRenderCmdLogger(),
    [LogSource.RemoveRow]: new RowRenderCmdLogger(),
    [LogSource.CreateItem]: new ItemRenderCmdLogger(),
    [LogSource.UpdateItem]: new ItemRenderCmdLogger(),
    [LogSource.RemoveItem]: new ItemRenderCmdLogger(),
  };

  private _obsMap: {[key: number]: string} = {
    [LogSource.ScrollWindow]: 'scrollWin$',
    [LogSource.CreateRow]: 'createRow$',
    [LogSource.ShiftRow]: 'shiftRow$',
    [LogSource.RemoveRow]: 'removeRow$',
    [LogSource.CreateItem]: 'createItem$',
    [LogSource.UpdateItem]: 'updateItem$',
    [LogSource.RemoveItem]: 'removeItem$',
  };

  constructor(private _scrollObs: ScrollObservableService) {
    // tslint:disable-next-line:no-console
    console.log(consoleBanner, 'font-family:monospace; background-color: pink; color: white');
  }

  // tslint:disable-next-line:no-console
  private _log = (msg: any) => console.log(msg);

  attach(source: LogSource) {
    this._log(`Attached to ${this._obsMap[source]}`);
    this._subs[source] = this._scrollObs[this._obsMap[source]].subscribe((data: any) => this._log(this._defaultLoggerMap[source].str(data)));
  }

  detach(source: LogSource) {
    const sub = this._subs[source];
    if(sub !== undefined && !sub.closed) {
      this._log(`Detached from ${this._obsMap[source]}`);
      sub.unsubscribe();
    }
  }

  attachAll() {
    for(const key in this._obsMap) {
      this.attach(parseInt(key, 10));
    }
  }

  detachAll() {
    for(const key in this._obsMap) {
      this.detach(parseInt(key, 10));
    }
  }

  setCustomLogger(source: LogSource, logger: ILoggable) {
    this._defaultLoggerMap[source] = logger;
  }
}
