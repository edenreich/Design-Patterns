import { IEventDispatcher } from "../interfaces/IEventDispatcher";

export abstract class Subscriber
{
    protected eventDispatcher: IEventDispatcher;

    constructor(eventDispatcher: IEventDispatcher)
    {
        this.eventDispatcher = eventDispatcher;
    }
}
