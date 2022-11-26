import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasPropiasComponent } from './entradas-propias.component';

describe('EntradasPropiasComponent', () => {
  let component: EntradasPropiasComponent;
  let fixture: ComponentFixture<EntradasPropiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradasPropiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradasPropiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
