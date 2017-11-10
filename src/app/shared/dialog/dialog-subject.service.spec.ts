import { TestBed, inject } from '@angular/core/testing';

import { DialogSubjectService } from './dialog-subject.service';

describe('DialogSubjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogSubjectService]
    });
  });

  it('should be created', inject([DialogSubjectService], (service: DialogSubjectService) => {
    expect(service).toBeTruthy();
  }));
});
