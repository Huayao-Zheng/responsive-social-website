// Sidebar
const menuItems = document.querySelectorAll('.menu-item');

// Messages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    removeActiveClassFrom(menuItems);
    item.classList.add('active');
    if (item.id === 'notifications') {
      document.querySelector('#notifications .notification-count').style.display = 'none';
    }
  });
});

function removeActiveClassFrom(menuItems) {
  menuItems.forEach((item) => item.classList.remove('active'));
}

//    ================Messages box highlight===============
messagesNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  setTimeout(() => {
    messages.style.boxShadow = 'none';
  }, 2000);
});

// =================searches chats=================
const messageSearch = document.querySelector('#message-search');
const message = document.querySelectorAll('.message');

messageSearch.addEventListener('keyup', searchMes);

function searchMes() {
  const lowerCasedSearchVal = messageSearch.value.toLowerCase();

  message.forEach((mes) => {
    const lowerCasedH5 = mes.querySelector('h5').textContent.toLowerCase();

    if (lowerCasedH5.indexOf(lowerCasedSearchVal) !== -1) {
      mes.style.display = 'flex';
    } else {
      mes.style.display = 'none';
    }
  });
}
