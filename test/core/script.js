"use strict";

describe('Entry.Script', function(){
    it('exist', function(){
        assert.equal(typeof Entry.Script, "function");
    });

    describe('observe', function() {

    });

    describe('JSON import & export', function() {
        var scriptData = [
            {type: "block"}
        ];
        var scriptJSON = JSON.stringify(scriptData);

        it('json test', function(){
            var script = new Entry.Script();

            script.fromJSON(scriptData);

            assert.equal(scriptJSON, script.toJSON());
        });

        it('string test', function(){
            var script = new Entry.Script();

            script.fromJSON(scriptJSON);

            assert.equal(scriptJSON, script.toJSON());
        });
    });
});
