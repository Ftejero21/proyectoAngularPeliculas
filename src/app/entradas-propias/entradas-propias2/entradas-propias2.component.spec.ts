import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasPropias2Component } from './entradas-propias2.component';

describe('EntradasPropias2Component', () => {
  let component: EntradasPropias2Component;
  let fixture: ComponentFixture<EntradasPropias2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradasPropias2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradasPropias2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
