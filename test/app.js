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

console.log('################################################')

// ミューツー追加

const mypokemons = ['ピカチュウ', 'ゼニガメ', 'ふしぎだね'];
console.log(mypokemons);
mypokemons.push('ミューツー')

//配列のマージ

const old_color = ['赤', '青', '緑'];
const new_color = ['red', 'blue', 'green'];

console.log(old_color.concat(new_color));

//アペンドチャイルド

const $time = document.createElement('article');
$time.setAttribute('class', 'post');
$time.innerHTML = 'Javascriptの練習';

const $timeline = document.querySelector('#timeline');
$timeline.appendChild($time);

//button

const $button = document.getElementById('button');
$button.addEventListener('click', function () {
    document.getElementById('output').innerHTML = '押されちゃった！'
})

//ピカチュウゲット

const $pika = document.querySelector('#chance_pika');

$pika.addEventListener('click', function () {
    if (Math.random() <= 0.2) {
        alert('ぴかげっと');
    } else {
        alert('にげられた');
    }
})