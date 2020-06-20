import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import Order from 'src/app/models/Order';
import { Product } from 'src/app/models/Product';
import { OrderService } from 'src/app/services/OrderService/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  OrderData = new Subject<Order[]>();

  OrderList: Order[] = [];
  constructor(private ServiceOrder: OrderService) {}

  ngOnInit(): void {
    /* this.ServiceOrder.OrderData.subscribe((data: Order[]) => {
      console.log(data);
      this.OrderList = data;
    });

    this.ServiceOrder.getAdmin();
  */
  }
}
