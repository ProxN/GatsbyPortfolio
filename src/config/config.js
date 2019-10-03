module.exports = {
  siteTitle: "Ayoub Idelkanoun | Front-end Developer",
  siteDescription:
    "Ayoub Idelkanoun is a Front-end developer based in Casablanca, Morocco.",
  siteUrl: "https://ayoubkanoun.com",
  siteLang: "en_us",
  siteKeywords:'ayoub Idelkanoun,front-end developer,web developer,morocoo web web developer,javascript',
  mailTo:'mailto:kanoundev@gmail.com',
  navLinks: [
    { name: "About Me", url: "#about" },
    { name: "Portfolio", url: "#portfolio" },
    { name: "Contact Me", url: "#contact" },
  ],
  socialLinks:[
    {name:'Github',url:'https://github.com/ProxN'},
    {name:'Linkedin',url:'https://www.linkedin.com/in/ayoubidelkanoun/'},
    {name:'Twitter',url:'#'},
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
