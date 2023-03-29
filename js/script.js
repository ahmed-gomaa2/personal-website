
function renderUI() {
    setTimeout(() => {
        console.log('First');
        const bodyMarkup = `
            <div class="Intersecting"></div>

        <header class="Header__section">
            <div class="Header__container">
                <div class="Header__logo">
                    <h1 class="Header__logo-h2"><span class="Header__logo-ap">AG</span> <span class="Header__logo-fn">ahmed gomaa</span></h1>
                </div> <!-- /Header__logo -->
                <div class="Header__nav-toggle Header__hidden">
                    <span></span><span></span><span></span>
                </div>
                <div class="Header__nav-overlay"></div>
                <div class="Header__nav">
                    <ul class="Header__nav-list">
                        <li class="Header__nav-item"><a href="#" class="Header__nav-link"><span class="Header__nav-link--top"></span><span class="Header__nav-link--bottom"></span><span class="Header__nav-link--left"></span><span class="Header__nav-link--right"></span>01. about</a></li>
                        <li class="Header__nav-item"><a href="#" class="Header__nav-link"><span class="Header__nav-link--top"></span><span class="Header__nav-link--bottom"></span><span class="Header__nav-link--left"></span><span class="Header__nav-link--right"></span>02. skills</a></li>
                        <li class="Header__nav-item"><a href="#" class="Header__nav-link"><span class="Header__nav-link--top"></span><span class="Header__nav-link--bottom"></span><span class="Header__nav-link--left"></span><span class="Header__nav-link--right"></span>03. services</a></li>
                        <li class="Header__nav-item"><a href="#" class="Header__nav-link"><span class="Header__nav-link--top"></span><span class="Header__nav-link--bottom"></span><span class="Header__nav-link--left"></span><span class="Header__nav-link--right"></span>04. portfolio</a></li>
                        <li class="Header__nav-item"><a href="#" class="Header__nav-link"><span class="Header__nav-link--top"></span><span class="Header__nav-link--bottom"></span><span class="Header__nav-link--left"></span><span class="Header__nav-link--right"></span>05. reviews</a></li>
                        <li class="Header__nav-item"><a href="#" class="Header__nav-link"><span class="Header__nav-link--top"></span><span class="Header__nav-link--bottom"></span><span class="Header__nav-link--left"></span><span class="Header__nav-link--right"></span>06. contact</a></li>
                    </ul> <!-- /Header__nav-list -->
                    <p class="Header__nav-cancel"><i class="fas fa-window-close"></i></p>
                </div> <!-- /Header__nav -->
            </div> <!-- /Header__container -->
        </header> <!-- /Header -->
        <!-- ************************************************************* -->
        <main class="Main">
            <div class="Main__container col-lg-8 col-md-9 col-10">
                <div class="Main__left">
                    <div class="Main__left-container">
                        <div class="Main__greetings">
                            <p>hello, my name is</p>
                        </div> <!-- /Main__greetings -->
                        <div class="Main__name">
                            <h1>ahmed <span><span class="Main__name-middle">abu el-ghiet</span> gomaa</span></h1>
                        </div> <!-- /Main__name -->
                        <div class="Main__title">
                            <p>I'm <span>full stack</span> javascript developer</p>
                        </div> <!-- /Main__title -->
                        <div class="Main__cv">
                            <a  href="files/cv.pdf">download cv</a>
                            <a class="Main__cv-contact" href="mailto: engahmedgomaa97@gmail.com">contact</a>
                        </div> <!-- /Main__cv -->
                    </div> <!-- /Main__left-container -->
                </div> <!-- /Main__left -->
<!--                <div class="Main__right">-->
<!--                    <img src="images/hero.jpg" alt="">-->
<!--                </div> &lt;!&ndash; /Main__right &ndash;&gt;-->
            </div> <!-- /Main__container -->
        </main> <!-- /Main -->
        <!-- ****************************************************** -->
        <section class="About">
            <div class="About__container mx-auto col-lg-8 col-md-9 col-10">
                <div class="About__left">
                    <div class="About__header Header">
                        <h2><span>01.</span> about me</h2>
                    </div> <!-- /About__header -->
                    <div class="About__desc">
                        <p>Hello! my name is <span>Ahmed</span> I create web application. <br>I started learning in 2020 after graduating from Faculty of Engineering.<br>I started simple by learning the basics of HTML, CSS, HTML5, CSS3, Javascript and bootstrap.<br>Then, I went for more by learning ReactJS, NodeJS, MySQL and MongoDB.</p>
                        <p>I worked for an Australian company called UTOPIA for two months.<br>I worked on their HR Application created chat application using React, Redux, NodeJS, MySQL and some other tools, created charts visualization tool to track the application progress.</p>
                    </div> <!-- /About__desc -->
                    <div class="About__skills">
                        <h4>Here are some skills I've mastered on the way:</h4>
                        <ul class="About__skills-container">
                            <li class="About__skill"><i class="far fa-arrow-alt-circle-right"></i>ReactJS</li>
                            <li class="About__skill"><i class="far fa-arrow-alt-circle-right"></i>Redux</li>
                            <li class="About__skill"><i class="far fa-arrow-alt-circle-right"></i>Redux-thunk</li>
                            <li class="About__skill"><i class="far fa-arrow-alt-circle-right"></i>NodeJS</li>
                            <li class="About__skill"><i class="far fa-arrow-alt-circle-right"></i>MySQL</li>
                            <li class="About__skill"><i class="far fa-arrow-alt-circle-right"></i>MongoDB</li>
                            <li class="About__skill"><i class="far fa-arrow-alt-circle-right"></i>Javascript (ES6)</li>
                            <li class="About__skill"><i class="far fa-arrow-alt-circle-right"></i>Sass</li>
                        </ul> <!-- /About__skills-container -->
                    </div> <!-- /About__skills -->
                </div> <!-- /About__left -->
                <div class="About__right">
                    <div class="About__img">
                        <img src="images/pi.jpg" alt="">
                        <div class="About__img-overlay"></div>
                        <div class="About__overlay"></div>
                    </div> <!-- /About__img -->
                </div> <!-- /About__right -->
            </div> <!-- /About__container -->
        </section> <!-- /About -->
        <section class="Projects">
            <div class="Projects__container mx-auto col-lg-8 col-md-9 col-10">
                <div class="Projects__header Header">
                    <h2><span>02.</span> Projects</h2>
                </div> <!-- /Projects__header -->
                <div class="Projects__nav mx-auto mb-3 col-lg-10 col-md-11 col-12 d-flex justify-content-center">
                    <ul class="Projects__nav-items row d-flex">
                        <li data-filter="all" id="Projects__all" class="Projects__filter mb-3"><span class="Projects__nav-item--active">All</span></li>
                        <li data-filter="responsive" class="Projects__filter mb-3"><span>Responsive</span></li>
                        <li data-filter="js" class="Projects__filter mb-3"><span >Vanilla JS</span></li>
                        <li data-filter="react" class="Projects__filter mb-3"><span >ReactJS</span></li>
                        <li data-filter="css" class="Projects__filter mb-3"><span >CSS</span></li>
                        <li data-filter="css3" class="Projects__filter mb-3"><span>CSS3</span></li>
                        <li data-filter="html" class="Projects__filter mb-3"><span >HTML</span></li>
                        <li data-filter="html5" class="Projects__filter mb-3"><span >HTML5</span></li>
                        <li data-filter="fullstack" class="Projects__filter mb-3"><span >Full Stack</span></li>
                    </ul> <!-- Projects__nav-items -->
                </div> <!-- Projects__nav -->
                <div class="Projects__items">
                    <div class="Projects__items-container row">
<!--                        <div class="Projects__item col-lg-4 mb-4 col-sm-6 col-12">-->
<!--                            <div class="Projects__item-container card border-0">-->
<!--                                <img src="images/projects/ballot.jpg" alt="" class="card-img-top h-100">-->
<!--                                <div class="Projects__item-desc">-->
<!--                                    <div class="Projects__item-data d-block p-3">-->
<!--                                        <div class="Projects__item-links d-flex justify-content-between">-->
<!--                                            <p class="Projects__item-icon"><a href=""><i class="fas fa-external-link-alt"></i></a></p>-->
<!--                                            <p class="Projects__item-icon"><a href=""><i class="fab fa-github"></i></a></p>-->
<!--                                        </div>&lt;!&ndash; /Projects__item-links &ndash;&gt;-->
<!--                                    </div> &lt;!&ndash; /Projects__item-data &ndash;&gt;-->
<!--                                    <div class="Projects__item-overlay"></div>-->
<!--                                </div>&lt;!&ndash; /Projects__item-dec &ndash;&gt;-->
<!--                            </div> &lt;!&ndash; /Projects__item-container &ndash;&gt;-->
<!--                        </div> &lt;!&ndash; /Projects__item &ndash;&gt;-->
<!--                        <div class="Projects__item col-lg-4 mb-4 col-sm-6 col-12">-->
<!--                            <div class="Projects__item-container card  border-0">-->
<!--                                <img src="images/projects/pizzawy.jpg" alt="" class="card-img-top h-100">-->

<!--                            </div> &lt;!&ndash; /Projects__item-container &ndash;&gt;-->
<!--                        </div> &lt;!&ndash; /Projects__item &ndash;&gt;-->
<!--                        <div class="Projects__item col-lg-4 mb-4 col-sm-6 col-12">-->
<!--                            <div class="Projects__item-container card border-0">-->
<!--                                <img src="images/projects/techno.jpg" alt="" class="card-img-top h-100">-->
<!--                                <div class="Projects__item-desc">-->
<!--                                    <div class="Projects__item-overlay"></div>-->
<!--                                </div>-->
<!--                            </div> &lt;!&ndash; /Projects__item-container &ndash;&gt;-->
<!--                        </div> &lt;!&ndash; /Projects__item &ndash;&gt;-->
<!--                        <div class="Projects__item col-lg-4 mb-4 col-sm-6 col-12">-->
<!--                            <div class="Projects__item-container card border-0">-->
<!--                                <img src="images/hero.jpg" alt="" class="card-img-top h-100">-->

<!--                            </div> &lt;!&ndash; /Projects__item-container &ndash;&gt;-->
<!--                        </div> &lt;!&ndash; /Projects__item &ndash;&gt;-->
<!--                        <div class="Projects__item col-lg-4 mb-4 col-sm-6 col-12">-->
<!--                            <div class="Projects__item-container card border-0">-->
<!--                                <img src="images/hero.jpg" alt="" class="card-img-top h-100">-->

<!--                            </div> &lt;!&ndash; /Projects__item-container &ndash;&gt;-->
<!--                        </div> &lt;!&ndash; /Projects__item &ndash;&gt;-->
<!--                        <div class="Projects__item col-lg-4 mb-4 col-sm-6 col-12">-->
<!--                            <div class="Projects__item-container card border-0">-->
<!--                                <img src="images/hero.jpg" alt="" class="card-img-top h-100">-->

<!--                            </div> &lt;!&ndash; /Projects__item-container &ndash;&gt;-->
<!--                        </div> &lt;!&ndash; /Projects__item &ndash;&gt;-->

                    </div> <!-- /Projects__items-container -->
                </div> <!-- /Projects__items -->
            </div> <!-- /Projects__container -->
        </section> <!-- /Projects -->
        <section class="Services w-100 ">
            <div class="Services__container py-3 mx-auto col-lg-8 col-md-9 col-10">
                <div class="Services__header Header">
                    <h2><span>03.</span> services</h2>
                </div> <!-- /Services__header -->

                <div class="Services__items row">
                    <div class="Services__item col-md-4 col-sm-6 col-xs-8 mb-5">
                        <div class="card p-2">
                            <div class="card-body">
                                <h6 class="card-subtitle mb-2 text-muted text-center"><i class="fab fa-node-js Services__icon text-success"></i></h6>
                                <p class="text-center p-0 m-0">NodeJS</p>
                            </div>
                        </div>
                    </div>
                    <div class="Services__item col-sm col-md-4 col-sm-6 col-xs-10 mb-5">
                        <div class="card p-2">
                            <div class="card-body">
                                <h6 class="card-subtitle mb-2 text-muted text-center"><i class="fab fa-react Services__icon text-primary "></i></h6>
                                <p class="text-center p-0 m-0">ReactJS</p>
                            </div>
                        </div>
                    </div>
                    <div class="Services__item col-sm col-md-4 col-sm-6 col-xs-10 mb-5">
                        <div class="card p-2">
                            <div class="card-body">
                                <h6 class="card-subtitle mb-2 text-muted text-center"><i class="fab fa-js Services__icon"  style="color: yellow"></i></h6>
                                <p class="text-center p-0 m-0">Vanilla JS</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div> <!-- /Services__container -->
        </section> <!-- /Services-->
    `;

        document.body.insertAdjacentHTML('afterbegin', bodyMarkup);

        const navBtn = document.querySelector('.Header__nav-toggle');
        const nav = document.querySelector('.Header__nav');
        const headerOverlay = document.querySelector('.Header__nav-overlay');
        const header = document.querySelector('.Header__section');
        const headerContainer = document.querySelector('.Header__container');
        const int = document.querySelector('.Intersecting');
        const navLinks = document.querySelectorAll('.Header__nav-item');
        const cancelBtn = document.querySelector('.Header__nav-cancel');

        navBtn.addEventListener('click',(e) => {
            e.preventDefault();
            nav.style.transform = 'none';
            headerOverlay.style.transform = 'none';
        });

        headerOverlay.addEventListener('click',(e) => {
            e.preventDefault();
            nav.style.transform = 'translateX(100%)';
            headerOverlay.style.transform = 'translateX(100%)';
            nav.style.transitionDelay = '0';
            headerOverlay.style.transitionDelay = '0.4s';
        });

        cancelBtn.addEventListener('click',(e) => {
            e.preventDefault();
            nav.style.transform = 'translateX(100%)';
            headerOverlay.style.transform = 'translateX(100%)';
        });

        window.addEventListener('resize', e => {
            e.preventDefault();
            if(e.target.innerWidth > 1100) {
                nav.style.transform = 'none';
                headerOverlay.style.transform = 'none';
            } else {
                nav.style.transform = 'translateX(100%)';
                headerOverlay.style.transform = 'translateX(100%)';
            }
        })

        const stickyNav = function (enteries) {
            const [entry] = enteries;


            if(!entry.isIntersecting) {
                header.classList.add('Header__fixed');
            }
            else{
                header.classList.remove('Header__fixed');
            }
        }

        const headerObserver = new IntersectionObserver(stickyNav, {
            root: null,
            rootMargin: '100px',
            threshold: 0
        });

        headerObserver.observe(int);

        navLinks.forEach((link, i) => {
            link.style.animation = `fadeIn 0.5s forwards 0.${i + 2}s`
        });

        const aboutSection = document.querySelector('.About');

        const aboutObserver = (entries) => {
            const [entry] = entries;
            if(!entry.isIntersecting) return;
            aboutSection.classList.remove('section--hidden');
            aboutSection.querySelector('.About__desc').style.animation = 'fadeIn 0.5s forwards 0.3s';
            aboutSection.querySelector('.About__skills h4').style.animation = 'fadeIn 0.5s forwards 0.4s';
            aboutSection.querySelector('.About__right').style.animation = 'fadeIn 0.5s forwards 0.5s';
            aboutSection.querySelectorAll('.About__skill').forEach((s, i) => {
                s.style.animation = `fadeIn 0.5s forwards ${0.5 + i / 20}s`
            })
        }

        const animatedAbout = new IntersectionObserver(aboutObserver, {
            root: null,
            rootMargin: '-50px',
            threshold: 0
        });

        animatedAbout.observe(aboutSection);
        aboutSection.classList.add('section--hidden');

        const projects = [
            {
                id: 1,
                name: 'ballot',
                link: 'https://ahmed-gomaa2.github.io/ballot/',
                github: 'https://github.com/ahmed-gomaa2/ballot/',
                img: 'images/projects/ballot.jpg',
                responsive: false,
                js: false,
                react: false,
                css: true,
                css3: true,
                html: true,
                html5: true,
                fullstack: false
            },
            {
                id: 2,
                name: 'pizzawy',
                link: 'https://ahmed-gomaa2.github.io/template1/',
                github: 'https://github.com/ahmed-gomaa2/template1/',
                img: 'images/projects/pizzawy.jpg',
                responsive: false,
                css: true,
                css3: false,
                html: true,
                html5: true,
                react: false,
                fullstack: false,
                js: false
            },{
                id: 3,
                name: 'techno',
                link: 'https://ahmed-gomaa2.github.io/techno/',
                github: 'https://github.com/ahmed-gomaa2/techno/',
                img: 'images/projects/techno.jpg',
                responsive: true,
                css: true,
                css3: true,
                html: true,
                html5: true,
                react: false,
                fullstack: false,
                js: true
            },
            {
                id: 4,
                name: 'pricing',
                link: 'https://ahmed-gomaa2.github.io/pricing/',
                github: 'https://github.com/ahmed-gomaa2/pricing.git',
                img: 'images/projects/pricing.jpg',
                responsive: false,
                css: true,
                css3: false,
                html: true,
                html5: false,
                react: false,
                fullstack: false,
                js: true
            }
        ];

        let filtering = false;

        const filters = {
            js: {
                on: false,
            },
            html: {
                on: false,
            },
            html5: {
                on: false,
            },
            css: {
                on: false,
            },
            css3: {
                on: false,
            },
            fullstack: {
                on: false,
            },
            react:  {
                on: false,
            },
            responsive: {
                on: false,
            }
        };

        const filtersContainer = document.querySelector('.Projects__nav-items');
        const projectsContainer = document.querySelector('.Projects__items-container');

        function renderProjects() {
            const filteredProjects = projects.filter(p => {
                // return (p.js == filters.js || filters.js == 0) && (p.html5 == filters.html5 || filters.html5 == 0) && (p.css3 == filters.css3 || filters.css3 == 0) && (p.react == filters.react || filters.react == 0) && (p.fullstack == filters.fullstack || filters.fullstack == 0) && (p.responsive == filters.responsive || filters.responsive == 0) && (p.html == filters.html || filters.html == 0) && (p.css == filters.css || filters.css == 0)
                return filtering ? ((filters.js.on ? p.js : true ) && (filters.html.on ? p.html : true) && (filters.html5.on ? p.html5 : true ) && (filters.css.on ? p.css : true) && (filters.css3.on ? p.css3 : true ) && (filters.fullstack.on ? p.fullstack : true ) && (filters.responsive.on ? p.responsive : true ) && (filters.react.on ? p.react : true )) : true;
            });

            const projectsMarkup = generateProjectsMarkup(filteredProjects);

            projectsContainer.innerHTML = '';
            projectsContainer.insertAdjacentHTML('beforeend', projectsMarkup);
            projectsObserver();
        }

        function generateProjectsMarkup(projects) {
            return projects.map(p => {
                return `
                <div class="Projects__item col-lg-4 mb-4 col-sm-6 col-12">
                    <div class="Projects__item-container card border-0">
                        <img src="${p.img}" alt="" class="card-img-top h-100">
                        <div class="Projects__item-desc">
                            <div class="Projects__item-data d-block p-3">
                                <div class="Projects__item-links d-flex justify-content-between">
                                    <p class="Projects__item-icon"><a target="_blank" href="${p.link}"><i class="fas fa-external-link-alt"></i></a></p>
                                    <p class="Projects__item-icon"><a target="_blank" href="${p.github}"><i class="fab fa-github"></i></a></p>
                                </div><!-- /Projects__item-links -->
                            </div> <!-- /Projects__item-data -->
                            <div class="Projects__item-overlay"></div>
                        </div><!-- /Projects__item-dec -->
                    </div> <!-- /Projects__item-container -->
                </div> <!-- /Projects__item -->
        `;
            }).join('');
        }

// function updateMarkUp() {
//     const filteredProjects = projects.filter(p => {
//         // return (p.js == filters.js || filters.js == 0) && (p.html5 == filters.html5 || filters.html5 == 0) && (p.css3 == filters.css3 || filters.css3 == 0) && (p.react == filters.react || filters.react == 0) && (p.fullstack == filters.fullstack || filters.fullstack == 0) && (p.responsive == filters.responsive || filters.responsive == 0) && (p.html == filters.html || filters.html == 0) && (p.css == filters.css || filters.css == 0)
//         return filtering ? ((filters.js.on ? p.js : true ) && (filters.html.on ? p.html : true) && (filters.html5.on ? p.html5 : true ) && (filters.css.on ? p.css : true) && (filters.css3.on ? p.css3 : true ) && (filters.fullstack.on ? p.fullstack : true ) && (filters.responsive.on ? p.responsive : true ) && (filters.react.on ? p.react : true )) : true;
//     });
//     console.log(filteredProjects, filtering);
//
//     const projectsMarkUP = generateProjectsMarkup(filteredProjects);
//
//     const newDOM = document.createRange().createContextualFragment(projectsMarkUP);
//     const newElements = Array.from(newDOM.querySelectorAll('*'));
//     const curElements = Array.from(projectsContainer.querySelectorAll('*'));
//
//     newElements.forEach((newEl, i) => {
//         const curEl = curElements[i];
//         // console.log(curEl, newEl.isEqualNode(curEl));
//
//         // Updates changed TEXT
//         if (
//             !newEl.isEqualNode(curEl) &&
//             newEl.firstChild?.nodeValue.trim() !== ''
//         ) {
//             // console.log('💥', newEl.firstChild.nodeValue.trim());
//             curEl.textContent = newEl.textContent;
//         }
//
//         // Updates changed ATTRIBUES
//         if (!newEl.isEqualNode(curEl))
//             Array.from(newEl.attributes).forEach(attr =>
//                 curEl.setAttribute(attr.name, attr.value)
//             );
//     });
// }

        filtersContainer.addEventListener('click', (e) => {
            const filter = e.target.closest('.Projects__filter');
            if(!filter) return;

            if (filter.getAttribute('id') === 'Projects__all') {
                filtering = false;
                Object.keys(filters).forEach(f => {
                    return filters[f].on = false
                });

                document.querySelectorAll('.Projects__filter > span').forEach(f => {
                    f.classList.remove('Projects__nav-item--active');
                });

                filter.querySelector('span').classList.add('Projects__nav-item--active');

                return renderProjects();
            }

            const filterName = filter.dataset.filter;
            filters[filterName].on = !filters[filterName].on;
            filtering = !!Object.keys(filters).filter(f => filters[f].on === true).length;
            const allFilter = document.querySelector('#Projects__all > span');
            filtering ? allFilter.classList.remove('Projects__nav-item--active') : allFilter.classList.add('Projects__nav-item--active');
            console.log(filtering);
            renderProjects();
            filter.querySelector('span').classList.toggle('Projects__nav-item--active');
        });

        renderProjects();

        function projectsObserver() {
            const projectsElements = document.querySelectorAll('.Projects__item');
            let count = 0, offsetTop = undefined;


            projectsElements.forEach((p, i) => {


                const animation = `fade-in 0.5s forwards ${(count + 2)*0.1}s`;
                const projectObserver = (entries) => {
                    const [entry] = entries;
                    if(!entry.isIntersecting) return;
                    // p.classList.remove('section--hidden');
                    p.style.animation = animation;
                }

                const animatedProject = new IntersectionObserver(projectObserver, {
                    root: null,
                    rootMargin: '-50px',
                    threshold: 0,
                    count: count
                });
                animatedProject.observe(p);
                // p.classList.add('section--hidden');
                const offsetOfThis = p.offsetTop;

                if(offsetTop == undefined) {
                    offsetTop = offsetOfThis;
                }
                if(offsetTop != offsetOfThis) {
                    count = 0;
                    offsetTop = undefined;
                }else {
                    count++;
                }
            });
        }

        (function (){
            const headers = document.querySelectorAll('.Header');
            headers.forEach((h, i) => {
                const headerObserver = enteries => {
                    const [entry] = enteries;

                    if(!entry.isIntersecting) return;
                    h.style.animation = 'fade-in 0.5s forwards';
                }

                const animatedHeader = new IntersectionObserver(headerObserver, {
                    root: null,
                    rootMargin: '-50px',
                    threshold: 0
                });
                animatedHeader.observe(h);
            })
        })();

        (function () {
            const servicesElements = document.querySelectorAll('.Services__item');
            let count = 0, offsetTop = undefined;

            servicesElements.forEach((p, i) => {
                const animation = `fade-in 0.5s forwards ${(count + 2)*0.1}s`;
                const serviceObserver = (entries) => {
                    const [entry] = entries;
                    if(!entry.isIntersecting) return;
                    // p.classList.remove('section--hidden');
                    p.style.animation = animation;
                }

                const animatedService = new IntersectionObserver(serviceObserver, {
                    root: null,
                    rootMargin: '-50px',
                    threshold: 0,
                });
                animatedService.observe(p);
                // p.classList.add('section--hidden');
                const offsetOfThis = p.offsetTop;

                if(offsetTop == undefined) {
                    offsetTop = offsetOfThis;
                }
                if(offsetTop != offsetOfThis) {
                    count = 0;
                    offsetTop = undefined;
                }else {
                    count++;
                }
            });
        })();

        (function () {
            const filtersElements = document.querySelectorAll('.Projects__filter');
            let count = 0, offsetTop = undefined;

            filtersElements.forEach((p, i) => {
                const animation = `fade-in 0.5s forwards ${(count + 2)*0.1}s`;
                const serviceObserver = (entries) => {
                    const [entry] = entries;
                    if(!entry.isIntersecting) return;
                    // p.classList.remove('section--hidden');
                    p.style.animation = animation;
                }

                const animatedService = new IntersectionObserver(serviceObserver, {
                    root: null,
                    rootMargin: '-50px',
                    threshold: 0,
                });
                animatedService.observe(p);
                // p.classList.add('section--hidden');
                const offsetOfThis = p.offsetTop;

                if(offsetTop == undefined) {
                    offsetTop = offsetOfThis;
                }
                if(offsetTop != offsetOfThis) {
                    count = 0;
                    offsetTop = undefined;
                }else {
                    count++;
                }
            });
        })();
    }, 2000);
}

renderUI();












