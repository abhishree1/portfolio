import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniLogoComponent } from './ani-logo.component';

describe('AniLogoComponent', () => {
  let component: AniLogoComponent;
  let fixture: ComponentFixture<AniLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
