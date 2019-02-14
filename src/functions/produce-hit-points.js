function produceHitPoints(race) {
    if(race === 'dwarf') {
        return 60;
    }
    if(race === 'elf') {
        return 40;
    }
    return 50;
}

export default produceHitPoints;