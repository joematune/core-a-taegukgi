let tl = gsap.timeline({ defaults: { duration: 1, transformOrigin: '50% 50%' }});
tl.addLabel('start', 0);
tl.timeScale(1);
tl.repeat(-1);

tl.to('.core-a', {
        duration: 4,
        rotate: -696
      }, 'start')

      .addLabel('fullSpin', '>')

      .to('.middle-of-a', {
        ease: 'none',
        scaleX: 0,
        scaleY: 0.9,
        transformOrigin: '50% 0%'
      }, 'start')
      .to('.core-right', {
        ease: 'none',
        morphSVG: '.core-right-big'
      }, 'start')
      .to('.core-left', {
        ease: 'none',
        morphSVG: '.core-left-big',
        fillOpacity: 0.5
      }, 'start')

      .addLabel('circleClosed', '>')

      .to('.core-right', {
        ease: 'none',
        morphSVG: '.ying'
      }, 'circleClosed')
      .to('.core-left', {
        ease: 'none',
        morphSVG: '.yang'
      }, 'circleClosed')
      .to('.core-right', {
        duration: 0
      }, 'circleClosed')

      .to('.core-a', {
        duration: 4,
        rotate: -1440
      }, 'fullSpin')

      .addLabel('secondSpin', '<')

      .to('.core-right', {
        ease: 'none',
        morphSVG: '.core-right-big'
      }, 'secondSpin')
      .to('.core-right', {
        morphSVG: '.core-right'
      }, '>')
      .to('.core-left', {
        ease: 'none',
        morphSVG: '.core-left-big'
      }, 'secondSpin')
      .to('.core-left', {
        morphSVG: '.core-left',
        fillOpacity: 1
      }, '>')

      .addLabel('circleOpen', '<')

      .to('.middle-of-a', {
        scaleX: 1,
        scaleY: 1,
        transformOrigin: '50% 0%'
      }, 'circleOpen')