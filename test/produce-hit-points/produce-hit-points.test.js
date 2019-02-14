import produceHitPoints from '../../src/functions/produce-hit-points.js';

const test = QUnit.test;

QUnit.module('Given race, return hit points');

test('Given human, return 50 hit points', function(assert) {
    const race = 'human';
    const hitPoints = produceHitPoints(race);
    assert.equal(hitPoints, 50);
});

test('Given dwarf, return 60 hit points', function(assert) {
    const race = 'dwarf';
    const hitPoints = produceHitPoints(race);
    assert.equal(hitPoints, 60);
});

test('Given elf, return 40 hit points', function(assert) {
    const race = 'elf';
    const hitPoints = produceHitPoints(race);
    assert.equal(hitPoints, 40);
});