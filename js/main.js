function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const names = ['Вася','Саша','Егор', 'Аня', 'Катя', 'Соня', 'Олег'];
// function checkStringLength (string, length) {
//   return string.length <= length;
// }

const commentsId = [];
function createComment() {
  const comment = {};
  const messages = ['Всё отлично!',
    'В целом всё неплохо.', 'Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];
  let id = getRandomPositiveInteger(0, 5000);
  while (commentsId.includes(id)) {
    id = getRandomPositiveInteger(0, 5000);
  }
  comment.avatar = `img/avatar-${getRandomPositiveInteger(1,6)}.svg`;
  comment.name = names[getRandomPositiveInteger(0,6)];
  comment.message = messages[getRandomPositiveInteger(0,8)];
  return comment;
}

function createFinalArray() {
  const finalArray = [];
  for (let i =0; i<25;i++) {
    const currentObject = {};
    currentObject.id = i+1;
    currentObject.url = `photos/${i}.jpg`;
    currentObject.description = 'описание какое то';
    currentObject.likes = getRandomPositiveInteger(15,200);
    currentObject.comments = [];
    for (let j = 0; j < 3; j++) {
      currentObject.comments.push(createComment());
    }
    finalArray.push(currentObject);
  }
  return finalArray;
}
createFinalArray();
