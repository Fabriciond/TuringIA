import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlansComponent } from './page-plans.component';

describe('PagePlansComponent', () => {
  let component: PagePlansComponent;
  let fixture: ComponentFixture<PagePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
