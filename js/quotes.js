
const quotes = [
    {
    quote: '귀여운 스누피가 짱입니다! -제작자 김민태-',
    },
    {
    quote: 'When life knocks you down, roll over and look at the stars.',
    },
    {
    quote: 'To me, the ugliest sight in the world is an empty dog dish!',
    },
    {
    quote: 'You can kick me, you can yell at me, you can chase me, you can insult me―but don’t interfere with my food-life.',
    },
    {
    quote: 'Keep looking up―that’s the secret of life.',
    },
    {
    quote: 'Are you upset little friend? Have you been lying awake worrying? Well, don’t worry―I’m here. The floodwaters will recede, the famine will end, the sun will shine tomorrow, and I will always be here to take care of you.',
    },
    {
    quote: 'Every now and then, I feel that my existence is justified.',
    },
    {
    quote: 'Never stress on what you can’t control and never worry about what isn’t yours.',
    },
    {
    quote: 'Be yourself. No one can say you’re doing it wrong.',
    },
    {
    quote: 'The only thing worse than starting something and falling.. is not starting something.',
    },
    {
    quote: 'Sometimes when I get up in the morning, I feel very peculiar. I feel like I’ve just got to bite a cat! I feel like if I don’t bite a cat before sundown, I’ll go crazy! But then I just take a deep breath and forget about it. That’s what is known as real maturity.',
    },
    ];


    const quote = document.querySelector("#quotes span");

    const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = todayQuote.quote;

