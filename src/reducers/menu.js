const INITIAL_VALUE = {
    result: [
        {
            image: '/images/supplies.png',
            label: 'Todos',
            link: '/',
        },
        {
            image: '/images/box.png',
            label: 'Exclusivos',
            link: '/exclusives',
        },
        {
            image: '/images/gift-box.png',
            label: 'Promoções',
            link: '/promotions',
        },
        {
            image: '/images/recommended.png',
            label: 'Favoritos',
            link: '/favorites',
        },
    ],
}

export default (state = INITIAL_VALUE, { type, payload }) => {
    switch (type) {
        default:
            return state
    }
}
