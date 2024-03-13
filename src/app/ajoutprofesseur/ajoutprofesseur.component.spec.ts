import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutprofesseurComponent } from './ajoutprofesseur.component';

describe('AjoutprofesseurComponent', () => {
  let component: AjoutprofesseurComponent;
  let fixture: ComponentFixture<AjoutprofesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutprofesseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutprofesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
