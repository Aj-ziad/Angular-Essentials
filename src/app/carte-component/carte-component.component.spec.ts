import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteComponentComponent } from './carte-component.component';

describe('CarteComponentComponent', () => {
  let component: CarteComponentComponent;
  let fixture: ComponentFixture<CarteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
