// Central place for links and contact details used across the site.
// Update these once and every page picks up the change.

export const site = {
  name: 'House of Hope',
  fullName: 'House of Hope Christian Counseling Center',
  description:
    'House of Hope is a Christian counseling nonprofit serving Haiti. We provide mobile counseling services, mental health training, and youth camps throughout the country.',

  donateUrl: 'https://giving.myamplify.io//app/giving/hopehaitian',
  donateFund: 'House of Hope Christian Counseling',
  newsletterUrl: 'https://house-of-hope-for-haiti.epistle.org/subscribe',
  newsletterArchiveUrl: 'https://house-of-hope-for-haiti.epistle.org/',
  facebookUrl: 'https://www.facebook.com/HouseofHopeC3',
  videoUrl: '/video/house-of-hope-story.mp4',

  phone: '+1 (417) 676-9646',
  phoneHref: 'tel:+14176769646',
  email: 'info@houseofhopec3.org',
  emailHref: 'mailto:info@houseofhopec3.org',

  mailing: {
    payableTo: 'House of Hope Counseling',
    lines: ['Hope Haitian Ministries', 'PO Box 374', 'Boothbay, ME 04537'],
  },

  announcement: {
    show: true,
    text: 'Help us finish the Deschapelles counseling space',
    linkText: 'Give today',
  },
};

export const nav = [
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Our Work', href: '/our-work/' },
  { label: 'Get Involved', href: '/get-involved/' },
];
