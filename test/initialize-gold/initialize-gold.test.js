import initializeGold from '../../src/functions/initialize-gold.js';

const test = QUnit.test;

QUnit.module('Given race return initial gold');

test('Given human return 10', function(assert) {
    const race = 'human';
    const gold = initializeGold(race);
    assert.equal(gold, 10);
});

test('Given dwarf return 15', function(assert) {
    const race = 'dwarf';
    const gold = initializeGold(race);
    assert.equal(gold, 15);
});

test('Given elf return 15', function(assert) {
    const race = 'elf';
    const gold = initializeGold(race);
    assert.equal(gold, 15);
});