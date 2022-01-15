export default {
    nav: {
        logo: 'HDvF',
        links: [
            {text: 'Work', to: 'portfolio'},
            {text: 'About Me', to: 'aboutme'}
        ]
    },
    header: {
        greeting: 'Hi, I am Henri',
        title: '[ Full-Stack Developer ]',
        img: 'https://images.unsplash.com/photo-1638184984605-af1f05249a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        alt: 'Photo by Tareq Ajalyakin'
    },
    portfolio: {
        title: 'My Projects',
        intro: 'This is a selection of the projects that I have worked on in teams or on my own.',
        projects: [
            {
                id: 1,
                title: 'Pulse',
                img: './assets/images/pulse.png',
                desc: 'React app with Node.js backend to allow patients to book an appointment at their GP.',
                alt: 'React patient appointment booking app',
                techs: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
            },
            {
                id: 2,
                title: 'Transformers',
                img: './assets/images/transformers.png',
                desc: 'A PHP collection app for fans to get information on their favourite bots.',
                alt: 'Transformers PHP collection app',
                techs: ['PHP', 'MySQL'],
            },
            {
                id: 3,
                title: 'Aptitude Test',
                img: './assets/images/aptitude.png',
                desc: 'App for aptitude testing candidates for the academy. Built with React front-end and connected ' +
                    'to an existing PHP API.',
                alt: 'React aptitude testing app',
                techs: ['React', 'PHP', 'MySQL'],
            },
            {
                id: 4,
                title: 'Watches Collection',
                img: './assets/images/watches.png',
                desc: 'A classic collectors app for collecting watches, built in PHP with a MySQL database.',
                alt: 'Watches collection app',
                techs: ['PHP', 'MySQL'],
            },
            {
                id: 5,
                title: 'Whack-a-Zombie',
                img: './assets/images/zombies.png',
                desc: 'This JavaScript game uses CSS and timeouts and intervals to display the zombies.',
                alt: 'Zombies JavaScript game',
                techs: ['JavaScript', 'CSS'],
            },
        ],
    },
    aboutme: {
        header: 'I am a full-stack developer interested in creating software with an outstanding user experience.',
        narrative: 'Whether users are using an app in the comfort of their home, or in a fast-paced office ' +
            'environment, I believe that a fantastic experience with the applications that they interact with, ' +
            'is essential for me as a developer.'
    },
}