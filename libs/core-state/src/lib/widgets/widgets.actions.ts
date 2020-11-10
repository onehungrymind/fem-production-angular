import { Widget } from '@fem/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedWidget = createAction('[Widgets] Reset Selected Widget');
export const resetWidgets = createAction('[Widgets] Reset Widgets');

// Select Widget
export const selectWidget = createAction(
  '[Widgets] Select Widget',
  props<{ selectedId: string }>()
);

// Load Widgets
export const loadWidgets = createAction('[Widgets] Load Widgets');

export const loadWidgetsSuccess = createAction(
  '[Widgets] Load Widgets Success',
  props<{ widgets: Widget[] }>()
);

export const loadWidgetsFailure = createAction(
  '[Widgets] Load Widgets Failure',
  props<{ error: any }>()
);

// Load Widget
export const loadWidget = createAction(
  '[Widgets] Load Widget',
  props<{ widgetId: string }>()
);

export const loadWidgetSuccess = createAction(
  '[Widgets] Load Widget Success',
  props<{ widget: Widget }>()
);

export const loadWidgetFailure = createAction(
  '[Widgets] Load Widget Failure',
  props<{ error: any }>()
);

// Create Widget
export const createWidget = createAction(
  '[Widgets] Create Widget',
  props<{ widget: Widget }>()
);

export const createWidgetSuccess = createAction(
  '[Widgets] Create Widget Success',
  props<{ widget: Widget }>()
);

export const createWidgetFailure = createAction(
  '[Widgets] Create Widget Failure',
  props<{ error: any }>()
);

// Update Widget
export const updateWidget = createAction(
  '[Widgets] Update Widget',
  props<{ widget: Widget }>()
);

export const updateWidgetSuccess = createAction(
  '[Widgets] Update Widget Success',
  props<{ widget: Widget }>()
);

export const updateWidgetFailure = createAction(
  '[Widgets] Update Widget Failure',
  props<{ error: any }>()
);

// Delete Widget
export const deleteWidget = createAction(
  '[Widgets] Delete Widget',
  props<{ widget: Widget }>()
);

export const deleteWidgetCancelled = createAction('[Widgets] Delete Widget Cancelled');

export const deleteWidgetSuccess = createAction(
  '[Widgets] Delete Widget Success',
  props<{ widget: Widget }>()
);

export const deleteWidgetFailure = createAction(
  '[Widgets] Delete Widget Failure',
  props<{ error: any }>()
);

