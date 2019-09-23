const os = require('os');

const toMb = memory => {
    return Math.round(memory / 1024 / 1024) * 100 / 100
};

const displayMemoryStats = () => console.log(`
    ${toMb(os.freemem)} of ${toMb(os.totalmem)} Mb free
`);

setInterval(displayMemoryStats, 100);