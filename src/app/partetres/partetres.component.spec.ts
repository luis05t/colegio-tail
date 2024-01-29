import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartetresComponent } from './partetres.component';

describe('PartetresComponent', () => {
  let component: PartetresComponent;
  let fixture: ComponentFixture<PartetresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartetresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartetresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
