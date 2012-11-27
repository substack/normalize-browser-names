module.exports = function normalize (browsers) {
    if (Array.isArray(browsers)) {
        return normalize(browsers.reduce(function (acc, bv) {
            // { "ie/8", "ie8" } -> [ "ie", "8" ]
            var s = String(bv).split(/\/|(\d+(?:\.\d+)*)/).filter(Boolean);
            var b = s[0], v = s[1];
            
            if (!acc[b]) acc[b] = [];
            if (v) acc[b].push(v);
            return acc;
        }, {}));
    }
    
    return Object.keys(browsers).reduce(function (acc, key) {
        var vs = Array.isArray(browsers[key])
            ? browsers[key] : [ browsers[key] ]
        ;
        
        var name = {
            ie : 'iexplore',
            iexplore : 'iexplore',
            explorer : 'iexplore',
            explore : 'iexplore',
            'internet explorer' : 'iexplore',
            internet_explorer : 'iexplore',
            internetexplorer : 'iexplore',
            safari : 'safari',
            chrome : 'chrome',
            firefox : 'firefox',
            ff : 'firefox',
            opera : 'opera',
        }[key.toLowerCase()];
        
        if (name) acc[name] = vs.map(function (v) {
            if (typeof v === 'number' || /^\d+(?:\.\d*)?/.test(v)) {
                if (/\.$/.test(v)) return v + '0';
                if (!/\./.test(v)) return v + '.0';
                return String(v);
            }
            else return String(v)
        });
        return acc;
    }, {});
}
