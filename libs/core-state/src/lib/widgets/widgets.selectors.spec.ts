import {
  WidgetsState,
  widgetsAdapter,
  initialWidgetsState,
} from './widgets.reducer';
import * as WidgetsSelectors from './widgets.selectors';

import { Widget } from '@fem/api-interfaces';
import { mockWidget } from '@fem/testing';

describe('Widgets Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getWidgetsId = (it) => it['id'];
  const createWidget = (id: string, name = '') =>
    ({ ...mockWidget, id: id } as Widget);

  let state;

  beforeEach(() => {
    state = {
      widgets: widgetsAdapter.setAll(
        [
          createWidget('PRODUCT-AAA'),
          createWidget('PRODUCT-BBB'),
          createWidget('PRODUCT-CCC'),
        ],
        {
          ...initialWidgetsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Widgets Selectors', () => {
    it('getAllWidgets() should return the list of Widgets', () => {
      const results = WidgetsSelectors.getAllWidgets(state);
      const selId = getWidgetsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = WidgetsSelectors.getSelectedWidget(state);
      const selId = getWidgetsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getWidgetsLoaded() should return the current 'loaded' status", () => {
      const result = WidgetsSelectors.getWidgetsLoaded(state);

      expect(result).toBe(true);
    });

    it("getWidgetsError() should return the current 'error' state", () => {
      const result = WidgetsSelectors.getWidgetsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
