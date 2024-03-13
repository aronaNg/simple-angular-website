import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutpersonnelComponent } from './ajoutpersonnel.component';

describe('AjoutpersonnelComponent', () => {
  let component: AjoutpersonnelComponent;
  let fixture: ComponentFixture<AjoutpersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutpersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutpersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
