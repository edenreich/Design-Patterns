
export interface INavigationSystem
{
    name(): string;

    turnOn(): boolean;

    navigateFrom(location: string): void;
    
    navigateTo(location: string): void;
}
