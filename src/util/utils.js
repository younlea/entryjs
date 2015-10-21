/**
 * @fileoverview Utility functions for Entry.
 */
'use strict';

goog.provide("Entry.Utils");

/**
 * override native prototype to add useful method.
 */
Entry.overridePrototype = function() {
    /** modulo include negative number */
    Number.prototype.mod = function(n) {
            return ((this%n)+n)%n;
    };
};

/**
 * Sample color code for user select
 * @type {!Array<string>}
 */
Entry.sampleColours = [
];

/**
 * Raise error when assert condition fail.
 * @param {!boolean} condition assert condition.
 * @param {?string} message assert message will be shown when assert fail.
 */
Entry.assert = function(condition, message) {
    if (!condition) {
        throw Error(message || "Assert failed");
    }
};

/**
 * Parse Text to Xml
 * @param {!string} xmlText
 * @param {xml} doc
 */
Entry.parseTexttoXML = function(xmlText) {
    if (window.ActiveXObject){
        var doc=new ActiveXObject('Microsoft.XMLDOM');
        doc.async='false';
        doc.loadXML(xmlText);
    } else {
        var parser=new DOMParser();
        var doc=parser.parseFromString(xmlText,'text/xml');
    }
    return doc;
}

/**
 * Create html element with some method
 * @param {!string} type
 * @param {string} elementId
 * @return {!Element}
 */
Entry.createElement = function(type, elementId) {
    var element = document.createElement(type);
    if (elementId)
        element.id = elementId;

    element.hasClass = function(className) {
        return this.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));
    }
    element.addClass = function(className) {
        for (var i = 0; i < arguments.length; i++) {
            var className = arguments[i];
            if (!this.hasClass(className)) this.className += " " + className;
        }
    }
    element.removeClass = function(className) {
        for (var i = 0; i < arguments.length; i++) {
            var className = arguments[i];
            if (this.hasClass(className)) {
                var reg = new RegExp('(\\s|^)'+className+'(\\s|$)');
                this.className=this.className.replace(reg,' ');
            }
        }
    }
    element.bindOnClick = function(func) {
        $(this).on('click touchstart', function(e) {
            e.stopImmediatePropagation();
            if (e.handled) return;
            e.handled = true;
            func.call(this, e);
        });
    }
    return element;
};

/**
 * Generate random hash
 * @return {string}
 */
Entry.generateHash = function() {
    return ('0000' + (Math.random()*Math.pow(36,4) << 0).toString(36)).substr(-4);
};

/**
 * Add event listener
 * @param {!string} eventName
 * @param {function} fn
 */
Entry.addEventListener = function(eventName, fn) {
     if (!this.events_[eventName]) {
        this.events_[eventName] = [];
    }
    if (fn instanceof Function) {
        this.events_[eventName].push(fn);
    }
    return true;
};

/**
 * Dispatch event
 * @param {!string} eventName
 * @param {?} params
 */
Entry.dispatchEvent = function(eventName, params) {
    if (!this.events_[eventName])
        return;
    for (var index = 0, l = this.events_[eventName].length; index < l; index++) {
        this.events_[eventName][index].call(window, params);
    }
};

/**
 * Remove event listener
 * @param {!string} eventName
 */
Entry.removeEventListener = function(eventName, fn) {
    if (this.events_[eventName]) {
        for (var i = 0, l = this.events_[eventName].length; i < l; i++) {
            if (this.events_[eventName][i] === fn) {
                this.events_[eventName].splice(i, 1);
                break;
            }
        }
    }
};

/**
 * Remove event listener
 * @param {!string} eventName
 */
Entry.removeAllEventListener = function(eventName) {
    if (!eventName) return;
    delete this.events_[eventName];
};

/**
 * Add two number properly.
 *
 * @return {number}
 *
 * @param {!number} a
 * @param {!number} b
 */
