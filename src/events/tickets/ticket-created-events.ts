import { Subjects } from '../subjects';
import { Ticket } from './ticket-types';

export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: Ticket;
}
