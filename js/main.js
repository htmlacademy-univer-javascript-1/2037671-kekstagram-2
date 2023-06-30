import {createFinalArray} from './mainFunctional.js';
import {renderImage} from './render.js';

const dataArray = createFinalArray();
dataArray.forEach((value)=>{renderImage(value.url, value.likes, value.comments, value.description);});

