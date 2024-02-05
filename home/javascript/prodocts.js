const products = [
  {
    section: undefined,
    items: [
      {
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/vision-pro-kit-witb-202401?wid=624&hei=676&fmt=jpeg&qlt=90&.v=1704489278769',
        name: 'Apple Vision Pro',
        price: 13499,
      },
      {
        image: 'https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15pro__ezc4eofw13yq_large_2x.jpg',
        name: 'Iphone 15 Pro Max - 256G',
        price: 5499,
      },
      {
        image:
          'https://www.apple.com/mideast/iphone-15-pro/c/images/overview/closer-look/all_colors__eppfcocn9mky_large_2x.jpg',
        name: 'Iphone 15 Pro - 256G',
        price: 5499,
      },
      {
        image: 'https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15__dozjxuchowcy_large_2x.jpg',
        name: 'Iphone 15 - 256G',
        price: 3499,
      },
      {
        image: 'https://www.apple.com/v/ipad-mini/q/images/shared-footer/trade_in__d9wg1o0ep9aq_large_2x.jpg',
        name: 'iPad mini - 64G',
        price: 1899,
      }, 
      {
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-comp-air-202210?wid=338&hei=386&fmt=jpeg&qlt=90&.v=1664411153129',
        name: 'iPad Air - 64G',
        price: 2299,
      }, 
      {
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-comp-pro-202210?wid=338&hei=386&fmt=jpeg&qlt=90&.v=1664411153112',
        name: 'iPad Pro 11 inch - 128G',
        price: 3099,
      },
      {
        image: 'https://m.media-amazon.com/images/I/81y0kBq5dUL.__AC_SY445_SX342_QL70_ML2_.jpg',
        name: 'Apple Watch Ultra 2 - 49mm',
        price: 3599,
      },
      {
        image: 'https://m.media-amazon.com/images/I/713PeaGozSL._AC_SX522_.jpg',
        name: 'Apple Watch Series 9 - 45mm',
        price: 2199,
      },
      {
        image: 'https://www.apple.com/mideast/airpods-pro/h/images/overview/magical_case__epo6duhktocy_large_2x.png',
        name: 'AirPods Pro',
        price: 799,
      },
      {
        image: 'hhttps://www.jarir.com/cdn-cgi/image/fit=contain,width=auto,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/m1/delta/559450.jpg',
        name: 'AirPods Max',
        price: 2599,
      },
      {
        image: 'https://www.apple.com/v/macbook-pro/aj/images/overview/contrast/product_tile_mbp_14_16__br3iijc0eys2_large_2x.png',
        name: 'MacBook Pro 14-16 inch - 256G',
        price: 5899,
      },
    ],
  },
  {
    section: 'قسم الهواتف',
    items: [
      {
        image:
          'https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15pro__ezc4eofw13yq_large_2x.jpg',
        name: 'Iphone 15 Pro Max - 256G',
        price: 5499,
      },
      {
        image: 'https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15__dozjxuchowcy_large_2x.jpg',
        name: 'Iphone 15 - 256G',
        price: 3499,
      },
      {
        image: 'https://www.apple.com/mideast/iphone-15-pro/c/images/overview/closer-look/all_colors__eppfcocn9mky_large_2x.jpg',
        name: 'iPhone 15 Pro - 256G',
        price: 4199,
      },

    ],
  },
  {
    section: 'قسم الايباد',
    items: [
      {
        image: 'https://www.apple.com/v/ipad-mini/q/images/shared-footer/trade_in__d9wg1o0ep9aq_large_2x.jpg',
        name: 'iPad mini - 64G',
        price: 1899,
      }, 
      {
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-comp-air-202210?wid=338&hei=386&fmt=jpeg&qlt=90&.v=1664411153129',
        name: 'iPad Air - 64G',
        price: 2299,
      }, 
      {
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-comp-pro-202210?wid=338&hei=386&fmt=jpeg&qlt=90&.v=1664411153112',
        name: 'iPad Pro 11 inch - 128G',
        price: 3099,
      },
    ],
  },
  {
    section: 'قسم الكمبيوتر',
    items: [
      {
        image:
          'https://www.apple.com/v/macbook-air-13-and-15-m2/e/images/overview/routers/compare_mba_m1__cmow07fo5d36_large_2x.png',
        name: 'MacBook Air 13 inch M1- 256G',
        price: 3499,
      },
      {
        image: 'https://www.apple.com/v/macbook-air-13-and-15-m2/e/images/overview/routers/compare_mba_13_15__tnw1r9b3f5e2_large_2x.png',
        name: 'MacBook Air 13 inch M2 - 256G',
        price: 4299,
      },
      {
        image: 'https://www.apple.com/v/macbook-air-13-and-15-m2/e/images/overview/routers/compare_mbp_14_16__reijn4mpe76q_large_2x.png',
        name: 'MacBook Pro 16 inch M3 PRO- 256G',
        price: 6299,
      },

    ],
  },
  {
    section: 'قسم ساعات اليد',
    items: [
      {
        image: 'https://m.media-amazon.com/images/I/81y0kBq5dUL.__AC_SY445_SX342_QL70_ML2_.jpg',
        name: 'Apple Watch Ultra 2 - 49mm',
        price: 3599,
      },
      {
        image: 'https://m.media-amazon.com/images/I/713PeaGozSL._AC_SX522_.jpg',
        name: 'Apple Watch Series 9 - 45mm',
        price: 2199,
      },
    ],
  },
]

const discountProducts = [
  {
    section: undefined,
    items: [
      {
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/vision-pro-kit-witb-202401?wid=624&hei=676&fmt=jpeg&qlt=90&.v=1704489278769',
        name: 'Apple Vision Pro',
        price: 12599,
      },
      {
        image:
          'https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15pro__ezc4eofw13yq_large_2x.jpg',
        name: 'Iphone 15 Pro Max - 256G',
        price: 4799,
      },
      {
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-comp-pro-202210?wid=338&hei=386&fmt=jpeg&qlt=90&.v=1664411153112',
        name: 'iPad Pro 11 inch - 128G',
        price: 2899,
      },
      {
        image: 'https://m.media-amazon.com/images/I/81y0kBq5dUL.__AC_SY445_SX342_QL70_ML2_.jpg',
        name: 'Apple Watch Ultra 2',
        price: 2499,
      },
      {
        image: 'https://www.apple.com/mideast/airpods-pro/h/images/overview/magical_case__epo6duhktocy_large_2x.png',
        name: 'AirPods Pro',
        price: 599,
      },
      {
        image: 'hhttps://www.jarir.com/cdn-cgi/image/fit=contain,width=auto,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/m1/delta/559450.jpg',
        name: 'AirPods Max',
        price: 2299,
      },
      {
        image: 'https://www.apple.com/v/macbook-air-13-and-15-m2/e/images/overview/routers/compare_mbp_14_16__reijn4mpe76q_large_2x.png',
        name: 'MacBook Pro 16 inch M3 PRO- 256G',
        price: 5299,
      },
    ],
  },
,
]
