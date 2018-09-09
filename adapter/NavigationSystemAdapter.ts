import { INavigationSystem } from "./interfaces/INavigationSystem";

export class NavigationSystemAdapter
{
    private navigationSystem: INavigationSystem;

    constructor(navigationSystem: INavigationSystem)
    {
        this.navigationSystem = navigationSystem;
    }

    public getDriver()
    {
        console.log('using navigation system adapter with ' + this.navigationSystem.name());
    }

    public turnOn()
    {
        this.navigationSystem.turnOn();
    }

    public navigateFrom(location: string)
    {
        this.navigationSystem.navigateFrom(location);
    }

    public navigateTo(location: string)
    {
        this.navigationSystem.navigateTo(location);
    }
}
