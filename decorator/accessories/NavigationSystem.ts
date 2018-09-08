import { Accessories } from './Accessories';

export class NavigationSystem extends Accessories
{
    public costs(): number
    {
        return this.car.costs() + 5000;
    }    
    
    public overview(): string
    {
        return this.car.overview() + ', including navigation system';
    }
}
