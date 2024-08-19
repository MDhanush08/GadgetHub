
import productImg01 from "../Images/laptop-1.png";
import productImg02 from "../Images/laptop-2.png";
import productImg03 from "../Images/laptop-3.png";

import productImg04 from "../Images/laptop-4.png";
import productImg05 from "../Images/laptop-5.png";
import productImg06 from "../Images/laptop-6.png";
import productImg07 from "../Images/laptop-7.png";
   

import productImg08 from "../Images/camera-1.png";
import productImg09 from "../Images/camera-2.png";
import productImg10 from "../Images/camera-3.png";
import productImg11 from "../Images/camera-4.png";


import phone01 from "../Images/phone-01.jpg";
import phone02 from "../Images/phone-02.jpg";
import phone03 from "../Images/phone-03.png";

import phone04 from "../Images/oneplus.png";
import phone05 from "../Images/phone-05.jpg";    
import phone06 from "../Images/phone-06.jpg";
import phone08 from "../Images/phone-08.png";



import watch01 from "../Images/watch-01.jpg";
import watch02 from "../Images/watch-02.jpg";
import watch03 from "../Images/watch-03.jpg";
import watch04 from "../Images/watch-04.jpg";

import wireless01 from "../Images/wireless-01.png";
import wireless02 from "../Images/wireless-02.png";
import wireless03 from "../Images/wireless-03.png";
import wireless04 from "../Images/wireless-04.png";

import laptopSlide from "../Images/laptop-5.png";
import watchSlide from "../Images/watch-07.png";

