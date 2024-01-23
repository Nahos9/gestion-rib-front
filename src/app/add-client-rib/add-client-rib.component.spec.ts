import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientRibComponent } from './add-client-rib.component';

describe('AddClientRibComponent', () => {
  let component: AddClientRibComponent;
  let fixture: ComponentFixture<AddClientRibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClientRibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddClientRibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
