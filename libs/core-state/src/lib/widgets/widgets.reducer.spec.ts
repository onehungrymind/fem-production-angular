import { WidgetsEntity } from './widgets.models';
import * as WidgetsActions from './widgets.actions';
import { State, initialState, reducer } from './widgets.reducer';

describe('Widgets Reducer', () => {
  const createWidgetsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as WidgetsEntity);

  beforeEach(() => {});

  describe('valid Widgets actions', () => {
    it('loadWidgetsSuccess should return set the list of known Widgets', () => {
      const widgets = [
        createWidgetsEntity('PRODUCT-AAA'),
        createWidgetsEntity('PRODUCT-zzz'),
      ];
      const action = WidgetsActions.loadWidgetsSuccess({ widgets });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
