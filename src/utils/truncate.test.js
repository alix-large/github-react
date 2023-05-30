import truncate from "./truncate.js";

describe('Function truncate', () => {

    test( 'devrait donner "50 premiers caractères suivis de 3 ... pour une longue phrase', () => {
        const results = truncate("012345678901234567890123456789012345678901234567890123456789");
        expect(results).toBe('01234567890123456789012345678901234567890123456789...')
    })

    test( 'devrait donner une chaine vide dnas le cas où la description est nulle', () => {
        const results = truncate(null);
        expect(results).toBe('')
    })
});