import { TestBed, inject } from '@angular/core/testing';

import { DialogConfigService } from './dialog-config.service';

describe('DialogConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogConfigService]
    });
  });

  it('should be created', inject([DialogConfigService], (service: DialogConfigService) => {
    expect(service).toBeTruthy();
  }));
});
