import { Injectable } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { WidgetsService } from '@fem/core-data';

@Injectable({
  providedIn: 'root'
})
export class WidgetsFacade {
  constructor(private widgetsService: WidgetsService) {}

  loadWidgets() {
    return this.widgetsService.all();
  }

  saveWidget(widget: Widget) {
    if (widget.id) {
      return this.updateWidget(widget);
    } else {
      return this.createWidget(widget);
    }
  }

  createWidget(widget: Widget) {
    return this.widgetsService.create(widget);
  }

  updateWidget(widget: Widget) {
    return this.widgetsService.update(widget);
  }

  deleteWidget(widget: Widget) {
    return this.widgetsService.delete(widget);
  }
}
