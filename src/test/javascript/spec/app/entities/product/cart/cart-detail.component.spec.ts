import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewayTestModule } from '../../../../test.module';
import { CartDetailComponent } from 'app/entities/product/cart/cart-detail.component';
import { Cart } from 'app/shared/model/product/cart.model';

describe('Component Tests', () => {
  describe('Cart Management Detail Component', () => {
    let comp: CartDetailComponent;
    let fixture: ComponentFixture<CartDetailComponent>;
    const route = ({ data: of({ cart: new Cart(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewayTestModule],
        declarations: [CartDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(CartDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CartDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load cart on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.cart).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
