import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FilterOption } from './filter-option.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList: any;
  searchedKeyword: string;
  columnName: string;
  options: FilterOption[] = [
    {
      value: 'name',
      text: 'Name'
    },
    {
      value: 'username',
      text: 'User Name'
    },
    {
      value: 'email',
      text: 'Email'
    },
    {
      value: 'phone',
      text: 'Phone'
    },
    {
      value: 'website',
      text: 'Website'
    }
  ];

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.service.getUsersList().subscribe((res) => {
      this.usersList = res;  
    })
  }

}
