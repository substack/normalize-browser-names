var test = require('tape');
var normalize = require('../');

var browsers = {
    'iexplore': [
        '6.0',
        '7.0',
        '8.0',
        '9.0'
    ],
    'chrome': [
        '1.0',
        '5.0',
        '18.0',
        '19.0',
        '20.0',
        '21.0',
        '22.0',
        'canary'
    ],
    'firefox': [
        '1.0',
        '3.6',
        '4.0',
        '17.0',
        'nightly'
    ],
    'opera': [
        '10.0',
        '10.5',
        '11.0',
        '11.5',
        '11.6',
        '12.0',
        'next'
    ],
    'safari': [
        '5.0.5',
        '5.1'
    ]
};

test('N..N', function (t) {

    // simple range
    t.same(
        normalize(['ie/8..9'], browsers),
        { iexplore: [ '8.0', '9.0' ] }
    );

    // range with gaps
    t.same(
        normalize(['chrome/1..19'], browsers),
        { chrome: [ '1.0', '5.0', '18.0', '19.0' ] }
    );
    t.end();

    // two ranges
    t.same(
        normalize(['chrome/1..19', 'chrome/21..22'], browsers),
        { chrome: [ '1.0', '5.0', '18.0', '19.0', '21.0', '22.0' ] }
    );
});

test('browser/latest', function (t) {
    t.same(
        normalize(['chrome/latest'], browsers),
        { chrome: [ '22.0' ] }
    );
    t.end();
});

test('browser: latest', function (t) {
    t.same(
        normalize({chrome: 'latest'}, browsers),
        { chrome: [ '22.0' ] }
    );
    t.same(
        normalize({chrome: [ 'latest' ]}, browsers),
        { chrome: [ '22.0' ] }
    );
    t.end();
});

test('N..latest', function (t) {

    // simple range
    t.same(
        normalize(['chrome/19..latest'], browsers),
        { chrome: [ '19.0', '20.0', '21.0', '22.0' ] }
    );

    // include off versions in range
    t.same(
        normalize(['firefox/1.0..4.0'], browsers),
        { firefox: [ '1.0', '3.6', '4.0' ] }
    );

    // can start at an off version and go to latest
    t.same(
        normalize(['firefox/3.6..latest'], browsers),
        { firefox: [ '3.6', '4.0', '17.0' ] }
    );
    t.end();
});

test('N..canary', function (t) {
    t.same(
        normalize(['chrome/21..canary'], browsers),
        { chrome: [ '21.0', '22.0', 'canary' ] }
    );
    t.end();
});

//test('*', function (t) {
//    var allLatest = Object.keys(browsers).reduce(function (prev, browser) {
//            prev[browser] = normalize([ browser + '/latest' ], browsers)[browser];
//            return prev;
//        }, {});
//
//    t.same(
//        normalize({'*': 'latest'}, browsers),
//        allLatest
//    );
//
//    t.same(
//        normalize([ '*/latest' ], browsers),
//        allLatest
//    );
//
//    allLatest.chrome.push('canary');
//
//    t.same(
//        normalize(['*/latest', 'chrome/canary'], browsers),
//        allLatest
//    );
//
//    t.end();
//});
