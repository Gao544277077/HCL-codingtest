import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private fb: FormBuilder, public service: DataService) { }
  ngOnInit() {


    // add corresponding validators
    this.searchForm = this.fb.group({
      'searchCountry': ''
    });
  }
      // write a function that calls changeCountryName upon value change in the form
      changeCountryName(){
      this.service.changeCountryName(this.searchForm.controls.searchCountry.value);
    }
}