Entry.addTwoNumber = function(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return a+b;
  }
  a += ''; b+= '';

  var indexA = a.indexOf('.'), indexB = b.indexOf('.');
  var fixedA = 0, fixedB = 0;
  if (indexA > 0)
    var fixedA = (a.length - indexA - 1);

  if (indexB > 0)
    var fixedB = (b.length - indexB - 1);

  if (fixedA > 0 || fixedB > 0) {
    if (fixedA >= fixedB) {
      return (parseFloat(a)+parseFloat(b)).toFixed(fixedA);
    } else {
      return (parseFloat(a)+parseFloat(b)).toFixed(fixedB);
    }
  } else {
    return parseInt(a)+parseInt(b);
  }
};

/*
 * HTML hex colour code to RGB colour value
 */
Entry.hex2rgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
};

/*
 * RGB colour value to HTML hex colour code
 */
Entry.rgb2hex = function (r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

/*
 * Generate random rgb color object
 */
Entry.generateRgb = function () {
    return {
        r: Math.floor(Math.random()*256),
        g: Math.floor(Math.random()*256),
        b: Math.floor(Math.random()*256)
    }
};

/*
 * Adjustment input value by max and min value
 * @param {!Number} value, min, max
 */
Entry.adjustValueWithMaxMin = function (input, min, max) {
    if (input > max){
        return max;
    } else if (input < min){
        return min;
    } else
        return input;

}

/*
 * Inspect input value exists already in an array
 * @param {String} targetValue
 * @param {String} identifier
 * @param {Array} arr
 * @return {boolean} return true when target value exists already
 */
Entry.isExist = function (targetValue, identifier, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][identifier] == targetValue)
            return arr[i];
    }

    return false;
};


Entry.getColourCodes = function () {
    return [
        'transparent', '#660000', '#663300', '#996633', '#003300', '#003333', '#003399', '#000066', '#330066', '#660066',
        '#FFFFFF', '#990000', '#993300', '#CC9900', '#006600', '#336666', '#0033FF', '#000099', '#660099', '#990066',
        '#000000', '#CC0000', '#CC3300', '#FFCC00', '#009900', '#006666', '#0066FF', '#0000CC', '#663399', '#CC0099',
        '#333333', '#FF0000', '#FF3300', '#FFFF00', '#00CC00', '#009999', '#0099FF', '#0000FF', '#9900CC', '#FF0099',
        '#666666', '#CC3333', '#FF6600', '#FFFF33', '#00FF00', '#00CCCC', '#00CCFF', '#3366FF', '#9933FF', '#FF00FF',
        '#999999', '#FF6666', '#FF6633', '#FFFF66', '#66FF66', '#66CCCC', '#00FFFF', '#3399FF', '#9966FF', '#FF66FF',
        '#BBBBBB','#FF9999', '#FF9966', '#FFFF99', '#99FF99', '#66FFCC', '#99FFFF', '#66CCff', '#9999FF', '#FF99FF',
        '#CCCCCC','#FFCCCC', '#FFCC99', '#FFFFCC', '#CCFFCC', '#99FFCC', '#CCFFFF', '#99CCFF', '#CCCCFF', '#FFCCFF'
    ];
};

/*
 * Replacement for element.remove() method
 * @param {Element} targetElement
 * @return {boolean} return true when target element remove or not
 */
Entry.removeElement = function(element) {
   if (element && element.parentNode)
       element.parentNode.removeChild(element);
}

/*
 * Replacement for elements.getElementsByClassName(className)
 * @param {String} class name
 * @return {Array} arr
 */
Entry.getElementsByClassName = function(cl) {
    var retnode = [];
    var elem = document.getElementsByTagName('*');
    for (var i = 0; i < elem.length; i++) {
        if((' ' + elem[i].className + ' ').indexOf(' ' + cl + ' ') > -1) retnode.push(elem[i]);
    }
    return retnode;
}

/*
 * parse string to number
 * @param {String||Number} value
 * @return {Boolean||Number} arr
 */
