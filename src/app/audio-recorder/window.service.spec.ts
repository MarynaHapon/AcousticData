import { TestBed, inject } from '@angular/core/testing';

import { WindowRef } from './window.service';

describe('WindowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });
  });

  it('should be created', inject([WindowRef], (service: WindowRef) => {
    expect(service).toBeTruthy();
  }));
});
