import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ConsoleWriterService} from './consoleWriter/consoleWriter.service';
import {VirtualScrollDebugComponent} from './virtualScrollDebug.component';

@NgModule({
  declarations: [VirtualScrollDebugComponent],
  exports: [VirtualScrollDebugComponent],
  imports: [CommonModule],
  providers: [ConsoleWriterService]
})
export class VirtualScrollDebugModule {}