Entry.parseNumber = function(value) {
    if (typeof value == "string" && !isNaN(Number(value)))
        return Number(value);
    else if (typeof value == "number" && !isNaN(Number(value)))
        return value;
    return false;
}

/**
 * count length of string.
 * Hanguel character is count to two.
 * @param {!String} dataString
 * @return {Number}
 */
Entry.countStringLength = function(dataString) {
    var p, len = 0;
    for (p = 0; p < dataString.length; p++)
        (dataString.charCodeAt(p) > 255) ? len+=2 : len++;
    return len;
}

/**
 * count length of string.
 * Hanguel character is count to two.
 * @param {!String} dataString
 * @param {!Number} stringLength
 * @return {String}
 */
Entry.cutStringByLength = function(dataString, stringLength) {
    var p, len = 0;
    for (p = 0; len < stringLength && p < dataString.length; p++)
        (dataString.charCodeAt(p) > 255) ? len+=2 : len++;
    return dataString.substr(0,p);
}


/**
 * check to element is are parent child.
 * @param {Element} parent
 * @param {Element} child
 * @return {Boolean}
 */
Entry.isChild = function(parent, child) {
    if (child != null) {
        while (child.parentNode) {
            if ( (child = child.parentNode) == parent)
                return true;
        }
    }
    return false;
}

/**
 * @param {Element} child
 */
Entry.launchFullScreen = function(element) {
    if (element.requestFullscreen)
        element.requestFullscreen();
    else if (element.mozRequestFulScreen)
        element.mozRequestFulScreen();
    else if (element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
    else if (element.msRequestFullScreen)
        element.msRequestFullScreen();
}

Entry.exitFullScreen = function() {
    if (document.exitFullScreen)
        document.exitFullScreen()
    else if (document.mozCancelFullScreen)
        document.mozCancelFullScreen()
    else if (document.webkitExitFullscreen)
        document.webkitExitFullscreen();
}

Entry.isPhone = function(){
    return false;
    //if (window.screen.availWidth > 480)
        //return false;
    //else
        //return true;
}

Entry.getKeyCodeMap = function () {
    return {
        '65':'a', '66':'b', '67':'c', '68':'d', '69':'e',
        '70':'f', '71':'g', '72':'h', '73':'i', '74':'j',
        '75':'k', '76':'l', '77':'m', '78':'n', '79':'o',
        '80':'p', '81':'q', '82':'r', '83':'s', '84':'t',
        '85':'u', '86':'v', '87':'w', '88':'x', '89':'y',
        '90':'z',
        '32':Lang.Blocks.START_press_some_key_space,
        '37':Lang.Blocks.START_press_some_key_left,
        '38':Lang.Blocks.START_press_some_key_up,
        '39':Lang.Blocks.START_press_some_key_right,
        '40':Lang.Blocks.START_press_some_key_down,
        '48':'0', '49':'1', '50':'2', '51':'3', '52':'4',
        '53':'5', '54':'6', '55':'7', '56':'8', '57':'9',
        '13':Lang.Blocks.START_press_some_key_enter
    }
};

Entry.checkCollisionRect = function(rectA, rectB) {
    return !(
        ((rectA.y + rectA.height) < (rectB.y)) ||
        (rectA.y > (rectB.y + rectB.height)) ||
        ((rectA.x + rectA.width) < rectB.x) ||
        (rectA.x > (rectB.x + rectB.width))
    );
}

Entry.bindAnimationCallback = function(element, func) {
    element.addEventListener("webkitAnimationEnd", func, false);
    element.addEventListener("animationend", func, false);
    element.addEventListener("oanimationend", func, false);
}

Entry.cloneSimpleObject = function(object) {
    var clone = {};
    for (var i in object)
        clone[i] = object[i];
    return clone;
}

Entry.nodeListToArray = function(nl) {
    var arr = Array(nl.length);
    for(var i=-1,l=nl.length;++i!==l;arr[i]=nl[i]);
    return arr;
}

Entry.computeInputWidth = function(nameField){
    var tmp = document.createElement("span");
    tmp.className = "tmp-element";
    tmp.innerHTML = nameField.value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    document.body.appendChild(tmp);
    var theWidth = tmp.offsetWidth;
    document.body.removeChild(tmp);
    return Number(theWidth + 10) + 'px';
};

Entry.isArrowOrBackspace = function(keyCode){
    var codes = [37,38,39,40, 8];
    return codes.indexOf(keyCode) > -1;
};

Entry.hexStringToBin = function(hexString) {
    bytes = [], str;

    for(var i=0; i< hexString.length-1; i+=2){
        bytes.push(parseInt(hexString.substr(i, 2), 16));
    }

    str = String.fromCharCode.apply(String, bytes);
    return str;
}

Entry.findObjsByKey = function(arr, keyName, key) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][keyName] == key)
            result.push(arr[i]);
    }
    return result;
}

