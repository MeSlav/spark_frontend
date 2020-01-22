class Video {
    constructor(title, uploader, duration) {
        this.title = title;
        this.uploader = uploader;
        this.duration = duration;
    }

    watch(amount) {
        console.log(`You watched ${amount ? amount : 'all ' + this.duration} of ${this.uploader}'s ${this.title}.`);
    }
}

const spaceOdyssey = new Video('2001: A Space Odyssey', 'Stanley Kubrick', '142 minutes');

spaceOdyssey.watch('55 minutes');

const clockworkOrange = new Video('A Clockwork Orange', 'Stanley Kubrick', '136 minutes');

clockworkOrange.watch('80 minutes');

const wesAndersonFilms = [
    {
        title: 'Grand Budapest Hotel',
        uploader: 'Wes Anderson',
        duration: '100 minutes',
    },
    {
        title: 'Isle of Dogs',
        uploader: 'Wes Anderson',
        duration: '101 minutes',
    },
    {
        title: 'Moonrise Kingdom',
        uploader: 'Wes Anderson',
        duration: '94 minutes',
    },
    {
        title: 'The Darjeeling Limited',
        uploader: 'Wes Anderson',
        duration: '91 minutes',
    },
    {
        title: 'The Royal Tenebaums',
        uploader: 'Wes Anderson',
        duration: '109 minutes',
    },
];

wesAndersonFilms.forEach(({ 
    title,
    uploader,
    duration,
}) => {
    const video = new Video(title, uploader, duration);
    video.watch();
});

