import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPlaceComponent } from './json-place.component';

describe('JsonPlaceComponent', () => {
  let component: JsonPlaceComponent;
  let fixture: ComponentFixture<JsonPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
