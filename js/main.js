function commentIsValid(comment, maxLength) {
  let counter = 0;
  for (let i = 0; i < comment.length; i++){
    counter+=1;
  }
  return counter<= maxLength;
}