export const SliderData = [
  {
      id: 1,
      title: "50% Off on First Purchase",
      desc: "Shop smart and save big! Enjoy a seamless shopping experience with an exclusive 50% discount on your first order. Your perfect shopping spree starts here.",
      cover: laptopSlide,
  },
  { 
      id: 2,
      title: "50% Off on Your First Order",
      desc: "Shop on the go and save big! Get an exclusive 50% discount on your first purchase using our mobile app. Easy, fast, and secure shopping at your fingertips.",
      cover: phone08,
     
  },
  { 
      id: 3,
      title: "50% Off on Wireless Headsets",
      desc: "Upgrade your audio experience with our top-rated wireless headsets. Enjoy a 50% discount on your first purchase and immerse yourself in crystal-clear sound, wire-free.",
      cover: wireless01,
  },
  {
      id: 4,
      title: "50% Off on Your First Smartwatch",
      desc: "Elevate your style and stay connected with our premium smartwatches. Get 50% off your first purchase and experience innovation on your wrist.",
      cover: watchSlide,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Shipping",
    subtitle: "Delivered to your door at no extra cost.",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Safe Payment",
    subtitle: "Secure transactions for your peace of mind.",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Timely Delivery",
    subtitle: "Your orders arrive on schedule, every time.",
    bg: "#e2f2b2",
  },
  {
    icon: <ion-icon name="headset"></ion-icon>,
    title: " Back Guarantee",
    subtitle: "Confidence in every purchase your satisfaction guaranteed.",
    bg: "#d6e5fb",
  },
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Gray Acer laptop ",
    imgUrl: productImg01,
    category: "laptop",
    price: 193,
    discount:30,
    shortDesc:
      "Elegant and powerful, the Gray Acer Laptop is perfect for work and play.",
    description:
      "Experience seamless computing with the Gray Acer Laptop. Featuring a high-resolution display and robust processing power, it delivers exceptional performance for all your tasks. The laptop’s sleek gray finish adds a touch of elegance, while its lightweight design ensures easy portability. Whether you're working on projects, streaming content, or gaming, this laptop provides the speed and efficiency you need. Enjoy enhanced connectivity and long-lasting battery life, making it a perfect companion for both professional and personal use.",
    reviews: [
      {
        rating: 4.7,
        text: "Great performance and sleek design. Exceeded my expectations!.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Black Samsung Laptop ",
    imgUrl: productImg02,
    category: "laptop",
    price: 245,
    discount:20,
    shortDesc:
      "Sleek and powerful, the Black Samsung Laptop delivers high performance and style.",
    description:
      "Upgrade your tech with the Black Samsung Laptop. Featuring a sleek black design and high-performance components, it offers impressive speed and reliability for all your computing needs. With a vibrant display and long battery life, this laptop is perfect for professionals and students alike.",
    reviews: [
      {
        rating: 4.8,
        text: "Impressive speed and stylish design. Perfect for both work and entertainment!.",
      },
      {
        rating: 4.8,
        text: "Excellent performance and a sleek, modern look. Ideal for both work and play!.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Camera Sony",
    imgUrl: productImg09,
    category: "camera",
    price: 749,
    discount:15,
    shortDesc:
      "Capture every moment with the Camera Sony, offering high-quality imaging and advanced features.",
    description:
      "Enhance your photography with the Camera Sony. This high-quality camera delivers sharp, vibrant images with its advanced sensor and lens technology. Featuring a range of shooting modes and customizable settings, it’s perfect for both beginners and experienced photographers who seek exceptional performance and versatility.",
    reviews: [
      {
        rating: 4.6,
        text: "Great image quality and versatile features. A solid choice for any photographer.",
      },
      {
        rating: 4.9,
        text: "The Camera Sony provides excellent performance and easy-to-use controls. Highly recommended for capturing stunning photos.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Gray CCTV Camera",
    imgUrl: productImg10,
    category: "camera",
    price: 139,
    discount:35,
    shortDesc:
      "Ensure security with the Gray CCTV Camera, featuring high-resolution video and reliable performance.",
    description:
      "Enhance your security setup with the Gray CCTV Camera. Designed for reliable surveillance, it offers high-resolution video capture and night vision capabilities, ensuring clear footage around the clock. Its sleek gray design integrates seamlessly with any environment, making it a practical choice for home or business security.",
    reviews: [
      {
        rating: 4.6,
        text: "The Gray CCTV Camera delivers excellent surveillance and is easy to set up. Great value for peace of mind!",
      },
      {
        rating: 4.9,
        text: "Clear video quality and dependable performance. Perfect for any security system.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 299,
    discount:10,
    shortDesc:
      "Powerful and stylish, the Realme 8 offers impressive performance and a sleek design.",
    description:
      "Discover the Realme 8, featuring a vibrant Super AMOLED display and a powerful MediaTek Helio G95 processor. With its stylish design, versatile camera system, and long-lasting battery, this smartphone delivers excellent performance for both everyday tasks and multimedia enjoyment. Ideal for users looking for a balance of style and functionality.",
    reviews: [
      {
        rating: 4.8,
        text: "Great performance and an attractive design. A fantastic value for its price.",
      },
      {
        rating: 4.9,
        text: "The Realme 8 offers solid features and a sleek look—perfect for daily use and entertainment!",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "One Plus Nord",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    discount:5,
    shortDesc:
      "Experience high-end performance and sleek design with the OnePlus Nord.",
    description:
      "Meet the OnePlus Nord, featuring a vibrant AMOLED display and a powerful Snapdragon 765G processor. With its stylish design, versatile quad-camera system, and smooth 90Hz refresh rate, this smartphone delivers a premium experience at an affordable price. Perfect for those who want cutting-edge technology and performance.",
    reviews: [
      {
        rating: 4.8,
        text: "Excellent performance and a sleek design. A great choice for those who want high-end features without breaking the bank.",
      },
      {
        rating: 4.9,
        text: "The OnePlus Nord offers superb value with its advanced specs and stylish look. Highly recommended for a great smartphone experience.",
      },
    ],
    avgRating: 4.8,
  },

]

export const products = [
  {
    id: "01",
    productName: "Gray Acer Laptop",
    imgUrl: productImg01,
    category: "laptop",
    price: 299,
    shortDesc:
      "Elegant and powerful, the Gray Acer Laptop is perfect for work and play.",
    description:
      "Experience seamless computing with the Gray Acer Laptop. Featuring a high-resolution display and robust processing power, it delivers exceptional performance for all your tasks. The laptop’s sleek gray finish adds a touch of elegance, while its lightweight design ensures easy portability. Whether you're working on projects, streaming content, or gaming, this laptop provides the speed and efficiency you need. Enjoy enhanced connectivity and long-lasting battery life, making it a perfect companion for both professional and personal use.",
    reviews: [
      {
        rating: 4.7,
        text: "Great performance and sleek design. Exceeded my expectations!.",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Black Samsung Laptop ",
    imgUrl: productImg02,
    category: "laptop",
    price: 245,
    shortDesc:
      "Sleek and powerful, the Black Samsung Laptop delivers high performance and style.",
    description:
      "Upgrade your tech with the Black Samsung Laptop. Featuring a sleek black design and high-performance components, it offers impressive speed and reliability for all your computing needs. With a vibrant display and long battery life, this laptop is perfect for professionals and students alike.",
    reviews: [
      {
        rating: 4.8,
        text: "Impressive speed and stylish design. Perfect for both work and entertainment!.",
      },
      {
        rating: 4.8,
        text: "Excellent performance and a sleek, modern look. Ideal for both work and play!.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Black HP  Laptop",
    imgUrl: productImg03,
    category: "laptop",
    price: 220,
    shortDesc:
      "Stylish and efficient, the Black HP Laptop combines modern design with robust performance.",
    description:
      "Discover the perfect balance of style and functionality with the Black HP Laptop. This sleek device offers a powerful processor and high-resolution display, making it ideal for both productivity and entertainment. Its elegant black finish and durable build ensure it looks as good as it performs, while the long battery life keeps you going throughout the day.",
    reviews: [
      {
        rating: 4.6,
        text: "Fantastic performance with a sleek design. A great choice for daily tasks and more!.",
      },
      {
        rating: 4.9,
        text: "Reliable and stylish. This Black HP Laptop meets all my needs with ease.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: "Black Samsung Laptop ",
    imgUrl: productImg02,
    category: "laptop",
    price: 245,
    shortDesc:
      "Sleek and powerful, the Black Samsung Laptop delivers high performance and style.",
    description:
      "Upgrade your tech with the Black Samsung Laptop. Featuring a sleek black design and high-performance components, it offers impressive speed and reliability for all your computing needs. With a vibrant display and long battery life, this laptop is perfect for professionals and students alike.",
    reviews: [
      {
        rating: 4.8,
        text: "Impressive speed and stylish design. Perfect for both work and entertainment!.",
      },
      {
        rating: 4.8,
        text: "Excellent performance and a sleek, modern look. Ideal for both work and play!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Lenovo Laptop Black",
    imgUrl: productImg04,
    category: "laptop",
    price: 275,
    shortDesc:
      "Elegant and high-performing, the Lenovo Laptop Black is perfect for work and play.",
    description:
      "Upgrade to the Lenovo Laptop Black for a blend of style and power. With its sleek black design, this laptop features a fast processor and a crisp display, making it ideal for both professional tasks and entertainment. Its durable build and long battery life ensure reliable performance throughout your day.",
    reviews: [
      {
        rating: 4.6,
        text: "Stylish and efficient, with impressive performance. Great for any task!.",
      },
      {
        rating: 4.9,
        text: "The Lenovo Laptop Black offers both elegance and power—highly recommended!.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "ASUS Laptop",
    imgUrl: productImg05,
    category: "laptop",
    price: 299,
    shortDesc:
      "Powerful and sleek, the ASUS Laptop delivers top performance with a modern design.",
    description:
      "Experience exceptional computing with the ASUS Laptop. Featuring a sleek, modern design and a powerful processor, this laptop handles everything from work tasks to multimedia effortlessly. Its high-resolution display and long battery life make it an excellent choice for both professionals and casual users.",
    reviews: [
      {
        rating: 4.6,
        text: "Outstanding performance and a stylish look. Ideal for all your computing needs!.",
      },
      {
        rating: 4.9,
        text: "The ASUS Laptop combines power and elegance. Perfect for both work and leisure!.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Air MacBook Pro Laptop Apple",
    imgUrl: productImg06,
    category: "laptop",
    price: 1299,
    shortDesc:
      "Powerful and ultra-slim, the Air MacBook Pro Laptop Apple combines advanced performance with a sleek design.",
    description:
      "Experience the ultimate in portable computing with the Air MacBook Pro Laptop Apple. Its ultra-slim profile houses a powerful processor and a stunning Retina display, offering both speed and clarity for all your tasks. With its robust build quality and long-lasting battery, this MacBook Pro is perfect for professionals and creatives alike who need performance on the go.",
    reviews: [
      {
        rating: 4.6,
        text: "Exceptional performance and an ultra-slim design. A top choice for professionals.",
      },
      {
        rating: 4.9,
        text: "The Air MacBook Pro offers unmatched speed and elegance. Worth every penny!.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Black Nikon DSLR camera,",
    imgUrl: productImg08,
    category: "camera",
    price: 899,
    shortDesc:
      "Capture stunning images with the Black Nikon DSLR Camera, offering advanced features and excellent performance.",
    description:
      "Elevate your photography with the Black Nikon DSLR Camera. This high-performance camera combines advanced features with a sleek design, providing exceptional image quality and versatility. With its powerful sensor, fast autofocus, and multiple shooting modes, it's perfect for both amateur and professional photographers looking to capture every detail with precision.",
    reviews: [
      {
        rating: 4.6,
        text: "Impressive image quality and advanced features. Ideal for serious photographers.",
      },
      {
        rating: 4.9,
        text: "The Black Nikon DSLR Camera delivers excellent performance and is easy to use. Highly recommended!",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "Xiaomi Mi Notebook Air 12.5 Laptop",
    imgUrl: productImg07,
    category: "laptop",
    price: 499,
    shortDesc:
      "Compact and powerful, the Xiaomi Mi Notebook Air 12.5 Laptop offers sleek design and robust performance.",
    description:
      "Experience portability and power with the Xiaomi Mi Notebook Air 12.5 Laptop. Its compact design makes it perfect for on-the-go use, while its powerful performance and high-resolution display ensure smooth multitasking and vibrant visuals. Ideal for professionals and students who need a reliable and stylish laptop for everyday tasks.",
    reviews: [
      {
        rating: 4.6,
        text: "Compact, yet powerful—perfect for on-the-go productivity and entertainment.",
      },
      {
        rating: 4.9,
        text: "The Xiaomi Mi Notebook Air 12.5 offers impressive performance in a sleek package. Great value for the price!.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Camera Sony",
    imgUrl: productImg09,
    category: "camera",
    price: 749,
    shortDesc:
      "Capture every moment with the Camera Sony, offering high-quality imaging and advanced features.",
    description:
      "Enhance your photography with the Camera Sony. This high-quality camera delivers sharp, vibrant images with its advanced sensor and lens technology. Featuring a range of shooting modes and customizable settings, it’s perfect for both beginners and experienced photographers who seek exceptional performance and versatility.",
    reviews: [
      {
        rating: 4.6,
        text: "Great image quality and versatile features. A solid choice for any photographer.",
      },
      {
        rating: 4.9,
        text: "The Camera Sony provides excellent performance and easy-to-use controls. Highly recommended for capturing stunning photos.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Gray CCTV Camera",
    imgUrl: productImg10,
    category: "camera",
    price: 139,
    shortDesc:
      "Ensure security with the Gray CCTV Camera, featuring high-resolution video and reliable performance.",
    description:
      "Enhance your security setup with the Gray CCTV Camera. Designed for reliable surveillance, it offers high-resolution video capture and night vision capabilities, ensuring clear footage around the clock. Its sleek gray design integrates seamlessly with any environment, making it a practical choice for home or business security.",
    reviews: [
      {
        rating: 4.6,
        text: "The Gray CCTV Camera delivers excellent surveillance and is easy to set up. Great value for peace of mind!.",
      },
      {
        rating: 4.9,
        text: "Clear video quality and dependable performance. Perfect for any security system.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "Apple iPhone 12 Pro",
    imgUrl: phone01,
    category: "mobile",
    price: 999,
    shortDesc:
      "Experience cutting-edge technology with the Apple iPhone 12 Pro, featuring a stunning display and powerful performance.",
    description:
      "Discover the Apple iPhone 12 Pro, designed to deliver exceptional performance and style. With its vibrant Super Retina XDR display, A14 Bionic chip, and pro-grade camera system, this smartphone offers a superior user experience. Capture stunning photos and videos, enjoy smooth performance, and stay connected with the latest features in a sleek, durable design",
    reviews: [
      {
        rating: 4.8,
        text: "Outstanding performance and a beautiful display. A top choice for those who demand the best.",
      },
      {
        rating: 4.9,
        text: "The Apple iPhone 12 Pro combines power and elegance. An excellent upgrade with impressive features!",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "25",
    productName: "Flash black Nikon Camera ",
    imgUrl: productImg11,
    category: "camera",
    price: 1199,
    shortDesc:
      "Capture every moment with the Flash Black Nikon Camera, offering superior image quality and advanced features.",
    description:
      "Elevate your photography with the Flash Black Nikon Camera. Designed for professionals and enthusiasts alike, this camera delivers stunning image quality with its high-resolution sensor and advanced autofocus system. The sleek black finish adds a touch of sophistication, while its versatile features and robust build ensure reliable performance in various shooting conditions.",
    reviews: [
      {
        rating: 4.6,
        text: "Exceptional image quality and advanced features. Ideal for both professional and amateur photographers.",
      },
      {
        rating: 4.9,
        text: "The Flash Black Nikon Camera offers great performance and a stylish design. A top choice for capturing detailed, vibrant photos",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "11",
    productName: "Apple iPhone 12 Max",
    imgUrl: phone02,
    category: "mobile",
    price: 1199,
    shortDesc:
      "Experience unmatched performance and a stunning display with the Apple iPhone 12 Max.",
    description:
      "Upgrade to the Apple iPhone 12 Max and enjoy a large Super Retina XDR display, powerful A14 Bionic chip, and an advanced camera system. This flagship model offers superior performance, high-quality photos, and smooth user experience in a sleek and durable design. Perfect for those who demand the best in mobile technology.",
    reviews: [
      {
        rating: 4.8,
        text: "Top-notch performance and a gorgeous display. An excellent choice for tech enthusiasts.",
      },
      {
        rating: 4.9,
        text: "The Apple iPhone 12 Max combines power and elegance perfectly. Worth every penny for its features and performance.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "12",
    productName: "Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 299,
    shortDesc:
      "Powerful and stylish, the Realme 8 offers impressive performance and a sleek design.",
    description:
      "Discover the Realme 8, featuring a vibrant Super AMOLED display and a powerful MediaTek Helio G95 processor. With its stylish design, versatile camera system, and long-lasting battery, this smartphone delivers excellent performance for both everyday tasks and multimedia enjoyment. Ideal for users looking for a balance of style and functionality.",
    reviews: [
      {
        rating: 4.8,
        text: "Great performance and an attractive design. A fantastic value for its price.",
      },
      {
        rating: 4.9,
        text: "The Realme 8 offers solid features and a sleek look—perfect for daily use and entertainment!.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "13",
    productName: "One Plus Nord",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    shortDesc:
      "Experience high-end performance and sleek design with the OnePlus Nord.",
    description:
      "Meet the OnePlus Nord, featuring a vibrant AMOLED display and a powerful Snapdragon 765G processor. With its stylish design, versatile quad-camera system, and smooth 90Hz refresh rate, this smartphone delivers a premium experience at an affordable price. Perfect for those who want cutting-edge technology and performance.",
    reviews: [
      {
        rating: 4.8,
        text: "Excellent performance and a sleek design. A great choice for those who want high-end features without breaking the bank.",
      },
      {
        rating: 4.9,
        text: "The OnePlus Nord offers superb value with its advanced specs and stylish look. Highly recommended for a great smartphone experience.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
    productName: "Apple iPhone 13 Pro",
    imgUrl: phone05,
    category: "mobile",
    price: 1099,
    shortDesc:
      "Discover the Apple iPhone 13 Pro, offering cutting-edge performance and an advanced camera system.",
    description:
      "Experience the pinnacle of smartphone technology with the Apple iPhone 13 Pro. Featuring a stunning Super Retina XDR display, the powerful A15 Bionic chip, and a pro-grade triple-camera system, this phone delivers exceptional performance, clarity, and versatility. With its sleek design and advanced features, it's perfect for those who demand the best in mobile innovation.",
    reviews: [
      {
        rating: 4.8,
        text: "Exceptional performance and a gorgeous display. The iPhone 13 Pro is a top-tier choice for tech enthusiasts.",
      },
      {
        rating: 4.9,
        text: "The Apple iPhone 13 Pro combines advanced features with a sleek design. Worth every penny for its incredible performance and capabilities!.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Samsung Galaxy S22",
    imgUrl: phone06,
    category: "mobile",
    price: 799,
    shortDesc:
      "Powerful and elegant, the Samsung Galaxy S22 offers top-notch performance and a stunning display.",
    description:
      "Experience premium smartphone technology with the Samsung Galaxy S22. Featuring a dynamic AMOLED 2X display, the powerful Exynos 2100 processor, and a versatile triple-camera system, this device provides exceptional performance and vibrant visuals. Its sleek design and advanced features make it an excellent choice for both everyday use and immersive multimedia experiences.",
    reviews: [
      {
        rating: 4.8,
        text: "Outstanding performance and a vibrant display. The Samsung Galaxy S22 is a top choice for those seeking a high-quality smartphone",
      },
      {
        rating: 4.9,
        text: "The Galaxy S22 delivers excellent performance and a stylish design. Perfect for users who want the best in mobile technology.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productName: "Rolex Watch",
    imgUrl: watch01,
    category: "watch",
    price: 8999,
    shortDesc:
      "Experience luxury and precision with the timeless Rolex Watch.",
    description:
      "Indulge in elegance with the Rolex Watch, a symbol of craftsmanship and sophistication. Renowned for its precise movement and classic design, this timepiece features a high-quality stainless steel case, a meticulously crafted dial, and a reliable automatic movement. Perfect for those who appreciate luxury and want a watch that stands the test of time.",
    reviews: [
      {
        rating: 4.8,
        text: "A masterpiece of craftsmanship and elegance. The Rolex Watch is a true luxury that combines precision with style.",
      },
      {
        rating: 4.9,
        text: "Exceptional quality and timeless design. The Rolex Watch is worth every investment for those who appreciate fine horology.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "17",
    productName: "Timex Easy Reader Watch",
    imgUrl: watch02,
    category: "watch",
    price: 99,
    shortDesc:
      "Simple and reliable, the Timex Easy Reader Watch offers clear readability and classic design.",
    description:
      "Discover the Timex Easy Reader Watch, designed for effortless timekeeping with its large, easy-to-read numerals and classic styling. Featuring a durable case and a comfortable leather band, this watch combines practicality with timeless design. Ideal for those who value simplicity and reliability in a watch.",
    reviews: [
      {
        rating: 4.8,
        text: "Clear, easy-to-read display and classic design. A great choice for everyday use.",
      },
      {
        rating: 4.9,
        text: "The Timex Easy Reader is practical and stylish—perfect for anyone needing a dependable and straightforward watch.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "18",
    productName: "Rolex Watch",
    imgUrl: watch03,
    category: "watch",
    price: 8999,
    shortDesc:
      "Timeless luxury and exceptional precision define the Rolex Watch.",
    description:
      "Elevate your style with the Rolex Watch, a symbol of elegance and superior craftsmanship. Renowned for its precision, this timepiece features a sophisticated design, high-quality materials, and a reliable movement. With its iconic status and classic aesthetics, the Rolex Watch is perfect for those who seek a blend of luxury and performance",
    reviews: [
      {
        rating: 4.8,
        text: "A symbol of luxury and craftsmanship. The Rolex Watch is both elegant and highly precise.",
      },
      {
        rating: 4.9,
        text: "Impeccable quality and timeless design. Worth every penny for a true luxury experience.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Apple Watch",
    imgUrl: watch04,
    category: "watch",
    price: 399,
    shortDesc:
      "Stay connected and track your health with the sleek and versatile Apple Watch.",
    description:
      "Enhance your lifestyle with the Apple Watch, featuring a modern design and advanced health tracking capabilities. With its high-resolution display, seamless integration with iOS, and a range of health and fitness features, this smartwatch keeps you connected and helps you stay on top of your wellness goals. Its customizable watch faces and various bands ensure it fits any style.",
    reviews: [
      {
        rating: 4.8,
        text: "A stylish and functional smartwatch with excellent health tracking features. Perfect for staying connected and monitoring your fitness.",
      },
      {
        rating: 4.9,
        text: "The Apple Watch offers seamless integration with iOS and a range of useful features. A great choice for tech enthusiasts and health-conscious users alike.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productName: "Beat Studio Wireless",
    imgUrl: wireless01,
    category: "wireless",
    price: 199,
    shortDesc:
      "Experience superior sound quality and comfort with the Beats Studio Wireless headphones.",
    description:
      "Immerse yourself in high-fidelity audio with the Beats Studio Wireless headphones. Featuring active noise cancellation, superior sound quality, and a comfortable over-ear design, these headphones deliver an exceptional listening experience. With a sleek design and long battery life, they are perfect for music lovers and professionals seeking both style and performance.",
    reviews: [
      {
        rating: 4.8,
        text: "Outstanding sound quality and effective noise cancellation. Ideal for immersive listening.",
      },
      {
        rating: 4.9,
        text: "Comfortable and stylish with excellent audio performance. A top choice for high-quality wireless headphones.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "21",
    productName: "Beat EP Headphones",
    imgUrl: wireless03,
    category: "wireless",
    price: 199,
    shortDesc:
      "Enjoy clear sound and comfortable wear with the Beats EP Headphones.",
    description:
      "Experience great sound and durability with the Beats EP Headphones. Featuring a lightweight, on-ear design, these headphones offer clear audio and a comfortable fit for extended listening sessions. With a sturdy build and simple controls, they provide reliable performance for everyday use, making them a great choice for both music enthusiasts and casual listeners.",
    reviews: [
      {
        rating: 4.8,
        text: "Clear sound and comfortable fit at an affordable price. Perfect for daily use.",
      },
      {
        rating: 4.9,
        text: "The Beats EP Headphones deliver solid performance and durability. A great value for quality headphones.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "22",
    productName: "Black Headphones",
    imgUrl: wireless02,
    category: "wireless",
    price: 99,
    shortDesc:
      "Affordable and stylish, the Black Headphones offer clear sound and comfortable wear.",
    description:
      "Enjoy crisp audio and a sleek design with the Black Headphones. Featuring a comfortable over-ear design and adjustable headband, these headphones provide clear sound for music, movies, and calls. Their durable build and versatile styling make them a practical choice for everyday use.",
    reviews: [
      {
        rating: 4.8,
        text: "Great sound quality and comfort for the price. Perfect for everyday listening.",
      },
      {
        rating: 4.9,
        text: "The Black Headphones offer reliable performance and a stylish look. Excellent value for budget-friendly headphones.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "23",
    productName: "Bluetooth Headphones",
    imgUrl: wireless04,
    category: "wireless",
    price: 149,
    shortDesc:
      "Wireless convenience and quality sound come together in the Bluetooth Headphones.",
    description:
      "Experience the freedom of wireless audio with the Bluetooth Headphones. Featuring Bluetooth connectivity, these headphones offer seamless pairing with your devices and impressive sound quality. The ergonomic design ensures a comfortable fit, while the long battery life allows for extended listening sessions. Ideal for both daily commutes and workouts.",
    reviews: [
      {
        rating: 4.8,
        text: "Excellent wireless performance and sound quality. Great for active lifestyles and everyday use.",
      },
      {
        rating: 4.9,
        text: "The Bluetooth Headphones combine convenience and comfort with impressive audio. A reliable choice for wireless listening.",
      },
    ],
    avgRating: 4.8,
  },

];
