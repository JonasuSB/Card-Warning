import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPagina1Component } from './adicionar-pagina1.component';

describe('AdicionarPagina1Component', () => {
  let component: AdicionarPagina1Component;
  let fixture: ComponentFixture<AdicionarPagina1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarPagina1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarPagina1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
