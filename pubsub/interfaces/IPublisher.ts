
export interface IPublisher
{
    publish(event: string, payload?: any): void;
}
