import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotoComponent } from './piloto.component';

describe('PilotoComponent', () => {
  let component: PilotoComponent;
  let fixture: ComponentFixture<PilotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
