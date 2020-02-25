import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriadoresPage } from './criadores.page';

describe('CriadoresPage', () => {
  let component: CriadoresPage;
  let fixture: ComponentFixture<CriadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriadoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
