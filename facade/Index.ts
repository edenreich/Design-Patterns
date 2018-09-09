import { Engine } from './actions/Engine';
import { Tires } from './actions/Tires';
import { Airconditioner } from './actions/Airconditioner';
import { CarFacade } from './CarFacade';

let airconditioner = new Airconditioner;
let engine = new Engine;
let tires = new Tires;

let car = new CarFacade(airconditioner, engine, tires);

car.start();