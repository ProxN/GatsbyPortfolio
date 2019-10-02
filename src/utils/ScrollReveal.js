import ScrollReveal from 'scrollreveal';

const isSr = typeof window !== 'undefined';

const sr = isSr ? null :  ScrollReveal();

export default sr;