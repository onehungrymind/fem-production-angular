import * as WidgetsActions from './widgets.actions';
import {
  WidgetsState,
  initialWidgetsState,
  widgetsReducer,
} from './widgets.reducer';
import { mockWidget, mockEmptyWidget } from '@fem/testing';

describe('Widgets Reducer', () => {
  let widgets;

  beforeEach(() => {
    widgets = [
      { ...mockWidget, id: '0' },
      { ...mockWidget, id: '1' },
      { ...mockWidget, id: '2' },
    ];
  });

  describe('valid Widgets actions', () => {
    it('loadWidgets should set loaded to false', () => {
      const action = WidgetsActions.loadWidgets();
      const expectedState = {
        ...initialWidgetsState,
        error: null,
      };

      const result: WidgetsState = widgetsReducer(initialWidgetsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadWidgetsSuccess should set the list of known Widgets', () => {
      const action = WidgetsActions.loadWidgetsSuccess({ widgets });
      const expectedState = {
        ...initialWidgetsState,
        loaded: true,
        entities: {
          0: widgets[0],
          1: widgets[1],
          2: widgets[2],
        },
        ids: widgets.map((widget) => widget.id),
      };

      const result: WidgetsState = widgetsReducer(initialWidgetsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadWidgetsFailure should set error to error', () => {
      const error = new Error();
      const action = WidgetsActions.loadWidgetsFailure({ error });
      const expectedState = {
        ...initialWidgetsState,
        error,
      };

      const result: WidgetsState = widgetsReducer(initialWidgetsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadWidget should set loaded to false', () => {
      const action = WidgetsActions.loadWidget({ widgetId: mockWidget.id });
      const expectedState = {
        ...initialWidgetsState,
        loaded: false,
        error: null,
      };

      const result: WidgetsState = widgetsReducer(initialWidgetsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadWidgetSuccess should set loaded to true', () => {
      const action = WidgetsActions.loadWidgetSuccess({ widget: mockWidget });
      const expectedState = {
        ...initialWidgetsState,
        loaded: true,
        entities: {
          0: mockWidget,
        },
        ids: [mockWidget.id],
      };

      const result: WidgetsState = widgetsReducer(initialWidgetsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadWidgetFailure should set error to error', () => {
      const error = new Error();
      const action = WidgetsActions.loadWidgetFailure({ error });
      const expectedState = {
        ...initialWidgetsState,
        error,
      };

      const result: WidgetsState = widgetsReducer(initialWidgetsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateWidgetSuccess should modify widget', () => {
      const prepAction = WidgetsActions.loadWidgetSuccess({
        widget: { ...mockEmptyWidget, id: mockWidget.id },
      });
      const prepState: WidgetsState = widgetsReducer(
        initialWidgetsState,
        prepAction
      );

      const expectedState = {
        ...initialWidgetsState,
        loaded: true,
        entities: {
          0: mockWidget,
        },
        ids: [mockWidget.id],
      };

      const action = WidgetsActions.updateWidgetSuccess({ widget: mockWidget });
      const result: WidgetsState = widgetsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateWidgetFailure should set error to error', () => {
      const error = new Error();
      const action = WidgetsActions.updateWidgetFailure({ error });
      const expectedState = {
        ...initialWidgetsState,
        error,
      };

      const result: WidgetsState = widgetsReducer(initialWidgetsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('createWidgetSuccess should add widget', () => {
      const action = WidgetsActions.createWidgetSuccess({ widget: mockWidget });
      const expectedState = {
        ...initialWidgetsState,
        loaded: false,
        entities: {
          0: mockWidget,
        },
        ids: [mockWidget.id],
      };

      const result: WidgetsState = widgetsReducer(initialWidgetsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('createWidgetFailure should set error to error', () => {
      const error = new Error();
      const action = WidgetsActions.createWidgetFailure({ error });
      const expectedState = {
        ...initialWidgetsState,
        error,
      };

      const result: WidgetsState = widgetsReducer(initialWidgetsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteWidgetSuccess should add widget', () => {
      const prepAction = WidgetsActions.loadWidgetSuccess({
        widget: mockWidget,
      });
      const prepState: WidgetsState = widgetsReducer(
        initialWidgetsState,
        prepAction
      );

      const expectedState = {
        ...initialWidgetsState,
        loaded: true,
      };

      const action = WidgetsActions.deleteWidgetSuccess({ widget: mockWidget });
      const result: WidgetsState = widgetsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteWidgetFailure should set error to error', () => {
      const error = new Error();
      const action = WidgetsActions.deleteWidgetFailure({ error });
      const expectedState = {
        ...initialWidgetsState,
        error,
      };

      const result: WidgetsState = widgetsReducer(initialWidgetsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('selectWidget should set selectedId', () => {
      const action = WidgetsActions.selectWidget({ selectedId: mockWidget.id });
      const expectedState = {
        ...initialWidgetsState,
        selectedId: mockWidget.id,
      };

      const result: WidgetsState = widgetsReducer(initialWidgetsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetSelectedWidget should reset selectedId', () => {
      const prepAction = WidgetsActions.selectWidget({
        selectedId: mockWidget.id,
      });
      const prepState = widgetsReducer(initialWidgetsState, prepAction);

      const action = WidgetsActions.resetSelectedWidget();
      const expectedState = {
        ...initialWidgetsState,
        selectedId: null,
      };

      const result: WidgetsState = widgetsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetWidgets should reset widgets', () => {
      const prepAction = WidgetsActions.loadWidgetsSuccess({ widgets });
      const prepState: WidgetsState = widgetsReducer(
        initialWidgetsState,
        prepAction
      );

      const expectedState = {
        ...initialWidgetsState,
        loaded: true,
      };

      const action = WidgetsActions.resetWidgets();
      const result: WidgetsState = widgetsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result: WidgetsState = widgetsReducer(initialWidgetsState, action);

      expect(result).toBe(initialWidgetsState);
    });
  });
});
