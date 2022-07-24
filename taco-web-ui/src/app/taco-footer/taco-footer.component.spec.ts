import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacoFooterComponent } from './taco-footer.component';

describe('TacoFooterComponent', () => {
  let component: TacoFooterComponent;
  let fixture: ComponentFixture<TacoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacoFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
