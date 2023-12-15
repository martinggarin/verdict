import images from '../assets/images';
import {
  AboutHomeIcon,
  BusinessIcon,
  DataStorageIcon,
  DiscoveryIcon,
  FeedbackIcon,
  FlingIcon,
  FriendIcon,
  LanguageIcon,
  LocationLight,
  LoveIcon,
  NotificationIcon,
  PersonalInfoIcon,
  PrivacyIcon,
  SecurityIcon,
} from '../assets/svgs';
import {
  CalenderBg,
  LocationDark,
  LocationIcon,
  ProfileBg,
  TicketBg,
  WalletBg,
} from '../assets/svgs';
import strings from '../i18n/strings';
import {StackNav} from '../navigation/NavigationKeys';

function location (latitude, longitude) {
  this.latitude = latitude;
  this.longitude = longitude;
};
function review(stars, title, text) {
  this.stars = stars;
  this.title = title;
  this.text = text;
};
function hour(day, open, close){
  this.day = day;
  this.open = open;
  this.close = close;
};
function item(
      id,
      name,
      location,
      address,
      frontPic,
      pics,
      type,
      description,
      tags,
      reviews,
      stars,
      price,
      hours,
      ){
  this.id = id;
  this.name = name;
  this.location = location;
  this.address = address;
  this.frontPic = frontPic;
  this.pics = pics;
  this.type = type;
  this.description = description;
  this.tags = tags;
  this.reviews = reviews;
  this.stars = stars;
  this.price = price;
  this.hours = hours;
};

const r_name = [
  "Spitz",
  "Mirate",
  "Palermo Italian Restaurant",
  "Alcove",
  "Ye Rustic Inn",
  "Home Restaurant",
  "Casita Del Campo",
  "Kava Kulture LA",
  "All Time",
  "HomeState",
]
const r_address = [
  "1725 Hillhurst Ave, Los Angeles, CA 90027",
  "1712 N Vermont Ave, Los Angeles, CA 90027",
  "1920 Hyperion Ave, Los Angeles, CA 90027"
]
const r_pic = [
  "https://staycationlosangeles.files.wordpress.com/2012/08/photo-17.jpg",
  "https://cdn.vox-cdn.com/thumbor/jBYfJHbJvkzAABAXQ0ZX95zZ0zg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24041827/Mi_rate_Rendering_2.jpeg",
  "https://usmenuguide.com/wp-content/uploads/2021/09/palermoitalianrestaurantlosangeles23.jpg",
  "https://lamag.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk3NTU1OTU0NTgwMjAzMjAw/alcove-dinner-outside-los-feliz-courtesy-of.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/wN2bKa7SagdZRULiUImy8A/348s.jpg",
  "https://resizer.otstatic.com/v2/photos/wide-xlarge/25701990.jpg",
  "https://thepridela-enki-v2.s3.amazonaws.com/wp-content/uploads/2020/07/IMG-9597-1.jpg",
  "https://static.wixstatic.com/media/3c05bc_faf0ed4c538b496599b8de3ed523ce78~mv2.jpg/v1/fill/w_640,h_508,al_b,q_80,usm_0.66_1.00_0.01,enc_auto/3c05bc_faf0ed4c538b496599b8de3ed523ce78~mv2.jpg",
  "https://media.cntraveler.com/photos/5e0fc67b5a0316000864ec69/16:9/w_2560%2Cc_limit/AllTime-LosAngeles-ChristopherMorley-2020.jpg",
  "https://infatuation.imgix.net/media/reviews/homestate/banners/Homestate-LA_0.jpg"
]
const r_description = [
  "Low-key joint, part of a local chain, serves doner kebabs, fries & other Turkish street eats.",
  "Mexican restaurant",
  "Vibrant, family-friendly spot serves up pizza & old-school Italian classics in a no-frills setting.",
  "American food & craft drinks in cozy, historic bungalows with a leafy patio & an upbeat vibe.",
  "Lively tavern draws a crowd with budget drinks & bar bites, including wings & weekend breakfast.",
  "Hipsters fill up on heaping plates of homestyle comfort grub plus cocktails on the big heated patio.",
  "Local fixture since 1962 serves classic Mexican fare in colorful space with indoor or patio seating",
  "Coffee Shop",
  "Relaxed neighborhood eatery with a patio & modern dining area offering breakfast, lunch & dinner.",
  "Warm, rustic cafe fixing up tacos, queso & Texas-inspired chow for breakfast & lunch.",
]
//use object
const r_loc = [
  location(34.102706, -118.287922),
  location(34.10243859274528, -118.29168363590027),
  location(34.09780488597817, -118.27493577127343)
]
const reviews = [
  review(5, "Awesome Mexican spot!", "Especially love their breakfast tacos. We stopped by around 10a on a Sunday before the brunch rush and there was plenty of outdoor seating. …"),
  review(4, "Ok spot!", "Sunday before the brunch rush and there was plenty of outdoor seating. …"),
  review(1, "Terrible spot!", "We stopped by around 10a on a Sunday before the brunch rush and there was plenty of outdoor seating. …"),

]
const hours = [
  hour('mon', '8am', '10pm'),
  hour('tue', '8am', '10pm'),
  hour('wed', '8am', '10pm'),
  hour('thu', '8am', '10pm'),
  hour('fri', '8am', '10pm'),
  hour('sat', '8am', '10pm'),
  hour('sun', '8am', '10pm')
]

let i = 10;
const itemData = [
  
    {id: 0,
    name: r_name[0],
    location: r_loc[0%3],
    address: r_address[0%3],
    frontPic: r_pic[0],
    pics: r_pic,
    type: "Restaurant",
    description: r_description[0],
    tags: ["fun", "eat-in", "vegetarian"],
    reviews: reviews,
    stars: 4,
    price: "$$$",
    hours: hours },
    {id: 4,
      name: r_name[4],
      location: r_loc[4%3],
      address: r_address[4%3],
      frontPic: r_pic[4],
      pics: r_pic,
      type: "Restaurant",
      description: r_description[4],
      tags: ["fun", "eat-in", "vegetarian"],
      reviews: reviews,
      stars: 4,
      price: "$$$",
      hours: hours },
      {id: 1,
        name: r_name[1],
        location: r_loc[1%3],
        address: r_address[1%3],
        frontPic: r_pic[1],
        pics: r_pic,
        type: "Restaurant",
        description: r_description[1],
        tags: ["fun", "eat-in", "vegetarian"],
        reviews: reviews,
        stars: 4,
        price: "$$$",
        hours: hours },
        {id: 2,
          name: r_name[2],
          location: r_loc[2%3],
          address: r_address[2%3],
          frontPic: r_pic[2],
          pics: r_pic,
          type: "Restaurant",
          description: r_description[2],
          tags: ["fun", "eat-in", "vegetarian"],
          reviews: reviews,
          stars: 4,
          price: "$$$",
          hours: hours },
          {id: 3,
            name: r_name[3],
            location: r_loc[3%3],
            address: r_address[3%3],
            frontPic: r_pic[3],
            pics: r_pic,
            type: "Restaurant",
            description: r_description[3],
            tags: ["fun", "eat-in", "vegetarian"],
            reviews: reviews,
            stars: 4,
            price: "$$$",
            hours: hours },
]

