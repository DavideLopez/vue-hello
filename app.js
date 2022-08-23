console.log('vue')

const app = new Vue ({
    el: '#root',
    data: {
        titolo: 'VUE HELLO',
        image: 'https://picsum.photos/400/600',
    },
    methods: {
        toUpper(text) {
            return text.toUpperCase()
        },
    },
}
)