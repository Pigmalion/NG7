import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesbackgroundComponent } from './nodesbackground.component';

describe('NodesbackgroundComponent', () => {
  let component: NodesbackgroundComponent;
  let fixture: ComponentFixture<NodesbackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodesbackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
