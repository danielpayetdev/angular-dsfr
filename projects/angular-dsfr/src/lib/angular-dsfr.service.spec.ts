import { TestBed } from '@angular/core/testing';

import { AngularDsfrService } from './angular-dsfr.service';

describe('AngularDsfrService', () => {
  let service: AngularDsfrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularDsfrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