function item_factory ( i=9){

  while (i > 0) {
    item(
      i,
      r_name[i],
      r_loc[i%3],
      r_address[i%3],
      pic[i],
      pic,
      "Restaurant",
      description[i],
      ["fun", "eat-in", "vegetarian"],
      reviews,
      4,
      "$$$",
      hours
    )
    i = i - 1
  }
}


const OnBoardingSlide = [
  {
    text: strings.onBoardingDesc1,
    image: images.onBordingImg1,
  },
  {
    text: strings.onBoardingDesc2,
    image: images.onBordingImg2,
  },
  {
    text: strings.onBoardingDesc3,
    image: images.onBordingImg3,
  },
];

const GenderData = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Other', value: 'other'},
];

const CountryData = [
  {label: 'India', value: 'india'},
  {label: 'USA', value: 'usa'},
  {label: 'UK', value: 'uk'},
  {label: 'Canada', value: 'canada'},
  {label: 'Australia', value: 'australia'},
  {label: 'New Zealand', value: 'newzealand'},
  {label: 'South Africa', value: 'southafrica'},
];

const ProfileSetting = [
  {
    id: 8,
    title: strings.settings,
    icon: 'cog-outline',
    route: StackNav.Settings,
  },
  {
    id: 9,
    title: strings.darkMode,
    icon: 'contrast-outline',
    rightIcon: 'rightIcon',
  },
  {
    id: 11,
    title: strings.helpCenter,
    icon: 'information-circle-outline',
    route: StackNav.HelpCenter,
  },
  {
    id: 12,
    title: strings.inviteFriends,
    icon: 'people-outline',
    route: StackNav.InviteFriends,
  },
];

const contactUsData = [
  {
    id: 1,
    title: 'Customer Service',
    icon: 'headset',
  },
  {
    id: 2,
    title: 'WhatsApp',
    icon: 'whatsapp',
  },
  {
    id: 3,
    title: 'Website',
    icon: 'google-earth',
  },
  {
    id: 4,
    title: 'Facebook',
    icon: 'facebook',
  },
  {
    id: 5,
    title: 'Instagram',
    icon: 'instagram',
  },
  {
    id: 6,
    title: 'Twitter',
    icon: 'twitter',
  },
];

const helperCategoryData = [
  'General',
  'Account',
  'Payment',
  'Subscription',
  'Others',
];

const helperData = [
  {
    title: 'What is Evone?',
    description:
      'Anistream is a streaming service that offers a wide variety of anime titles.',
  },
  {
    title: 'How to use Evone?',
    description:
      'You can sign up for Anistream by downloading the app from the App Store or Google Play Store.',
  },
  {
    title: 'How do I cancel a orders product?',
    description:
      'You can remove anime on your wishlist by clicking the heart icon on the anime details page.',
  },
  {
    title: 'Is Evone free to use?',
    description:
      'You can subscribe to premium by clicking the premium button on the home page.',
  },
  {
    title: 'How to add promo on Evone?',
    description:
      'You can download anime by clicking the download icon on the anime details page.',
  },
  {
    title: 'How to unsubscribe from premium?',
    description:
      'You can unsubscribe from premium by clicking the premium button on the home page.',
  },
];

const languageData = [
  {
    title: 'Suggested',
    data: [{lnName: 'English(US)'}, {lnName: 'English(UK)'}],
  },
  {
    title: 'Language',
    data: [
      {
        lnName: 'English',
      },
      {
        lnName: 'Spanish',
      },
      {
        lnName: 'French',
      },
      {
        lnName: 'German',
      },
      {
        lnName: 'Italian',
      },
      {
        lnName: 'Portuguese',
      },
      {
        lnName: 'Russian',
      },
      {
        lnName: 'Turkish',
      },
      {
        lnName: 'Chinese',
      },
      {
        lnName: 'Japanese',
      },
      {
        lnName: 'Korean',
      },
      {
        lnName: 'Arabic',
      },
      {
        lnName: 'Hindi',
      },
      {
        lnName: 'Indonesian',
      },
      {
        lnName: 'Malay',
      },
      {
        lnName: 'Thai',
      },
    ],
  },
];

const privacyPolicyData = [
  {
    title: strings.privacyPolicy1,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy2,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy3,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy2,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy3,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy2,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy3,
    description: strings.privacyPolicyDesc,
  },
];

