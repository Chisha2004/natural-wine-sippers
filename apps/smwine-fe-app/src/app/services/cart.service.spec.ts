import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CartService, CartItem } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  let httpMock: HttpTestingController;
  const apiUrl = '/api/v1/add-to-cart';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService],
    });
    service = TestBed.inject(CartService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('addToCart', () => {
    it('should make an HTTP POST request to the correct endpoint', () => {
      const mockItem: CartItem = { productId: '123', quantity: 2 };
      const mockResponse: CartResponse = { success: true, cartId: 'cart-1' };

      service.addToCart(mockItem);

      const req = httpMock.expectOne(apiUrl);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(mockItem);
      req.flush(mockResponse);
    });

    it('should add a new item to the cartItems signal on success', () => {
      const mockItem: CartItem = { productId: '123', quantity: 2 };
      const mockResponse = [mockItem];

      service.addToCart(mockItem);

      const req = httpMock.expectOne(apiUrl);
      req.flush(mockResponse);

      expect(service.cartItems()).toEqual([mockItem]);
    });

    it('should replace existing item with same productId', () => {
      const item1: CartItem = { productId: 'wine-001', quantity: 2 };
      const item2: CartItem = { productId: 'wine-001', quantity: 5 };

      // Add first item
      service.addToCart(item1);
      let req = httpMock.expectOne(apiUrl);
      req.flush({ success: true });

      expect(service.cartItems()).toEqual([item1]);

      // Add item with same productId
      service.addToCart(item2);
      req = httpMock.expectOne(apiUrl);
      req.flush({ success: true });

      expect(service.cartItems()).toEqual([item2]);
    });

    it('should add multiple items with different productIds', () => {
      const item1: CartItem = { productId: 'wine-001', quantity: 2 };
      const item2: CartItem = { productId: 'wine-002', quantity: 3 };

      service.addToCart(item1);
      let req = httpMock.expectOne(apiUrl);
      req.flush({ success: true });

      service.addToCart(item2);
      req = httpMock.expectOne(apiUrl);
      req.flush({ success: true });

      expect(service.cartItems()).toEqual([item1, item2]);
      expect(service.cartItems().length).toBe(2);
    });

    it('should handle error responses without updating cartItems', () => {
      const mockItem: CartItem = { productId: '999', quantity: 2 };

      service.addToCart(mockItem);

      const req = httpMock.expectOne(apiUrl);
      req.flush(
        { success: false, message: 'Invalid product' },
        { status: 400, statusText: 'Bad Request' }
      );

      expect(service.cartItems()).toEqual([]);
    });
  });

  describe('cartItems signal', () => {
    it('should initialize with an empty array', () => {
      expect(service.cartItems()).toEqual([]);
    });

    it('should be readable as a readonly signal', () => {
      const mockItem: CartItem = { productId: 'wine-001', quantity: 2 };

      service.addToCart(mockItem);

      const req = httpMock.expectOne(apiUrl);
      req.flush({ success: true });

      expect(service.cartItems()).toEqual([mockItem]);
    });
  });
});
