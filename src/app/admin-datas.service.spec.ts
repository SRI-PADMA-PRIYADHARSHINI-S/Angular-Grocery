import { TestBed } from '@angular/core/testing';

import { AdminDatasService } from './admin-datas.service';

describe('AdminDatasService', () => {
  let service: AdminDatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
