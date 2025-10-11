import { Subjects } from '../subjects';
import { Ticket } from './ticket-types';

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: Ticket;
}
