import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzwyListComponent } from './tzwy-list.component';

describe('TzwyListComponent', () => {
  let component: TzwyListComponent;
  let fixture: ComponentFixture<TzwyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TzwyListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzwyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
