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

let fontSizesMap = {
  'font-size-1': '10px',
  'font-size-2': '13px',
  'font-size-3': '16px',
  'font-size-4': '19px',
  'font-size-5': '22px',
};

fontSizeOptions.forEach((fsOption) => {
  fsOption.addEventListener('click', () => {
    const fs = fontSizesMap[fsOption.classList[0]];

    removeActiveClassFrom(fontSizeOptions);

    fsOption.classList.add('active');

    document.querySelector('html').style.fontSize = fs;
  });
});

// =========== Primary Colors ==================
const primaryColors = document.querySelectorAll('.choose-color span');

let primaryColorsMap = {
  'color-1': 252,
  'color-2': 2,
  'color-3': 352,
  'color-4': 152,
  'color-5': 202,
};

primaryColors.forEach((pColor) => {
  pColor.addEventListener('click', () => {
    const color = primaryColorsMap[pColor.classList[0]];

    removeActiveClassFrom(primaryColors);

    pColor.classList.add('active');

    document.querySelector(':root').style.setProperty('--primary-color-hue', color);
  });
});

// <!-- -----------Background----------- -->
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

// theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// changes background colors
function changeBG() {
  const root = document.querySelector(':root');
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

bg1.addEventListener('click', () => {
  bg1.classList.add('active');
  bg2.classList.remove('active');
  bg3.classList.remove('active');

  window.location.reload();
});

bg2.addEventListener('click', () => {
  lightColorLightness = '15%';
  whiteColorLightness = '20%';
  darkColorLightness = '95%';

  bg2.classList.add('active');
  bg1.classList.remove('active');
  bg3.classList.remove('active');

  changeBG();
});

bg3.addEventListener('click', () => {
  lightColorLightness = '0%';
  whiteColorLightness = '10%';
  darkColorLightness = '95%';

  bg3.classList.add('active');
  bg1.classList.remove('active');
  bg2.classList.remove('active');

  changeBG();
});
