// import { TestBed } from '@angular/core/testing';

// import { WidgetsService } from './widgets.service';

// describe('WidgetsService', () => {
//   let service: WidgetsService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(WidgetsService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Widget } from '@fem/api-interfaces';

import { WidgetsService } from './widgets.service';

import { mockWidget } from '@fem/testing';

describe('WidgetsService', () => {
  const model = 'widgets';
  let httpTestingController: HttpTestingController;
  let service: WidgetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(WidgetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http.', () => {
    it('get() on service.all()', () => {
      service.all().subscribe((res) => {
        expect(res).toEqual(mockWidget);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush([mockWidget]);
      httpTestingController.verify();
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      service.find(mockWidget.id).subscribe((res) => {
        expect(res).toEqual(mockWidget);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockWidget.id)
      );
      req.flush(mockWidget);
      httpTestingController.verify();
    });

    it('post(url, model) on service.create(model)', () => {
      service.create(mockWidget).subscribe((res) => {
        expect(res).toEqual(mockWidget);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush(mockWidget);
      httpTestingController.verify();
    });

    it('put(url(model.id), model) on service.create(model)', () => {
      service.update(mockWidget).subscribe((res) => {
        expect(res).toEqual(mockWidget);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockWidget.id)
      );
      req.flush(mockWidget);
      httpTestingController.verify();
    });

    it('delete(url(model.id)) on service.delete(model.id)', () => {
      service.delete(mockWidget).subscribe((res) => {
        expect(res).toEqual(mockWidget);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockWidget.id)
      );
      req.flush(mockWidget);
      httpTestingController.verify();
    });
  });
});

