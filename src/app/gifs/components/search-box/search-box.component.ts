import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Search:</h5>
    <input type="text"
      class="form-control"
      placeholder="Search gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
  `
})
export class SearchBoxComponent {

  constructor( private gifsService: GifsService ){}

  @ViewChild("txtTagInput")
  public tagInput!: ElementRef<HTMLInputElement>;


  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
