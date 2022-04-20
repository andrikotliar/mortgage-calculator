export class Modal {
  constructor(modalId) {
    this.modal = document.querySelector(modalId);
    this.closeButton = this.modal.querySelector('#closeModal');
  }

  openModal() {
    this.modal.classList.add('visible');

    const firstInput = this.modal.querySelector('input');
    firstInput.focus();

    document.body.style.overflow = 'hidden';
    this.closeButton.addEventListener('click', () => {
      this.closeModal();
    });

    this.focusTrap();
  }

  clearInputs() {
    const textInputs = this.modal.querySelectorAll('input');

    textInputs.forEach(textInput => textInput.value = '');
  }

  focusTrap() {
    const focusabilityElements = this.modal.querySelectorAll(
      'input, button'
    );
    const first = focusabilityElements[0];
    const last = focusabilityElements[focusabilityElements.length - 1];

    document.addEventListener('keydown', (event) => {
      if(event.key === 'Tab' && document.activeElement === last) {
        first.focus();
      }
    });
  }

  setSaveButtonAttr(attr, value) {
    const button = this.modal.querySelector('.save-new-bank');
    button.setAttribute(attr, value);
  }

  removeSaveButtonAttr(attr) {
    const button = this.modal.querySelector('.save-new-bank');
    button.removeAttribute(attr);
  }

  closeModal() {
    document.body.style.overflow = '';
    this.modal.classList.remove('visible');
    this.removeSaveButtonAttr('data-id');
  }
}