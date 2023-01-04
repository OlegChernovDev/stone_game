export default {
    lang: 'russian', //english
    counter_click: 0,  //валюта
    click: 1, //за клик
    auto_click: 0,
    first_play: true,
    time: 0,
    stat: {
        clicks: 0
    },
    complited: [],
    shop: [{
            title: 'Title 1',
            cost: 10,
            award: 1,
            count: 0
        },
        {
            title: 'Title 2',
            cost: 100,
            award: 10,
            count: 0
        },
        {
            title: 'Title 3',
            cost: 1000,
            award: 100,
            count: 0
        },
        {
            title: 'Title 4',
            cost: 10000,
            award: 1000,
            count: 0
        },
        {
            title: 'Title 5',
            cost: 100000,
            award: 10000,
            count: 0
        },
        {
            title: 'Title 6',
            cost: 1000000,
            award: 100000,
            count: 0
        },
        {
            title: 'Title 7',
            cost: 10000000,
            award: 1,
            count: 0
        },
        {
            title: 'Title 8',
            cost: 100000000,
            award: 100,
            count: 0
        },
    ],
    progress: [{
            id: 0,
            text: 'набрать 10 монет',
            condition: 10,
            status: false
        },
        {
            id: 1,
            text: 'набрать 15 кликов',
            condition: 15,
            status: false
        },
        {
            id: 2,
            text: 'набрать 20 кликов',
            condition: 20,
            status: false
        }
    ],
    raid: {
        chance: 0.5, //шанс победы
        winning: 2, //+ случае победы
        loss: 4, //- в случае проигрыша
        ransom: 1 //стоимость выкупа
    },
    ad: {
        reward_video: 1000
    }
}