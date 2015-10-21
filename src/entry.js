"use strict";

goog.provide("Entry");

Entry = {};

/**
 * events handle in entry
 * @type {Array<events>}
 */
Entry.events_ = {};

/**
 * block functions in entry
 * @type {Array<functions>}
 */
Entry.block = {};

Entry.TEXT_ALIGN_CENTER = 0;

Entry.TEXT_ALIGN_LEFT = 1;

Entry.TEXT_ALIGN_RIGHT = 2;

Entry.TEXT_ALIGNS = ["center", "left", "right"];

/**
 * Load project
 * @param {?Project} project
 */
Entry.loadProject = function(project) {
    if (project) {
        if (this.type == 'workspace')
            Entry.stateManager.startIgnore();
        Entry.projectId = project._id;
        Entry.variableContainer.setVariables(project.variables);
        Entry.variableContainer.setMessages(project.messages);
        Entry.variableContainer.setFunctions(project.functions);
        Entry.scene.addScenes(project.scenes);
        Entry.stage.initObjectContainers();
        Entry.container.setObjects(project.objects);
        Entry.FPS = project.speed ? project.speed : 60;
        createjs.Ticker.setFPS(Entry.FPS);
        if (this.type == 'workspace')
            Entry.stateManager.endIgnore();
    }
    if (!Entry.engine.projectTimer)
        Entry.variableContainer.generateTimer();

    if (Object.keys(Entry.container.inputValue).length === 0)
        Entry.variableContainer.generateAnswer();
    Entry.start();
};

/**
 * inject blocks to Entry menu.
 * Available block is different by object type.
 * @param {!string} objectType
 * @param {!string} blockText
 */
Entry.setBlockByText = function(objectType, blockText) {
    var blockJSON = [];
    var xml = jQuery.parseXML(blockText);
    var categories = xml.getElementsByTagName('category');
    for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        var json = {category: category.getAttribute("id"), blocks: []}
        var blocks = category.childNodes;
        for (var j = 0; j < blocks.length; j++) {
            var b = blocks[j];
            if (b.tagName &&
                (b.tagName.toUpperCase() == 'BLOCK' ||
                 b.tagName.toUpperCase() == 'BTN')) {
                json.blocks.push(b.getAttribute('type'))
            }
        }
        blockJSON.push(json);
    }
    Entry.playground.setBlockMenu(blockJSON);
}

/**
 * inject blocks to Entry menu.
 * Available block is different by object type.
 * @param {!string} objectType
 * @param {!xml} XML
 */
Entry.setBlock = function(objectType, XML) {
    Entry.playground.setMenuBlock(objectType, XML);
}

Entry.enableArduino = function() {
    return;
    $.ajax('http://localhost:23518/arduino/')
        .done(function(data){
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", '/xml/arduino_blocks.xml', false );
            xmlHttp.send('');
            if (!Entry.playground.menuBlocks_.sprite.getElementById("arduino")) {
                Entry.setBlockByText('arduino', xmlHttp.responseText);
                Entry.playground.currentObjectType = '';
                Entry.playground.setMenu(Entry.playground.object.objectType);
            }
            Entry.toast.success(Lang.Workspace.arduino_connect, Lang.Workspace.arduino_connect_success, false);
        }).fail(function(){
    });
};

/**
 * initialize sound
 * @param {sound object} sound
 */
Entry.initSound = function(sound) {
    var path = '/uploads/' + sound.filename.substring(0,2)+'/'+
        sound.filename.substring(2,4)+'/'+sound.filename+sound.ext;
    //createjs.Sound.removeSound(path);
    //createjs.Sound.registerSound(path, sound.id, 4);
    Entry.soundQueue.loadFile({
        id: sound.id,
        src: path,
        type: createjs.LoadQueue.SOUND
    });
};

/**
 * This method is called when window closed;
 * @param {event} e
 */
Entry.beforeUnload = function(e) {
    Entry.hw.closeConnection();
    Entry.variableContainer.updateCloudVariables();
    if (Entry.type == 'workspace') {
        if (localStorage && Entry.interfaceState) {
            localStorage.setItem('workspace-interface',
                                 JSON.stringify(Entry.interfaceState));
        }
        if (!Entry.stateManager.isSaved())
            return Lang.Workspace.project_changed;
    }
};

/**
 * load interface state by localstorage
 */
Entry.loadInterfaceState = function() {
    if (Entry.type == 'workspace') {
        if (localStorage &&
            localStorage.getItem('workspace-interface')) {
            var interfaceModel = localStorage.getItem('workspace-interface');
            this.resizeElement(JSON.parse(interfaceModel));
        } else {
            this.resizeElement({
                menuWidth: 280,
                canvasWidth: 480
            });
        }
    }
}

/**
 * Resize element's size.
 * @param {!json} interfaceModel
 */
