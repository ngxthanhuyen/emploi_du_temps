import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profs } from './profs';

describe('Profs', () => {
  let component: Profs;
  let fixture: ComponentFixture<Profs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
