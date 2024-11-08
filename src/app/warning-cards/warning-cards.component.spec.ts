import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningCardsComponent } from './warning-cards.component';

describe('WarningCardsComponent', () => {
  let component: WarningCardsComponent;
  let fixture: ComponentFixture<WarningCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarningCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
