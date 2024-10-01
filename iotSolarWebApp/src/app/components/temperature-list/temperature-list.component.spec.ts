import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureListComponent } from './temperature-list.component';

describe('TemperatureListComponent', () => {
  let component: TemperatureListComponent;
  let fixture: ComponentFixture<TemperatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
