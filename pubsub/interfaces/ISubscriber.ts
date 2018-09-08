
export interface ISubscriber
{
    subscribe(event: string, callback: Function): void;
}
