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

// =========== theme-model ==================
const themeModal = document.querySelector('.customize-theme');
const theme = document.querySelector('#theme');

theme.addEventListener('click', openThemeModal);
themeModal.addEventListener('click', closeThemeModal);

function openThemeModal() {
  themeModal.style.display = 'grid';
}

function closeThemeModal(e) {
  console.log(e.target.classList.contains('customize-theme'));
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
}

// =========== font-size ==================
const fontSizeOptions = document.querySelectorAll('.choose-size span');

fontSizeOptions.forEach((fsOption) => {
  let fontSizeMap = {
    'font-size-1': '10px',
    'font-size-2': '13px',
    'font-size-3': '16px',
    'font-size-4': '19px',
    'font-size-5': '22px',
  };

  fsOption.addEventListener('click', () => {
    const fs = fontSizeMap[fsOption.classList[0]];

    removeActiveClassFrom(fontSizeOptions);

    fsOption.classList.add('active');

    document.querySelector('html').style.fontSize = fs;
  });
});
