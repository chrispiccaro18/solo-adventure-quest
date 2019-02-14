function initializeGold(race) {
    if(race === 'dwarf' || race === 'elf') {
        return 15;
    }
    return 10;
}

export default initializeGold;