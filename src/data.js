export const DATA = [
    {
        id: 1,
        title: 'Площадь квадрата',
        img: require('../assets/fig1.png'),
        formulaTitle: 'S=a^2',
        params: ['a'],
        formula: (param1, param2, param3) => (param1 * param1),
    },
    {
        id: 2,
        title: 'Площадь прямоугольника',
        img: require('../assets/fig2.png'),
        formulaTitle: 'S=a * b',
        params: ['a','b'],
        formula: (param1, param2, param3) => (param1 * param2),
    },
    {
        id: 3,
        title: 'Площадь круга',
        img: require('../assets/fig3.png'),
        formulaTitle: 'S=\\pi * R^2',
        params: ['R'],
        formula: (param1, param2, param3) => (3.14 * param1 * param1),
    },
    {
        id: 4,
        title: 'Площадь круга',
        img: require('../assets/fig4.png'),
        formulaTitle: 'S=\\pi * \\frac{D^2}{4}',
        params: ['D'],
        formula: (param1, param2, param3) => (3.14 * param1 * param1 / 4),
    },
];