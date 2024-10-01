import { TestBed } from '@angular/core/testing';

import { TemperaturesService } from './temperatures.service';

describe('TemperaturesService', () => {
  let service: TemperaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
