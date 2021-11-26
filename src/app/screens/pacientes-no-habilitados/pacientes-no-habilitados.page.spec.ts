import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacientesNoHabilitadosPage } from './pacientes-no-habilitados.page';

describe('PacientesNoHabilitadosPage', () => {
  let component: PacientesNoHabilitadosPage;
  let fixture: ComponentFixture<PacientesNoHabilitadosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesNoHabilitadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacientesNoHabilitadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
