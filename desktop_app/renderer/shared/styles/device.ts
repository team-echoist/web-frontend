const sizes = {
  mobileS: '320px',
  mobileM: '390px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
  heightS: '480px', 
  heightM: '800px', 
  heightL: '1080px', 
};

export const maxDevices = {
  mobileS: `(max-device-width: ${sizes.mobileS})`,
  mobileM: `(max-device-width: ${sizes.mobileM})`,
  mobileL: `(max-device-width: ${sizes.mobileL})`,
  tablet: `(max-device-width: ${sizes.tablet})`,
  laptop: `(max-device-width: ${sizes.laptop})`,
  laptopL: `(max-device-width: ${sizes.laptopL})`,
  desktop: `(max-device-width: ${sizes.desktop})`,
};

export const minDevices = {
  mobileS: `(min-device-width: ${sizes.mobileS})`,
  mobileM: `(min-device-width: ${sizes.mobileM})`,
  mobileL: `(min-device-width: ${sizes.mobileL})`,
  tablet: `(min-device-width: ${sizes.tablet})`,
  laptop: `(min-device-width: ${sizes.laptop})`,
  laptopL: `(min-device-width: ${sizes.laptopL})`,
  desktop: `(min-device-width: ${sizes.desktop})`,
};

export const maxHeights = {
  heightS: `(max-height: ${sizes.heightS})`,
  heightM: `(max-height: ${sizes.heightM})`,
  heightL: `(max-height: ${sizes.heightL})`,
};

export const minHeights = {
  heightS: `(min-height: ${sizes.heightS})`,
  heightM: `(min-height: ${sizes.heightM})`,
  heightL: `(min-height: ${sizes.heightL})`,
};