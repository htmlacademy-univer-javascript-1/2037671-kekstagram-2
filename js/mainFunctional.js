import {createComment} from './util';
import {getRandomPositiveInteger} from './util';
export function createFinalArray() {
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
