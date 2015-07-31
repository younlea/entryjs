"use strict";

goog.provide("Entry.Script");

goog.require("Entry.Model");

Entry.Script = function() {
    Entry.Model.generateObserve(this);
    this.scripts = [];

};


(function(p){
    /*
     * @param {number} type
     * @param
     */
    p.insert = function() {

    };

    p.move = function() {

    };

    p.remove = function() {

    };

    p.fromJSON = function(json) {
        if (typeof json == "string")
            json = JSON.parse(json);

        if (!(json instanceof Array))
            return;

        this.scripts = json;
    };

    p.toJSON = function() {
        return JSON.stringify(this.scripts);
    };

    p.fromXml = function() {

    };

    p.toXml = function() {

    };

    p.clear = function() {
    };

})(Entry.Script.prototype);
