module.exports = {
  siteTitle: "Ayoub Kanoun | Front-end Developer",
  siteDescription:
    "Ayoub Kanoun is a Front-end developer based in Casablanca, Morocco.",
  siteUrl: "https://ayoubkanoun.com",
  siteLang: "en_us",
  siteKeywords:'ayoub kanoun,front-end developer,web developer,morocoo web web developer,javascript',
  mailTo:'mailto:idel.ayoubkan@gmail.com',
  navLinks: [
    { name: "About Me", url: "#about" },
    { name: "Portfolio", url: "#portfolio" },
    { name: "Contact Me", url: "#contact" },
  ],
  socialLinks:[
    {name:'Github',url:'https://github.com/ProxN'},
    {name:'Linkedin',url:'https://github.com/ProxN'},
    {name:'Twitter',url:'https://github.com/ProxN'},
  ],

  primaryColor:'#1d1d37',
  secondaryColor:'#ff6b6b',
  lightGrey:'#d2d2e7',
  srConfig: (delay = 200) => ({
    origin:'top',
    distance:'50px',
    duration:500,
    easing:'ease-in-out',
    opacity:0,
    delay,
    useDelay:'always',
    viewFactor:0.3,
    
  }),
}
