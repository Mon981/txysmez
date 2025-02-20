import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwyzCardComponent } from './twyz-card.component';

describe('TwyzCardComponent', () => {
  let component: TwyzCardComponent;
  let fixture: ComponentFixture<TwyzCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwyzCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwyzCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
