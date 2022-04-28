import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCreatedComponent } from './cursos-created.component';

describe('CursosCreatedComponent', () => {
  let component: CursosCreatedComponent;
  let fixture: ComponentFixture<CursosCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
