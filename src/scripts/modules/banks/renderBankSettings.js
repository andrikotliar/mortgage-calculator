const renderBankSettings = (id, container) => {
  const settings = document.createElement('div');
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  settings.classList.add('bank__settings');

  editButton.classList.add('bank__edit-button');
  editButton.setAttribute('data-id', id);
  editButton.textContent = "Edit bank";

  deleteButton.classList.add('bank__delete-button');
  deleteButton.setAttribute('data-id', id);
  deleteButton.textContent = "Remove bank";

  settings.append(editButton, deleteButton);
  container.append(settings);
}

export default renderBankSettings;