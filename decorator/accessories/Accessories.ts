import { Car } from '../Car';

export abstract class Accessories
{
    protected car: Car;

    constructor(car: Car)
    {
        this.car = car;
    }

    public abstract costs(): number;

    public abstract overview(): string;
}
