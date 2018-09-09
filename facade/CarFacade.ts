import { Tires } from './actions/Tires';
import { Engine } from './actions/Engine';
import { Airconditioner } from './actions/Airconditioner';

export class CarFacade
{
    private airconditioner: Airconditioner;
    private engine: Engine;
    private tires: Tires;

    constructor(airconditioner: Airconditioner, engine: Engine, tires: Tires)
    {
        this.airconditioner = airconditioner;
        this.engine = engine;
        this.tires = tires;
    }

    public start()
    {
        // Make some complex steps.
        this.airconditioner.turnOn();
        this.tires.checkPressure();
        this.engine.start();

        console.log('car is ready to go...');
    }
}
