import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carreras } from './carreras';

describe('Registros', () => {
  let component: Carreras;
  let fixture: ComponentFixture<Carreras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carreras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carreras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
