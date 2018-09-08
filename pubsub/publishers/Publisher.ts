import { IEventDispatcher } from "../interfaces/IEventDispatcher";

export abstract class Publisher
{
    protected eventDispatcher: IEventDispatcher;

    constructor(eventDispatcher: IEventDispatcher)
    {
        this.eventDispatcher = eventDispatcher;
    }
}
