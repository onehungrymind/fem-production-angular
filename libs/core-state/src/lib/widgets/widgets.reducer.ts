import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as WidgetsActions from './widgets.actions';
import { WidgetsEntity } from './widgets.models';

export const WIDGETS_FEATURE_KEY = 'widgets';

export interface State extends EntityState<WidgetsEntity> {
  selectedId?: string | number; // which Widgets record has been selected
  loaded: boolean; // has the Widgets list been loaded
  error?: string | null; // last known error (if any)
}

export interface WidgetsPartialState {
  readonly [WIDGETS_FEATURE_KEY]: State;
}

export const widgetsAdapter: EntityAdapter<WidgetsEntity> = createEntityAdapter<
  WidgetsEntity
>();

export const initialState: State = widgetsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const widgetsReducer = createReducer(
  initialState,
  on(WidgetsActions.loadWidgets, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(WidgetsActions.loadWidgetsSuccess, (state, { widgets }) =>
    widgetsAdapter.setAll(widgets, { ...state, loaded: true })
  ),
  on(WidgetsActions.loadWidgetsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return widgetsReducer(state, action);
}
