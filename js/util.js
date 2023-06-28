import {names} from './data.js';
import {messages} from './data.js';

export function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const commentsId = [];
export function createComment() {
  const comment = {};
  let id = getRandomPositiveInteger(0, 5000);
  while (commentsId.includes(id)) {
    id = getRandomPositiveInteger(0, 5000);
  }
  comment.avatar = `img/avatar-${getRandomPositiveInteger(1,6)}.svg`;
  comment.name = names[getRandomPositiveInteger(0,6)];
  comment.message = messages[getRandomPositiveInteger(0,8)];
  return comment;
}

export function checkStringLength (string, length) {
  return string.length <= length;
}
