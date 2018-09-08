
export interface IEventDispatcher
{
    add(event: string, callback: Function): void;

    dispatch(event: string, payload?: any): void;
}
