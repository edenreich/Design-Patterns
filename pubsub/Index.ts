import { ProductionManager } from './publishers/ProductionManager';
import { GigaFactoryA } from './subscribers/GigaFactoryA';
import { GigaFactoryB } from './subscribers/GigaFactoryB';
import { EventDispatcher } from './EventDispatcher';

let eventDispatcher = new EventDispatcher;
let productionManager = new ProductionManager(eventDispatcher);
let gigaFactoryA = new GigaFactoryA(eventDispatcher);
let gigaFactoryB = new GigaFactoryB(eventDispatcher);

gigaFactoryA.subscribe('produce-more-cars', (amount: number) => {
    console.log('raising cars production with ' + amount);
});

gigaFactoryB.subscribe('produce-more-cars', (amount: number) => {
    console.log('raising cars production with ' + amount);
});

gigaFactoryB.subscribe('shutdown', () => {
    console.log('shutting down Giga-Factory B');
});

productionManager.publish('produce-more-cars', 100);
productionManager.publish('shutdown');
