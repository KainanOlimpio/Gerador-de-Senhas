import { nanoid } from 'nanoid';

import './style.css';

const randomPassword = nanoid();
const passwordBtnEl = document.querySelector('button');
const geraterpassword = document.querySelector('h2');
passwordBtnEl.addEventListener('click', () => {
  geraterpassword.innerHTML = randomPassword;
});
