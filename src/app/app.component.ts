import { Component, OnInit, ViewChild } from '@angular/core';
import { ParentService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data!: any;
  arrayValue: any[] = [];

  constructor(
    private parentService: ParentService
  ) {}

  uid(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  handleEvent(event: any) {
    this.arrayValue.forEach(item => item.disable = item.id === event.id ? false : true);
  }

  ngOnInit(): void {
    this.parentService.getAll().subscribe(res => {
      this.data = res;
      this.data.map ((item:any,id:number) => {
        let object = {
          id: this.uid(),
          name: item.name,
          username: item.username,
          disable: false
        }

        this.arrayValue?.push(object)
      })
    })
  }
}
