import {IRowRenderCmd} from 'od-virtualscroll';

import {CmdOptionNames} from '../cmdNames';
import {ILoggable} from './log';

export class RowRenderCmdLogger implements ILoggable {
  str([cmd]: [IRowRenderCmd]) {
    return `${CmdOptionNames[cmd.cmdType]}: Virtual index: ${cmd.virtualIndex} Actual index: ${cmd.actualIndex}`;
  }
}
