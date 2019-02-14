import initializeHitPoints from '../../src/functions/initialize-hit-points.js';

const test = QUnit.test;

QUnit.module('Given race, return hit points');

test('Given human, return 50 hit points', function(assert) {
    const race = 'human';
    const hitPoints = initializeHitPoints(race);
    assert.equal(hitPoints, 50);
});

test('Given dwarf, return 60 hit points', function(assert) {
    const race = 'dwarf';
    const hitPoints = initializeHitPoints(race);
    assert.equal(hitPoints, 60);
});

test('Given elf, return 40 hit points', function(assert) {
    const race = 'elf';
    const hitPoints = initializeHitPoints(race);
    assert.equal(hitPoints, 40);
});