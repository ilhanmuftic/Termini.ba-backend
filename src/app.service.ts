import { Injectable } from '@nestjs/common';
import { Termin } from './termin.interface';

@Injectable()
export class AppService {
  TERMINI: Termin[] = [
    {
      id: '1',
      name: 'Soccer Game',
      place: 'Central Park',
      time: '12:00 PM',
      maxPeople: 10,
      people: 5,
      creator: 'John Smith',
      requirements: ['Soccer shoes', 'Water'],
      date: new Date('2023-02-18'),
      description:''
    },
    {
      id: '2',
      name: 'Hiking Trip',
      place: 'Mt. Everest',
      time: '08:00 AM',
      maxPeople: 20,
      people: 15,
      creator: 'Jane Doe',
      requirements: ['Hiking boots', 'Backpack'],
      date: new Date('2023-02-18'),
      description:''
    },
    {
      id: '3',
      name: 'Book Club Meeting',
      place: 'Library',
      time: '06:00 PM',
      maxPeople: 30,
      people: 20,
      creator: 'Bob Johnson',
      requirements: ['Book', 'Notebook'],
      date: new Date('2023-02-18'),
      description:''
    }
  ];

  getTermins(): Termin[] {
    return this.TERMINI;
  }
}
