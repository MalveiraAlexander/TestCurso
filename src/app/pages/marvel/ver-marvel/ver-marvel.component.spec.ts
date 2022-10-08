import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMarvelComponent } from './ver-marvel.component';

describe('VerMarvelComponent', () => {
  let component: VerMarvelComponent;
  let fixture: ComponentFixture<VerMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMarvelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
