import { TestBed } from '@angular/core/testing';

import { WidgetsFacade } from './widgets.facade';

describe('WidgetsFacade', () => {
  let service: WidgetsFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetsFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
