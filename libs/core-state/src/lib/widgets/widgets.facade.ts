import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';
import { Subject } from 'rxjs';

import * as fromWidgets from './widgets.reducer';
import * as WidgetsSelectors from './widgets.selectors';

import {Widget} from '@fem/api-interfaces'
import { WidgetsService } from '@fem/core-data';

@Injectable()
export class WidgetsFacade {
  private allWidgets = new Subject<Widget[]>();
  private selectedWidget = new Subject<Widget>();
  private mutations = new Subject();

  allWidget$ = this.allWidgets.asObservable();
  selectedWidget$ = this.selectedWidget.asObservable();
  mutations$ = this.mutations.asObservable();

  constructor(private widgetsService: WidgetsService) { }

  selectWidget(widget: Widget) {
    this.selectedWidget.next(widget);
  }
  
  loadWidgets() {
    this.widgetsService
      .all()
      .subscribe((widgets: Widget[]) => this.allWidgets.next(widgets));
  }
}
