import { TestBed } from '@angular/core/testing';
import { WidgetsService } from '@fem/core-data';
import { mockWidgetsService } from '@fem/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';
import * as WidgetsActions from './widgets.actions';
import { WidgetsEffects } from './widgets.effects';

describe('WidgetsEffects', () => {
  let actions: Observable<any>;
  let effects: WidgetsEffects;
  let service: WidgetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        WidgetsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        { provide: WidgetsService, useValue: mockWidgetsService },
      ],
    });

    effects = TestBed.inject(WidgetsEffects);
    service = TestBed.inject(WidgetsService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
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
