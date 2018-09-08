import { ISubscriber } from '../interfaces/ISubscriber';
import { Subscriber } from './Subscriber';

export class GigaFactoryB extends Subscriber implements ISubscriber
{
    subscribe(event: string, callback: Function): void 
    {
        this.eventDispatcher.add(event, callback);
    }
}
