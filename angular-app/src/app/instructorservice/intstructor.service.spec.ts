import { TestBed } from '@angular/core/testing';

import { IntstructorService } from './intstructor.service';

describe('IntstructorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntstructorService = TestBed.get(IntstructorService);
    expect(service).toBeTruthy();
  });
});
