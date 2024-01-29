import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartecincoComponent } from './partecinco.component';

describe('PartecincoComponent', () => {
  let component: PartecincoComponent;
  let fixture: ComponentFixture<PartecincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartecincoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartecincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
