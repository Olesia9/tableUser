import {svgContactDefault, svgContactHover} from "./svg.js";

export const createClientsForm = () => {
    const modalTitle = document.createElement('h2');
    const modalClose = document.createElement('button');
    const form = document.createElement('form');
    const inputName = document.createElement('input');
    const labelName = document.createElement('label');
    const inputSurname = document.createElement('input');
    const labelSurname = document.createElement('label');
    const inputLastname = document.createElement('input');
    const labelLastname = document.createElement('label');
    const requiredName = document.createElement('span');
    const requiredSurname = document.createElement('span');
    const addContactBtn = document.createElement('button');
    const contactBtnSvgDefault = document.createElement('span');
    const contactBtnSvgHover = document.createElement('span');
    const saveBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    const contactsBlock = document.createElement('div');
    const formFloatingName = document.createElement('div');
    const formFloatingSurname = document.createElement('div');
    const formFloatingLastName = document.createElement('div');

    modalTitle.classList.add('modal__title');
    modalClose.classList.add('modal__close', 'btn-reset');
    form.classList.add('modal__form');
    formFloatingName.classList.add('form-floating');
    formFloatingSurname.classList.add('form-floating');
    formFloatingLastName.classList.add('form-floating');
    inputName.classList.add('modal__input');
    inputSurname.classList.add('modal__input');
    inputLastname.classList.add('modal__input');
    labelName.classList.add('modal__label');
    labelSurname.classList.add('modal__label');
    labelLastname.classList.add('modal__label');
    requiredName.classList.add('modal__label');
    requiredSurname.classList.add('modal__label');
    addContactBtn.classList.add('modal__btn-contact', 'modal__btn-contact--active');
    saveBtn.classList.add('modal__btn-save', 'btn-reset', 'site-btn');
    cancelBtn.classList.add('modal__btn-back', 'btn-reset');
    contactBtnSvgDefault.classList.add('btn-contact__svg', 'btn-contact__svg--default', 'btn-contact__svg--active');
    contactBtnSvgHover.classList.add('btn-contact__svg', 'btn-contact__svg--hover');
    contactsBlock.classList.add('modal__contact');
    labelName.for = 'floatingName';
    labelSurname.for = 'floatingSurname';
    labelLastname.for = 'floatingLastname';
    inputName.id = 'floatingName';
    inputSurname.id = 'floatingSurname';
    inputLastname.id = 'floatingLastname';
    inputName.type = 'text';
    inputSurname.type = 'text';
    inputLastname.type = 'text';
    inputName.placeholder = 'Имя';
    inputSurname.placeholder = 'Фамилия';
    inputLastname.placeholder = 'Отчество';

    modalTitle.textContent = 'Новый клиент';
    labelName.textContent = 'Имя';
    labelSurname.textContent = 'Фамилия';
    labelLastname.textContent = 'Отчество';
    addContactBtn.textContent = 'Добавить контакт';
    saveBtn.textContent = 'Сохранить';
    cancelBtn.textContent = 'Отмена';
    requiredName.textContent = '*';
    requiredSurname.textContent = '*';
    contactBtnSvgDefault.innerHTML = svgContactDefault;
    contactBtnSvgHover.innerHTML = svgContactHover;

    labelName.append(requiredName);
    labelSurname.append(requiredSurname);
    formFloatingName.append(inputName, labelName);
    formFloatingSurname.append(inputSurname, labelSurname);
    formFloatingLastName.append(inputLastname, labelLastname);
    contactsBlock.append(addContactBtn);
    form.append(
        formFloatingName,
        formFloatingSurname,
        formFloatingLastName,
        contactsBlock,
        saveBtn,
        cancelBtn
    );

    addContactBtn.append(contactBtnSvgDefault, contactBtnSvgHover);

    return{
        form,
        modalClose,
        modalTitle,
        cancelBtn,
        inputName,
        inputSurname,
        inputLastname,
        labelName,
        labelSurname,
        labelLastname,
        contactsBlock,
        addContactBtn
    }
}