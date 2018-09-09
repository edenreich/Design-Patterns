import { INavigationSystem } from '../interfaces/INavigationSystem';

export class TomTom implements INavigationSystem
{
    public name(): string 
    {
        return 'TomTom';
    }

    public turnOn(): boolean
    {
        console.log('turning on a TomTom GPS By clicking on the right corner button');

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
