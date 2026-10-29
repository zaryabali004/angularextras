import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subirfichero } from './subirfichero';

describe('Subirfichero', () => {
  let component: Subirfichero;
  let fixture: ComponentFixture<Subirfichero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Subirfichero],
    }).compileComponents();

    fixture = TestBed.createComponent(Subirfichero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
