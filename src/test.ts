import { ControlResult } from './core/ControlResult';
export function test() {
    let controlResult = new ControlResult()
    controlResult.generateResultFile('47220554', 'const priceArray = ["", "", "", "", "", "", "", "", "", "", "", "", ""]');
}

test()