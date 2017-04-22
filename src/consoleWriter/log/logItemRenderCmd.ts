import {ItemRenderCmd} from 'od-virtualscroll';

import {CmdOptionNames} from '../cmdNames';
import {ILoggable} from './log';

export class ItemRenderCmdLogger implements ILoggable {
  str([cmd]: [ItemRenderCmd]) {
    return `${CmdOptionNames[cmd.cmdType]}: Virtual index: ${cmd.virtualIndex} Actual index: ${cmd.actualIndex} Column: ${cmd.columnIndex} Data Index: ${cmd.dataIndex}`;
  }
}
