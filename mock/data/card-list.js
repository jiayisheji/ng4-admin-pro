let Mock = require('mockjs');
let Random = Mock.Random;
let data = [];
let images = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => Random.image('48x48', Random.color(), Random.word(1)));
for (let i = 0; i < 100; i++) {
    let content = Random.cparagraph(0, 10);
    data.push({
        id: i,
        title: Random.ctitle(6, 12),
        avatar: images[Random.integer(0, 8)],
        description: Random.csentence(60, 80)
    })
}
module.exports = data;