import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  WIDGETS_FEATURE_KEY,
  State,
  WidgetsPartialState,
  widgetsAdapter,
} from './widgets.reducer';

// Lookup the 'Widgets' feature state managed by NgRx
export const getWidgetsState = createFeatureSelector<
  WidgetsPartialState,
  State
>(WIDGETS_FEATURE_KEY);

const { selectAll, selectEntities } = widgetsAdapter.getSelectors();

export const getWidgetsLoaded = createSelector(
  getWidgetsState,
  (state: State) => state.loaded
);

export const getWidgetsError = createSelector(
  getWidgetsState,
  (state: State) => state.error
);

export const getAllWidgets = createSelector(getWidgetsState, (state: State) =>
  selectAll(state)
);

export const getWidgetsEntities = createSelector(
  getWidgetsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getWidgetsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getWidgetsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
