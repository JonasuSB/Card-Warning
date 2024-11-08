import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPagina2Component } from './adicionar-pagina2.component';

describe('AdicionarPagina2Component', () => {
  let component: AdicionarPagina2Component;
  let fixture: ComponentFixture<AdicionarPagina2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarPagina2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarPagina2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
