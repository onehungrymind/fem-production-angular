import { WidgetsEntity } from './widgets.models';
import { State, widgetsAdapter, initialState } from './widgets.reducer';
import * as WidgetsSelectors from './widgets.selectors';

describe('Widgets Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getWidgetsId = (it) => it['id'];
  const createWidgetsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as WidgetsEntity);

  let state;

  beforeEach(() => {
    state = {
      widgets: widgetsAdapter.setAll(
        [
          createWidgetsEntity('PRODUCT-AAA'),
          createWidgetsEntity('PRODUCT-BBB'),
          createWidgetsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
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
      const result = WidgetsSelectors.getSelected(state);
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
