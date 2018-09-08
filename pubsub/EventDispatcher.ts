import { IEventDispatcher } from './interfaces/IEventDispatcher';
import { IEvent } from './interfaces/IEvent';

export class EventDispatcher implements IEventDispatcher
{
    private events: IEvent = {};

    add(event: string, callback: Function): void
    {
        if (this.events.hasOwnProperty(event) === false) {
            this.events[event] = [];
        }

        this.events[event].push(callback);
    }    

    dispatch(event: string, payload?: any): void 
    {
        if (this.events.hasOwnProperty(event) === false) {
            return console.warn('no listeners on this event!');
        }

        for (let i = 0; i < this.events[event].length; i++) {
            this.events[event][i].call(this, payload);
        }
    }
}