const userDetail = [
  {
    name: 'Dracel Steward',
    description: 'arianacooper | 24.5M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
  },
  {
    name: 'John Doe',
    description: 'johndoe | 10M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Jane Smith',
    description: 'janesmith | 5M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHVzZXIlMjBwcm9maWxlJTIwd2l0aCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Bob Johnson',
    description: 'bobjohnson | 2M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Sara Wilson',
    description: 'sarawilson | 1M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Tom Wilson',
    description: 'tomwilson | 500K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Alice Brown',
    description: 'alicebrown | 250K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Emily Davis',
    description: 'emilydavis | 100K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Mark Lee',
    description: 'marklee | 50K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Laura Lee',
    description: 'lauralee | 10K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
];

const chatData = [
  {
    id: 1,
    message: 'Hi Theresa, good morning 😄',
    time: '12:00',
    type: 'sender',
  },
  {
    id: 2,
    message: 'Hi there, good morning! How are you?',
    time: '12:01',
    type: 'receiver',
  },
  {
    id: 3,
    message: 'I am doing well, thanks for asking 😊',
    time: '12:02',
    type: 'sender',
  },
  {
    id: 4,
    message: "That's great to hear! What are your plans for the day?",
    time: '12:03',
    type: 'receiver',
  },
  {
    id: 5,
    message:
      'I have a few meetings scheduled, but otherwise just working from home. How about you?',
    time: '12:04',
    type: 'sender',
  },
  {
    id: 1,
    message: 'Hi Theresa, good morning 😄',
    time: '12:00',
    type: 'sender',
  },
  {
    id: 2,
    message: 'Hi there, good morning! How are you?',
    time: '12:01',
    type: 'receiver',
  },
  {
    id: 3,
    message: 'I am doing well, thanks for asking 😊',
    time: '12:02',
    type: 'sender',
  },
  {
    id: 4,
    message: "That's great to hear! What are your plans for the day?",
    time: '12:03',
    type: 'receiver',
  },
  {
    id: 5,
    message:
      'I have a few meetings scheduled, but otherwise just working from home. How about you?',
    time: '12:04',
    type: 'sender',
  },
  {
    id: 1,
    message: 'Hi Theresa, good morning 😄',
    time: '12:00',
    type: 'sender',
  },
  {
    id: 2,
    message: 'Hi there, good morning! How are you?',
    time: '12:01',
    type: 'receiver',
  },
  {
    id: 3,
    message: 'I am doing well, thanks for asking 😊',
    time: '12:02',
    type: 'sender',
  },
  {
    id: 4,
    message: "That's great to hear! What are your plans for the day?",
    time: '12:03',
    type: 'receiver',
  },
  {
    id: 5,
    message:
      'I have a few meetings scheduled, but otherwise just working from home. How about you?',
    time: '12:04',
    type: 'sender',
  },
];

const walletData = [
  {
    id: 1,
    product: 'Suga Leather Shoes',
    price: '$100',
    date: 'Dec 15, 2024 | 12:00 PM',
    status: strings.orders,
    productImage: images.shoes1,
  },
  {
    id: 2,
    product: strings.topUpWallet,
    price: '$150',
    date: 'Jan 05, 2023 | 12:50 PM',
    status: strings.topUp,
  },
  {
    id: 3,
    product: 'Werolla Cardigans',
    price: '$385',
    date: 'Dec 14, 2024 | 11:34 PM',
    status: strings.orders,
    productImage: images.clothe3,
  },
  {
    id: 4,
    product: 'Mini Leather Bag',
    price: '$653',
    date: 'Dec 13, 2024 | 03:23 AM',
    status: strings.orders,
    productImage: images.bag1,
  },
  {
    id: 5,
    product: strings.topUpWallet,
    price: '$600',
    date: 'Dec 12, 2024 | 02:50 AM',
    status: strings.topUp,
  },
  {
    id: 6,
    product: 'Puma Leather Shoes',
    price: '$356',
    date: 'Dec 03, 2024 | 02:34 PM',
    status: strings.orders,
    productImage: images.shoes2,
  },
  {
    id: 7,
    product: 'Sony Microphone',
    price: '$354',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.mic1,
  },
  {
    id: 8,
    product: 'Gucci Leather Bag',
    price: '$100',
    date: 'Jul 15, 2023 | 12:00 PM',
    status: strings.orders,
    productImage: images.bag2,
  },
  {
    id: 9,
    product: strings.topUpWallet,
    price: '$560',
    date: 'Jan 05, 2023 | 12:50 PM',
    status: strings.topUp,
  },
];

const mostPopularData = [strings.male, strings.female, strings.random];

const notificationData = [
  {
    id: 1,
    image: <CalenderBg />,
    title: 'Booking Successful!',
    description: '20 Dec, 2022 | 20:49 PM',
    desc: "You have successfully booked the Art Workshops. The event will be held on Sunday, December 22, 2022, 13.00 - 14.00 PM. Don't forget to activate your reminder. Enjoy the event!",
    isNew: true,
  },
  {
    id: 2,
    image: <CalenderBg />,
    title: 'Booking Successful!',
    description: '19 Dec, 2022 | 12:00 PM',
    desc: "You have successfully booked the National Music Festival. The event will be held on Monday, December 24, 2022, 18.00 - 23.00 PM. Don't forget to activate your reminder. Enjoy the event!",
    isNew: true,
  },
  {
    id: 3,
    image: <TicketBg />,
    title: 'New Services Available!',
    description: '14 Dec, 2022 | 12:00 PM',
    desc: 'You can now make multiple book events at once. You can also cancel your booking.',
  },
  {
    id: 4,
    image: <WalletBg />,
    title: 'Credit Card Connected!',
    description: '12 Dec, 2022 | 12:00 PM',
    desc: 'Your credit card has been successfully linked with Eveno. Enjoy our service.',
  },
  {
    id: 5,
    image: <ProfileBg />,
    title: 'Account Setup Successful!',
    description: '12 Dec, 2022 | 12:00 PM',
    desc: 'Your account creation is successful, you can now experience our services.',
  },
];

const reviewsData = [
  {
    id: 1,
    name: 'John Duew',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',

    rating: 5,
    review:
      'The item is very good, my son likes it very much and plays every day 💯💯💯',
    like: 352,
    time: '6 days ago',
  },
  {
    id: 2,
    name: 'Jane Doe',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',

    rating: 4,
    review:
      'The item is good, but it could be better. My son likes it, but he has some complaints about it.',
    like: 100,
    time: '2 days ago',
  },
  {
    id: 3,
    name: 'Bob Smith',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',

    rating: 3,
    review:
      'The item is okay, but it could be better. My son likes it, but he has some complaints about it.',
    like: 50,
    time: '1 day ago',
  },
  {
    id: 4,
    name: 'Alice Johnson',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',

    rating: 2,
    review:
      'The item is not very good. My son does not like it very much and does not play with it often.',
    like: 10,
    time: '1 hour ago',
  },
  {
    id: 5,
    name: 'Tom Hanks',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',

    rating: 1,
    review:
      'The item is terrible. My son hates it and does not play with it at all.',
    like: 1,
    time: '1 minute ago',
  },
  {
    id: 6,
    name: 'Megan Fox',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',

    rating: 5,
    review:
      'The item is very good, my son likes it very much and plays every day 💯💯💯',
    like: 352,
    time: '6 days ago',
  },
  {
    id: 7,
    name: 'Samantha Smith',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',

    rating: 4,
    review:
      'The item is good, but it could be better. My daughter likes it, but she has some complaints about it.',
    like: 200,
    time: '3 days ago',
  },
  {
    id: 8,
    name: 'David Johnson',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',

    rating: 3,
    review:
      'The item is okay, but it could be better. My daughter likes it, but she has some complaints about it.',
    like: 100,
    time: '2 days ago',
  },
  {
    id: 9,
    name: 'Emily Brown',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',

    rating: 2,
    review:
      'The item is not very good. My daughter does not like it very much and does not play with it often.',
    like: 20,
    time: '1 day ago',
  },
  {
    id: 10,
    name: 'Olivia Davis',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',

    rating: 1,
    review:
      'The item is terrible. My daughter hates it and does not play with it at all.',
    like: 2,
    time: '1 hour ago',
  },
  {
    id: 11,
    name: 'Sophia Wilson',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',

    rating: 5,
    review:
      'The item is very good, my daughter likes it very much and plays every day 💯💯💯',
    like: 352,
    time: '6 days ago',
  },
];

const popularEventData = [
  {
    id: 1,
    image: images.concert1,
    title: 'Art Workshops',
    time: 'Fri, Dec 20 • 13.00 - 15.00 AM',
    address: 'Avenue City, New York',
    isFree: true,
  },
  {
    id: 2,
    image: images.concert2,
    title: 'Photography Exhibit',
    time: 'Sat, Feb 15 • 14.00 - 16.00 PM',
    address: 'West Side Gallery, Los Angeles',
  },

  {
    id: 3,
    image: images.concert3,
    title: 'Pottery Workshop',
    time: 'Sun, Mar 12 • 10.00 - 12.00 AM',
    address: 'Central Park, New York',
  },

  {
    id: 4,
    image: images.concert4,
    title: 'Calligraphy Class',
    time: 'Tue, Apr 18 • 18.00 - 20.00 PM',
    address: 'Downtown Studio, San Francisco',
    isFree: true,
  },

  {
    id: 5,
    image: images.concert5,
    title: 'Oil Painting Workshop',
    time: 'Thu, Jun 22 • 11.00 - 13.00 AM',
    address: 'Art Museum, Boston',
  },

  {
    id: 6,
    image: images.concert6,
    title: 'Sculpture Exhibit',
    time: 'Sat, Jul 8 • 15.00 - 17.00 PM',
    address: 'City Hall Gallery, Seattle',
  },

  {
    id: 7,
    image: images.concert7,
    title: 'Watercolor Painting Class',
    time: 'Mon, Aug 14 • 16.00 - 18.00 PM',
    address: 'Art School, Chicago',
  },

  {
    id: 8,
    image: images.concert8,
    title: 'Sketching Workshop',
    time: 'Wed, Sep 27 • 13.00 - 15.00 PM',
    address: 'Community Center, Denver',
  },

  {
    id: 9,
    image: images.concert9,
    title: 'Digital Art Exhibit',
    time: 'Fri, Oct 6 • 17.00 - 19.00 PM',
    address: 'Art Gallery, Miami',
    isFree: true,
  },

  {
    id: 10,
    image: images.concert10,
    title: 'Glass Blowing Workshop',
    time: 'Sun, Nov 12 • 12.00 - 14.00 PM',
    address: 'Glass Studio, Portland',
  },

  {
    id: 11,
    image: images.concert11,
    title: 'Mixed Media Art Class',
    time: 'Tue, Dec 19 • 10.00 - 12.00 AM',
    address: 'Art Studio, Austin',
  },
];

const inboxChatData = [
  {
    id: 1,
    userName: 'Rom Nick',
    message: 'I just completed it 😂😂',
    time: '20.00',
    notification: 2,
    image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
  },
  {
    id: 2,
    userName: 'Emma Thompson',
    message: 'Great job! 👍',
    time: '20.05',
    notification: 1,
    image: 'https://randomuser.me/api/portraits/med/women/12.jpg',
  },
  {
    id: 3,
    userName: 'John Doe',
    message: 'What did you complete?',
    time: '20.10',
    image: 'https://randomuser.me/api/portraits/med/men/98.jpg',
  },
  {
    id: 4,
    userName: 'Emily Johnson',
    message: 'Congratulations! 🎉',
    time: '20.15',
    notification: 3,
    image: 'https://randomuser.me/api/portraits/med/women/45.jpg',
  },
  {
    id: 5,
    userName: 'Alex Davis',
    message: 'Well done, Rom Nick!',
    time: '20.20',
    image: 'https://randomuser.me/api/portraits/med/men/23.jpg',
  },
  {
    id: 6,
    userName: 'Olivia Smith',
    message: "That's awesome!",
    time: '20.25',
    image: 'https://randomuser.me/api/portraits/med/women/34.jpg',
  },
  {
    id: 7,
    userName: 'Michael Wilson',
    message: 'Keep up the good work!',
    time: '20.30',
    notification: 1,
    image: 'https://randomuser.me/api/portraits/med/men/56.jpg',
  },
  {
    id: 8,
    userName: 'Sophia Anderson',
    message: "I'm proud of you!",
    time: '20.35',
    image: 'https://randomuser.me/api/portraits/med/women/67.jpg',
  },
  {
    id: 9,
    userName: 'William Brown',
    message: "You're crushing it!",
    time: '20.40',
    image: 'https://randomuser.me/api/portraits/med/men/81.jpg',
  },
  {
    id: 10,
    userName: 'Ava Taylor',
    message: 'Impressive work, Rom Nick!',
    time: '20.45',
    notification: 1,
    image: 'https://randomuser.me/api/portraits/med/women/99.jpg',
  },
];

const activeUserImage = [
  'https://randomuser.me/api/portraits/med/men/7.jpg',
  'https://randomuser.me/api/portraits/med/women/2.jpg',
  'https://randomuser.me/api/portraits/med/men/8.jpg',
  'https://randomuser.me/api/portraits/med/women/4.jpg',
  'https://randomuser.me/api/portraits/med/men/3.jpg',
  'https://randomuser.me/api/portraits/med/women/31.jpg',
  'https://randomuser.me/api/portraits/med/men/53.jpg',
  'https://randomuser.me/api/portraits/med/women/17.jpg',
  'https://randomuser.me/api/portraits/med/men/13.jpg',
  'https://randomuser.me/api/portraits/med/women/9.jpg',
  'https://randomuser.me/api/portraits/med/men/64.jpg',
  'https://randomuser.me/api/portraits/med/women/18.jpg',
  'https://randomuser.me/api/portraits/med/men/97.jpg',
  'https://randomuser.me/api/portraits/med/women/23.jpg',
  'https://randomuser.me/api/portraits/med/men/35.jpg',
  'https://randomuser.me/api/portraits/med/women/42.jpg',
  'https://randomuser.me/api/portraits/med/men/14.jpg',
  'https://randomuser.me/api/portraits/med/women/43.jpg',
];

const settingsData = [
  {
    id: 1,
    title: strings.personalInformation,
    icon: <PersonalInfoIcon />,
    route: StackNav.PersonalInfo,
  },
  {
    id: 2,
    title: strings.discoverySettings,
    icon: <DiscoveryIcon />,
    route: StackNav.DiscoverySettings,
  },
  {
    id: 3,
    title: strings.privacyAndPermissions,
    icon: <PrivacyIcon />,
    route: StackNav.PrivacyPolicy,
  },
  {
    id: 4,
    title: strings.notification,
    icon: <NotificationIcon />,
    route: StackNav.NotificationSetting,
  },
  {
    id: 4,
    title: strings.security,
    icon: <SecurityIcon />,
    route: StackNav.Security,
  },
  {
    id: 4,
    title: strings.dataAndStorage,
    icon: <DataStorageIcon />,
  },
  {
    id: 4,
    title: strings.feedback,
    icon: <FeedbackIcon />,
  },
  {
    id: 4,
    title: strings.language,
    icon: <LanguageIcon />,
    route: StackNav.Language,
    value: true,
  },
  {
    id: 4,
    title: strings.aboutHume,
    icon: <AboutHomeIcon />,
  },
];

const homeData = [
  {
    id: 14,
    name: 'Ava',
    age: 29,
    picUrl: images.userImage14,
    category: 'Graphic Designer',
    distance: '3.7 Km',
    about:
      'Hey, I’m Ava, a 29-year-old graphic designer based in New York City. I love bringing ideas to life through visual storytelling and creating engaging designs.',
    interest: [
      '🎨 Design',
      '📸 Photography',
      '🎧 Music',
      '🌆 Urban exploration',
    ],
    type: 'Libra',
  },
  {
    id: 13,
    name: 'Olivia',
    age: 30,
    picUrl: images.userImage13,
    category: 'Chef',
    distance: '1.1 Km',
    about:
      "Bonjour! I'm Olivia, a 30-year-old chef from Paris. I'm passionate about culinary arts and creating delightful dishes that bring joy to people.",
    interest: ['🍳 Cooking', '🍷 Wine tasting', '🌍 Travel', '🎭 Theater'],
    type: 'Cancer',
  },
  {
    id: 11,
    name: 'Sophia',
    age: 32,
    picUrl: images.userImage11,
    category: 'Photographer',
    distance: '2.3 Km',
    about:
      "Hey there! I'm Sophia, a 32-year-old photographer based in New York City. I love capturing special moments and creating memories.",
    interest: ['📷 Photography', '🎨 Art', '🌿 Nature', '🎶 Music'],
    type: 'Virgo',
  },
  {
    id: 12,
    name: 'Emma',
    age: 24,
    picUrl: images.userImage12,
    category: 'Software Engineer',
    distance: '6.5 Km',
    about:
      "Hi there! I'm Emma, a 24-year-old software engineer living in San Francisco. I love coding and creating innovative solutions to real-world problems.",
    interest: ['💻 Programming', '🎮 Gaming', '🎧 Music', '🏋️ Fitness'],
    type: 'Aquarius',
  },
  {
    id: 15,
    name: 'Emily',
    age: 24,
    picUrl: images.userImage2,
    category: 'Blogger',
    distance: '3.2 Km',
    about:
      'Hi, I am Emily, a 24-year-old blogger from London. I enjoy writing about fashion, beauty, and travel.',
    interest: ['💄 Makeup', '👗 Fashion', '🌍 Travel', '📷 Photography'],
    type: 'Gemini',
  },
  {
    id: 16,
    name: 'Sophia',
    age: 27,
    picUrl: images.userImage3,
    category: 'Photographer',
    distance: '1.8 Km',
    about:
      'Hey there! I am Sophia, a 27-year-old photographer based in New York City. I love capturing special moments and creating memories.',
    interest: ['📸 Photography', '🌆 City Life', '🎶 Music', '📚 Books'],
    type: 'Libra',
  },
  {
    id: 17,
    name: 'Olivia',
    age: 26,
    picUrl: images.userImage4,
    category: 'Artist',
    distance: '4.5 Km',
    about:
      'Greetings! I am Olivia, a 26-year-old artist residing in Paris. I find inspiration in nature and love creating beautiful paintings.',
    interest: ['🎨 Art', '🌺 Nature', '🍷 Fine Dining', '✈️ Travel'],
    type: 'Leo',
  },
  {
    id: 18,
    name: 'Ava',
    age: 28,
    picUrl: images.userImage5,
    category: 'Chef',
    distance: '2.1 Km',
    about:
      'Bonjour! I am Ava, a 28-year-old chef from Italy. Cooking is my passion, and I enjoy experimenting with flavors and creating delicious dishes.',
    interest: ['🍳 Cooking', '🍕 Food', '🍷 Wine Tasting', '🌻 Gardening'],
    type: 'Cancer',
  },
  {
    id: 19,
    name: 'Mia',
    age: 23,
    picUrl: images.userImage6,
    category: 'Fashion Designer',
    distance: '3.9 Km',
    about:
      'Hello! I am Mia, a 23-year-old fashion designer based in Tokyo. I love creating unique and stylish outfits that make people feel confident.',
    interest: ['👗 Fashion', '🎀 Shopping', '🎵 Music', '📸 Photography'],
    type: 'Aquarius',
  },
  {
    id: 20,
    name: 'Isabella',
    age: 29,
    picUrl: images.userImage7,
    category: 'Software Engineer',
    distance: '5.6 Km',
    about:
      'Hi there, I am Isabella, a 29-year-old software engineer from San Francisco. I enjoy coding and creating innovative solutions to real-world problems.',
    interest: ['💻 Programming', '📚 Technology', '🏞️ Hiking', '🎮 Gaming'],
    type: 'Virgo',
  },
  {
    id: 21,
    name: 'Charlotte',
    age: 26,
    picUrl: images.userImage8,
    category: 'Architect',
    distance: '2.7 Km',
    about:
      'Greetings! I am Charlotte, a 26-year-old architect from Barcelona. I love designing beautiful and sustainable structures that blend with their surroundings.',
    interest: [
      '🏛️ Architecture',
      '🌆 City Exploration',
      '📷 Photography',
      '📚 Reading',
    ],
    type: 'Capricorn',
  },
  {
    id: 22,
    name: 'Amelia',
    age: 25,
    picUrl: images.userImage9,
    category: 'Fitness Trainer',
    distance: '1.5 Km',
    about:
      'Hello! I am Amelia, a 25-year-old fitness trainer from Sydney. I am passionate about helping people achieve their health and wellness goals.',
    interest: [
      '💪 Fitness',
      '🥗 Healthy Living',
      '🏋️‍♀️ Weightlifting',
      '🚴‍♀️ Cycling',
    ],
    type: 'Aries',
  },
  {
    id: 23,
    name: 'Harper',
    age: 27,
    picUrl: images.userImage10,
    category: 'Writer',
    distance: '4.8 Km',
    about:
      'Hey! I am Harper, a 27-year-old writer from Toronto. I love crafting stories and exploring different genres in my writing.',
    interest: ['✍️ Writing', '📚 Reading', '🎸 Music', '🏔️ Outdoor Adventures'],
    type: 'Pisces',
  },
  {
    id: 24,
    name: 'John Doe',
    age: 25,
    picUrl: images.concert1,
    category: 'YouTuber',
    distance: '2.4 Km',
    about:
      'I am single 25 years old. I love fitness, traveling, & going out to play. You can find me in Jakarta.',
    interest: [
      '💪 Gym & Fitness',
      '🍔 Food & Drink',
      '🌇 Travel',
      '👩🏻‍🎨 Art ',
      '🎨 Design ',
    ],
    type: 'Sagitarius',
  },
  {
    id: 2,
    name: 'Emily Johnson',
    age: 21,
    picUrl: images.concert2,
    category: 'Musician',
    distance: '1.2 Km',
    about:
      'I am a passionate musician who loves playing the guitar and writing songs. Catch me performing at local cafes.',
    interest: ['🎵 Music', '🎸 Guitar', '🎤 Songwriting'],
    type: 'Libra',
  },
  {
    id: 3,
    name: 'Alex Davis',
    age: 23,
    picUrl: images.userImage15,
    category: 'Writer',
    distance: '3.4 Km',
    about:
      'I am an aspiring writer currently working on my first novel. I enjoy reading and exploring new storytelling techniques.',
    interest: ['📚 Reading', '✍️ Writing', '🌟 Storytelling'],
    type: 'Gemini',
  },
  {
    id: 4,
    name: 'Michael Wilson',
    age: 25,
    picUrl: images.userImage16,
    category: 'TikToker',
    distance: '4.6 Km',
    about:
      'I am a TikToker creating entertaining content to make people laugh. Join me for some fun challenges and dances.',
    interest: ['🎥 TikTok', '🤣 Comedy', '💃 Dance'],
    type: 'Leo',
  },
  {
    id: 5,
    name: 'Emma Taylor',
    age: 22,
    picUrl: images.userImage17,
    category: 'Actor',
    distance: '5.6 Km',
    about:
      'I am a dedicated actor with a passion for theater. Catch me performing in local productions and bringing characters to life.',
    interest: ['🎭 Acting', '🎬 Theater', '🎥 Film'],
    type: 'Virgo',
  },
  {
    id: 6,
    name: 'Olivia Smith',
    age: 24,
    picUrl: images.concert6,
    category: 'Singer',
    distance: '6.6 Km',
    about:
      'I am a singer-songwriter with a soulful voice. Join me for intimate live performances and heartfelt melodies.',
    interest: ['🎤 Singing', '🎵 Songwriting', '🎶 Live Performances'],
    type: 'Pisces',
  },
  {
    id: 7,
    name: 'William Brown',
    age: 26,
    picUrl: images.concert7,
    category: 'Dancer',
    distance: '7.6 Km',
    about:
      'I am a professional dancer specializing in various dance styles. Catch me at dance competitions and workshops.',
    interest: ['💃 Dancing', '🎶 Music', '🕺 Choreography'],
    type: 'Aquarius',
  },
  {
    id: 8,
    name: 'Sophia Anderson',
    age: 27,
    picUrl: images.concert8,
    category: 'Comedian',
    distance: '8.6 Km',
    about:
      'I am a stand-up comedian who loves making people laugh. Join me for hilarious shows and witty punchlines.',
    interest: ['😂 Comedy', '🎙️ Stand-up', '🤣 Humor'],
    type: 'Aries',
  },
  {
    id: 9,
    name: 'James Jones',
    age: 28,
    picUrl: images.concert9,
    category: 'Actor',
    distance: '9.6 Km',
    about:
      'I am an actor passionate about both stage and screen. Catch me in local theater productions and independent films.',
    interest: ['🎭 Acting', '🎥 Film', '🎬 Theater'],
    type: 'Cancer',
  },
  {
    id: 10,
    name: 'Mia Garcia',
    age: 29,
    picUrl: images.concert10,
    category: 'Singer',
    distance: '10.6 Km',
    about:
      'I am a versatile singer with a love for different music genres. Join me for soulful performances and melodic harmonies.',
    interest: ['🎤 Singing', '🎵 Music', '🎶 Performances'],
    type: 'Capricorn',
  },
  {
    id: 11,
    name: 'Liam Miller',
    age: 30,
    picUrl: images.concert11,
    category: 'Dancer',
    distance: '11.6 Km',
    about:
      'I am a professional dancer specializing in hip-hop and urban styles. Catch me at dance battles and workshops.',
    interest: ['💃 Dancing', '🎵 Music', '🕺 Hip-Hop'],
    type: 'Scorpio',
  },
];

const userInterestData = [
  '🎵 Music',
  '🎤 Singing',
  '🖼️ Art',
  '🎙️ Stand-up',
  '🤣 Humor',
];

const newMatchData = [
  {
    id: 1,
    name: 'John Doe',
    age: 25,
    picUrl: images.userImage1,
    category: 'YouTuber',
    distance: '2.4 Km',
    about:
      'I am single 25 years old. I love fitness, traveling, & going out to play. You can find me in Jakarta.',
    interest: [
      '💪 Gym & Fitness',
      '🍔 Food & Drink',
      '🌇 Travel',
      '👩🏻‍🎨 Art ',
      '🎨 Design ',
    ],
    type: 'Sagitarius',
  },
  {
    id: 2,
    name: 'Emily',
    age: 24,
    picUrl: images.userImage2,
    category: 'Blogger',
    distance: '3.2 Km',
    about:
      'Hi, I am Emily, a 24-year-old blogger from London. I enjoy writing about fashion, beauty, and travel.',
    interest: ['💄 Makeup', '👗 Fashion', '🌍 Travel', '📷 Photography'],
    type: 'Gemini',
  },
  {
    id: 3,
    name: 'Sophia',
    age: 27,
    picUrl: images.userImage3,
    category: 'Photographer',
    distance: '1.8 Km',
    about:
      'Hey there! I am Sophia, a 27-year-old photographer based in New York City. I love capturing special moments and creating memories.',
    interest: ['📸 Photography', '🌆 City Life', '🎶 Music', '📚 Books'],
    type: 'Libra',
  },
  {
    id: 4,
    name: 'Olivia',
    age: 26,
    picUrl: images.userImage4,
    category: 'Artist',
    distance: '4.5 Km',
    about:
      'Greetings! I am Olivia, a 26-year-old artist residing in Paris. I find inspiration in nature and love creating beautiful paintings.',
    interest: ['🎨 Art', '🌺 Nature', '🍷 Fine Dining', '✈️ Travel'],
    type: 'Leo',
  },
  {
    id: 5,
    name: 'Ava',
    age: 28,
    picUrl: images.userImage5,
    category: 'Chef',
    distance: '2.1 Km',
    about:
      'Bonjour! I am Ava, a 28-year-old chef from Italy. Cooking is my passion, and I enjoy experimenting with flavors and creating delicious dishes.',
    interest: ['🍳 Cooking', '🍕 Food', '🍷 Wine Tasting', '🌻 Gardening'],
    type: 'Cancer',
  },
  {
    id: 6,
    name: 'Mia',
    age: 23,
    picUrl: images.userImage6,
    category: 'Fashion Designer',
    distance: '3.9 Km',
    about:
      'Hello! I am Mia, a 23-year-old fashion designer based in Tokyo. I love creating unique and stylish outfits that make people feel confident.',
    interest: ['👗 Fashion', '🎀 Shopping', '🎵 Music', '📸 Photography'],
    type: 'Aquarius',
  },
  {
    id: 7,
    name: 'Isabella',
    age: 29,
    picUrl: images.userImage7,
    category: 'Software Engineer',
    distance: '5.6 Km',
    about:
      'Hi there, I am Isabella, a 29-year-old software engineer from San Francisco. I enjoy coding and creating innovative solutions to real-world problems.',
    interest: ['💻 Programming', '📚 Technology', '🏞️ Hiking', '🎮 Gaming'],
    type: 'Virgo',
  },
  {
    id: 8,
    name: 'Charlotte',
    age: 26,
    picUrl: images.userImage8,
    category: 'Architect',
    distance: '2.7 Km',
    about:
      'Greetings! I am Charlotte, a 26-year-old architect from Barcelona. I love designing beautiful and sustainable structures that blend with their surroundings.',
    interest: [
      '🏛️ Architecture',
      '🌆 City Exploration',
      '📷 Photography',
      '📚 Reading',
    ],
    type: 'Capricorn',
  },
  {
    id: 9,
    name: 'Amelia',
    age: 25,
    picUrl: images.userImage9,
    category: 'Fitness Trainer',
    distance: '1.5 Km',
    about:
      'Hello! I am Amelia, a 25-year-old fitness trainer from Sydney. I am passionate about helping people achieve their health and wellness goals.',
    interest: [
      '💪 Fitness',
      '🥗 Healthy Living',
      '🏋️‍♀️ Weightlifting',
      '🚴‍♀️ Cycling',
    ],
    type: 'Aries',
  },
  {
    id: 10,
    name: 'Harper',
    age: 27,
    picUrl: images.userImage10,
    category: 'Writer',
    distance: '4.8 Km',
    about:
      'Hey! I am Harper, a 27-year-old writer from Toronto. I love crafting stories and exploring different genres in my writing.',
    interest: ['✍️ Writing', '📚 Reading', '🎸 Music', '🏔️ Outdoor Adventures'],
    type: 'Pisces',
  },
];

const yourMatchData = [
  {
    id: 11,
    name: 'Sophia',
    age: 32,
    picUrl: images.userImage11,
    category: 'Photographer',
    distance: '2.3 Km',
    about:
      "Hey there! I'm Sophia, a 32-year-old photographer based in New York City. I love capturing special moments and creating memories.",
    interest: ['📷 Photography', '🎨 Art', '🌿 Nature', '🎶 Music'],
    type: 'Virgo',
  },
  {
    id: 12,
    name: 'Emma',
    age: 24,
    picUrl: images.userImage12,
    category: 'Software Engineer',
    distance: '6.5 Km',
    about:
      "Hi there! I'm Emma, a 24-year-old software engineer living in San Francisco. I love coding and creating innovative solutions to real-world problems.",
    interest: ['💻 Programming', '🎮 Gaming', '🎧 Music', '🏋️ Fitness'],
    type: 'Aquarius',
  },
  {
    id: 13,
    name: 'Olivia',
    age: 30,
    picUrl: images.userImage13,
    category: 'Chef',
    distance: '1.1 Km',
    about:
      "Bonjour! I'm Olivia, a 30-year-old chef from Paris. I'm passionate about culinary arts and creating delightful dishes that bring joy to people.",
    interest: ['🍳 Cooking', '🍷 Wine tasting', '🌍 Travel', '🎭 Theater'],
    type: 'Cancer',
  },
  {
    id: 14,
    name: 'Ava',
    age: 29,
    picUrl: images.userImage14,
    category: 'Graphic Designer',
    distance: '3.7 Km',
    about:
      'Hey, I’m Ava, a 29-year-old graphic designer based in New York City. I love bringing ideas to life through visual storytelling and creating engaging designs.',
    interest: [
      '🎨 Design',
      '📸 Photography',
      '🎧 Music',
      '🌆 Urban exploration',
    ],
    type: 'Libra',
  },
  {
    id: 15,
    name: 'Isabella',
    age: 26,
    picUrl: images.userImage3,
    category: 'Entrepreneur',
    distance: '10.2 Km',
    about:
      "Hi, I'm Isabella, a 26-year-old entrepreneur from Sydney. I'm passionate about building and scaling innovative startups that make a positive impact.",
    interest: [
      '💡 Entrepreneurship',
      '📚 Reading',
      '🌱 Sustainability',
      '🏄‍♀️ Surfing',
    ],
    type: 'Scorpio',
  },
];

const selectCountry = [
  {
    dial_code: '+93',
    name: 'Afghanistan',
    flag: '🇦🇫',
  },
  {
    dial_code: '+994',
    name: 'Azerbaijan',
    flag: '🇦🇿',
  },
  {
    dial_code: '+973',
    name: 'Bahrain',
    flag: '🇧🇭',
  },
  {
    dial_code: '+880',
    name: 'Bangladesh',
    flag: '🇧🇩',
  },
  {
    dial_code: '+975',
    name: 'Bhutan',
    flag: '🇧🇹',
  },
  {
    dial_code: '+673',
    name: 'Brunei Darussalam',
    flag: '🇧🇳',
  },
  {
    dial_code: '+855',
    name: 'Cambodia',
    flag: '🇰🇭',
  },
  {
    dial_code: '+86',
    name: 'China',
    flag: '🇨🇳',
  },
  {
    dial_code: '+357',
    name: 'Cyprus',
    flag: '🇨🇾',
  },
  {
    dial_code: '+995',
    name: 'Georgia',
    flag: '🇬🇪',
  },
  {
    dial_code: '+852',
    name: 'Hong Kong',
    flag: '🇭🇰',
  },
  {
    dial_code: '+91',
    name: 'India',
    flag: '🇮🇳',
  },
  {
    dial_code: '+62',
    name: 'Indonesia',
    flag: '🇮🇩',
  },
  {
    dial_code: '+98',
    name: 'Iran',
    flag: '🇮🇷',
  },
  {
    dial_code: '+964',
    name: 'Iraq',
    flag: '🇮🇶',
  },
  {
    dial_code: '+972',
    name: 'Israel',
    flag: '🇮🇱',
  },
  {
    dial_code: '+81',
    name: 'Japan',
    flag: '🇯🇵',
  },
  {
    dial_code: '+962',
    name: 'Jordan',
    flag: '🇯🇴',
  },
  {
    dial_code: '+7',
    name: 'Kazakhstan',
    flag: '🇰🇿',
  },
  {
    dial_code: '+965',
    name: 'Kuwait',
    flag: '🇰🇼',
  },
  {
    dial_code: '+996',
    name: 'Kyrgyzstan',
    flag: '🇰🇬',
  },
  {
    dial_code: '+856',
    name: 'Laos',
    flag: '🇱🇦',
  },
  {
    dial_code: '+961',
    name: 'Lebanon',
    flag: '🇱🇧',
  },
  {
    dial_code: '+853',
    name: 'Macao',
    flag: '🇲🇴',
  },
  {
    dial_code: '+60',
    name: 'Malaysia',
    flag: '🇲🇾',
  },
  {
    dial_code: '+960',
    name: 'Maldives',
    flag: '🇲🇻',
  },
  {
    dial_code: '+976',
    name: 'Mongolia',
    flag: '🇲🇳',
  },
  {
    dial_code: '+95',
    name: 'Myanmar',
    flag: '🇲🇲',
  },
  {
    dial_code: '+977',
    name: 'Nepal',
    flag: '🇳🇵',
  },
  {
    dial_code: '+850',
    name: 'North Korea',
    flag: '🇰🇵',
  },
  {
    dial_code: '+968',
    name: 'Oman',
    flag: '🇴🇲',
  },
  {
    dial_code: '+92',
    name: 'Pakistan',
    flag: '🇵🇰',
  },
  {
    dial_code: '+970',
    name: 'Palestine',
    flag: '🇵🇸',
  },
  {
    dial_code: '+63',
    name: 'Philippines',
    flag: '🇵🇭',
  },
  {
    dial_code: '+974',
    name: 'Qatar',
    flag: '🇶🇦',
  },
  {
    dial_code: '+7',
    name: 'Russia',
    flag: '🇷🇺',
  },
  {
    dial_code: '+966',
    name: 'Saudi Arabia',
    flag: '🇸🇦',
  },
  {
    dial_code: '+65',
    name: 'Singapore',
    flag: '🇸🇬',
  },
  {
    dial_code: '+82',
    name: 'South Korea',
    flag: '🇰🇷',
  },
  {
    dial_code: '+94',
    name: 'Sri Lanka',
    flag: '🇱🇰',
  },
  {
    dial_code: '+886',
    name: 'Taiwan',
    flag: '🇹🇼',
  },
  {
    dial_code: '+992',
    name: 'Tajikistan',
    flag: '🇹🇯',
  },
  {
    dial_code: '+66',
    name: 'Thailand',
    flag: '🇹🇭',
  },
  {
    dial_code: '+90',
    name: 'Turkey',
    flag: '🇹🇷',
  },
  {
    dial_code: '+993',
    name: 'Turkmenistan',
    flag: '🇹🇲',
  },
  {
    dial_code: '+971',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
  },
  {
    dial_code: '+998',
    name: 'Uzbekistan',
    flag: '🇺🇿',
  },
  {
    dial_code: '+84',
    name: 'Vietnam',
    flag: '🇻🇳',
  },
  {
    dial_code: '+967',
    name: 'Yemen',
    flag: '🇾🇪',
  },
];

const AddPhotosData = [
  {
    id: 1,
    image: '',
  },
  {
    id: 2,
    image: '',
  },
  {
    id: 3,
    image: '',
  },
  {
    id: 4,
    image: '',
  },
];

const renderChips = [
  '🎮 Gaming',
  '💃🏻 Dancing & Singing',
  '🎨 Painting',
  '🎧 Music',
  '📚 Reading',
  '🏋️ Fitness',
  '🍳 Cooking',
  '🎥 Watching Movies',
  '🚴‍♀️ Cycling',
  '⚽️ Football',
  '🏀 Basketball',
  '🎣 Fishing',
  '🌺 Gardening',
  '🚗 Traveling',
  '🎯 Archery',
  '🏊‍♂️ Swimming',
  '🎲 Board Games',
  '🔍 Puzzles',
  '🎸 Playing Guitar',
  '✈️ Aviation',
];

const idolData = [
  {
    id: 1,
    icon: <LoveIcon />,
    title: 'Love',
  },
  {
    id: 2,
    icon: <FriendIcon />,
    title: 'Friendship',
  },
  {
    id: 3,
    icon: <FlingIcon />,
    title: 'Fling',
  },
  {
    id: 4,
    icon: <BusinessIcon />,
    title: 'Business',
  },
];

export {
  r_address,
  r_loc,
  r_name,
  r_pic,
  itemData,
  ProfileSetting,
  GenderData,
  OnBoardingSlide,
  contactUsData,
  helperCategoryData,
  helperData,
  languageData,
  privacyPolicyData,
  userDetail,
  chatData,
  walletData,
  mostPopularData,
  notificationData,
  reviewsData,
  popularEventData,
  CountryData,
  selectCountry,
  inboxChatData,
  activeUserImage,
  settingsData,
  homeData,
  userInterestData,
  yourMatchData,
  newMatchData,
  AddPhotosData,
  renderChips,
  idolData,
};
