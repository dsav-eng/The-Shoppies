import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForMovieComponent } from './search-for-movie.component';

describe('SearchForMovieComponent', () => {
  let component: SearchForMovieComponent;
  let fixture: ComponentFixture<SearchForMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
