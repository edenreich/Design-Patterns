import { INavigationSystem } from '../interfaces/INavigationSystem';

export class Waze implements INavigationSystem
{
    public name(): string 
    {
        return 'Waze';
    }
    
    public turnOn(): boolean
    {
        console.log('turning on a Waze GPS By clicking on the left corner button');

        return true;
    }
    
    public navigateFrom(location: string): void 
    {
        console.log('navigating from ' + location);
    }
    
    public navigateTo(location: string): void 
    {
        console.log('navigating to ' + location);
    }
}
