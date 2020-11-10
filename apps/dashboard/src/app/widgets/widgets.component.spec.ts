import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreDataModule } from '@fem/core-data';
import { CoreStateModule, WidgetsFacade } from '@fem/core-state';
import { MaterialModule } from '@fem/material';
import { of } from 'rxjs';

import { WidgetDetailsComponent } from './widget-details/widget-details.component';
import { WidgetsListComponent } from './widgets-list/widgets-list.component';
import { WidgetsComponent } from './widgets.component';

export const mockWidgetsFacade = {
  loadWidgets: () => {},
  selectWidget: () => {},
  deleteWidget: () => {},
  updateWidget: () => {},
  createWidget: () => {},
  mutations$: of(true),
};

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
