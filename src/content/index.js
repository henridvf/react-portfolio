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
                img1: './assets/images/pulse1.png',
                img2: './assets/images/pulse2.png',
                img3: './assets/images/pulse3.png',
                desc: 'React app with Node.js backend to allow patients to book an appointment at their GP.',
                alt: 'React patient appointment booking app',
                techs: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
                url: '',
                github: 'https://github.com/iO-Academy/2021-aug-pulse-fe',
            },
            {
                id: 2,
                title: 'Transformers',
                img1: './assets/images/transformers1.png',
                img2: './assets/images/transformers2.png',
                img3: './assets/images/transformers3.png',
                desc: 'A PHP collection app for fans to get information on their favourite bots.',
                alt: 'Transformers PHP collection app',
                techs: ['PHP', 'MySQL'],
                url: 'https://dev.io-academy.uk/projects/2021-aug/2021-aug-oopTransformers/',
                github: 'https://github.com/iO-Academy/2021-aug-oopTransformers',
            },
            {
                id: 3,
                title: 'Aptitude Test',
                img1: './assets/images/aptitude1.png',
                img2: './assets/images/aptitude3.png',
                img3: './assets/images/aptitude1.png',
                desc: 'App for aptitude testing candidates for the academy. Built with React front-end and connected ' +
                    'to an existing PHP API.',
                alt: 'React aptitude testing app',
                techs: ['React', 'PHP', 'Bootstrap', 'MySQL'],
                url: 'https://aptitude-test.dev.io-academy.uk',
                github: 'https://github.com/iO-Academy/aptitude-test',
            },
            {
                id: 4,
                title: 'Watches Collection',
                img1: './assets/images/watches1.png',
                img2: './assets/images/watches2.png',
                img3: './assets/images/watches1.png',
                desc: 'A classic collectors app for collecting watches, built in PHP with a MySQL database.',
                alt: 'Watches collection app',
                techs: ['PHP', 'MySQL'],
                url: '',
                github: '',
            },
            {
                id: 5,
                title: 'Whack-a-Zombie',
                img1: './assets/images/zombies1.png',
                img2: './assets/images/zombies2.png',
                img3: './assets/images/zombies3.png',
                desc: 'This JavaScript game uses CSS and timeouts and intervals to display the zombies.',
                alt: 'Zombies JavaScript game',
                techs: ['JavaScript', 'CSS'],
                url: 'https://dev.io-academy.uk/projects/2021-aug/2021-aug-whackamole/',
                github: 'https://github.com/iO-Academy/2021-aug-whackamole',
            },
        ],
    },
    aboutme: {
        header: 'I am a software developer aspiring to create software with an outstanding user experience.',
        para1: 'Coming from a management consultancy background, I understand the importance of early and continuous' +
            ' engagement with those who will be using our software tools. The experience must be snappy, responsive, with ' +
            'a logical and smooth flow, so that the user can jump straight in.',
        para2: 'Whether users are using an app in the comfort of their home, or in a fast-paced office ' +
            'environment, I believe that a fantastic experience with the applications that they interact with, ' +
            'lies at the heart of good software and is a reflection of the skill of its developers.',
        para3: 'I am currently open for full time positions as a full-stack developer, on-site, hybrid or remote. ' +
            'Reach out to connect!'
    },
}