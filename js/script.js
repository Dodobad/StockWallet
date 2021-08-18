'use strict';

const modal = document.querySelectorAll('.modal');
const modalCreate = document.querySelector('.modal--create');
const modalLogin = document.querySelector('.modal--login');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.btn--close-modal');
const btnOpenModalCreate = document.querySelector('.create--btn');
const btnOpenModalLogin = document.querySelector('.login--btn');
const nav = document.querySelector('.nav');

const openModalCreate = function (e) {
  e.preventDefault();
  modalCreate.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openModalLogin = function (e) {
  e.preventDefault();
  modalLogin.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.forEach((mod) => mod.classList.add('hidden'));
  overlay.classList.add('hidden');
};

btnsCloseModal.forEach((btn) => btn.addEventListener('click', closeModal));

btnOpenModalCreate.addEventListener('click', openModalCreate);
btnOpenModalLogin.addEventListener('click', openModalLogin);

overlay.addEventListener('click', closeModal);
