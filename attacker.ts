
/***************** types dealing with Character */
type AttackModifier = number;


/***************** end types dealing with Character */

export type CharacterCandidate = {
    attackModifier: AttackModifier
}

export class Character {
    attackModifier: number;

    constructor(candidate: CharacterCandidate) {

    }
}