import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule],
        providers: [UsersService]
      });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should use UsersService', () => {
    expect(service.getUsersList()).toBeTruthy();
    service.getUsersList().subscribe(value => {
      expect(value).toBe('observable value');
    });
  });
});