Entry.factorials = [];

Entry.factorial = function(n){
    if (n == 0 || n == 1)
        return 1;
    if (Entry.factorials[n] > 0)
        return Entry.factorials[n];
    return Entry.factorials[n] = Entry.factorial(n-1) * n;
}

Entry.getListRealIndex = function(index, list){
    if (isNaN(index)) {
        switch(index) {
            case 'FIRST':
                index = 1;
                break;
            case 'LAST':
                index = list.array_.length;
                break;
            case 'RANDOM':
                index = Math.floor(Math.random() * (list.array_.length)) + 1;
                break;
        }
    }
    return index;
}

Entry.toRadian = function(angle){
    return angle * (Math.PI / 180);
}

Entry.getPicturesJSON = function (pictures) {
    var json = [];
    for (var i=0, len=pictures.length; i<len; i++) {
        var p = pictures[i];
        var o = {};
        o._id = p._id;
        o.id = p.id;
        o.dimension = p.dimension;
        o.filename = p.filename;
        o.name = p.name;
        o.scale = p.scale;
        json.push(o);
    }
    return json;
}

Entry.getSoundsJSON = function (sounds) {
    var json = [];
    for (var i=0, len=sounds.length; i<len; i++) {
        var s = sounds[i];
        var o = {};
        o._id = s._id;
        o.duration = s.duration;
        o.ext = s.ext;
        o.id = s.id;
        o.filename = s.filename;
        o.name = s.name;
        json.push(o);
    }
    return json;
}

Entry.cutDecimal = function (number) {
    return Math.round(number * 100) / 100;
}

Entry.getBrowserType = function() {
    if (Entry.userAgent)
        return Entry.userAgent;
   var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    var uaResult = M.join(' ');
    Entry.userAgent = uaResult;
    return uaResult;
}

Entry.setBasicBrush = function (sprite) {
    var brush = new createjs.Graphics();
    brush.thickness = 1;
    brush.rgb = Entry.hex2rgb("#ff0000");
    brush.opacity = 100;
    brush.setStrokeStyle(1);
    brush.beginStroke("rgba(255,0,0,1)");

    var shape = new createjs.Shape(brush);
    Entry.stage.selectedObjectContainer.addChild(shape);

    if (sprite.brush)
        sprite.brush = null;
    sprite.brush = brush;

    if (sprite.shape)
        sprite.shape = null;
    sprite.shape = shape;
}

Entry.isFloat = function (num) {
    return /\d+\.{1}\d+/.test(num);
}

Entry.getStringIndex = function(str) {
    if (!str) return '';
    var result = {
        string: str,
        index: 1
    }
    var idx = 0;
    var num = [];
    var len = str.length;
    for (var i=len-1; i>0; --i) {
        var ch = str.charAt(i);
        if (!isNaN(ch)) {
            num.unshift(ch)
            idx = i;
        } else {
            break;
        }
    }

    if (idx > 0) {
        result.string = str.substring(0,idx);
        result.index = parseInt(num.join('')) + 1;
    }

    return result;
}

