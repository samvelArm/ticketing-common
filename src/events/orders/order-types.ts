import { OrderStatus } from '../types/order-status';

export interface OrderCreated {
  id: string;
  status: OrderStatus;
  userId: string;
  expiresAt: string;
  ticket: {
    id: string;
    price: number;
  };
}

export interface OrderCancelled {
  id: string;
  ticket: {
    id: string;
  };
}
