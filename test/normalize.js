var test = require('tape');
var normalize = require('../');

test('normalize browsers', function (t) {
    t.same(
        normalize(['ie8','ff/12.']),
        { iexplore: [ '8.0' ], firefox: [ '12.0' ] }
    );
    t.same(
        normalize(['ie8','ff/12']),
        { iexplore: [ '8.0' ], firefox: [ '12.0' ] }
    );
    t.same(
        normalize(['ie/8','ff/12.0']),
        { iexplore: [ '8.0' ], firefox: [ '12.0' ] }
    );
    t.same(
        normalize(['ie/8.0','ff/12.0']),
        { iexplore: [ '8.0' ], firefox: [ '12.0' ] }
    );
    t.same(
        normalize(['ie8','ff12.2']),
        { iexplore: [ '8.0' ], firefox: [ '12.2' ] }
    );
    t.same(
        normalize({'explorer':8,'ff':[12]}),
        { iexplore: [ '8.0' ], firefox: [ '12.0' ] }
    );
    t.same(
        normalize({'ie':8,'ff':[12,'5']}),
        { iexplore: [ '8.0' ], firefox: [ '12.0', '5.0' ] }
    );
    t.same(
        normalize({'ie':8,'ff':[12,'5.']}),
        { iexplore: [ '8.0' ], firefox: [ '12.0', '5.0' ] }
    );
    t.same(
        normalize({'ie':8,'ff':[12,'5.']}),
        { iexplore: [ '8.0' ], firefox: [ '12.0', '5.0' ] }
    );
    t.same(
        normalize({'ie':8,'ff':[12,'5.',6.1]}),
        { iexplore: [ '8.0' ], firefox: [ '12.0', '5.0', '6.1' ] }
    );
    t.end();
});