Entry.getOrderedName = function(str, objects, field) {
    if (!str) return 'untitled';
    if (!objects || objects.length === 0) return str;

    if (!field)
        field = 'name';

    var maxNumber = 0;
    var source = Entry.getStringIndex(str);
    for (var i=0, len=objects.length; i<len; i++) {
        var target = Entry.getStringIndex(objects[i][field]);
        if ( (source.string === target.string)
            && target.index > maxNumber) {
                maxNumber = target.index;
        }

    }

    if (maxNumber > 0)
        return source.string + maxNumber;

    return str;
}


Entry.changeXmlHashId = function(xmlBlock) {
    var reg = /function_field/;
    if (reg.test(xmlBlock.getAttribute('type'))) {
        var mutations = xmlBlock.getElementsByTagName('mutation');
        for (var i=0, len=mutations.length; i<len; i++)
            mutations[i].setAttribute('hashid', Entry.generateHash());
    }
    return xmlBlock;
}

Entry.getMaxFloatPoint = function(numbers) {
    var max = 0;
    for (var i=0,len=numbers.length; i<len; i++) {
        var n = String(numbers[i]);
        var idx = n.indexOf('.');
        if (idx !== -1) {
            var tmp = n.length - (idx+1);
            if (tmp > max)
                max = tmp;
        }
    }
    return Math.min(max, 20);
}

Entry.convertToRoundedDecimals = function (value, decimals) {
    if (isNaN(value) || !this.isFloat(value))
        return value;
    else
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

Entry.attachEventListener = function(elem, eventType, func) {
    setTimeout(function() {
        elem['addEventListener'](eventType, func);
    }, 0);
}

Entry.deAttachEventListener = function(elem, eventType, func) {
    elem['removeEventListener'](eventType, func);
}

Entry.isEmpty = function(obj) {
    if (!obj)
        return true;

    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

Entry.getMatrixValue = function(hsv) {
    var matrixValue = [
        1, 0, 0, 0, 0,
        0, 1, 0, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 0, 1, 0,
        0, 0, 0, 0, 1
    ];

    var degrees = hsv*3.6;
    var r = (degrees*3) * Math.PI / 180;
    var cosVal = Math.cos(r);
    var sinVal = Math.sin(r);

    var v = Math.abs(hsv/100);
    if (v>1) {
        v = v-Math.floor(v);
    }

    if (v > 0 && v <= 0.33) {
        var matrixValue = [
            1, 0, 0, 0, 0,
            0, cosVal, sinVal, 0, 0,
            0, -1*sinVal, cosVal, 0, 0,
            0, 0, 0, 1, 0,
            0, 0, 0, 0, 1
        ];
    } else if (v <= 0.66) {
        var matrixValue = [
            cosVal, 0, sinVal, 0, 0,
            0, 1, 0, 0, 0,
            sinVal, 0, cosVal, 0, 0,
            0, 0, 0, 1, 0,
            0, 0, 0, 0, 1
        ];
    } else if (v <= 0.99) {
        var matrixValue = [
            cosVal, sinVal, 0, 0, 0,
            -1*sinVal, cosVal, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0,
            0, 0, 0, 0, 1
        ];
    }

    return matrixValue;
};

Entry.calcColorMatrix = function(rgb, m) {
    var r=rgb.r, g=rgb.g, b=rgb.b;
    var _r,_g,_b,_a;
    /*
    _r = r*m[0]+g*m[1]+b*m[2]+m[3];
    _g = r*m[5]+g*m[6]+b*m[7]+m[8];
    _b = r*m[10]+g*m[11]+b*m[12]+m[13];
    */
    _r = r*m[0]+g*m[5]+b*m[10]+m[15];
    _g = r*m[1]+g*m[6]+b*m[11]+m[16];
    _b = r*m[2]+g*m[7]+b*m[12]+m[17];

    return {r: Math.round(Math.abs(_r)),
            g: Math.round(Math.abs(_g)),
            b: Math.round(Math.abs(_b))};
}

