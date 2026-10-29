import { TestBed } from '@angular/core/testing';
import { ServiceFicheros } from './service-ficheros';

describe('ServiceFicheros', () => {
  let service: ServiceFicheros;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFicheros);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
