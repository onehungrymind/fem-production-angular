import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { WidgetsEffects } from './widgets.effects';
import * as WidgetsActions from './widgets.actions';

describe('WidgetsEffects', () => {
  let actions: Observable<any>;
  let effects: WidgetsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        WidgetsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(WidgetsEffects);
  });

  describe('loadWidgets$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: WidgetsActions.loadWidgets() });

      const expected = hot('-a-|', {
        a: WidgetsActions.loadWidgetsSuccess({ widgets: [] }),
      });

      expect(effects.loadWidgets$).toBeObservable(expected);
    });
  });
});
