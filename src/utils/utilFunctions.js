export function formatViewCount(viewCount) {
    const count = parseFloat(viewCount);

    if (count >= 1e9) {
        const formattedCount = count / 1e9;
        return (count >= 1e10 ? formattedCount.toFixed(0) : formattedCount.toFixed(1)).replace(/\.0$/, '') + 'B';
    }
    else if (count >= 1e6) {
        const formattedCount = count / 1e6;
        return (count >= 1e7 ? formattedCount.toFixed(0) : formattedCount.toFixed(1)).replace(/\.0$/, '') + 'M';
    }
    else if (count >= 1e3) {
        const formattedCount = count / 1e3;
        return (count >= 1e4 ? formattedCount.toFixed(0) : formattedCount.toFixed(1)).replace(/\.0$/, '') + 'K';
    }
    else {
        return count.toString();
    }
}