Entry.resizeElement = function(interfaceModel) {
    if (Entry.type == 'workspace') {
        var interfaceState = this.interfaceState;
        if (!interfaceModel.canvasWidth && interfaceState.canvasWidth)
            interfaceModel.canvasWidth = interfaceState.canvasWidth;
        if (!interfaceModel.menuWidth &&
            this.interfaceState.menuWidth)
            interfaceModel.menuWidth = interfaceState.menuWidth;

        if (Entry.engine.speedPanelOn)
            Entry.engine.toggleSpeedPanel();

        var canvasSize = interfaceModel.canvasWidth;
        if (!canvasSize)            canvasSize = 400;
        else if (canvasSize < 300)  canvasSize = 300;
        else if (canvasSize > 720)  canvasSize = 720;
        interfaceModel.canvasWidth = canvasSize;

        var canvasHeight = canvasSize*9/16;

        Entry.engine.view_.style.width = canvasSize + 'px';
        Entry.engine.view_.style.height = canvasHeight + 'px';
        Entry.engine.view_.style.top = '40px';
        Entry.stage.canvas.canvas.style.height = canvasHeight + 'px';
        Entry.stage.canvas.canvas.style.width = canvasSize + 'px';
        Entry.container.view_.style.width = canvasSize + 'px';
        Entry.container.view_.style.top = (canvasHeight + 35 + 40 + 48 - 22) + 'px';
        if (canvasSize >= 400) {
            Entry.engine.view_.removeClass("collapsed");
            Entry.container.listView_.removeClass("collapsed");
        } else {
            Entry.engine.view_.addClass("collapsed");
            Entry.container.listView_.addClass("collapsed");
        }
        Entry.playground.view_.style.left = (canvasSize + 0.5) + 'px';

        var addButton = Entry.engine.view_.getElementsByClassName('entryAddButtonWorkspace_w')[0];
        if (addButton) {
            if (Entry.objectAddable) {
                /*addButton.style.top = (canvasHeight + 24 + 40 + 4) + 'px';*/
                addButton.style.top = (canvasHeight + 24) + 'px';
                addButton.style.width = (canvasSize * 0.7) + 'px';
            } else {
                addButton.style.display = 'none';
            }
        }

        var runButton = Entry.engine.view_.getElementsByClassName('entryRunButtonWorkspace_w')[0];
        if (runButton) {
            if (Entry.objectAddable) {
                /*runButton.style.top = (canvasHeight + 24 + 40 + 4) + 'px';*/
                runButton.style.top = (canvasHeight + 24) + 'px';
                runButton.style.left = (canvasSize * 0.7) + 'px';
                runButton.style.width = (canvasSize * 0.3) + 'px';
            } else {
                runButton.style.left = '2px';
                /*runButton.style.top = (canvasHeight + 24 + 40 + 4) + 'px';*/
                runButton.style.top = (canvasHeight + 24) + 'px';
                runButton.style.width = (canvasSize - 4) + 'px';
            }
        }

        var stopButton = Entry.engine.view_.getElementsByClassName('entryStopButtonWorkspace_w')[0];
        if (stopButton) {
            if (Entry.objectAddable) {
                /*stopButton.style.top = (canvasHeight + 24 + 40 + 4) + 'px';*/
                stopButton.style.top = (canvasHeight + 24) + 'px';
                stopButton.style.left = (canvasSize * 0.7) + 'px';
                stopButton.style.width = (canvasSize * 0.3) + 'px';
                //console.log('runButton top,left = ' + runButton.style.top + ',' + runButton.style.left);
            } else {
                stopButton.style.left = '2px';
                /*stopButton.style.top = (canvasHeight + 24 + 40 + 4) + 'px';*/
                stopButton.style.top = (canvasHeight + 24) + 'px';
                stopButton.style.width = (canvasSize) + 'px';
            }
        }

        var menuWidth = interfaceModel.menuWidth;
        if (!menuWidth) menuWidth = 264;
        else if (menuWidth < 244)
            menuWidth = 244;
        else if (menuWidth > 400)
            menuWidth = 400;
        interfaceModel.menuWidth = menuWidth;

        Entry.playground.blockMenuView_.style.width = (menuWidth - 64) + 'px';
        $('.entryBlockMenuWorkspace>svg').css({width: (menuWidth - 64) + 'px'});
        $('.entryBlocklyWorkspace').css({left: (menuWidth) + 'px'});
        Entry.playground.resizeHandle_.style.left = (menuWidth) + 'px';
        Entry.playground.variableViewWrapper_.style.width = menuWidth + 'px';

        this.interfaceState = interfaceModel;
    }
    Blockly.fireUiEvent(window, 'resize');
};

/**
 * @return {Number} return up time time stamp
 */
Entry.getUpTime = function() {
    return new Date().getTime() - this.startTime;
}

/**
 * @param {String} activityType
 */
Entry.addActivity = function(activityType) {
    if (Entry.stateManager)
        Entry.stateManager.addActivity(activityType);
}

Entry.startActivityLogging = function() {
    if (Entry.reporter)
        Entry.reporter.start(
            Entry.projectId,
            window.user ? window.user._id : null,
            Entry.startTime);
};

/**
 * return activity log
 * @return {object}
 */
Entry.getActivityLog = function() {
    var log = {};
    if (Entry.stateManager)
        log.activityLog = Entry.stateManager.activityLog_;
    return log;
}

window.Entry = Entry;
