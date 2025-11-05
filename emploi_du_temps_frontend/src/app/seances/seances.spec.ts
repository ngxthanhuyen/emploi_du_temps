import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seances } from './seances';

describe('Seances', () => {
  let component: Seances;
  let fixture: ComponentFixture<Seances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seances]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seances);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
