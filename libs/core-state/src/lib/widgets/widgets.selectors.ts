import { Widget } from '@fem/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { widgetsAdapter, WidgetsState, WIDGETS_FEATURE_KEY } from './widgets.reducer';

// Lookup the 'Widgets' feature state managed by NgRx
export const getWidgetsState = createFeatureSelector<
  WidgetsState
>(WIDGETS_FEATURE_KEY);

const { selectAll, selectEntities } = widgetsAdapter.getSelectors();

export const getWidgetsLoaded = createSelector(
  getWidgetsState,
  (state: WidgetsState) => state.loaded
);

export const getWidgetsError = createSelector(
  getWidgetsState,
  (state: WidgetsState) => state.error
);

export const getAllWidgets = createSelector(
  getWidgetsState,
  (state: WidgetsState) => selectAll(state)
);

export const getWidgetsEntities = createSelector(
  getWidgetsState,
  (state: WidgetsState) => selectEntities(state)
);

export const getSelectedWidgetId = createSelector(
  getWidgetsState,
  (state: WidgetsState) => state.selectedId
);

const emptyWidget: Widget = {
  id: null,
  title: '',
  description: '',
};

export const getSelectedWidget = createSelector(
  getWidgetsEntities,
  getSelectedWidgetId,
  (entities, selectedId) => {
    return selectedId ? entities[selectedId] : emptyWidget;
  }
);
