let paused = false;
let masterTimeline = paused ? gsap.timeline({ paused: true }) : gsap.timeline({delay: 1});
gsap.globalTimeline.timeScale(1.5);

gsap.set('.yingyang', { transformOrigin: '50% 50%', rotate: 34 });

let yingAndYangTimeline = () => {
    let tl = gsap.timeline({ defaults: { duration: 1.8 } });
    tl.add('start');
    tl.to('.yang', {
        fillOpacity: '100%',
        morphSVG: '.core-right'
    }, 'start');
    tl.to('.ying', {
        morphSVG: '.core-left'
    }, 'start');
    tl.to('.middle-a-bits', {
        duration: 1,
        fillOpacity: '1'
    }, '-=0.7');
    return tl;
}
masterTimeline.add(yingAndYangTimeline);
let yingYangCircleTimeline = () => {
    let tl = gsap.timeline({ defaults: { duration: 2 } });
    tl.to('.yingyang', {
        transformOrigin: '50% 50%',
        rotate: -720
    });
    return tl;
}
masterTimeline.add(yingYangCircleTimeline);

let coreSidesTimeline = () => {
    let tl = gsap.timeline({ defaults: { duration: 1} });
    tl.add('start');
    tl.to('.core-right', {
        morphSVG: '.ying'
    }, 'start');
    tl.to('.core-left', {
        fillOpacity: '50%',
        morphSVG: '.yang'
    }, 'start');
    tl.to('.middle-of-a', {
        duration: 0.5,
        fillOpacity: '0'
    }, 'start');
    return tl;
}
masterTimeline.add(coreSidesTimeline);

let coreACircleTimeline = () => {
    let tl = gsap.timeline({ defaults: { duration: 2} });
    tl.to('.core-a', {
        transformOrigin: '50% 50%',
        rotate: -696
    });
    return tl;
}
masterTimeline.add(coreACircleTimeline);