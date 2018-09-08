import { IPublisher } from '../interfaces/IPublisher';
import { Publisher } from './Publisher';

export class ProductionManager extends Publisher implements IPublisher
{
    public publish(event: string, payload?: any): void 
    {
        this.eventDispatcher.dispatch(event, payload);
    }
}
