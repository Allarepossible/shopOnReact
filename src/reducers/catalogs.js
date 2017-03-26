const initialState = [
    {
        id: 'tablets',
        name: 'Планшеты',
        img: 'images/img/tablets/ASUS-Transformer-Book-1.jpeg',
        products: [
            {
                name :'Samsung Galaxy Tab A 10.1',
                id: 1,
                catalog: 'tablets',
                images: [
                    {image: 'images/img/tablets/Samsung-Galaxy-Tab-1.jpeg'},
                    {image: 'images/img/tablets/Samsung-Galaxy-Tab-2.jpeg'},
                    {image: 'images/img/tablets/Samsung-Galaxy-Tab-3.jpeg'}
                ],
                activeIndex: 0,
                date:124325,
                articul: 1000,
                oc: 'Android',
                brands: 'Samsung',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-карты', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 1},
                    {name: 'Цвет', value : 'Белый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value : 'Есть'},
                    {name: '4G(LTE)', value : 'Нет'},
                    {name: 'GPS-модуль', value : 'Есть'}
                ],
                ratio : 3,
                nalichie : 'В наличии',
                info : 'Планшет Galaxy Tab A 10.1, Micro-SIM, Android 4.4, 3G, Bluetooth 4.0, EDGE, GPRS, WAP, Wi-Fi, Количество ядер процессора 4, Частота процессора 1400 МГц...',
                price : 12382
            }, {
                name :'ASUS-Transformer-Book-1.jpeg',
                id: 2,
                catalog: 'tablets',
                activeIndex: 0,
                date:1242325,
                images: [
                    {image: 'images/img/tablets/ASUS-Transformer-Book-1.jpeg'},
                    {image: 'images/img/tablets/ASUS-Transformer-Book-2.jpeg'},
                    {image: 'images/img/tablets/ASUS-Transformer-Book-3.jpeg'}
                ],
                articul: 1001,
                oc: 'Windows 10',
                brands: 'Microsoft',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Белый'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'A-GPS'}
                ],
                ratio : 5,
                nalichie : 'В наличии',
                info : 'Смартфон Microsoft Lumia 640 Dual SIM (RM-1077) С ним вы открываете мир ярких цифровых возможностей. Этот многофункциональный смартфон уже содержит набор бесплатных сервисов Microsoft...',
                price : 9823
            }, {
                name :'Prestigio MultiPad PMP1012TE',
                id: 3,
                catalog: 'tablets',
                activeIndex: 0,
                date:1124325,
                images: [
                    {image: 'images/img/tablets/Prestigio-MultiPad-1.jpeg'},
                    {image: 'images/img/tablets/Prestigio-MultiPad-2.jpeg'},
                    {image: 'images/img/tablets/Prestigio-MultiPad-3.jpeg'}
                ],
                articul: 1002,
                oc: 'Android',
                brands: 'Archos',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Серый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'Есть'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Archos 50 Oxygen Plus, серый. Моноблок, Micro-SIM, Android , 3G, Bluetooth, USB-подключение к ПК, Wi-Fi, Разрешение основной камеры 8 Мп...',
                price : 8263
            }, {
                name :'Lenovo TAB 2',
                id: 4,
                catalog: 'tablets',
                activeIndex: 0,
                date:12432455,
                images: [
                    {image: 'images/img/tablets/Lenovo-TAB-2-1.jpeg'},
                    {image: 'images/img/tablets/Lenovo-TAB-2-2.jpeg'},
                    {image: 'images/img/tablets/Lenovo-TAB-2-3.jpeg'}
                ],
                articul: 1003,
                oc: 'Android',
                brands: 'Philips',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-карты', value: null},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : null},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: null},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: null}
                ],
                ratio : 2,
                nalichie : 'В наличии',
                info : 'Смартфон Philips S398 Black. Черный корпус и разнообразие цветных панелей для Philips S398 как нельзя лучше подчеркнут ваш статус и уверенность в себе. Преимущества этой модели...',
                price : 12932
            }, {
                name :'Apple iPad Pro 9.7',
                id: 5,
                catalog: 'tablets',
                activeIndex: 0,
                date:1243825,
                images: [
                    {image: 'images/img/tablets/Apple-iPad-Pro-9.7-1.jpeg'},
                    {image: 'images/img/tablets/Apple-iPad-Pro-9.7-2.jpeg'},
                    {image: 'images/img/tablets/Apple-iPad-Pro-9.7-3.jpeg'}
                ],
                articul: 1004,
                oc: 'WindowsPhone',
                brands: 'Microsoft',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Черный'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'A-GPS'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Microsoft Lumia 430 RM-1099 black Куда бы вы ни направлялись, смартфон должен быть надежным спутником. Поэтому у Microsoft Lumia 430 Dual SIM (RM-1099) удобный компактный корпус ...',
                price : 5632
            }, {
                name :'Lenovo Tab 3 TB3',
                id: 6,
                catalog: 'tablets',
                activeIndex: 0,
                date:1249325,
                oc: 'IOS',
                brands: 'Senseit',
                color: 'black',
                images: [
                    {image: 'images/img/tablets/Lenovo-Tab-3-TB3-1.jpeg'},
                    {image: 'images/img/tablets/Lenovo-Tab-3-TB3-2.jpeg'},
                    {image: 'images/img/tablets/Lenovo-Tab-3-TB3-3.jpeg'}
                ],
                articul: 1005,
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Черный'},
                    {name: 'ОС', value: 'IOS'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value : 'A-GPS'}
                ],
                ratio : 1,
                nalichie : 'В наличии',
                info : 'Смартфон Senseit L301 black, черный. Micro-SIM, две поддерживаемых SIM-карты, Android, 3G, GPS-модуль...  ',
                price : 6241
            }
        ],
        filters: [
            {
                name: 'Наличие в магазинах',
                open: 'yes',
                id: 'shop',
                type: 'select',
                values: ['Во всех магазинах', 'В ближайшем ко мне магазине'],
                reset: false
            }, {
                name: 'Бренды',
                open: 'yes',
                id: 'brands',
                type: 'checkbox',
                values: ['Lenovo', 'Apple', 'Samsung', 'Asus'],
                reset: true
            }, {
                name: 'Цена',
                open: 'yes',
                id: 'price',
                type: 'range-box',
                values: {
                    'от': '0',
                    'до': '10 000'
                },
                reset: false
            }, {
                name: 'Цвет',
                open: 'yes',
                id: 'color',
                type: 'color',
                values: ['white', 'gray', 'black', 'blue', 'red', 'yellow', 'orange', 'green'],
                reset: true
            }, {
                name: 'Операционная система',
                open: 'yes',
                id: 'oc',
                type: 'checkbox',
                values: ['Android', 'iOS', 'Window'],
                reset: true
            }
        ],
    },
    {

        id: 'mobiles',
        name: 'Мобильные телефоны',
        img: 'images/img/mobiles/Microsoft-Lumia-640-s1.jpg',
        products: [
            {
                name :'Samsung GT-I9301I  GALAXY S 3',
                id: 1,
                catalog: 'mobiles',
                images: [
                    {image: 'images/img/mobiles/Samsung-GT-I9301I-s1.jpg'},
                    {image: 'images/img/mobiles/Samsung-GT-I9301I-s2.jpg'},
                    {image: 'images/img/mobiles/Samsung-GT-I9301I-s3.jpg'}
                ],
                activeIndex: 0,
                date:12432575,
                articul: 2000,
                oc: 'Android',
                brands: 'Samsung',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-карты', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 1},
                    {name: 'Цвет', value : 'Белый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value : 'Есть'},
                    {name: '4G(LTE)', value : 'Нет'},
                    {name: 'GPS-модуль', value : 'Есть'}
                ],
                ratio : 3,
                nalichie : 'В наличии',
                info : 'Смартфон Samsung GT-I9301I GALAXY S 3 Ceramic White Моноблок, Micro-SIM, Android 4.4, 3G, Bluetooth 4.0, EDGE, GPRS, WAP, Wi-Fi, Количество ядер процессора 4, Частота процессора 1400 МГц...',
                price : 1290
            }, {
                name :'Microsoft Lumia 640 RM-1077',
                id: 2,
                catalog: 'mobiles',
                activeIndex: 0,
                date:12432556,
                images: [
                    {image: 'images/img/mobiles/Microsoft-Lumia-640-s1.jpg'},
                    {image: 'images/img/mobiles/Microsoft-Lumia-640-s2.jpg'},
                    {image: 'images/img/mobiles/Microsoft-Lumia-640-s3.jpg'}
                ],
                articul: 2001,
                oc: 'WindowsPhone',
                brands: 'Microsoft',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Белый'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'A-GPS'}
                ],
                ratio : 5,
                nalichie : 'В наличии',
                info : 'Смартфон Microsoft Lumia 640 Dual SIM (RM-1077) С ним вы открываете мир ярких цифровых возможностей. Этот многофункциональный смартфон уже содержит набор бесплатных сервисов Microsoft...',
                price : 8990
            }, {
                name :'Archos 50 Oxygen Plus',
                id: 3,
                catalog: 'mobiles',
                activeIndex: 0,
                date:124325567,
                images: [
                    {image: 'images/img/mobiles/Archos-50-Oxygen-Plus-s1.jpg'},
                    {image: 'images/img/mobiles/Archos-50-Oxygen-Plus-s2.jpg'},
                    {image: 'images/img/mobiles/Archos-50-Oxygen-Plus-s3.jpg'}
                ],
                articul: 2002,
                oc: 'Android',
                brands: 'Archos',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Серый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'Есть'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Archos 50 Oxygen Plus, серый. Моноблок, Micro-SIM, Android , 3G, Bluetooth, USB-подключение к ПК, Wi-Fi, Разрешение основной камеры 8 Мп...',
                price : 9090
            }, {
                name :'Philips S398 Black',
                id: 4,
                catalog: 'mobiles',
                activeIndex: 0,
                date: 12354325,
                images: [
                    {image: 'images/img/mobiles/Philips-S398-Black-s1.jpg'},
                    {image: 'images/img/mobiles/Philips-S398-Black-s2.jpg'},
                    {image: 'images/img/mobiles/Philips-S398-Black-s3.jpg'}
                ],
                articul: 2003,
                oc: 'Android',
                brands: 'Philips',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-карты', value: null},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : null},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: null},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: null}
                ],
                ratio : 2,
                nalichie : 'В наличии',
                info : 'Смартфон Philips S398 Black. Черный корпус и разнообразие цветных панелей для Philips S398 как нельзя лучше подчеркнут ваш статус и уверенность в себе. Преимущества этой модели...',
                price : 12990
            }, {
                name :'Microsoft Lumia 430 RM-10',
                id: 5,
                catalog: 'mobiles',
                activeIndex: 0,
                date: 12437625,
                images: [
                    {image: 'images/img/mobiles/Microsoft-Lumia-430-RM-10-s1.jpg'},
                    {image: 'images/img/mobiles/Microsoft-Lumia-430-RM-10-s2.jpg'},
                    {image: 'images/img/mobiles/Microsoft-Lumia-430-RM-10-s3.jpg'}
                ],
                articul: 2004,
                oc: 'WindowsPhone',
                brands: 'Microsoft',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Черный'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'A-GPS'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Microsoft Lumia 430 RM-1099 black Куда бы вы ни направлялись, смартфон должен быть надежным спутником. Поэтому у Microsoft Lumia 430 Dual SIM (RM-1099) удобный компактный корпус ...',
                price : 5392
            }, {
                name :'Senseit L301 Black ',
                id: 6,
                catalog: 'mobiles',
                activeIndex: 0,
                date:12234325,
                oc: 'IOS',
                brands: 'Senseit',
                color: 'black',
                images: [
                    {image: 'images/img/mobiles/Senseit-L301-Black-s1.jpg'},
                    {image: 'images/img/mobiles/Senseit-L301-Black-s2.jpg'},
                    {image: 'images/img/mobiles/Senseit-L301-Black-s3.jpg'}
                ],
                articul: 2005,
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Черный'},
                    {name: 'ОС', value: 'IOS'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value : 'A-GPS'}
                ],
                ratio : 1,
                nalichie : 'В наличии',
                info : 'Смартфон Senseit L301 black, черный. Micro-SIM, две поддерживаемых SIM-карты, Android, 3G, GPS-модуль...  ',
                price : 4990
            }, {
                name :'HIGHSCREEN WinWin Black',
                id: 7,
                catalog: 'mobiles',
                activeIndex: 0,
                date:12435425,
                images: [
                    {image: 'images/img/mobiles/HIGHSCREEN-WinWin-Black-s1.jpg'},
                    {image: 'images/img/mobiles/HIGHSCREEN-WinWin-Black-s2.jpg'},
                    {image: 'images/img/mobiles/HIGHSCREEN-WinWin-Black-s3.jpg'}
                ],
                articul: 2006,
                oc: 'Windows Phone',
                brands: 'WinWin',
                color: 'black',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Черный'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'Есть'}
                ],
                ratio : 5,
                nalichie : 'В наличии',
                info : 'Смартфон HIGHSCREEN WinWin Black оснащен 4 дисплеем и двумя слотами для SIM-карт.  Windows Phone , 3G, Bluetooth, USB-подключение к ПК...',
                price : 13992
            }, {
                name :'Alcatel OT4013D PIXI 3 (2 SIM)',
                id: 8,
                catalog: 'mobiles',
                activeIndex: 0,
                date:12476325,
                images: [
                    {image: 'images/img/mobiles/Alcatel-OT4013D-PIXI3-(2SIM)-s1.jpg'},
                    {image: 'images/img/mobiles/Alcatel-OT4013D-PIXI3-(2SIM)-s2.jpg'},
                    {image: 'images/img/mobiles/Alcatel-OT4013D-PIXI3-(2SIM)-s3.jpg'}
                ],
                articul: 2007,
                oc: 'Android',
                brands: 'Alcatel',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Белый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value : 'A-GPS'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Alcatel OT4013D PIXI 3 (2 SIM). Смартфон Alcatel One Touch 4013D оснащен четырехдюймовым дисплеем и двумя слотами для SIM-карт...',
                price : 3892
            }, {
                name :'Fly IQ434 Era Nano 5',
                id: 9,
                catalog: 'mobiles',
                activeIndex: 0,
                date:12432875,
                images: [
                    {image: 'images/img/mobiles/Fly-IQ434-Era-Nano-5-s1.jpg'},
                    {image: 'images/img/mobiles/Fly-IQ434-Era-Nano-5-s2.jpg'},
                    {image: 'images/img/mobiles/Fly-IQ434-Era-Nano-5-s3.jpg'}
                ],
                articul: 2008,
                oc: 'IOS',
                brands: 'Fly',
                color: 'black',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Черный'},
                    {name: 'ОС', value: 'IOS'},
                    {name: 'Связь 3G', value : 'Нет'},
                    {name: '4G(LTE)', value : 'Нет'},
                    {name: 'GPS-модуль', value : 'Нет'}
                ],
                ratio : 3,
                nalichie : 'В наличии',
                info : 'Смартфон Fly IQ434 Era Nano 5 оснащен 3.5 дисплеем и двумя слотами для SIM-карт. Android 2.3, Micro SD, Wi-Fi.... ',
                price : 1790
            }, {
                name :'Apple iPhone 5S',
                id: 10,
                catalog: 'mobiles',
                activeIndex: 0,
                date:12432875,
                images: [
                    {image: 'images/img/mobiles/Apple-iPhone-5S-1.jpeg'},
                    {image: 'images/img/mobiles/Apple-iPhone-5S-2.jpeg'},
                    {image: 'images/img/mobiles/Apple-iPhone-5S-3.jpeg'}
                ],
                articul: 2009,
                oc: 'IOS',
                brands: 'Apple',
                color: 'black',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Черный'},
                    {name: 'ОС', value: 'IOS'},
                    {name: 'Связь 3G', value : 'Нет'},
                    {name: '4G(LTE)', value : 'Нет'},
                    {name: 'GPS-модуль', value : 'Нет'}
                ],
                ratio : 3,
                nalichie : 'В наличии',
                info : 'Смартфон Fly IQ434 Era Nano 5 оснащен 3.5 дисплеем и двумя слотами для SIM-карт. Android 2.3, Micro SD, Wi-Fi.... ',
                price : 26790
            }
        ],
        filters: [
            {
                name: 'Наличие в магазинах',
                open: 'yes',
                id: 'shop',
                type: 'select',
                values: ['Во всех магазинах', 'В ближайшем ко мне магазине'],
                reset: false
            }, {
                name: 'Бренды',
                open: 'yes',
                id: 'brands',
                type: 'checkbox',
                values: ['Lenovo', 'Apple', 'Samsung', 'Asus', 'Motorola'],
                reset: true
            }, {
                name: 'Цена',
                open: 'yes',
                id: 'price',
                type: 'range-box',
                values: {
                    'от': '0',
                    'до': '10 000'
                },
                reset: false
            }, {
                name: 'Цвет',
                open: 'yes',
                id: 'color',
                type: 'color',
                values: ['white', 'gray', 'black', 'blue', 'red', 'yellow', 'orange', 'green', 'skyblue', 'violet', 'pink', 'brown'],
                reset: true
            }, {
                name: 'Операционная система',
                open: 'yes',
                id: 'oc',
                type: 'checkbox',
                values: ['Android', 'iOS', 'Windows Mobile', 'Symbian', 'Custom'],
                reset: true
            }
        ],
    },
    {

        id: 'mp3',
        name: 'Mp3 плееры',
        img: 'images/img/mp3/Apple-iPod-nano-7-1.jpeg',
        products: [
            {
                name :'Apple iPod nano 7',
                id: 1,
                catalog: 'mp3',
                images: [
                    {image: 'images/img/mp3/Apple-iPod-nano-7-1.jpeg'},
                    {image: 'images/img/mp3/Apple-iPod-nano-7-2.jpeg'},
                    {image: 'images/img/mp3/Apple-iPod-nano-7-3.jpeg'}
                ],
                activeIndex: 0,
                date:12874325,
                articul: 3000,
                oc: 'Android',
                brands: 'Samsung',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-карты', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 1},
                    {name: 'Цвет', value : 'Белый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value : 'Есть'},
                    {name: '4G(LTE)', value : 'Нет'},
                    {name: 'GPS-модуль', value : 'Есть'}
                ],
                ratio : 3,
                nalichie : 'В наличии',
                info : 'Смартфон Samsung GT-I9301I GALAXY S 3 Ceramic White Моноблок, Micro-SIM, Android 4.4, 3G, Bluetooth 4.0, EDGE, GPRS, WAP, Wi-Fi, Количество ядер процессора 4, Частота процессора 1400 МГц...',
                price : 11283
            }, {
                name :'Sony NWZ-B183F',
                id: 2,
                catalog: 'mp3',
                activeIndex: 0,
                date:12443325,
                images: [
                    {image: 'images/img/mp3/Sony-NWZ-B183F-1.jpeg'},
                    {image: 'images/img/mp3/Sony-NWZ-B183F-2.jpeg'},
                    {image: 'images/img/mp3/Sony-NWZ-B183F-3.jpeg'}
                ],
                articul: 3001,
                oc: 'WindowsPhone',
                brands: 'Microsoft',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Белый'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'A-GPS'}
                ],
                ratio : 5,
                nalichie : 'В наличии',
                info : 'Смартфон Microsoft Lumia 640 Dual SIM (RM-1077) С ним вы открываете мир ярких цифровых возможностей. Этот многофункциональный смартфон уже содержит набор бесплатных сервисов Microsoft...',
                price : 10230
            }, {
                name :'Digma B3 8Gb',
                id: 3,
                catalog: 'mp3',
                activeIndex: 0,
                date:124356325,
                images: [
                    {image: 'images/img/mp3/Digma-B3-8Gb-1.jpeg'},
                    {image: 'images/img/mp3/Digma-B3-8Gb-2.jpeg'},
                    {image: 'images/img/mp3/Digma-B3-8Gb-3.jpeg'}
                ],
                articul: 3002,
                oc: 'Android',
                brands: 'Archos',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Серый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'Есть'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Archos 50 Oxygen Plus, серый. Моноблок, Micro-SIM, Android , 3G, Bluetooth, USB-подключение к ПК, Wi-Fi, Разрешение основной камеры 8 Мп...',
                price : 43023
            }, {
                name :'Fiio X3 II',
                id: 4,
                catalog: 'mp3',
                activeIndex: 0,
                date:12432425,
                images: [
                    {image: 'images/img/mp3/Fiio-X3-II-1.jpeg'},
                    {image: 'images/img/mp3/Fiio-X3-II-2.jpeg'},
                    {image: 'images/img/mp3/Fiio-X3-II-3.jpeg'}
                ],
                articul: 3003,
                oc: 'Android',
                brands: 'Philips',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-карты', value: null},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : null},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: null},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: null}
                ],
                ratio : 2,
                nalichie : 'В наличии',
                info : 'Смартфон Philips S398 Black. Черный корпус и разнообразие цветных панелей для Philips S398 как нельзя лучше подчеркнут ваш статус и уверенность в себе. Преимущества этой модели...',
                price : 4928
            }, {
                name :'Apple iPod touch 6',
                id: 5,
                catalog: 'mp3',
                activeIndex: 0,
                date:124325325,
                images: [
                    {image: 'images/img/mp3/Apple-iPod-touch-6-1.jpeg'},
                    {image: 'images/img/mp3/Apple-iPod-touch-6-2.jpeg'},
                    {image: 'images/img/mp3/Apple-iPod-touch-6-3.jpeg'}
                ],
                articul: 3004,
                oc: 'WindowsPhone',
                brands: 'Microsoft',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Черный'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'A-GPS'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Microsoft Lumia 430 RM-1099 black Куда бы вы ни направлялись, смартфон должен быть надежным спутником. Поэтому у Microsoft Lumia 430 Dual SIM (RM-1099) удобный компактный корпус ...',
                price : 6723
            }, {
                name :'Fiio X1',
                id: 6,
                catalog: 'mp3',
                activeIndex: 0,
                date:12432235,
                oc: 'IOS',
                brands: 'Senseit',
                color: 'black',
                images: [
                    {image: 'images/img/mp3/Fiio-X1-1.jpeg'},
                    {image: 'images/img/mp3/Fiio-X1-2.jpeg'},
                    {image: 'images/img/mp3/Fiio-X1-3.jpeg'}
                ],
                articul: 3005,
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Черный'},
                    {name: 'ОС', value: 'IOS'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value : 'A-GPS'}
                ],
                ratio : 1,
                nalichie : 'В наличии',
                info : 'Смартфон Senseit L301 black, черный. Micro-SIM, две поддерживаемых SIM-карты, Android, 3G, GPS-модуль...  ',
                price : 8526
            }, {
                name :'Sony NWZ-WS613',
                id: 7,
                catalog: 'mp3',
                activeIndex: 0,
                date:12432125,
                images: [
                    {image: 'images/img/mp3/Sony-NWZ-WS613-1.jpeg'},
                    {image: 'images/img/mp3/Sony-NWZ-WS613-2.jpeg'},
                    {image: 'images/img/mp3/Sony-NWZ-WS613-3.jpeg'}
                ],
                articul: 3006,
                oc: 'Windows Phone',
                brands: 'WinWin',
                color: 'black',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Черный'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'Есть'}
                ],
                ratio : 5,
                nalichie : 'В наличии',
                info : 'Смартфон HIGHSCREEN WinWin Black оснащен 4 дисплеем и двумя слотами для SIM-карт.  Windows Phone , 3G, Bluetooth, USB-подключение к ПК...',
                price : 3721
            }
        ],
        filters: [
        {
            name: 'Наличие в магазинах',
            open: 'yes',
            id: 'shop',
            type: 'select',
            values: ['Во всех магазинах', 'В ближайшем ко мне магазине'],
            reset: false
        }, {
            name: 'Бренды',
            open: 'yes',
            id: 'brands',
            type: 'checkbox',
            values: ['Lenovo', 'Apple', 'Samsung', 'Fly', 'Motorola'],
            reset: true
        }, {
            name: 'Цена',
            open: 'yes',
            id: 'price',
            type: 'range-box',
            values: {
                'от': '0',
                'до': '10 000'
            },
            reset: false
        }, {
            name: 'Цвет',
            open: 'yes',
            id: 'color',
            type: 'color',
            values: ['white', 'gray', 'black', 'blue', 'red', 'yellow', 'orange', 'green'],
            reset: true
        }
    ],
    },
    {

        id: 'computers',
        name: 'Компьютеры',
        img: 'images/img/computers/PRO-099070-Intel-Core-1.jpg',
        products: [
            {
                name :'Компьютер PRO-099070',
                id: 1,
                catalog: 'computers',
                images: [
                    {image: 'images/img/computers/PRO-099070-Intel-Core-1.jpg'},
                    {image: 'images/img/computers/PRO-099070-Intel-Core-2.jpg'},
                    {image: 'images/img/computers/PRO-099070-Intel-Core-3.jpg'}
                ],
                activeIndex: 0, date:124325,
                articul: 4000,
                oc: 'Android',
                brands: 'Samsung',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-карты', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 1},
                    {name: 'Цвет', value : 'Белый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value : 'Есть'},
                    {name: '4G(LTE)', value : 'Нет'},
                    {name: 'GPS-модуль', value : 'Есть'}
                ],
                ratio : 3,
                nalichie : 'В наличии',
                info : 'Смартфон Samsung GT-I9301I GALAXY S 3 Ceramic White Моноблок, Micro-SIM, Android 4.4, 3G, Bluetooth 4.0, EDGE, GPRS, WAP, Wi-Fi, Количество ядер процессора 4, Частота процессора 1400 МГц...',
                price : 3982
            }, {
                name :'КОМПЬЮТЕР RIWER 590330',
                id: 2,
                catalog: 'computers',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/computers/RIWER-590330-1.jpg'},
                    {image: 'images/img/computers/RIWER-590330-1.jpg'},
                    {image: 'images/img/computers/RIWER-590330-1.jpg'}
                ],
                articul: 4001,
                oc: 'WindowsPhone',
                brands: 'Microsoft',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Белый'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'A-GPS'}
                ],
                ratio : 5,
                nalichie : 'В наличии',
                info : 'Смартфон Microsoft Lumia 640 Dual SIM (RM-1077) С ним вы открываете мир ярких цифровых возможностей. Этот многофункциональный смартфон уже содержит набор бесплатных сервисов Microsoft...',
                price : 7283
            }, {
                name :'Системный блок игровой ASUS GT51CA-RU002T',
                id: 3,
                catalog: 'computers',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/computers/GT51CA-RU002T-1.jpg'},
                    {image: 'images/img/computers/GT51CA-RU002T-2.jpg'},
                    {image: 'images/img/computers/GT51CA-RU002T-3.jpg'}
                ],
                articul: 4002,
                oc: 'Android',
                brands: 'Archos',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Серый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'Есть'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Archos 50 Oxygen Plus, серый. Моноблок, Micro-SIM, Android , 3G, Bluetooth, USB-подключение к ПК, Wi-Fi, Разрешение основной камеры 8 Мп...',
                price : 9900
            }, {
                name :'Системный блок Apple Mac mini',
                id: 4,
                catalog: 'computers',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/computers/Apple-Mac-mini-1.jpeg'},
                    {image: 'images/img/computers/Apple-Mac-mini-2.jpeg'},
                    {image: 'images/img/computers/Apple-Mac-mini-3.jpeg'}
                ],
                articul: 4003,
                oc: 'Android',
                brands: 'Philips',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-карты', value: null},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : null},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: null},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: null}
                ],
                ratio : 2,
                nalichie : 'В наличии',
                info : 'Смартфон Philips S398 Black. Черный корпус и разнообразие цветных панелей для Philips S398 как нельзя лучше подчеркнут ваш статус и уверенность в себе. Преимущества этой модели...',
                price : 11923
            }, {
                name :'Домашний компьютер MicroXperts',
                id: 5,
                catalog: 'computers',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/computers/MicroXperts-1.jpg'},
                    {image: 'images/img/computers/MicroXperts-2.jpg'},
                    {image: 'images/img/computers/MicroXperts-3.jpg'}
                ],
                articul: 4004,
                oc: 'WindowsPhone',
                brands: 'Microsoft',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Черный'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'A-GPS'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Microsoft Lumia 430 RM-1099 black Куда бы вы ни направлялись, смартфон должен быть надежным спутником. Поэтому у Microsoft Lumia 430 Dual SIM (RM-1099) удобный компактный корпус ...',
                price : 5390
            }, {
                name :'Игровой компьютер RS 1114',
                id: 6,
                catalog: 'computers',
                activeIndex: 0, date:124325,
                oc: 'IOS',
                brands: 'Senseit',
                color: 'black',
                images: [
                    {image: 'images/img/computers/RS-1114-1.jpg'},
                    {image: 'images/img/computers/RS-1114-2.jpg'},
                    {image: 'images/img/computers/RS-1114-3.jpg'}
                ],
                articul: 4005,
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Черный'},
                    {name: 'ОС', value: 'IOS'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value : 'A-GPS'}
                ],
                ratio : 1,
                nalichie : 'В наличии',
                info : 'Смартфон Senseit L301 black, черный. Micro-SIM, две поддерживаемых SIM-карты, Android, 3G, GPS-модуль...  ',
                price : 4990
            }, {
                name :'Системный блок LENOVO Erazer X310',
                id: 7,
                catalog: 'computers',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/computers/LENOVO-Erazer-X310-1.jpeg'},
                    {image: 'images/img/computers/LENOVO-Erazer-X310-2.jpeg'},
                    {image: 'images/img/computers/LENOVO-Erazer-X310-3.jpeg'}
                ],
                articul: 4006,
                oc: 'Windows Phone',
                brands: 'WinWin',
                color: 'black',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Черный'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'Есть'}
                ],
                ratio : 5,
                nalichie : 'В наличии',
                info : 'Смартфон HIGHSCREEN WinWin Black оснащен 4 дисплеем и двумя слотами для SIM-карт.  Windows Phone , 3G, Bluetooth, USB-подключение к ПК...',
                price : 6273
            }
        ],
        filters: [
            {
                name: 'Наличие в магазинах',
                open: 'yes',
                id: 'shop',
                type: 'select',
                values: ['Во всех магазинах', 'В ближайшем ко мне магазине'],
                reset: false
            }, {
                name: 'Бренды',
                open: 'yes',
                id: 'brands',
                type: 'checkbox',
                values: ['Lenovo', 'Apple', 'Samsung', 'Asus', 'Motorola'],
                reset: true
            }, {
                name: 'Цена',
                open: 'yes',
                id: 'price',
                type: 'range-box',
                values: {
                    'от': '0',
                    'до': '10 000'
                },
                reset: false
            }, {
                name: 'Цвет',
                open: 'yes',
                id: 'color',
                type: 'color',
                values: ['white', 'gray', 'black', 'blue', 'red', 'yellow', 'orange', 'green', 'skyblue', 'violet', 'pink', 'brown'],
                reset: true
            }, {
                name: 'Операционная система',
                open: 'yes',
                id: 'oc',
                type: 'checkbox',
                values: ['Android', 'iOS', 'Windows Mobile', 'Symbian', 'Custom'],
                reset: true
            }
        ],
    },
    {

        id: 'accessorizes',
        name: 'Аксессуары',
        img: 'images/img/accessorizes/Continent-CC-1.jpeg',
        products: [
            {
                name :'Continent CC-01',
                id: 1,
                catalog: 'accessorizes',
                images: [
                    {image: 'images/img/accessorizes/Continent-CC-1.jpeg'},
                    {image: 'images/img/accessorizes/Continent-CC-2.jpeg'},
                    {image: 'images/img/accessorizes/Continent-CC-1.jpeg'}
                ],
                activeIndex: 0, date:124325,
                articul: 5000,
                oc: 'Android',
                brands: 'Samsung',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-карты', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 1},
                    {name: 'Цвет', value : 'Белый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value : 'Есть'},
                    {name: '4G(LTE)', value : 'Нет'},
                    {name: 'GPS-модуль', value : 'Есть'}
                ],
                ratio : 3,
                nalichie : 'В наличии',
                info : 'Смартфон Samsung GT-I9301I GALAXY S 3 Ceramic White Моноблок, Micro-SIM, Android 4.4, 3G, Bluetooth 4.0, EDGE, GPRS, WAP, Wi-Fi, Количество ядер процессора 4, Частота процессора 1400 МГц...',
                price : 8293
            }, {
                name :'Targus Drifter Backpack 16',
                id: 2,
                catalog: 'accessorizes',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/accessorizes/Drifter-Backpack-16-1.jpeg'},
                    {image: 'images/img/accessorizes/Drifter-Backpack-16-2.jpeg'},
                    {image: 'images/img/accessorizes/Drifter-Backpack-16-1.jpeg'}
                ],
                articul: 5001,
                oc: 'WindowsPhone',
                brands: 'Microsoft',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Белый'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'A-GPS'}
                ],
                ratio : 5,
                nalichie : 'В наличии',
                info : 'Смартфон Microsoft Lumia 640 Dual SIM (RM-1077) С ним вы открываете мир ярких цифровых возможностей. Этот многофункциональный смартфон уже содержит набор бесплатных сервисов Microsoft...',
                price : 10992
            }, {
                name :'адаптер для ноутбуков KS-is',
                id: 3,
                catalog: 'accessorizes',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/accessorizes/KS-is-1.jpg'},
                    {image: 'images/img/accessorizes/KS-is-2.jpg'},
                    {image: 'images/img/accessorizes/KS-is-3.jpg'}
                ],
                articul: 5002,
                oc: 'Android',
                brands: 'Archos',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Серый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'Есть'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Archos 50 Oxygen Plus, серый. Моноблок, Micro-SIM, Android , 3G, Bluetooth, USB-подключение к ПК, Wi-Fi, Разрешение основной камеры 8 Мп...',
                price : 9900
            }, {
                name :'Аккумуляторная батарея для ноутбука Lenovo Thinkpad',
                id: 4,
                catalog: 'accessorizes',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/accessorizes/Lenovo-Thinkpad-1.jpg'},
                    {image: 'images/img/accessorizes/Lenovo-Thinkpad-2.jpg'},
                    {image: 'images/img/accessorizes/Lenovo-Thinkpad-3.jpg'}
                ],
                articul: 5003,
                oc: 'Android',
                brands: 'Philips',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-карты', value: null},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : null},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: null},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: null}
                ],
                ratio : 2,
                nalichie : 'В наличии',
                info : 'Смартфон Philips S398 Black. Черный корпус и разнообразие цветных панелей для Philips S398 как нельзя лучше подчеркнут ваш статус и уверенность в себе. Преимущества этой модели...',
                price : 2432
            }, {
                name :'HAMA Vienna Notebook Backpack',
                id: 5,
                catalog: 'accessorizes',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/accessorizes/Notebook-Backpack-1.jpeg'},
                    {image: 'images/img/accessorizes/Notebook-Backpack-2.jpeg'},
                    {image: 'images/img/accessorizes/Notebook-Backpack-3.jpeg'}
                ],
                articul: 5004,
                oc: 'WindowsPhone',
                brands: 'Microsoft',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Черный'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'A-GPS'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Microsoft Lumia 430 RM-1099 black Куда бы вы ни направлялись, смартфон должен быть надежным спутником. Поэтому у Microsoft Lumia 430 Dual SIM (RM-1099) удобный компактный корпус ...',
                price : 5940
            }
        ],
        filters: [
            {
                name: 'Наличие в магазинах',
                open: 'yes',
                id: 'shop',
                type: 'select',
                values: ['Во всех магазинах', 'В ближайшем ко мне магазине'],
                reset: false
            }, {
                name: 'Бренды',
                open: 'yes',
                id: 'brands',
                type: 'checkbox',
                values: ['Lenovo', 'Apple', 'Samsung', 'Asus', 'Motorola'],
                reset: true
            }, {
                name: 'Цена',
                open: 'yes',
                id: 'price',
                type: 'range-box',
                values: {
                    'от': '0',
                    'до': '10 000'
                },
                reset: false
            }, {
                name: 'Цвет',
                open: 'yes',
                id: 'color',
                type: 'color',
                values: ['white', 'gray', 'black', 'blue', 'red', 'yellow', 'orange', 'green', 'skyblue', 'violet', 'pink', 'brown'],
                reset: true
            }, {
                name: 'Операционная система',
                open: 'yes',
                id: 'oc',
                type: 'checkbox',
                values: ['Android', 'iOS', 'Windows Mobile', 'Symbian', 'Custom'],
                reset: true
            }
        ],
    },
    {

        id: 'nouts',
        name: 'Ноутбуки',
        img: 'images/img/nouts/Apple-MacBook-Air-13-1.jpeg',
        products: [
            {
                name :'Apple MacBook Air 13',
                id: 1,
                catalog: 'nouts',
                images: [
                    {image: 'images/img/nouts/Apple-MacBook-Air-13-1.jpeg'},
                    {image: 'images/img/nouts/Apple-MacBook-Air-13-2.jpeg'},
                    {image: 'images/img/nouts/Apple-MacBook-Air-13-3.jpeg'}
                ],
                activeIndex: 0, date:124325,
                articul: 6000,
                oc: 'Android',
                brands: 'Samsung',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-карты', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 1},
                    {name: 'Цвет', value : 'Белый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value : 'Есть'},
                    {name: '4G(LTE)', value : 'Нет'},
                    {name: 'GPS-модуль', value : 'Есть'}
                ],
                ratio : 3,
                nalichie : 'В наличии',
                info : 'Смартфон Samsung GT-I9301I GALAXY S 3 Ceramic White Моноблок, Micro-SIM, Android 4.4, 3G, Bluetooth 4.0, EDGE, GPRS, WAP, Wi-Fi, Количество ядер процессора 4, Частота процессора 1400 МГц...',
                price : 11240
            }, {
                name :'ASUS VivoBook Max',
                id: 2,
                catalog: 'nouts',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/nouts/ASUS-VivoBook-Max-1.jpeg'},
                    {image: 'images/img/nouts/ASUS-VivoBook-Max-2.jpeg'},
                    {image: 'images/img/nouts/ASUS-VivoBook-Max-3.jpeg'}
                ],
                articul: 6001,
                oc: 'WindowsPhone',
                brands: 'Microsoft',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Белый'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'A-GPS'}
                ],
                ratio : 5,
                nalichie : 'В наличии',
                info : 'Смартфон Microsoft Lumia 640 Dual SIM (RM-1077) С ним вы открываете мир ярких цифровых возможностей. Этот многофункциональный смартфон уже содержит набор бесплатных сервисов Microsoft...',
                price : 10240
            }, {
                name :'DELL INSPIRON 5567',
                id: 3,
                catalog: 'nouts',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/nouts/DELL-INSPIRON-5567-1.jpeg'},
                    {image: 'images/img/nouts/DELL-INSPIRON-5567-2.jpeg'},
                    {image: 'images/img/nouts/DELL-INSPIRON-5567-3.jpeg'}
                ],
                articul: 6002,
                oc: 'Android',
                brands: 'Archos',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Серый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'Есть'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Archos 50 Oxygen Plus, серый. Моноблок, Micro-SIM, Android , 3G, Bluetooth, USB-подключение к ПК, Wi-Fi, Разрешение основной камеры 8 Мп...',
                price : 9900
            }, {
                name :'Lenovo IdeaPad 110 15 AMD',
                id: 4,
                catalog: 'nouts',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/nouts/Lenovo-IdeaPad-AMD-1.jpeg'},
                    {image: 'images/img/nouts/Lenovo-IdeaPad-AMD-2.jpeg'},
                    {image: 'images/img/nouts/Lenovo-IdeaPad-AMD-3.jpeg'}
                ],
                articul: 6003,
                oc: 'Android',
                brands: 'Philips',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-карты', value: null},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : null},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: null},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: null}
                ],
                ratio : 2,
                nalichie : 'В наличии',
                info : 'Смартфон Philips S398 Black. Черный корпус и разнообразие цветных панелей для Philips S398 как нельзя лучше подчеркнут ваш статус и уверенность в себе. Преимущества этой модели...',
                price : 3900
            }, {
                name :'DELL Vostro 5468',
                id: 5,
                catalog: 'nouts',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/nouts/DELL-Vostro-5468-1.jpeg'},
                    {image: 'images/img/nouts/DELL-Vostro-5468-2.jpeg'},
                    {image: 'images/img/nouts/DELL-Vostro-5468-3.jpeg'}
                ],
                articul: 6004,
                oc: 'WindowsPhone',
                brands: 'Microsoft',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Черный'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'A-GPS'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Microsoft Lumia 430 RM-1099 black Куда бы вы ни направлялись, смартфон должен быть надежным спутником. Поэтому у Microsoft Lumia 430 Dual SIM (RM-1099) удобный компактный корпус ...',
                price : 5940
            }, {
                name :'MSI GP72 7RD Leopard',
                id: 6,
                catalog: 'nouts',
                activeIndex: 0, date:124325,
                oc: 'IOS',
                brands: 'Senseit',
                color: 'black',
                images: [
                    {image: 'images/img/nouts/MSI-GP72-7RD-Leopard-1.jpeg'},
                    {image: 'images/img/nouts/MSI-GP72-7RD-Leopard-2.jpeg'},
                    {image: 'images/img/nouts/MSI-GP72-7RD-Leopard-3.jpeg'}
                ],
                articul: 6005,
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Черный'},
                    {name: 'ОС', value: 'IOS'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value : 'A-GPS'}
                ],
                ratio : 1,
                nalichie : 'В наличии',
                info : 'Смартфон Senseit L301 black, черный. Micro-SIM, две поддерживаемых SIM-карты, Android, 3G, GPS-модуль...  ',
                price : 11923
            }, {
                name :'HP ProBook 430 G4',
                id: 7,
                catalog: 'nouts',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/nouts/HP-ProBook-430-G4-1.jpeg'},
                    {image: 'images/img/nouts/HP-ProBook-430-G4-2.jpeg'},
                    {image: 'images/img/nouts/HP-ProBook-430-G4-3.jpeg'}
                ],
                articul: 6006,
                oc: 'Windows Phone',
                brands: 'WinWin',
                color: 'black',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Черный'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'Есть'}
                ],
                ratio : 5,
                nalichie : 'В наличии',
                info : 'Смартфон HIGHSCREEN WinWin Black оснащен 4 дисплеем и двумя слотами для SIM-карт.  Windows Phone , 3G, Bluetooth, USB-подключение к ПК...',
                price : 5623
            }, {
                name :'Sony VAIO Pro SVP1322M9R',
                id: 8,
                catalog: 'nouts',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/nouts/Sony-VAIO-Pro-1.jpeg'},
                    {image: 'images/img/nouts/Sony-VAIO-Pro-2.jpeg'},
                    {image: 'images/img/nouts/Sony-VAIO-Pro-3.jpeg'}
                ],
                articul: 6007,
                oc: 'Android',
                brands: 'Alcatel',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Белый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value : 'A-GPS'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Alcatel OT4013D PIXI 3 (2 SIM). Смартфон Alcatel One Touch 4013D оснащен четырехдюймовым дисплеем и двумя слотами для SIM-карт...',
                price : 3900
            }
        ],
        filters: [
            {
                name: 'Наличие в магазинах',
                open: 'yes',
                id: 'shop',
                type: 'select',
                values: ['Во всех магазинах', 'В ближайшем ко мне магазине'],
                reset: false
            }, {
                name: 'Бренды',
                open: 'yes',
                id: 'brands',
                type: 'checkbox',
                values: ['Lenovo', 'Apple', 'Samsung', 'Asus', 'Motorola'],
                reset: true
            }, {
                name: 'Цена',
                open: 'yes',
                id: 'price',
                type: 'range-box',
                values: {
                    'от': '0',
                    'до': '10 000'
                },
                reset: false
            }, {
                name: 'Цвет',
                open: 'yes',
                id: 'color',
                type: 'color',
                values: ['white', 'gray', 'black', 'blue', 'red', 'yellow', 'orange', 'green', 'skyblue', 'violet', 'pink', 'brown'],
                reset: true
            }, {
                name: 'Операционная система',
                open: 'yes',
                id: 'oc',
                type: 'checkbox',
                values: ['Android', 'iOS', 'Windows Mobile', 'Symbian', 'Custom'],
                reset: true
            }
        ],
    },
    {

        id: 'technics',
        name: 'Бытовая техника',
        img: 'images/img/technics/Indesit-IWUB-4085-1.jpeg',
        products: [
            {
                name :'Indesit IWUB 4085',
                id: 1,
                catalog: 'technics',
                images: [
                    {image: 'images/img/technics/Indesit-IWUB-4085-1.jpeg'},
                    {image: 'images/img/technics/Indesit-IWUB-4085-1.jpeg'},
                    {image: 'images/img/technics/Indesit-IWUB-4085-1.jpeg'}
                ],
                activeIndex: 0, date:124325,
                articul: 7000,
                oc: 'Android',
                brands: 'Samsung',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-карты', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 1},
                    {name: 'Цвет', value : 'Белый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value : 'Есть'},
                    {name: '4G(LTE)', value : 'Нет'},
                    {name: 'GPS-модуль', value : 'Есть'}
                ],
                ratio : 3,
                nalichie : 'В наличии',
                info : 'Смартфон Samsung GT-I9301I GALAXY S 3 Ceramic White Моноблок, Micro-SIM, Android 4.4, 3G, Bluetooth 4.0, EDGE, GPRS, WAP, Wi-Fi, Количество ядер процессора 4, Частота процессора 1400 МГц...',
                price : 11240
            }, {
                name :'Shivaki SVC 1748',
                id: 2,
                catalog: 'technics',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/technics/Shivaki-SVC-1748-1.jpeg'},
                    {image: 'images/img/technics/Shivaki-SVC-1748-2.jpeg'},
                    {image: 'images/img/technics/Shivaki-SVC-1748-3.jpeg'}
                ],
                articul: 7001,
                oc: 'WindowsPhone',
                brands: 'Microsoft',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Белый'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'A-GPS'}
                ],
                ratio : 5,
                nalichie : 'В наличии',
                info : 'Смартфон Microsoft Lumia 640 Dual SIM (RM-1077) С ним вы открываете мир ярких цифровых возможностей. Этот многофункциональный смартфон уже содержит набор бесплатных сервисов Microsoft...',
                price : 10240
            }, {
                name :'Hansa BK316.3',
                id: 3,
                catalog: 'technics',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/technics/Hansa-BK316-3-1.jpeg'},
                    {image: 'images/img/technics/Hansa-BK316-3-2.jpeg'},
                    {image: 'images/img/technics/Hansa-BK316-3-3.jpeg'}
                ],
                articul: 7002,
                oc: 'Android',
                brands: 'Archos',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Серый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'Есть'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Archos 50 Oxygen Plus, серый. Моноблок, Micro-SIM, Android , 3G, Bluetooth, USB-подключение к ПК, Wi-Fi, Разрешение основной камеры 8 Мп...',
                price : 9900
            }, {
                name :'Brother 4234D оверлок',
                id: 4,
                catalog: 'technics',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/technics/Brother-4234D-1.jpeg'},
                    {image: 'images/img/technics/Brother-4234D-2.jpeg'},
                    {image: 'images/img/technics/Brother-4234D-3.jpeg'}
                ],
                articul: 7003,
                oc: 'Android',
                brands: 'Philips',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-карты', value: null},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : null},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: null},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: null}
                ],
                ratio : 2,
                nalichie : 'В наличии',
                info : 'Смартфон Philips S398 Black. Черный корпус и разнообразие цветных панелей для Philips S398 как нельзя лучше подчеркнут ваш статус и уверенность в себе. Преимущества этой модели...',
                price : 3900
            }
        ],
        filters: [
            {
                name: 'Наличие в магазинах',
                open: 'yes',
                id: 'shop',
                type: 'select',
                values: ['Во всех магазинах', 'В ближайшем ко мне магазине'],
                reset: false
            }, {
                name: 'Бренды',
                open: 'yes',
                id: 'brands',
                type: 'checkbox',
                values: ['Lenovo', 'Apple', 'Samsung', 'Asus', 'Motorola'],
                reset: true
            }, {
                name: 'Цена',
                open: 'yes',
                id: 'price',
                type: 'range-box',
                values: {
                    'от': '0',
                    'до': '10 000'
                },
                reset: false
            }, {
                name: 'Цвет',
                open: 'yes',
                id: 'color',
                type: 'color',
                values: ['white', 'gray', 'black', 'blue', 'red', 'yellow', 'orange', 'green', 'skyblue', 'violet', 'pink', 'brown'],
                reset: true
            }, {
                name: 'Операционная система',
                open: 'yes',
                id: 'oc',
                type: 'checkbox',
                values: ['Android', 'iOS', 'Windows Mobile', 'Symbian', 'Custom'],
                reset: true
            }
        ],
    },
    {

        id: 'watch',
        name: 'Умные Часы',
        img: 'images/img/watch/Apple-Watch-Series-2-1.jpeg',
        products: [
            {
                name :'Xiaomi Mi Band 2',
                id: 1,
                catalog: 'watch',
                images: [
                    {image: 'images/img/watch/Xiaomi-Mi-Band-2-1.jpeg'},
                    {image: 'images/img/watch/Xiaomi-Mi-Band-2-2.jpeg'},
                    {image: 'images/img/watch/Xiaomi-Mi-Band-2-3.jpeg'}
                ],
                activeIndex: 0, date:124325,
                articul: 8000,
                oc: 'Android',
                brands: 'Samsung',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-карты', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 1},
                    {name: 'Цвет', value : 'Белый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value : 'Есть'},
                    {name: '4G(LTE)', value : 'Нет'},
                    {name: 'GPS-модуль', value : 'Есть'}
                ],
                ratio : 3,
                nalichie : 'В наличии',
                info : 'Смартфон Samsung GT-I9301I GALAXY S 3 Ceramic White Моноблок, Micro-SIM, Android 4.4, 3G, Bluetooth 4.0, EDGE, GPRS, WAP, Wi-Fi, Количество ядер процессора 4, Частота процессора 1400 МГц...',
                price : 3982
            }, {
                name :'Smart Baby Watch Q50',
                id: 2,
                catalog: 'watch',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/watch/Smart-Baby-Watch-Q50-1.jpeg'},
                    {image: 'images/img/watch/Smart-Baby-Watch-Q50-2.jpeg'},
                    {image: 'images/img/watch/Smart-Baby-Watch-Q50-3.jpeg'}
                ],
                articul: 8001,
                oc: 'WindowsPhone',
                brands: 'Microsoft',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Белый'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'A-GPS'}
                ],
                ratio : 5,
                nalichie : 'В наличии',
                info : 'Смартфон Microsoft Lumia 640 Dual SIM (RM-1077) С ним вы открываете мир ярких цифровых возможностей. Этот многофункциональный смартфон уже содержит набор бесплатных сервисов Microsoft...',
                price : 7283
            }, {
                name :'Apple Watch Series 2',
                id: 3,
                catalog: 'watch',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/watch/Apple-Watch-Series-2-1.jpeg'},
                    {image: 'images/img/watch/Apple-Watch-Series-2-2.jpeg'},
                    {image: 'images/img/watch/Apple-Watch-Series-2-3.jpeg'}
                ],
                articul: 8002,
                oc: 'Android',
                brands: 'Archos',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Серый'},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'Есть'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Archos 50 Oxygen Plus, серый. Моноблок, Micro-SIM, Android , 3G, Bluetooth, USB-подключение к ПК, Wi-Fi, Разрешение основной камеры 8 Мп...',
                price : 9900
            }, {
                name :'Smart Baby Watch Q80',
                id: 4,
                catalog: 'watch',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/watch/Smart-Baby-Watch-Q80-1.jpeg'},
                    {image: 'images/img/watch/Smart-Baby-Watch-Q80-2.jpeg'},
                    {image: 'images/img/watch/Smart-Baby-Watch-Q80-3.jpeg'}
                ],
                articul: 8003,
                oc: 'Android',
                brands: 'Philips',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-карты', value: null},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : null},
                    {name: 'ОС', value: 'Android'},
                    {name: 'Связь 3G', value: null},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: null}
                ],
                ratio : 2,
                nalichie : 'В наличии',
                info : 'Смартфон Philips S398 Black. Черный корпус и разнообразие цветных панелей для Philips S398 как нельзя лучше подчеркнут ваш статус и уверенность в себе. Преимущества этой модели...',
                price : 11923
            }, {
                name :'Samsung Gear S3 Frontier',
                id: 5,
                catalog: 'watch',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/watch/Samsung-Gear-S3-Frontier-1.jpeg'},
                    {image: 'images/img/watch/Samsung-Gear-S3-Frontier-2.jpeg'},
                    {image: 'images/img/watch/Samsung-Gear-S3-Frontier-3.jpeg'}
                ],
                articul: 8004,
                oc: 'WindowsPhone',
                brands: 'Microsoft',
                color: 'white',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Черный'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'A-GPS'}
                ],
                ratio : 4,
                nalichie : 'В наличии',
                info : 'Смартфон Microsoft Lumia 430 RM-1099 black Куда бы вы ни направлялись, смартфон должен быть надежным спутником. Поэтому у Microsoft Lumia 430 Dual SIM (RM-1099) удобный компактный корпус ...',
                price : 5390
            }, {
                name :'Samsung Gear S3 Classic',
                id: 6,
                catalog: 'watch',
                activeIndex: 0, date:124325,
                oc: 'IOS',
                brands: 'Senseit',
                color: 'black',
                images: [
                    {image: 'images/img/watch/Samsung-Gear-S3-Classic-1.jpeg'},
                    {image: 'images/img/watch/Samsung-Gear-S3-Classic-2.jpeg'},
                    {image: 'images/img/watch/Samsung-Gear-S3-Classic-3.jpeg'}
                ],
                articul: 8005,
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value: 'Черный'},
                    {name: 'ОС', value: 'IOS'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value : 'A-GPS'}
                ],
                ratio : 1,
                nalichie : 'В наличии',
                info : 'Смартфон Senseit L301 black, черный. Micro-SIM, две поддерживаемых SIM-карты, Android, 3G, GPS-модуль...  ',
                price : 4990
            }, {
                name :'Apple Watch Series 2 42mm',
                id: 7,
                catalog: 'watch',
                activeIndex: 0, date:124325,
                images: [
                    {image: 'images/img/watch/Apple-Watch-Series-2-42mm-1.jpeg'},
                    {image: 'images/img/watch/Apple-Watch-Series-2-42mm-2.jpeg'},
                    {image: 'images/img/watch/Apple-Watch-Series-2-42mm-3.jpeg'}
                ],
                articul: 8006,
                oc: 'Windows Phone',
                brands: 'WinWin',
                color: 'black',
                feature : [
                    {name: 'Тип SIM-кары', value: 'Micro-SIM'},
                    {name: 'Количество SIM-карт', value: 2},
                    {name: 'Цвет', value : 'Черный'},
                    {name: 'ОС', value: 'Windows Phone'},
                    {name: 'Связь 3G', value: 'Есть'},
                    {name: '4G(LTE)', value: 'Нет'},
                    {name: 'GPS-модуль', value: 'Есть'}
                ],
                ratio : 5,
                nalichie : 'В наличии',
                info : 'Смартфон HIGHSCREEN WinWin Black оснащен 4 дисплеем и двумя слотами для SIM-карт.  Windows Phone , 3G, Bluetooth, USB-подключение к ПК...',
                price : 6273
            }
        ],
        filters: [
            {
                name: 'Наличие в магазинах',
                open: 'yes',
                id: 'shop',
                type: 'select',
                values: ['Во всех магазинах', 'В ближайшем ко мне магазине'],
                reset: false
            }, {
                name: 'Бренды',
                open: 'yes',
                id: 'brands',
                type: 'checkbox',
                values: ['Lenovo', 'Apple', 'Samsung', 'Asus', 'Motorola'],
                reset: true
            }, {
                name: 'Цена',
                open: 'yes',
                id: 'price',
                type: 'range-box',
                values: {
                    'от': '0',
                    'до': '10 000'
                },
                reset: false
            }, {
                name: 'Цвет',
                open: 'yes',
                id: 'color',
                type: 'color',
                values: ['white', 'gray', 'black', 'blue', 'red', 'yellow', 'orange', 'green', 'skyblue', 'violet', 'pink', 'brown'],
                reset: true
            }, {
                name: 'Операционная система',
                open: 'yes',
                id: 'oc',
                type: 'checkbox',
                values: ['Android', 'iOS', 'Windows Mobile', 'Symbian', 'Custom'],
                reset: true
            }
        ],
    },
];
export default function catalogs(state = initialState, action) {
    return state;
}
