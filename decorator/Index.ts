import { TeslaModelS } from './TeslaModelS';
import { Sunroof } from './accessories/Sunroof';
import { LeatherSeats } from './accessories/LeatherSeats';
import { NavigationSystem } from './accessories/NavigationSystem';

let teslaModelS: TeslaModelS = new TeslaModelS;

teslaModelS = new Sunroof(teslaModelS);
teslaModelS = new NavigationSystem(teslaModelS);
teslaModelS = new LeatherSeats(teslaModelS);

console.log(teslaModelS.overview());
console.log('The overall price is: ' + teslaModelS.costs());
