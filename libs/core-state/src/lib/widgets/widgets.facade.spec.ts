import { TestBed } from '@angular/core/testing';
import { ActionsSubject } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { WidgetsFacade } from './widgets.facade';
import * as WidgetsActions from './widgets.actions';
import { initialWidgetsState } from './widgets.reducer';

import { mockWidget } from '@fem/testing';

describe('WidgetsFacade', () => {
  let facade: WidgetsFacade;
  let actionSubject;
  const mockActionsSubject = new ActionsSubject();
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WidgetsFacade,
        provideMockStore({ initialState: initialWidgetsState }),
        { provide: ActionsSubject, useValue: mockActionsSubject },
      ],
    });

    facade = TestBed.inject(WidgetsFacade);
    actionSubject = TestBed.inject(ActionsSubject);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should have mutations', (done) => {
    const action = WidgetsActions.createWidget({ widget: mockWidget });
    actionSubject.next(action);

    facade.mutations$.subscribe((result) => {
      expect(result).toBe(action);
      done();
    });
  });

  describe('should dispatch', () => {
    it('select on select(widget.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.selectWidget(mockWidget.id);

      const action = WidgetsActions.selectWidget({ selectedId: mockWidget.id });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadWidgets on loadWidgets()', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadWidgets();

      const action = WidgetsActions.loadWidgets();

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadWidget on loadWidget(widget.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadWidget(mockWidget.id);

      const action = WidgetsActions.loadWidget({ widgetId: mockWidget.id });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('createWidget on createWidget(widget)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.createWidget(mockWidget);

      const action = WidgetsActions.createWidget({ widget: mockWidget });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('updateWidget on updateWidget(widget)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.updateWidget(mockWidget);

      const action = WidgetsActions.updateWidget({ widget: mockWidget });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('delete on delete(model)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.deleteWidget(mockWidget);

      const action = WidgetsActions.deleteWidget({ widget: mockWidget });

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
