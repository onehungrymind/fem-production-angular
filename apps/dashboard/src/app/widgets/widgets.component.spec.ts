import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreDataModule } from '@fem/core-data';
import { CoreStateModule, WidgetsFacade } from '@fem/core-state';
import { MaterialModule } from '@fem/material';
import { mockEmptyWidget, mockWidget, mockWidgetsFacade } from '@fem/testing';
import { WidgetDetailsComponent } from './widget-details/widget-details.component';
import { WidgetsListComponent } from './widgets-list/widgets-list.component';
import { WidgetsComponent } from './widgets.component';

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;
  let de: DebugElement;
  let widgetsFacade: WidgetsFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WidgetsComponent,
        WidgetDetailsComponent,
        WidgetsListComponent,
      ],
      imports: [
        CoreDataModule,
        CoreStateModule,
        FormsModule,
        MaterialModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: WidgetsFacade, useValue: mockWidgetsFacade },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    widgetsFacade = TestBed.inject(WidgetsFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call widgetsFacade selectWidget', () => {
    const spy = jest.spyOn(widgetsFacade, 'selectWidget');

    component.selectWidget(mockWidget);

    expect(spy).toHaveBeenCalledWith(mockWidget.id);
  });

  describe('should on save call widgetsFacade', () => {
    it('updateWidget', () => {
      const spy = jest.spyOn(widgetsFacade, 'saveWidget');

      component.saveWidget(mockWidget);

      expect(spy).toHaveBeenCalledWith(mockWidget);
    });

    it('createWidget', () => {
      const spy = jest.spyOn(widgetsFacade, 'saveWidget');

      component.saveWidget(mockEmptyWidget);

      expect(spy).toHaveBeenCalledWith(mockEmptyWidget);
    });
  });

  it('should on delete call widgetsFacade deleteWidget', () => {
    const spy = jest.spyOn(widgetsFacade, 'deleteWidget');

    component.deleteWidget(mockWidget);

    expect(spy).toHaveBeenCalledWith(mockWidget);
  });
});
