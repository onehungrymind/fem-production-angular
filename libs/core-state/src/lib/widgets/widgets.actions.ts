import { createAction, props } from '@ngrx/store';
import { WidgetsEntity } from './widgets.models';

export const loadWidgets = createAction('[Widgets] Load Widgets');

export const loadWidgetsSuccess = createAction(
  '[Widgets] Load Widgets Success',
  props<{ widgets: WidgetsEntity[] }>()
);

export const loadWidgetsFailure = createAction(
  '[Widgets] Load Widgets Failure',
  props<{ error: any }>()
);
