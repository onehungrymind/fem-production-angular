import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { WidgetsEntity } from './widgets.models';
import { WidgetsEffects } from './widgets.effects';
import { WidgetsFacade } from './widgets.facade';

import * as WidgetsSelectors from './widgets.selectors';
import * as WidgetsActions from './widgets.actions';
import {
  WIDGETS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './widgets.reducer';

interface TestSchema {
  widgets: State;
}

describe('WidgetsFacade', () => {
  let facade: WidgetsFacade;
  let store: Store<TestSchema>;
  const createWidgetsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as WidgetsEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(WIDGETS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([WidgetsEffects]),
        ],
        providers: [WidgetsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(WidgetsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allWidgets$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(WidgetsActions.loadWidgets());

        list = await readFirst(facade.allWidgets$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadWidgetsSuccess` to manually update list
     */
    it('allWidgets$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allWidgets$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          WidgetsActions.loadWidgetsSuccess({
            widgets: [createWidgetsEntity('AAA'), createWidgetsEntity('BBB')],
          })
        );

        list = await readFirst(facade.allWidgets$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
