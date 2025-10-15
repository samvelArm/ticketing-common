import { OrderCancelled } from './order-types';
import { Subjects } from '../subjects';

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: OrderCancelled;
  version: number;
}
