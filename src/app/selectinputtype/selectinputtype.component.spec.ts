import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectinputtypeComponent } from './selectinputtype.component';

describe('SelectinputtypeComponent', () => {
  let component: SelectinputtypeComponent;
  let fixture: ComponentFixture<SelectinputtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectinputtypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectinputtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
