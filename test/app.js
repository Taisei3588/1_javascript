function hornDrill(theirHp) {
    const num = Math.random(1, 101)
    if (num <= 30) {
        return theirHp;
    } else {
        return 0;
    }

}

// ぴかちゅ
const pikachu = {
    name: 'ピカチュウ',
    level: 18,
    types: ['でんき'],
    skills: ['10万ボルト', 'でんこうせっか', 'たいあたり'],
    levelUp: function () {
        this.level++;
        if (this.level >= 20) {
            this.skills.push('デンキスパーク');
        }
    }
}

console.log('1st pika', pikachu.level, pikachu.skills);
pikachu.levelUp();
console.log('2nd pika', pikachu.level, pikachu.skills);
pikachu.levelUp();
console.log('3rd pika', pikachu.level, pikachu.skills);