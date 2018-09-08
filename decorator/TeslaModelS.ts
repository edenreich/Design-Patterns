import { Car } from './Car';

export class TeslaModelS extends Car
{
    public costs(): number 
    {
        return 80000;
    }    
    
    public overview(): string 
    {
        return 'This is a Tesla Model S car';
    }
}
