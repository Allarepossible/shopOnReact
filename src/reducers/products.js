const initialState = [
    {
        name :'Samsung GT-I9301I  GALAXY S 3',
        id: 1,
        images: [
            {image: 'images/img/Samsung-GT-I9301I-s1.jpg'},
            {image: 'images/img/Samsung-GT-I9301I-s2.jpg'},
            {image: 'images/img/Samsung-GT-I9301I-s3.jpg'}
        ],
        activeIndex: 0,
        articul :'128789',
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
        price : '11 290'
    }, {
        name :'Microsoft Lumia 640 RM-1077',
        id: 2,
        activeIndex: 0,
        images: [
            {image: 'images/img/Microsoft-Lumia-640-s1.jpg'},
            {image: 'images/img/Microsoft-Lumia-640-s2.jpg'},
            {image: 'images/img/Microsoft-Lumia-640-s3.jpg'}
        ],
        articul :'321559',
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
        price : '10 990'
    }, {
        name :'Archos 50 Oxygen Plus',
        id: 3,
        activeIndex: 0,
        images: [
            {image: 'images/img/Archos-50-Oxygen-Plus-s1.jpg'},
            {image: 'images/img/Archos-50-Oxygen-Plus-s2.jpg'},
            {image: 'images/img/Archos-50-Oxygen-Plus-s3.jpg'}
        ],
        articul :'132489',
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
        price : '9 900'
    }, {
        name :'Philips S398 Black',
        id: 4,
        activeIndex: 0,
        images: [
            {image: 'images/img/Philips-S398-Black-s1.jpg'},
            {image: 'images/img/Philips-S398-Black-s2.jpg'},
            {image: 'images/img/Philips-S398-Black-s3.jpg'}
        ],
        articul :'321559',
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
        price : '8 990'
    }, {
        name :'Microsoft Lumia 430 RM-10',
        id: 5,
        activeIndex: 0,
        images: [
            {image: 'images/img/Microsoft-Lumia-430-RM-10-s1.jpg'},
            {image: 'images/img/Microsoft-Lumia-430-RM-10-s2.jpg'},
            {image: 'images/img/Microsoft-Lumia-430-RM-10-s3.jpg'}
        ],
        articul :'965471',
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
        price : '5 390'
    }, {
        name :'Senseit L301 Black ',
        id: 6,
        activeIndex: 0,
        oc: 'IOS',
        brands: 'Senseit',
        color: 'black',
        images: [
            {image: 'images/img/Senseit-L301-Black-s1.jpg'},
            {image: 'images/img/Senseit-L301-Black-s2.jpg'},
            {image: 'images/img/Senseit-L301-Black-s3.jpg'}
        ],
        articul :'321419',
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
        price : '4 990'
    }, {
        name :'HIGHSCREEN WinWin Black',
        id: 7,
        activeIndex: 0,
        images: [
            {image: 'images/img/HIGHSCREEN-WinWin-Black-s1.jpg'},
            {image: 'images/img/HIGHSCREEN-WinWin-Black-s2.jpg'},
            {image: 'images/img/HIGHSCREEN-WinWin-Black-s3.jpg'}
        ],
        articul :'451781',
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
        info : 'Смартфон HIGHSCREEN WinWin Black оснащен 4" дисплеем и двумя слотами для SIM-карт.  Windows Phone , 3G, Bluetooth, USB-подключение к ПК...',
        price : '3 990'
    }, {
        name :'Alcatel OT4013D PIXI 3 (2 SIM)',
        id: 8,
        activeIndex: 0,
        images: [
            {image: 'images/img/Alcatel-OT4013D-PIXI3-(2SIM)-s1.jpg'},
            {image: 'images/img/Alcatel-OT4013D-PIXI3-(2SIM)-s2.jpg'},
            {image: 'images/img/Alcatel-OT4013D-PIXI3-(2SIM)-s3.jpg'}
        ],
        articul :'321489',
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
        price : '3 990'
    }, {
        name :'Fly IQ434 Era Nano 5',
        id: 9,
        activeIndex: 0,
        images: [
            {image: 'images/img/Fly-IQ434-Era-Nano-5-s1.jpg'},
            {image: 'images/img/Fly-IQ434-Era-Nano-5-s2.jpg'},
            {image: 'images/img/Fly-IQ434-Era-Nano-5-s3.jpg'}
        ],
        articul :'987441',
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
        info : 'Смартфон Fly IQ434 Era Nano 5 оснащен 3.5" дисплеем и двумя слотами для SIM-карт. Android 2.3, Micro SD, Wi-Fi.... ',
        price : '1 790'
    }];

export default function products(state = initialState, action) {
    if (action.type === 'CHANGE_SLIDE') {
        state['id' === action.payload.id] = action.payload;

        return [
            ...state
        ];
    } else if (action.type === 'FILTER_ACTION') {
        return action.payload;
    } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
        return action.payload;
    }
    return state;
}
