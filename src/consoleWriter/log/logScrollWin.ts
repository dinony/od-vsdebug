import {IVirtualScrollWindow} from 'od-virtualscroll';

import {ILoggable} from './log';

export class ScrollWinLogger implements ILoggable {
  str([scrollWin]: [IVirtualScrollWindow]) {
    return `
      Scroll window:
        Data timestamp:   ${scrollWin.dataTimestamp}
        Rows/Columns:     (${scrollWin.numActualRows}, ${scrollWin.numActualColumns})
        Start/End:        (${scrollWin.visibleStartRow}, ${scrollWin.visibleEndRow})
        Virtual rows:     ${scrollWin.numVirtualRows}
        Virtual items:    ${scrollWin.numVirtualItems}
        ScrollTop:        ${scrollWin.scrollTop} px
        Scroll:           ${scrollWin.scrollPercentage * 100} %
    `;
  }
}
