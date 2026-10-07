// Content that appears on more than one page.
import groupCounseling from '../assets/images/group-counseling.jpg';
import training from '../assets/images/training.jpg';
import camp from '../assets/images/camp.jpg';

export const problems = [
  'Natural disasters',
  'Chronic socio-economic hardship',
  'Political instability and social strife',
  'Limited mental health infrastructure',
  'Cultural stigma around mental health',
];

export const services = [
  {
    slug: 'group-counseling',
    title: 'Group Counseling',
    summary: 'Mobile, faith-based counseling sessions held in local churches and schools.',
    image: groupCounseling,
    alt: 'Participants in a group counseling session sit on mats with eyes closed in a calm, open-air room',
    position: 'center',
    details: [
      'Our counseling team travels to community institutions like churches and schools, bringing care to the places people already gather.',
    ],
  },
  {
    slug: 'training-workshops',
    title: 'Training Workshops',
    summary: 'Equipping church leaders and educators to support their communities.',
    image: training,
    alt: 'A House of Hope trainer leads a mental health workshop for a room of local educators and leaders',
    position: 'center 60%',
    details: [
      'We equip church leaders and educators with the tools and training they need to better support the people in their care.',
      'Every trained leader extends our reach, creating a network of care and support that goes far beyond our center’s walls.',
    ],
  },
  {
    slug: 'camps-retreats',
    title: 'Camps & Retreats',
    summary: 'Youth camps that build leadership, resilience and faith in the next generation.',
    image: camp,
    alt: 'A large group of youth camp participants gathered outdoors on a court beneath tall trees',
    position: 'center 60%',
    details: [
      'Our youth camps and retreats give young people space to grow in faith, build friendships and develop as leaders.',
      'Through teaching, worship and mental health awareness, we help build resilient communities from the next generation up.',
    ],
  },
];

export const testimonials = [
  {
    quote: 'I understand my students better now — each has their own way of responding and their own way of learning.',
    name: 'Wisly Fils-Aimé',
    role: 'Teacher',
  },
  {
    quote: 'We let children know they matter, that they are capable, and that they can achieve great things in society.',
    name: 'Kedner Joseph',
    role: 'Teacher',
  },
  {
    quote: 'House of Hope should have come to the school sooner — we hope this support continues for as long as possible.',
    name: '',
    role: 'Member of the School Administration',
  },
];

export const beliefs = [
  { title: 'Jesus changes everything', text: 'Jesus Christ is Lord, Savior and the source of lasting hope.' },
  { title: 'The Bible guides us', text: 'God’s Word is our foundation for truth, wisdom and life.' },
  { title: 'Grace is a gift', text: 'We are saved by God’s grace through faith, turning to Him in repentance, confession and baptism.' },
  { title: 'Unity matters', text: 'We seek to follow Christ together.' },
  { title: 'Healing is holistic', text: 'God cares for the whole person: emotional, mental, physical and spiritual.' },
  { title: 'Counseling is ministry', text: 'We combine professional care with prayer, Scripture and the compassion of Christ.' },
  { title: 'Every life has value', text: 'All people are created in God’s image and are worthy of dignity and love.' },
  { title: 'Faith grows through service', text: 'We grow by walking with Christ and serving others in His name.' },
];
