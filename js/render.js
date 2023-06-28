export function renderImage(src, likes, comments) {
  const template = document.getElementById('picture');
  const newElement = template.content.cloneNode(true);
  newElement.querySelector('.picture__img').src = src;
  newElement.querySelector('.picture__likes').textContent = likes.toString();
  newElement.querySelector('.picture__comments').textContent = comments.toString();

  document.querySelector('.pictures').append(newElement);
}
