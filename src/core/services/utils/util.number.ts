export const numberToByte = (bytes: number): string => {
    if (-1000 < bytes && bytes < 1000) {
        return bytes + " B";
    }
    const ci = "kMGTPE";
    let index = 0;
    while (bytes <= -999_950 || bytes >= 999_950) {
        bytes /= 1000;
        index++;
    }
    return `${(bytes / 1000.0).toFixed(1)} ${ci[index]}B`;
}