import { Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import * as fromWidgets from './widgets/widgets.reducer';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

// ---------------------------------------
// Core State and Reducers
// ---------------------------------------

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  [fromWidgets.WIDGETS_FEATURE_KEY]: fromWidgets.WidgetsState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  [fromWidgets.WIDGETS_FEATURE_KEY]: fromWidgets.widgetsReducer,
};
