import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDsfrComponent } from './angular-dsfr.component';

describe('AngularDsfrComponent', () => {
  let component: AngularDsfrComponent;
  let fixture: ComponentFixture<AngularDsfrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDsfrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularDsfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
