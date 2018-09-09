import { Waze } from './navigation_systems/Waze';
import { TomTom } from './navigation_systems/TomTom';
import { NavigationSystemAdapter } from './NavigationSystemAdapter';

let waze = new Waze;
let tomTom = new TomTom;

// let navigationSystemAdapter = new NavigationSystemAdapter(waze);
let navigationSystemAdapter = new NavigationSystemAdapter(tomTom);

navigationSystemAdapter.getDriver();

navigationSystemAdapter.turnOn();
navigationSystemAdapter.navigateFrom('Berlin');
navigationSystemAdapter.navigateTo('Hamburg');
