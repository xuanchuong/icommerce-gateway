import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICart } from 'app/shared/model/product/cart.model';

@Component({
  selector: 'jhi-cart-detail',
  templateUrl: './cart-detail.component.html',
})
export class CartDetailComponent implements OnInit {
  cart: ICart | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ cart }) => (this.cart = cart));
  }

  previousState(): void {
    window.history.back();
  }
}
