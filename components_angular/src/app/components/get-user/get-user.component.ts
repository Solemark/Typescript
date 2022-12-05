import { Component, OnInit } from '@angular/core';

interface Idata {
  results: Iuser[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

interface Iuser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  cell: string;
  id: {
    name: string;
    age: number;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css'],
})
export class GetUserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: Iuser[] = [];

  async getData() {
    fetch('https://randomuser.me/api/')
      .then(async (res) => {
        let data: Idata = await res.json();
        this.data.push(data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
