const wordFreq = (string) => {
    if (string == "") {    
        return "empty string";
    }

    const words = string.replace(/[.]/g, '').split(/\s/);
    const freqMap = {};
    words.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });
    // Create items array
    const items = Object.keys(freqMap).map(function(key) {
        return [key, freqMap[key]];
    });
  
    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });
    
    console.log(items.slice(0, 10));
    const top10words = items.slice(0,10);
    return top10words;

}


module.exports = { wordFreq }