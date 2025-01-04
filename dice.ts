function rollD6(): number {
    return Math.ceil(Math.random()*6);
}

function roll2D6() {
    return rollD6() + rollD6();
}

export function rollAttack(modifier: number) {
    return roll2D6() + modifier;
}