import colorNumber from "./colorNumber.js";

describe('Function colorNumber', ()=> {

    test ('devrait donner l\'affichage des issues en vert si le nombre d\'issue est inférieur à 10 ', ()=>{
        expect(colorNumber(7)).toBe('green')
    });
    
    test ('devrait donner l\'affichage des issues en vert si le nombre d\'issue est inférieur à 100 ', ()=>{
        expect(colorNumber(50)).toBe('orange')
    });

    test ('devrait donner l\'affichage des issues en vert si le nombre d\'issue est supérieur ou égale à 100 ', ()=>{
        expect(colorNumber(101)).toBe('red')
    });
})