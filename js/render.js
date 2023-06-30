export function renderImage(src, likes, comments, description) {
  const template = document.getElementById('picture');
  const newElement = template.content.cloneNode(true);
  newElement.querySelector('.picture__img').src = src;
  newElement.querySelector('.picture__likes').textContent = likes.toString();
  newElement.querySelector('.picture__comments').textContent = comments.length.toString();
  newElement.querySelector('.picture__img').onclick = function () {
    document.querySelector('.big-picture').classList.toggle('hidden');
    document.querySelector('.big-picture__img img').src = src;
    document.querySelector('.likes-count').textContent = likes.toString();
    document.querySelector('.comments-count').textContent = comments.length.toString();
    document.querySelector('.social__caption').textContent = description;
    document.querySelector('.social__comment-count').classList.add('hidden');
    document.querySelector('.comments-loader').classList.add('hidden');
    document.body.classList.add('.modal-open');};
  document.querySelector('.big-picture__cancel').onclick = function () {
    document.querySelector('.big-picture').classList.add('hidden');
  };
  document.body.addEventListener('keydown',  (event) => {if (event.code === 'Escape') {
    document.querySelector('.big-picture').classList.add('hidden');
  }});
  document.querySelector('.pictures').append(newElement);
}
