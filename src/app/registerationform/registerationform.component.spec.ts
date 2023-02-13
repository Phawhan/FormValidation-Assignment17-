import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationformComponent } from './registerationform.component';

describe('RegisterationformComponent', () => {
  let component: RegisterationformComponent;
  let fixture: ComponentFixture<RegisterationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterationformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
