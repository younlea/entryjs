var Entry = {block:{}};
window.Entry = Entry;
Blockly.Blocks.arduino_text = {init:function() {
  this.setColour("#00979D");
  this.appendDummyInput().appendField(new Blockly.FieldTextInput("Arduino"), "NAME");
  this.setOutput(!0, "String");
  this.setInputsInline(!0);
}};
Entry.block.arduino_text = function(b, a) {
  return a.getStringField("NAME");
};
Blockly.Blocks.arduino_send = {init:function() {
  this.setColour("#00979D");
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_arduino_send_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String", null]);
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_arduino_send_2);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.arduino_send = function(b, a) {
  var c = a.getValue("VALUE", a), d = new XMLHttpRequest;
  d.open("POST", "http://localhost:23518/arduino/", !1);
  d.send(String(c));
  Entry.assert(200 == d.status, "arduino is not connected");
  return a.callReturn();
};
Blockly.Blocks.arduino_get_string = {init:function() {
  this.setColour("#00979D");
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_arduino_get_string_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String", null]);
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_arduino_get_string_2);
  this.setOutput(!0, "String");
  this.setInputsInline(!0);
}};
Entry.block.arduino_get_number = function(b, a) {
  var c = a.getValue("VALUE", a), d = new XMLHttpRequest;
  d.open("POST", "http://localhost:23518/arduino/", !1);
  d.send(String(c));
  Entry.assert(200 == d.status, "arduino is not connected");
  return Number(d.responseText);
};
Blockly.Blocks.arduino_get_number = {init:function() {
  this.setColour("#00979D");
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_arduino_get_number_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String", null]);
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_arduino_get_number_2);
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
}};
Entry.block.arduino_get_string = function(b, a) {
  var c = a.getValue("VALUE", a), d = new XMLHttpRequest;
  d.open("POST", "http://localhost:23518/arduino/", !1);
  d.send(String(c));
  Entry.assert(200 == d.status, "arduino is not connected");
  return d.responseText;
};
Blockly.Blocks.arduino_get_sensor_number = {init:function() {
  this.setColour("#00979D");
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Lang.Blocks.ARDUINO_arduino_get_sensor_number_0, "A0"], [Lang.Blocks.ARDUINO_arduino_get_sensor_number_1, "A1"], [Lang.Blocks.ARDUINO_arduino_get_sensor_number_2, "A2"], [Lang.Blocks.ARDUINO_arduino_get_sensor_number_3, "A3"], [Lang.Blocks.ARDUINO_arduino_get_sensor_number_4, "A4"], [Lang.Blocks.ARDUINO_arduino_get_sensor_number_5, "A5"]]), "PORT");
  this.appendDummyInput().appendField(" ");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.arduino_get_sensor_number = function(b, a) {
  return a.getStringField("PORT");
};
Blockly.Blocks.arduino_get_port_number = {init:function() {
  this.setColour("#00979D");
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]]), "PORT");
  this.appendDummyInput().appendField(" ");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.arduino_get_port_number = function(b, a) {
  return a.getStringField("PORT");
};
Blockly.Blocks.arduino_get_pwm_port_number = {init:function() {
  this.setColour("#00979D");
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]]), "PORT");
  this.appendDummyInput().appendField(" ");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.arduino_get_pwm_port_number = function(b, a) {
  return a.getStringField("PORT");
};
Blockly.Blocks.arduino_get_number_sensor_value = {init:function() {
  this.setColour("#00979D");
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_num_sensor_value_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String", null]);
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_num_sensor_value_2);
  this.setInputsInline(!0);
  this.setOutput(!0, "Number");
  this.setTooltip("");
}};
Entry.block.arduino_get_number_sensor_value = function(b, a) {
  var c = a.getValue("VALUE", a);
  return Entry.hw.getAnalogPortValue(c[1]);
};
Blockly.Blocks.arduino_get_digital_value = {init:function() {
  this.setColour("#00979D");
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_get_digital_value_1);
  this.appendValueInput("VALUE").setCheck("Number");
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_num_sensor_value_2);
  this.setInputsInline(!0);
  this.setOutput(!0, "Boolean");
  this.setTooltip("");
}};
Entry.block.arduino_get_digital_value = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  return Entry.hw.getDigitalPortValue(c);
};
Blockly.Blocks.arduino_toggle_led = {init:function() {
  this.setColour("#00979D");
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_num_pin_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String", null]);
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_num_pin_2);
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Lang.Blocks.ARDUINO_on, "on"], [Lang.Blocks.ARDUINO_off, "off"]]), "OPERATOR").appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_arduino.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.arduino_toggle_led = function(b, a) {
  var c = a.getNumberValue("VALUE"), d = "on" == a.getField("OPERATOR") ? 255 : 0;
  Entry.hw.setDigitalPortValue(c, d);
  return a.callReturn();
};
Blockly.Blocks.arduino_toggle_pwm = {init:function() {
  this.setColour("#00979D");
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_toggle_pwm_1);
  this.appendValueInput("PORT").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_toggle_pwm_2);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_toggle_pwm_3);
  this.appendDummyInput().appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_arduino.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.arduino_toggle_pwm = function(b, a) {
  var c = a.getNumberValue("PORT"), d = a.getNumberValue("VALUE"), d = Math.round(d), d = Math.max(d, 0), d = Math.min(d, 255);
  Entry.hw.setDigitalPortValue(c, d);
  return a.callReturn();
};
Blockly.Blocks.arduino_convert_scale = {init:function() {
  this.setColour("#00979D");
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_convert_scale_1);
  this.appendValueInput("VALUE1").setCheck(["Number", "String", null]);
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_convert_scale_2);
  this.appendValueInput("VALUE2").setCheck(["Number", "String", null]);
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_convert_scale_3);
  this.appendValueInput("VALUE3").setCheck(["Number", "String", null]);
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_convert_scale_4);
  this.appendValueInput("VALUE4").setCheck(["Number", "String", null]);
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_convert_scale_5);
  this.appendValueInput("VALUE5").setCheck(["Number", "String", null]);
  this.appendDummyInput().appendField(Lang.Blocks.ARDUINO_convert_scale_6);
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
}};
Entry.block.arduino_convert_scale = function(b, a) {
  var c = a.getNumberValue("VALUE1", a), d = a.getNumberValue("VALUE2", a), e = a.getNumberValue("VALUE3", a), f = a.getNumberValue("VALUE4", a), h = a.getNumberValue("VALUE5", a);
  if (d > e) {
    var g = d, d = e, e = g
  }
  f > h && (g = f, f = h, h = g);
  c -= d;
  c *= (h - f) / (e - d);
  c += f;
  c = Math.min(h, c);
  c = Math.max(f, c);
  return Math.round(c);
};
var categoryColor = "#FF9E20";
Blockly.Blocks.start_drawing = {init:function() {
  this.setColour(categoryColor);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_start_drawing).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_brush.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.start_drawing = function(b, a) {
  b.brush ? b.brush.stop = !1 : Entry.setBasicBrush(b);
  Entry.stage.sortZorder();
  b.brush.moveTo(b.getX(), -1 * b.getY());
  return a.callReturn();
};
Blockly.Blocks.stop_drawing = {init:function() {
  this.setColour(categoryColor);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_stop_drawing).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_brush.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.stop_drawing = function(b, a) {
  b.brush && b.shape && (b.brush.stop = !0);
  return a.callReturn();
};
Blockly.Blocks.set_color = {init:function() {
  this.setColour(categoryColor);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_set_color_1);
  this.appendDummyInput().appendField(new Blockly.FieldColour("#ff0000"), "VALUE");
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_set_color_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_brush.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.set_color = function(b, a) {
  var c = a.getField("VALUE", a);
  b.brush || (Entry.setBasicBrush(b), b.brush.stop = !0);
  b.brush && (c = Entry.hex2rgb(c), b.brush.rgb = c, b.brush.endStroke(), b.brush.beginStroke("rgba(" + c.r + "," + c.g + "," + c.b + "," + b.brush.opacity / 100 + ")"), b.brush.moveTo(b.getX(), -1 * b.getY()));
  return a.callReturn();
};
Blockly.Blocks.set_random_color = {init:function() {
  this.setColour(categoryColor);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_set_random_color).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_brush.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.set_random_color = function(b, a) {
  b.brush || (Entry.setBasicBrush(b), b.brush.stop = !0);
  if (b.brush) {
    var c = Entry.generateRgb();
    b.brush.rgb = c;
    b.brush.endStroke();
    b.brush.beginStroke("rgba(" + c.r + "," + c.g + "," + c.b + "," + b.brush.opacity / 100 + ")");
    b.brush.moveTo(b.getX(), -1 * b.getY());
  }
  return a.callReturn();
};
Blockly.Blocks.change_thickness = {init:function() {
  this.setColour(categoryColor);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_change_thickness_1);
  this.appendValueInput("VALUE").setCheck(["Number", "Boolean"]);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_change_thickness_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_brush.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.change_thickness = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.brush || (Entry.setBasicBrush(b), b.brush.stop = !0);
  b.brush && (b.brush.thickness += c, 1 > b.brush.thickness && (b.brush.thickness = 1), b.brush.setStrokeStyle(b.brush.thickness), b.brush.moveTo(b.getX(), -1 * b.getY()));
  return a.callReturn();
};
Blockly.Blocks.set_thickness = {init:function() {
  this.setColour(categoryColor);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_set_thickness_1);
  this.appendValueInput("VALUE").setCheck(["Number", "Boolean"]);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_set_thickness_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_brush.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.set_thickness = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.brush || (Entry.setBasicBrush(b), b.brush.stop = !0);
  b.brush && (b.brush.thickness = c, b.brush.setStrokeStyle(b.brush.thickness), b.brush.moveTo(b.getX(), -1 * b.getY()));
  return a.callReturn();
};
Blockly.Blocks.change_opacity = {init:function() {
  this.setColour(categoryColor);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_change_opacity_1);
  this.appendValueInput("VALUE").setCheck(["Number", "Boolean"]);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_change_opacity_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_brush.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.change_opacity = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.brush || (Entry.setBasicBrush(b), b.brush.stop = !0);
  c = Entry.adjustValueWithMaxMin(b.brush.opacity + c, 0, 100);
  b.brush && (b.brush.opacity = c, b.brush.endStroke(), c = b.brush.rgb, b.brush.beginStroke("rgba(" + c.r + "," + c.g + "," + c.b + "," + b.brush.opacity / 100 + ")"), b.brush.moveTo(b.getX(), -1 * b.getY()));
  return a.callReturn();
};
Blockly.Blocks.set_opacity = {init:function() {
  this.setColour(categoryColor);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_set_opacity_1);
  this.appendValueInput("VALUE").setCheck(["Number", "Boolean"]);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_set_opacity_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_brush.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.set_opacity = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.brush || (Entry.setBasicBrush(b), b.brush.stop = !0);
  b.brush && (b.brush.opacity = Entry.adjustValueWithMaxMin(c, 0, 100), b.brush.endStroke(), c = b.brush.rgb, b.brush.beginStroke("rgba(" + c.r + "," + c.g + "," + c.b + "," + b.brush.opacity / 100 + ")"), b.brush.moveTo(b.getX(), -1 * b.getY()));
  return a.callReturn();
};
Blockly.Blocks.brush_erase_all = {init:function() {
  this.setColour(categoryColor);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_brush_erase_all).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_brush.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.brush_erase_all = function(b, a) {
  var c = b.brush;
  if (c) {
    var d = c._stroke.style, e = c._strokeStyle.width;
    c.clear().setStrokeStyle(e).beginStroke(d);
    c.moveTo(b.getX(), -1 * b.getY());
  }
  c = b.parent.getStampEntities();
  c.map(function(a) {
    a.removeClone();
  });
  c = null;
  return a.callReturn();
};
Blockly.Blocks.brush_stamp = {init:function() {
  this.setColour(categoryColor);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_stamp).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_brush.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.brush_stamp = function(b, a) {
  b.parent.addStampEntity(b);
  return a.callReturn();
};
Blockly.Blocks.change_brush_transparency = {init:function() {
  this.setColour(categoryColor);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_change_brush_transparency_1);
  this.appendValueInput("VALUE").setCheck(["Number", "Boolean"]);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_change_brush_transparency_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_brush.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.change_brush_transparency = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.brush || (Entry.setBasicBrush(b), b.brush.stop = !0);
  c = Entry.adjustValueWithMaxMin(b.brush.opacity - c, 0, 100);
  b.brush && (b.brush.opacity = c, b.brush.endStroke(), c = b.brush.rgb, b.brush.beginStroke("rgba(" + c.r + "," + c.g + "," + c.b + "," + b.brush.opacity / 100 + ")"), b.brush.moveTo(b.getX(), -1 * b.getY()));
  return a.callReturn();
};
Blockly.Blocks.set_brush_tranparency = {init:function() {
  this.setColour(categoryColor);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_set_brush_transparency_1);
  this.appendValueInput("VALUE").setCheck(["Number", "Boolean"]);
  this.appendDummyInput().appendField(Lang.Blocks.BRUSH_set_brush_transparency_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_brush.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.set_brush_tranparency = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.brush || (Entry.setBasicBrush(b), b.brush.stop = !0);
  b.brush && (b.brush.opacity = Entry.adjustValueWithMaxMin(c, 0, 100), b.brush.endStroke(), c = b.brush.rgb, b.brush.beginStroke("rgba(" + c.r + "," + c.g + "," + c.b + "," + (1 - b.brush.opacity / 100) + ")"), b.brush.moveTo(b.getX(), -1 * b.getY()));
  return a.callReturn();
};
Blockly.Blocks.number = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(new Blockly.FieldTextInput(""), "NUM");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.number = function(b, a) {
  return a.fields.NUM;
};
Blockly.Blocks.angle = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(new Blockly.FieldAngle("90"), "ANGLE");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.angle = function(b, a) {
  return a.getNumberField("ANGLE");
};
Blockly.Blocks.get_x_coordinate = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(Lang.Blocks.CALC_get_x_coordinate, "#3D3D3D");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.get_x_coordinate = function(b, a) {
  return b.getX();
};
Blockly.Blocks.get_y_coordinate = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(Lang.Blocks.CALC_get_y_coordinate, "#3D3D3D");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.get_y_coordinate = function(b, a) {
  return b.getY();
};
Blockly.Blocks.get_angle = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(Lang.Blocks.CALC_get_angle, "#3D3D3D");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.get_angle = function(b, a) {
  return parseFloat(b.getRotation().toFixed(1));
};
Blockly.Blocks.get_rotation_direction = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Lang.Blocks.CALC_rotation_value, "ROTATION"], [Lang.Blocks.CALC_direction_value, "DIRECTION"]]), "OPERATOR");
  this.appendDummyInput().appendField(" ");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.get_rotation_direction = function(b, a) {
  return "DIRECTION" == a.getField("OPERATOR", a).toUpperCase() ? parseFloat(b.getDirection().toFixed(1)) : parseFloat(b.getRotation().toFixed(1));
};
Blockly.Blocks.distance_something = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(Lang.Blocks.CALC_distance_something_1, "#3D3D3D").appendField(new Blockly.FieldDropdownDynamic("sprites"), "VALUE").appendField(Lang.Blocks.CALC_distance_something_2, "#3D3D3D");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.distance_something = function(b, a) {
  var c = a.getField("VALUE", a), c = Entry.container.getEntity(c);
  return Math.sqrt(Math.pow(b.getX() - c.getX(), 2) + Math.pow(b.getY() - c.getY(), 2));
};
Blockly.Blocks.coordinate_mouse = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(Lang.Blocks.CALC_coordinate_mouse_1, "#3D3D3D").appendField(new Blockly.FieldDropdown([["x", "x"], ["y", "y"]]), "VALUE").appendField(Lang.Blocks.CALC_coordinate_mouse_2, "#3D3D3D");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.coordinate_mouse = function(b, a) {
  return "x" === a.getField("VALUE", a) ? Number(Entry.stage.mouseCoordinate.x) : Number(Entry.stage.mouseCoordinate.y);
};
Blockly.Blocks.coordinate_object = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(Lang.Blocks.CALC_coordinate_object_1, "#3D3D3D").appendField(new Blockly.FieldDropdownDynamic("sprites"), "VALUE").appendField(Lang.Blocks.CALC_coordinate_object_2, "#3D3D3D").appendField(new Blockly.FieldDropdown([[Lang.Blocks.CALC_coordinate_x_value, "x"], [Lang.Blocks.CALC_coordinate_y_value, "y"], [Lang.Blocks.CALC_coordinate_rotation_value, "rotation"], [Lang.Blocks.CALC_coordinate_direction_value, "direction"], [Lang.Blocks.CALC_picture_index, "picture_index"], 
  [Lang.Blocks.CALC_picture_name, "picture_name"]]), "COORDINATE").appendField(Lang.Blocks.CALC_coordinate_object_3, "#3D3D3D");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.coordinate_object = function(b, a) {
  var c = a.getField("VALUE", a), d = a.getField("COORDINATE", a), c = Entry.container.getEntity(c);
  switch(d) {
    case "x":
      return c.getX();
    case "y":
      return c.getY();
    case "rotation":
      return c.getRotation();
    case "direction":
      return c.getDirection();
    case "picture_index":
      return d = c.parent, d = d.pictures, d.indexOf(c.picture) + 1;
    case "picture_name":
      return d = c.parent, d = d.pictures, d[d.indexOf(c.picture)].name;
  }
};
Blockly.Blocks.calc_basic = {init:function() {
  this.setColour("#FFD974");
  this.appendValueInput("LEFTHAND").setCheck(["String", "Number"]);
  this.appendDummyInput("VALUE").appendField(new Blockly.FieldDropdown([["+", "PLUS"], ["-", "MINUS"], ["x", "MULTI"], ["/", "DIVIDE"]], null, !1), "OPERATOR");
  this.appendValueInput("RIGHTHAND").setCheck(["Number", "String"]);
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.calc_basic = function(b, a) {
  var c = a.getField("OPERATOR", a), d = a.getNumberValue("LEFTHAND", a), e = a.getNumberValue("RIGHTHAND", a);
  return "PLUS" == c ? d + e : "MINUS" == c ? d - e : "MULTI" == c ? d * e : d / e;
};
Blockly.Blocks.calc_plus = {init:function() {
  this.setColour("#FFD974");
  this.appendValueInput("LEFTHAND").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField("+", "#3D3D3D");
  this.appendValueInput("RIGHTHAND").setCheck(["Number", "String"]);
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.calc_plus = function(b, a) {
  var c = a.getNumberValue("LEFTHAND", a), d = a.getNumberValue("RIGHTHAND", a);
  return c + d;
};
Blockly.Blocks.calc_minus = {init:function() {
  this.setColour("#FFD974");
  this.appendValueInput("LEFTHAND").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField("-", "#3D3D3D");
  this.appendValueInput("RIGHTHAND").setCheck(["Number", "String"]);
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.calc_minus = function(b, a) {
  var c = a.getNumberValue("LEFTHAND", a), d = a.getNumberValue("RIGHTHAND", a);
  return c - d;
};
Blockly.Blocks.calc_times = {init:function() {
  this.setColour("#FFD974");
  this.appendValueInput("LEFTHAND").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField("x", "#3D3D3D");
  this.appendValueInput("RIGHTHAND").setCheck(["Number", "String"]);
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.calc_times = function(b, a) {
  var c = a.getNumberValue("LEFTHAND", a), d = a.getNumberValue("RIGHTHAND", a);
  return c * d;
};
Blockly.Blocks.calc_divide = {init:function() {
  this.setColour("#FFD974");
  this.appendValueInput("LEFTHAND").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField("/", "#3D3D3D");
  this.appendValueInput("RIGHTHAND").setCheck(["Number", "String"]);
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.calc_divide = function(b, a) {
  var c = a.getNumberValue("LEFTHAND", a), d = a.getNumberValue("RIGHTHAND", a);
  return c / d;
};
Blockly.Blocks.calc_mod = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(Lang.Blocks.CALC_calc_mod_1, "#3D3D3D");
  this.appendValueInput("LEFTHAND").setCheck(["Number", "String"]);
  this.appendDummyInput("VALUE").appendField(Lang.Blocks.CALC_calc_mod_2, "#3D3D3D");
  this.appendValueInput("RIGHTHAND").setCheck(["Number", "String"]);
  this.setOutput(!0, "Number");
  this.appendDummyInput("VALUE").appendField(Lang.Blocks.CALC_calc_mod_3, "#3D3D3D");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.calc_mod = function(b, a) {
  var c = a.getNumberValue("LEFTHAND", a), d = a.getNumberValue("RIGHTHAND", a);
  return c % d;
};
Blockly.Blocks.calc_share = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(Lang.Blocks.CALC_calc_share_1, "#3D3D3D");
  this.appendValueInput("LEFTHAND").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.CALC_calc_share_2, "#3D3D3D");
  this.appendValueInput("RIGHTHAND").setCheck(["Number", "String"]);
  this.setOutput(!0, "Number");
  this.appendDummyInput("VALUE").appendField(Lang.Blocks.CALC_calc_share_3, "#3D3D3D");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.calc_share = function(b, a) {
  var c = a.getNumberValue("LEFTHAND", a), d = a.getNumberValue("RIGHTHAND", a);
  return Math.floor(c / d);
};
Blockly.Blocks.calc_operation = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput("VALUE").appendField(Lang.Blocks.CALC_calc_operation_of_1, "#3D3D3D");
  this.appendValueInput("LEFTHAND").setCheck(["Number", "String"]);
  this.appendDummyInput("VALUE").appendField(Lang.Blocks.CALC_calc_operation_of_2, "#3D3D3D");
  this.appendDummyInput("VALUE").appendField(new Blockly.FieldDropdown([[Lang.Blocks.CALC_calc_operation_square, "square"], [Lang.Blocks.CALC_calc_operation_root, "root"], [Lang.Blocks.CALC_calc_operation_sin, "sin"], [Lang.Blocks.CALC_calc_operation_cos, "cos"], [Lang.Blocks.CALC_calc_operation_tan, "tan"], [Lang.Blocks.CALC_calc_operation_asin, "asin"], [Lang.Blocks.CALC_calc_operation_acos, "acos"], [Lang.Blocks.CALC_calc_operation_atan, "atan"], [Lang.Blocks.CALC_calc_operation_log, "log"], [Lang.Blocks.CALC_calc_operation_ln, 
  "ln"], [Lang.Blocks.CALC_calc_operation_unnatural, "unnatural"], [Lang.Blocks.CALC_calc_operation_floor, "floor"], [Lang.Blocks.CALC_calc_operation_ceil, "ceil"], [Lang.Blocks.CALC_calc_operation_round, "round"], [Lang.Blocks.CALC_calc_operation_factorial, "factorial"], [Lang.Blocks.CALC_calc_operation_abs, "abs"]]), "VALUE");
  this.setOutput(!0, "Number");
  this.appendDummyInput().appendField(" ");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.calc_operation = function(b, a) {
  var c = a.getNumberValue("LEFTHAND", a), d = a.getField("VALUE", a), e = 0;
  switch(d) {
    case "square":
      e = c * c;
      break;
    case "factorial":
      e = Entry.factorial(c);
      break;
    case "root":
      e = Math.sqrt(c);
      break;
    case "sin":
      e = Math.sin(Entry.toRadian(c));
      break;
    case "cos":
      e = Math.cos(Entry.toRadian(c));
      break;
    case "tan":
      e = Math.tan(Entry.toRadian(c));
      break;
    case "log":
      e = Math.log(c) / Math.LN10;
      break;
    case "ln":
      e = Math.log(c);
      break;
    case "unnatural":
      e = c - Math.floor(c);
      0 > c && (e = 1 - e);
      break;
    default:
      e = Math[d](c);
  }
  return Math.round(1E3 * e) / 1E3;
};
Blockly.Blocks.calc_rand = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(Lang.Blocks.CALC_calc_rand_1, "#3D3D3D");
  this.appendValueInput("LEFTHAND").setCheck(["Number", "String"]);
  this.appendDummyInput("VALUE").appendField(Lang.Blocks.CALC_calc_rand_2, "#3D3D3D");
  this.appendValueInput("RIGHTHAND").setCheck(["Number", "String"]);
  this.setOutput(!0, "Number");
  this.appendDummyInput("VALUE").appendField(Lang.Blocks.CALC_calc_rand_3, "#3D3D3D");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.calc_rand = function(b, a) {
  var c = a.getStringValue("LEFTHAND", a), d = a.getStringValue("RIGHTHAND", a), e = Math.min(c, d), f = Math.max(c, d), c = Entry.isFloat(c);
  return Entry.isFloat(d) || c ? (Math.random() * (f - e) + e).toFixed(2) : Math.floor(Math.random() * (f - e + 1) + e);
};
Blockly.Blocks.get_date = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(Lang.Blocks.CALC_get_date_1, "#3D3D3D").appendField(new Blockly.FieldDropdown([[Lang.Blocks.CALC_get_date_year, "YEAR"], [Lang.Blocks.CALC_get_date_month, "MONTH"], [Lang.Blocks.CALC_get_date_day, "DAY"], [Lang.Blocks.CALC_get_date_hour, "HOUR"], [Lang.Blocks.CALC_get_date_minute, "MINUTE"], [Lang.Blocks.CALC_get_date_second, "SECOND"]]), "VALUE");
  this.appendDummyInput().appendField(" ").appendField(Lang.Blocks.CALC_get_date_2, "#3D3D3D");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.get_date = function(b, a) {
  var c = a.getField("VALUE", a), d = new Date;
  return "YEAR" == c ? d.getFullYear() : "MONTH" == c ? d.getMonth() + 1 : "DAY" == c ? d.getDate() : "HOUR" == c ? d.getHours() : "MINUTE" == c ? d.getMinutes() : d.getSeconds();
};
Blockly.Blocks.get_sound_duration = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(Lang.Blocks.CALC_get_sound_duration_1, "#3D3D3D");
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("sounds"), "VALUE");
  this.appendDummyInput().appendField(Lang.Blocks.CALC_get_sound_duration_2, "#3D3D3D");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.get_sound_duration = function(b, a) {
  for (var c = a.getField("VALUE", a), d = b.parent.sounds, e = 0;e < d.length;e++) {
    if (d[e].id == c) {
      return d[e].duration;
    }
  }
};
Blockly.Blocks.reset_project_timer = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(Lang.Blocks.CALC_timer_reset, "#3D3D3D");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}, whenAdd:function() {
  Entry.engine.showProjectTimer();
}, whenRemove:function(b) {
  Entry.engine.hideProjectTimer(b);
}};
Entry.block.reset_project_timer = function(b, a) {
  Entry.engine.updateProjectTimer(0);
  return a.callReturn();
};
Blockly.Blocks.set_visible_project_timer = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(Lang.Blocks.CALC_timer_visible_1, "#3D3D3D");
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Lang.Blocks.CALC_timer_visible_show, "SHOW"], [Lang.Blocks.CALC_timer_visible_hide, "HIDE"]]), "ACTION");
  this.appendDummyInput().appendField(Lang.Blocks.CALC_timer_visible_2, "#3D3D3D");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}, whenAdd:function() {
  Entry.engine.showProjectTimer();
}, whenRemove:function(b) {
  Entry.engine.hideProjectTimer(b);
}};
Entry.block.set_visible_project_timer = function(b, a) {
  var c = a.getField("ACTION", a), d = Entry.engine.projectTimer;
  "SHOW" == c ? d.setVisible(!0) : d.setVisible(!1);
  return a.callReturn();
};
Blockly.Blocks.get_project_timer_value = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(Lang.Blocks.CALC_get_timer_value, "#3D3D3D").appendField(" ", "#3D3D3D");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}, whenAdd:function() {
  Entry.engine.showProjectTimer();
}, whenRemove:function(b) {
  Entry.engine.hideProjectTimer(b);
}};
Entry.block.get_project_timer_value = function(b, a) {
  return Entry.engine.projectTimer.getValue();
};
Blockly.Blocks.wait_second = {init:function() {
  this.setColour("#498deb");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_wait_second_1);
  this.appendValueInput("SECOND").setCheck(["Number", "String", null]);
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_wait_second_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_flow.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.wait_second = function(b, a) {
  if (a.isStart) {
    if (1 == a.timeFlag) {
      return a;
    }
    delete a.timeFlag;
    delete a.isStart;
    Entry.engine.isContinue = !1;
    return a.callReturn();
  }
  a.isStart = !0;
  a.timeFlag = 1;
  var c = a.getNumberValue("SECOND", a);
  setTimeout(function() {
    a.timeFlag = 0;
  }, 1E3 * c);
  return a;
};
Blockly.Blocks.repeat_basic = {init:function() {
  this.setColour("#498deb");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_repeat_basic_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_repeat_basic_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_flow.png", "*"));
  this.appendStatementInput("DO");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.repeat_basic = function(b, a) {
  var c;
  if (!a.isLooped) {
    a.isLooped = !0;
    c = a.getNumberValue("VALUE", a);
    if (0 > c) {
      throw Error(Lang.Blocks.FLOW_repeat_basic_errorMsg);
    }
    a.iterCount = Math.floor(c);
  }
  if (0 == a.iterCount || 0 > a.iterCount) {
    return delete a.isLooped, delete a.iterCount, a.callReturn();
  }
  a.iterCount--;
  return a.getStatement("DO", a);
};
Blockly.Blocks.repeat_inf = {init:function() {
  this.setColour("#498deb");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_repeat_inf).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_flow.png", "*"));
  this.appendStatementInput("DO");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.repeat_inf = function(b, a) {
  a.isLooped = !0;
  return a.getStatement("DO");
};
Blockly.Blocks.stop_repeat = {init:function() {
  this.setColour("#498deb");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_stop_repeat).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_flow.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.stop_repeat = function(b, a) {
  for (var c = a;"REPEAT" != c.type.substr(0, 6).toUpperCase() && c.parentScript;) {
    c = c.parentScript, delete c.isLooped, delete c.iterCount;
  }
  var d = c.callReturn();
  return c.statements && d ? d : c ? null : a.callReturn();
};
Blockly.Blocks.wait_until_true = {init:function() {
  this.setColour("#498deb");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_wait_until_true_1);
  this.appendValueInput("BOOL").setCheck("Boolean");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_wait_until_true_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_flow.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.wait_until_true = function(b, a) {
  return a.getBooleanValue("BOOL", a) ? a.callReturn() : a;
};
Blockly.Blocks._if = {init:function() {
  this.setColour("#498deb");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW__if_1);
  this.appendValueInput("BOOL").setCheck("Boolean");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW__if_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_flow.png", "*"));
  this.appendStatementInput("STACK");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block._if = function(b, a) {
  return a.isLooped ? (delete a.isLooped, a.callReturn()) : a.getBooleanValue("BOOL", a) ? (a.isLooped = !0, a.getStatement("STACK", a)) : a.callReturn();
};
Blockly.Blocks.if_else = {init:function() {
  this.setColour("#498deb");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_if_else_1);
  this.appendValueInput("BOOL").setCheck("Boolean");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_if_else_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_flow.png", "*"));
  this.appendStatementInput("STACK_IF");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_if_else_3);
  this.appendStatementInput("STACK_ELSE");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.if_else = function(b, a) {
  if (a.isLooped) {
    return delete a.isLooped, a.callReturn();
  }
  var c = a.getBooleanValue("BOOL", a);
  a.isLooped = !0;
  return c ? a.getStatement("STACK_IF", a) : a.getStatement("STACK_ELSE", a);
};
Blockly.Blocks.create_clone = {init:function() {
  this.setColour("#498deb");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_create_clone_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("clone"), "VALUE");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_create_clone_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_flow.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.create_clone = function(b, a) {
  var c = a.getField("VALUE", a), d = a.callReturn();
  "self" == c ? b.parent.addCloneEntity(b.parent, b, null) : Entry.container.getObject(c).addCloneEntity(b.parent, null, null);
  return d;
};
Blockly.Blocks.delete_clone = {init:function() {
  this.setColour("#498deb");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_delete_clone).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_flow.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.delete_clone = function(b, a) {
  if (!b.isClone) {
    return a.callReturn();
  }
  b.removeClone();
};
Blockly.Blocks.when_clone_start = {init:function() {
  this.setColour("#498deb");
  this.appendDummyInput().appendField(new Blockly.FieldIcon("/img/assets/block_icon/start_icon_clone.png", "*", "start")).appendField(Lang.Blocks.FLOW_when_clone_start);
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.when_clone_start = function(b, a) {
  return a.callReturn();
};
Blockly.Blocks.stop_run = {init:function() {
  this.setColour("#498deb");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_stop_run).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_flow.png", "*"));
  this.setInputsInline(!0);
  this.setTooltip("");
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
}};
Entry.block.stop_run = function(b, a) {
  return Entry.engine.toggleStop();
};
Blockly.Blocks.repeat_while_true = {init:function() {
  this.setColour("#498deb");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_repeat_while_true_1);
  this.appendValueInput("BOOL").setCheck("Boolean");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_repeat_while_true_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_flow.png", "*"));
  this.appendStatementInput("DO");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.repeat_while_true = function(b, a) {
  if (a.getBooleanValue("BOOL", a)) {
    return a.isLooped = !0, a.getStatement("DO", a);
  }
  a.isLooped = !1;
  return a.callReturn();
};
Blockly.Blocks.stop_object = {init:function() {
  this.setColour("#498deb");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_stop_object_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Lang.Blocks.FLOW_stop_object_all, "all"], [Lang.Blocks.FLOW_stop_object_this_object, "thisObject"], [Lang.Blocks.FLOW_stop_object_this_thread, "thisThread"], [Lang.Blocks.FLOW_stop_object_other_thread, "otherThread"]]), "TARGET");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_stop_object_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_flow.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.stop_object = function(b, a) {
  var c = a.getField("TARGET", a), d = Entry.container;
  switch(c) {
    case "all":
      d.mapEntityIncludeCloneOnScene(function(a) {
        a.clearScript();
      });
      break;
    case "thisObject":
      b.clearScript();
      c = b.parent.clonedEntities;
      c.map(function(a) {
        a.clearScript();
      });
      break;
    case "otherThread":
      return b.clearScript(), c = b.parent.clonedEntities, c.map(function(a) {
        a.clearScript();
      }), a.callReturn();
  }
  return null;
};
Blockly.Blocks.restart_project = {init:function() {
  this.setColour("#498deb");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_restart).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_flow.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.restart_project = function(b, a) {
  Entry.engine.toggleStop();
  Entry.engine.toggleRun();
};
Blockly.Blocks.remove_all_clones = {init:function() {
  this.setColour("#498deb");
  this.appendDummyInput().appendField(Lang.Blocks.FLOW_delete_clone_all).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_flow.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.remove_all_clones = function(b, a) {
  var c = b.parent.getClonedEntities();
  c.map(function(a) {
    a.removeClone();
  });
  c = null;
  return a.callReturn();
};
Blockly.Blocks.function_field_label = {init:function() {
  this.setColour("#f9c535");
  this.appendDummyInput().appendField(new Blockly.FieldTextInput(Lang.Blocks.FUNCTION_explanation_1), "NAME");
  this.appendValueInput("NEXT").setCheck(["Param"]);
  this.setOutput(!0, "Param");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Blockly.Blocks.function_field_string = {init:function() {
  this.setColour("#ffec64");
  this.appendValueInput("PARAM").setCheck(["String"]);
  this.appendValueInput("NEXT").setCheck(["Param"]);
  this.setOutput(!0, "Param");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Blockly.Blocks.function_field_boolean = {init:function() {
  this.setColour("#2FC9F0");
  this.appendValueInput("PARAM").setCheck(["Boolean"]);
  this.appendValueInput("NEXT").setCheck(["Param"]);
  this.setOutput(!0, "Param");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Blockly.Blocks.function_param_string = {init:function() {
  this.setEditable(!1);
  this.setColour("#ffec64");
  this.setOutput(!0, ["String", "Number"]);
  this.setInputsInline(!0);
  this.setTooltip("");
}, domToMutation:function(b) {
  b.getElementsByTagName("field");
  this.hashId = b.getAttribute("hashid");
  (b = Entry.Func.targetFunc.stringHash[this.hashId]) || (b = "");
  this.appendDummyInput().appendField(new Blockly.FieldTextInput(Lang.Blocks.FUNCTION_character_variable + b), "");
}, mutationToDom:function() {
  var b = document.createElement("mutation");
  b.setAttribute("hashid", this.hashId);
  return b;
}};
Entry.block.function_param_string = function(b, a, c) {
  return a.register[a.hashId].run();
};
Blockly.Blocks.function_param_boolean = {init:function() {
  this.setEditable(!1);
  this.setColour("#2FC9F0");
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
  this.setTooltip("");
}, domToMutation:function(b) {
  b.getElementsByTagName("field");
  this.hashId = b.getAttribute("hashid");
  (b = Entry.Func.targetFunc.booleanHash[this.hashId]) || (b = "");
  this.appendDummyInput().appendField(new Blockly.FieldTextInput(Lang.Blocks.FUNCTION_logical_variable + b), "");
}, mutationToDom:function() {
  var b = document.createElement("mutation");
  b.setAttribute("hashid", this.hashId);
  return b;
}};
Entry.block.function_param_boolean = function(b, a, c) {
  return a.register[a.hashId].run();
};
Blockly.Blocks.function_create = {init:function() {
  this.appendDummyInput().appendField(Lang.Blocks.FUNCTION_define);
  this.setColour("#cc7337");
  this.appendValueInput("FIELD").setCheck(["Param"]);
  this.appendDummyInput().appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_function.png", "*"));
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.function_create = function(b, a) {
  return a.callReturn();
};
Blockly.Blocks.function_general = {init:function() {
  this.setColour("#cc7337");
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}, domToMutation:function(b) {
  var a = b.getElementsByTagName("field");
  this.appendDummyInput().appendField("");
  a.length || this.appendDummyInput().appendField(Lang.Blocks.FUNCTION_function);
  for (var c = 0;c < a.length;c++) {
    var d = a[c], e = d.getAttribute("hashid");
    switch(d.getAttribute("type").toLowerCase()) {
      case "label":
        this.appendDummyInput().appendField(d.getAttribute("content"));
        break;
      case "string":
        this.appendValueInput(e).setCheck(["String", "Number"]);
        break;
      case "boolean":
        this.appendValueInput(e).setCheck(["Boolean"]);
    }
  }
  this.hashId = b.getAttribute("hashid");
}, mutationToDom:function() {
  for (var b = document.createElement("mutation"), a = 1;a < this.inputList.length;a++) {
    var c = this.inputList[a];
    if (c.fieldRow[0] && c.fieldRow[0] instanceof Blockly.FieldLabel) {
      var c = c.fieldRow[0], d = document.createElement("field");
      d.setAttribute("type", "label");
      d.setAttribute("content", c.text_);
    } else {
      c.connection && "String" == c.connection.check_[0] ? (d = document.createElement("field"), d.setAttribute("type", "string"), d.setAttribute("hashid", c.name)) : c.connection && "Boolean" == c.connection.check_[0] && (d = document.createElement("field"), d.setAttribute("type", "boolean"), d.setAttribute("hashid", c.name));
    }
    b.appendChild(d);
  }
  b.setAttribute("hashid", this.hashId);
  return b;
}};
Entry.block.function_general = function(b, a) {
  if (a.thread) {
    var c = Entry.Engine.computeThread(b, a.thread);
    if (c) {
      return a.thread = c, a;
    }
    delete a.thread;
    return a.callReturn();
  }
  c = Entry.variableContainer.getFunction(a.hashId);
  a.thread = new Entry.Script(b);
  a.thread.register = a.values;
  for (var d = 0;d < c.content.childNodes.length;d++) {
    "function_create" == c.content.childNodes[d].getAttribute("type") && a.thread.init(c.content.childNodes[d]);
  }
  return a;
};
Blockly.Blocks.is_clicked = {init:function() {
  this.setColour("#2FC9F0");
  this.appendDummyInput().appendField(Lang.Blocks.JUDGEMENT_is_clicked, "#3D3D3D");
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.is_clicked = function(b, a) {
  return Entry.stage.isClick;
};
Blockly.Blocks.is_press_some_key = {init:function() {
  this.setColour("#2FC9F0");
  this.appendDummyInput().appendField(Lang.Blocks.JUDGEMENT_is_press_some_key_1, "#3D3D3D");
  this.appendDummyInput().appendField(new Blockly.FieldKeydownInput("81"), "VALUE").appendField(Lang.Blocks.JUDGEMENT_is_press_some_key_2, "#3D3D3D");
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.is_press_some_key = function(b, a) {
  var c = Number(a.getField("VALUE", a));
  return 0 <= Entry.engine.pressedKeys.indexOf(c);
};
Blockly.Blocks.reach_something = {init:function() {
  this.setColour("#2FC9F0");
  this.appendDummyInput().appendField(Lang.Blocks.JUDGEMENT_reach_something_1, "#3D3D3D");
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("collision"), "VALUE");
  this.appendDummyInput().appendField(Lang.Blocks.JUDGEMENT_reach_something_2, "#3D3D3D");
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.reach_something = function(b, a) {
  if (!b.getVisible()) {
    return !1;
  }
  var c = a.getField("VALUE", a), d = b.object, e = /wall/.test(c), f = ndgmr.checkPixelCollision;
  if (e) {
    switch(e = Entry.stage.wall, c) {
      case "wall":
        if (f(d, e.up, .2, !0) || f(d, e.down, .2, !0) || f(d, e.left, .2, !0) || f(d, e.right, .2, !0)) {
          return !0;
        }
        break;
      case "wall_up":
        if (f(d, e.up, .2, !0)) {
          return !0;
        }
        break;
      case "wall_down":
        if (f(d, e.down, .2, !0)) {
          return !0;
        }
        break;
      case "wall_right":
        if (f(d, e.right, .2, !0)) {
          return !0;
        }
        break;
      case "wall_left":
        if (f(d, e.left, .2, !0)) {
          return !0;
        }
      ;
    }
  } else {
    if (c = Entry.container.getEntity(c), "textBox" == c.type || "textBox" == b.type) {
      f = c.object.getTransformedBounds();
      d = d.getTransformedBounds();
      if (Entry.checkCollisionRect(d, f)) {
        return !0;
      }
      for (var c = c.parent.clonedEntities, e = 0, h = c.length;e < h;e++) {
        var g = c[e];
        if (g.getVisible() && !g.isStamp && Entry.checkCollisionRect(d, g.object.getTransformedBounds())) {
          return !0;
        }
      }
    } else {
      if (c.getVisible() && f(d, c.object, .2, !0)) {
        return !0;
      }
      c = c.parent.clonedEntities;
      e = 0;
      for (h = c.length;e < h;e++) {
        if (g = c[e], g.getVisible() && !g.isStamp && f(d, g.object, .2, !0)) {
          return !0;
        }
      }
    }
  }
  return !1;
};
Blockly.Blocks.boolean_comparison = {init:function() {
  this.setColour("#2FC9F0");
  this.appendValueInput("LEFTHAND").setCheck(["String", "Number"]);
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([["=", "EQUAL"], ["<", "SMALLER"], [">", "BIGGER"]]), "OPERATOR");
  this.appendValueInput("RIGHTHAND").setCheck(["String", "Number"]);
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.boolean_comparison = function(b, a) {
  var c = a.getField("OPERATOR", a), d = a.getNumberValue("LEFTHAND", a), e = a.getNumberValue("RIGHTHAND", a);
  return "EQUAL" == c ? d == e : "BIGGER" == c ? d > e : d < e;
};
Blockly.Blocks.boolean_equal = {init:function() {
  this.setColour("#2FC9F0");
  this.appendValueInput("LEFTHAND").setCheck(["String", "Number"]);
  this.appendDummyInput().appendField("=", "#3D3D3D");
  this.appendValueInput("RIGHTHAND").setCheck(["String", "Number"]);
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.boolean_equal = function(b, a) {
  var c = a.getStringValue("LEFTHAND", a), d = a.getStringValue("RIGHTHAND", a);
  return c == d;
};
Blockly.Blocks.boolean_bigger = {init:function() {
  this.setColour("#2FC9F0");
  this.appendValueInput("LEFTHAND").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(">", "#3D3D3D");
  this.appendValueInput("RIGHTHAND").setCheck(["Number", "String"]);
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.boolean_bigger = function(b, a) {
  var c = a.getNumberValue("LEFTHAND", a), d = a.getNumberValue("RIGHTHAND", a);
  return c > d;
};
Blockly.Blocks.boolean_smaller = {init:function() {
  this.setColour("#2FC9F0");
  this.appendValueInput("LEFTHAND").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField("<", "#3D3D3D");
  this.appendValueInput("RIGHTHAND").setCheck(["Number", "String"]);
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.boolean_smaller = function(b, a) {
  var c = a.getNumberValue("LEFTHAND", a), d = a.getNumberValue("RIGHTHAND", a);
  return c < d;
};
Blockly.Blocks.boolean_and_or = {init:function() {
  this.setColour("#2FC9F0");
  this.appendValueInput("LEFTHAND").setCheck("Boolean");
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Lang.Blocks.JUDGEMENT_boolean_and, "AND"], [Lang.Blocks.JUDGEMENT_boolean_or, "OR"]]), "OPERATOR");
  this.appendValueInput("RIGHTHAND").setCheck("Boolean");
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.boolean_and_or = function(b, a) {
  var c = a.getField("OPERATOR", a), d = a.getBooleanValue("LEFTHAND", a), e = a.getBooleanValue("RIGHTHAND", a);
  return "AND" == c ? d && e : d || e;
};
Blockly.Blocks.boolean_and = {init:function() {
  this.setColour("#2FC9F0");
  this.appendValueInput("LEFTHAND").setCheck("Boolean");
  this.appendDummyInput().appendField(Lang.Blocks.JUDGEMENT_boolean_and, "#3D3D3D");
  this.appendValueInput("RIGHTHAND").setCheck("Boolean");
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.boolean_and = function(b, a) {
  var c = a.getBooleanValue("LEFTHAND", a), d = a.getBooleanValue("RIGHTHAND", a);
  return c && d;
};
Blockly.Blocks.boolean_or = {init:function() {
  this.setColour("#2FC9F0");
  this.appendValueInput("LEFTHAND").setCheck("Boolean");
  this.appendDummyInput().appendField(Lang.Blocks.JUDGEMENT_boolean_or, "#3D3D3D");
  this.appendValueInput("RIGHTHAND").setCheck("Boolean");
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.boolean_or = function(b, a) {
  var c = a.getBooleanValue("LEFTHAND", a), d = a.getBooleanValue("RIGHTHAND", a);
  return c || d;
};
Blockly.Blocks.boolean_not = {init:function() {
  this.setColour("#2FC9F0");
  this.appendDummyInput().appendField(Lang.Blocks.JUDGEMENT_boolean_not_1, "#3D3D3D");
  this.appendValueInput("VALUE").setCheck("Boolean");
  this.appendDummyInput().appendField(Lang.Blocks.JUDGEMENT_boolean_not_2, "#3D3D3D");
  this.appendDummyInput();
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.boolean_not = function(b, a) {
  return !a.getBooleanValue("VALUE");
};
Blockly.Blocks.true_or_false = {init:function() {
  this.setColour("#2FC9F0");
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Lang.Blocks.JUDGEMENT_true, "true"], [Lang.Blocks.JUDGEMENT_false, "false"]]), "VALUE");
  this.appendDummyInput();
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.true_or_false = function(b, a) {
  return "true" == a.children[0].textContent;
};
Blockly.Blocks.True = {init:function() {
  this.setColour("#2FC9F0");
  this.appendDummyInput().appendField(Lang.Blocks.JUDGEMENT_true, "#3D3D3D").appendField(" ");
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.True = function(b, a) {
  return !0;
};
Blockly.Blocks.False = {init:function() {
  this.setColour("#2FC9F0");
  this.appendDummyInput().appendField(Lang.Blocks.JUDGEMENT_false, "#3D3D3D").appendField(" ");
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.False = function(b, a) {
  return !1;
};
Blockly.Blocks.is_included_in_list = {init:function() {
  this.setColour("#2FC9F0");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_is_included_in_list_1, "#3D3D3D");
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("lists"), "LIST");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_is_included_in_list_2, "#3D3D3D");
  this.appendValueInput("DATA").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_is_included_in_list_3, "#3D3D3D");
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.is_included_in_list = function(b, a) {
  var c = a.getField("LIST", a), d = a.getStringValue("DATA", a), c = Entry.variableContainer.getList(c);
  if (!c) {
    return !1;
  }
  for (var c = c.array_, e = 0, f = c.length;e < f;e++) {
    if (c[e].data.toString() == d.toString()) {
      return !0;
    }
  }
  return !1;
};
Blockly.Blocks.boolean_basic_operator = {init:function() {
  this.setColour("#2FC9F0");
  this.appendValueInput("LEFTHAND").setCheck(["String", "Number"]);
  this.appendDummyInput("VALUE").appendField(new Blockly.FieldDropdown([["=", "EQUAL"], [">", "GREATER"], ["<", "LESS"], [">=", "GREATER_OR_EQUAL"], ["<=", "LESS_OR_EQUAL"]], null, !1), "OPERATOR");
  this.appendValueInput("RIGHTHAND").setCheck(["Number", "String"]);
  this.setOutput(!0, "Boolean");
  this.setInputsInline(!0);
}};
Entry.block.boolean_basic_operator = function(b, a) {
  var c = a.getField("OPERATOR", a), d = a.getStringValue("LEFTHAND", a), e = a.getStringValue("RIGHTHAND", a);
  switch(c) {
    case "EQUAL":
      return d == e;
    case "GREATER":
      return Number(d) > Number(e);
    case "LESS":
      return Number(d) < Number(e);
    case "GREATER_OR_EQUAL":
      return Number(d) >= Number(e);
    case "LESS_OR_EQUAL":
      return Number(d) <= Number(e);
  }
};
Blockly.Blocks.show = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_show).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.show = function(b, a) {
  b.setVisible(!0);
  return a.callReturn();
};
Blockly.Blocks.hide = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_hide).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.hide = function(b, a) {
  b.setVisible(!1);
  return a.callReturn();
};
Blockly.Blocks.dialog_time = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_dialog_time_1);
  this.appendValueInput("VALUE").setCheck(["String", "Number", null]);
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_dialog_time_2);
  this.appendValueInput("SECOND").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_dialog_time_3);
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Lang.Blocks.speak, "speak"]]), "OPTION");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_dialog_time_4).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.dialog_time = function(b, a) {
  if (!a.isStart) {
    var c = a.getNumberValue("SECOND", a), d = a.getStringValue("VALUE", a), e = a.getField("OPTION", a);
    a.isStart = !0;
    a.timeFlag = 1;
    d || "number" == typeof d || (d = "    ");
    d = Entry.convertToRoundedDecimals(d, 3);
    new Entry.Dialog(b, d, e);
    b.syncDialogVisible(b.getVisible());
    setTimeout(function() {
      a.timeFlag = 0;
    }, 1E3 * c);
  }
  return 0 == a.timeFlag ? (delete a.timeFlag, delete a.isStart, b.dialog && b.dialog.remove(), a.callReturn()) : a;
};
Blockly.Blocks.dialog = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_dialog_1);
  this.appendValueInput("VALUE").setCheck(["String", "Number", null]);
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_dialog_2);
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Lang.Blocks.speak, "speak"]]), "OPTION");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_dialog_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.dialog = function(b, a) {
  var c = a.getStringValue("VALUE", a);
  c || "number" == typeof c || (c = "    ");
  var d = a.getField("OPTION", a), c = Entry.convertToRoundedDecimals(c, 3);
  new Entry.Dialog(b, c, d);
  b.syncDialogVisible(b.getVisible());
  return a.callReturn();
};
Blockly.Blocks.remove_dialog = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_remove_dialog).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.remove_dialog = function(b, a) {
  b.dialog && b.dialog.remove();
  return a.callReturn();
};
Blockly.Blocks.change_to_nth_shape = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_change_to_nth_shape_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("pictures"), "VALUE");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_change_to_nth_shape_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.change_to_nth_shape = function(b, a) {
  var c = a.getField("VALUE", a), c = b.parent.getPicture(c);
  b.setImage(c);
  return a.callReturn();
};
Blockly.Blocks.change_to_next_shape = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_change_to_next_shape).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.change_to_next_shape = function(b, a) {
  var c = b.parent.getNextPicture(b.picture.id);
  b.setImage(c);
  return a.callReturn();
};
Blockly.Blocks.set_effect_volume = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_set_effect_volume_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Lang.Blocks.color, "color"], [Lang.Blocks.brightness, "brightness"], [Lang.Blocks.opacity, "opacity"]]), "EFFECT");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_set_effect_volume_2);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_set_effect_volume_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.set_effect_volume = function(b, a) {
  var c = a.getField("EFFECT", a), d = a.getNumberValue("VALUE", a);
  "color" == c ? b.effect.hue = d + b.effect.hue : "lens" != c && "swriling" != c && "pixel" != c && "mosaic" != c && ("brightness" == c ? b.effect.brightness = d + b.effect.brightness : "blur" != c && "opacity" == c && (b.effect.alpha += d / 100));
  b.applyFilter();
  return a.callReturn();
};
Blockly.Blocks.set_effect = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_set_effect_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Lang.Blocks.color, "color"], [Lang.Blocks.brightness, "brightness"], [Lang.Blocks.opacity, "opacity"]]), "EFFECT");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_set_effect_2);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_set_effect_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.set_effect = function(b, a) {
  var c = a.getField("EFFECT", a), d = a.getNumberValue("VALUE", a);
  "color" == c ? b.effect.hue = d : "lens" != c && "swriling" != c && "pixel" != c && "mosaic" != c && ("brightness" == c ? b.effect.brightness = d : "blur" != c && "opacity" == c && (b.effect.alpha = d / 100));
  b.applyFilter();
  return a.callReturn();
};
Blockly.Blocks.erase_all_effects = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_erase_all_effects).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.erase_all_effects = function(b, a) {
  b.resetFilter();
  return a.callReturn();
};
Blockly.Blocks.change_scale_percent = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_change_scale_percent_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_change_scale_percent_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.change_scale_percent = function(b, a) {
  var c = (a.getNumberValue("VALUE", a) + 100) / 100;
  b.setScaleX(b.getScaleX() * c);
  b.setScaleY(b.getScaleY() * c);
  return a.callReturn();
};
Blockly.Blocks.set_scale_percent = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_set_scale_percent_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_set_scale_percent_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.set_scale_percent = function(b, a) {
  var c = a.getNumberValue("VALUE", a) / 100, d = b.snapshot_;
  b.setScaleX(c * d.scaleX);
  b.setScaleY(c * d.scaleY);
  return a.callReturn();
};
Blockly.Blocks.flip_y = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_flip_y).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.flip_y = function(b, a) {
  b.setScaleX(-1 * b.getScaleX());
  return a.callReturn();
};
Blockly.Blocks.flip_x = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_flip_x).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.flip_x = function(b, a) {
  b.setScaleY(-1 * b.getScaleY());
  return a.callReturn();
};
Blockly.Blocks.set_object_order = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_set_object_order_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("objectSequence"), "VALUE");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_set_object_order_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.set_object_order = function(b, a) {
  var c = a.getField("VALUE", a), d = Entry.container.getCurrentObjects().indexOf(b.parent);
  if (-1 < d) {
    return Entry.container.moveElementByBlock(d, c), a.callReturn();
  }
  throw Error("object is not available");
};
Blockly.Blocks.get_pictures = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField("");
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("pictures"), "VALUE");
  this.appendDummyInput().appendField(" ");
  this.setOutput(!0, "String");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.get_pictures = function(b, a) {
  return a.getStringField("VALUE");
};
Blockly.Blocks.change_to_some_shape = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_change_to_nth_shape_1);
  this.appendValueInput("VALUE").setCheck(["String", "Number"]);
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_change_to_nth_shape_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.change_to_some_shape = function(b, a) {
  var c = a.getStringValue("VALUE");
  Entry.parseNumber(c);
  c = b.parent.getPicture(c);
  b.setImage(c);
  return a.callReturn();
};
Blockly.Blocks.set_effect_amount = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_set_effect_volume_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Lang.Blocks.color, "color"], [Lang.Blocks.brightness, "brightness"], [Lang.Blocks.transparency, "transparency"]]), "EFFECT");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_set_effect_volume_2);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_set_effect_volume_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.set_effect_amount = function(b, a) {
  var c = a.getField("EFFECT", a), d = a.getNumberValue("VALUE", a);
  "color" == c ? b.effect.hue = d + b.effect.hue : "brightness" == c ? b.effect.brightness = d + b.effect.brightness : "transparency" == c && (b.effect.alpha -= d / 100);
  b.applyFilter();
  return a.callReturn();
};
Blockly.Blocks.set_entity_effect = {init:function() {
  this.setColour("#EC4466");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_set_effect_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Lang.Blocks.color, "color"], [Lang.Blocks.brightness, "brightness"], [Lang.Blocks.transparency, "transparency"]]), "EFFECT");
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_set_effect_2);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.LOOKS_set_effect_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_looks.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.set_entity_effect = function(b, a) {
  var c = a.getField("EFFECT", a), d = a.getNumberValue("VALUE", a);
  "color" == c ? b.effect.hue = d : "brightness" == c ? b.effect.brightness = d : "transparency" == c && (b.effect.alpha = 1 - d / 100);
  b.applyFilter();
  return a.callReturn();
};
Blockly.Blocks.move_direction = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_move_direction_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_move_direction_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.move_direction = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.setX(b.getX() + c * Math.cos((b.getRotation() + b.getDirection() - 90) / 180 * Math.PI));
  b.setY(b.getY() - c * Math.sin((b.getRotation() + b.getDirection() - 90) / 180 * Math.PI));
  b.brush && !b.brush.stop && b.brush.lineTo(b.getX(), -1 * b.getY());
  return a.callReturn();
};
Blockly.Blocks.move_x = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_move_x_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_move_x_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.move_x = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.setX(b.getX() + c);
  b.brush && !b.brush.stop && b.brush.lineTo(b.getX(), -1 * b.getY());
  return a.callReturn();
};
Blockly.Blocks.move_y = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_move_y_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_move_y_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.move_y = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.setY(b.getY() + c);
  b.brush && !b.brush.stop && b.brush.lineTo(b.getX(), -1 * b.getY());
  return a.callReturn();
};
Blockly.Blocks.locate_xy_time = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_xy_time_1);
  this.appendValueInput("VALUE1").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_xy_time_2);
  this.appendValueInput("VALUE2").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_xy_time_3);
  this.appendValueInput("VALUE3").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_xy_time_4).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.locate_xy_time = function(b, a) {
  if (!a.isStart) {
    var c;
    c = a.getNumberValue("VALUE1", a);
    var d = a.getNumberValue("VALUE2", a) - b.getX(), e = a.getNumberValue("VALUE3", a) - b.getY();
    a.isStart = !0;
    a.frameCount = Math.floor(c * Entry.FPS);
    a.dX = d / a.frameCount;
    a.dY = e / a.frameCount;
  }
  if (0 != a.frameCount) {
    return b.setX(b.getX() + a.dX), b.setY(b.getY() + a.dY), a.frameCount--, b.brush && !b.brush.stop && b.brush.lineTo(b.getX(), -1 * b.getY()), a;
  }
  delete a.isStart;
  delete a.frameCount;
  return a.callReturn();
};
Blockly.Blocks.rotate_by_angle = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_rotate_by_angle_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_rotate_by_angle_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.rotate_by_angle = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.setRotation(b.getRotation() + c);
  return a.callReturn();
};
Blockly.Blocks.rotate_by_angle_dropdown = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_rotate_by_angle_dropdown_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdown([["45", "45"], ["90", "90"], ["135", "135"], ["180", "180"]]), "VALUE").appendField(Lang.Blocks.MOVING_rotate_by_angle_dropdown_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.rotate_by_angle_dropdown = function(b, a) {
  var c = a.getField("VALUE", a);
  b.setRotation(b.getRotation() + Number(c));
  return a.callReturn();
};
Blockly.Blocks.see_angle = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_see_angle_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_see_angle_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.see_angle = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.setDirection(c);
  return a.callReturn();
};
Blockly.Blocks.see_direction = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_see_direction_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("sprites"), "VALUE");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_see_direction_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.see_direction = function(b, a) {
  var c = a.getField("VALUE", a), d = Entry.container.getEntity(c), c = d.getX() - b.getX(), d = d.getY() - b.getY();
  0 <= c ? b.setRotation(Math.atan(d / c) / Math.PI * 180 + 90) : b.setRotation(Math.atan(d / c) / Math.PI * 180 + 270);
  return a.callReturn();
};
Blockly.Blocks.locate_xy = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_xy_1);
  this.appendValueInput("VALUE1").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_xy_2);
  this.appendValueInput("VALUE2").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_xy_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.locate_xy = function(b, a) {
  var c = a.getNumberValue("VALUE1", a);
  b.setX(c);
  c = a.getNumberValue("VALUE2", a);
  b.setY(c);
  b.brush && !b.brush.stop && b.brush.lineTo(b.getX(), -1 * b.getY());
  return a.callReturn();
};
Blockly.Blocks.locate_x = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_x_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_x_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.locate_x = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.setX(c);
  b.brush && !b.brush.stop && b.brush.lineTo(b.getX(), -1 * b.getY());
  return a.callReturn();
};
Blockly.Blocks.locate_y = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_y_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_y_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.locate_y = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.setY(c);
  b.brush && !b.brush.stop && b.brush.lineTo(b.getX(), -1 * b.getY());
  return a.callReturn();
};
Blockly.Blocks.locate = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("spritesWithMouse"), "VALUE");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.locate = function(b, a) {
  var c = a.getField("VALUE", a), d;
  "mouse" == c ? (c = Entry.stage.mouseCoordinate.x, d = Entry.stage.mouseCoordinate.y) : (d = Entry.container.getEntity(c), c = d.getX(), d = d.getY());
  b.setX(Number(c));
  b.setY(Number(d));
  b.brush && !b.brush.stop && b.brush.lineTo(c, -1 * d);
  return a.callReturn();
};
Blockly.Blocks.move_xy_time = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_move_xy_time_1);
  this.appendValueInput("VALUE1").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_move_xy_time_2);
  this.appendValueInput("VALUE2").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_move_xy_time_3);
  this.appendValueInput("VALUE3").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_move_xy_time_4).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.move_xy_time = function(b, a) {
  if (!a.isStart) {
    var c;
    c = a.getNumberValue("VALUE1", a);
    var d = a.getNumberValue("VALUE2", a), e = a.getNumberValue("VALUE3", a);
    a.isStart = !0;
    a.frameCount = Math.floor(c * Entry.FPS);
    a.dX = d / a.frameCount;
    a.dY = e / a.frameCount;
  }
  if (0 != a.frameCount) {
    return b.setX(b.getX() + a.dX), b.setY(b.getY() + a.dY), a.frameCount--, b.brush && !b.brush.stop && b.brush.lineTo(b.getX(), -1 * b.getY()), a;
  }
  delete a.isStart;
  delete a.frameCount;
  return a.callReturn();
};
Blockly.Blocks.locate_time = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_time_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_time_2);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("sprites"), "VALUE");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_time_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Blockly.Blocks.rotate_by_angle_time = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_rotate_by_angle_time_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_rotate_by_angle_time_2);
  this.appendDummyInput().appendField(new Blockly.FieldAngle("90"), "VALUE");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_rotate_by_angle_time_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.rotate_by_angle_time = function(b, a) {
  if (!a.isStart) {
    var c;
    c = a.getNumberValue("VALUE", a);
    var d = a.getNumberField("VALUE", a);
    a.isStart = !0;
    a.frameCount = Math.floor(c * Entry.FPS);
    a.dAngle = d / a.frameCount;
  }
  if (0 != a.frameCount) {
    return b.setRotation(b.getRotation() + a.dAngle), a.frameCount--, a;
  }
  delete a.isStart;
  delete a.frameCount;
  return a.callReturn();
};
Blockly.Blocks.bounce_when = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_bounce_when_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("bounce"), "VALUE");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_bounce_when_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setPreviousStatement(!0);
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Blockly.Blocks.bounce_wall = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_bounce_wall).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.bounce_wall = function(b, a) {
  var c = b.parent.getRotateMethod();
  b.object.getTransformedBounds();
  var d = "free" == c ? (b.getRotation() + b.getDirection()).mod(360) : b.getDirection();
  90 > d && 0 <= d || 360 > d && 270 <= d ? ndgmr.checkPixelCollision(Entry.stage.wall.up, b.object, 0, !0) && ("free" == c ? b.setRotation(-b.getRotation() - 2 * b.getDirection() + 180) : b.setDirection(-b.getDirection() + 180)) : 270 > d && 90 <= d && ndgmr.checkPixelCollision(Entry.stage.wall.down, b.object, 0, !0) && ("free" == c ? b.setRotation(-b.getRotation() - 2 * b.getDirection() + 180) : b.setDirection(-b.getDirection() + 180));
  360 > d && 180 <= d ? ndgmr.checkPixelCollision(Entry.stage.wall.left, b.object, 0, !0) && ("free" == c ? b.setRotation(-b.getRotation() - 2 * b.getDirection()) : b.setDirection(-b.getDirection() + 360)) : 180 > d && 0 <= d && ndgmr.checkPixelCollision(Entry.stage.wall.right, b.object, 0, !0) && ("free" == c ? b.setRotation(-b.getRotation() - 2 * b.getDirection()) : b.setDirection(-b.getDirection() + 360));
  return a.callReturn();
};
Blockly.Blocks.flip_arrow_horizontal = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_flip_arrow_horizontal).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.flip_arrow_horizontal = function(b, a) {
  b.setDirection(b.getDirection() + 180);
  return a.callReturn();
};
Blockly.Blocks.flip_arrow_vertical = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_flip_arrow_vertical).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.flip_arrow_vertical = function(b, a) {
  b.setDirection(b.getDirection() + 180);
  return a.callReturn();
};
Blockly.Blocks.see_angle_object = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_see_angle_object_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("spritesWithMouse"), "VALUE");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_see_angle_object_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.see_angle_object = function(b, a) {
  var c = a.getField("VALUE", a), d = b.getX(), e = b.getY();
  if (b.parent.id == c) {
    return a.callReturn();
  }
  "mouse" == c ? (c = Entry.stage.mouseCoordinate.y, d = Entry.stage.mouseCoordinate.x - d, e = c - e) : (c = Entry.container.getEntity(c), d = c.getX() - d, e = c.getY() - e);
  e = 0 <= d ? -Math.atan(e / d) / Math.PI * 180 + 90 : -Math.atan(e / d) / Math.PI * 180 + 270;
  d = b.getDirection() + b.getRotation();
  b.setRotation(b.getRotation() + e - d);
  return a.callReturn();
};
Blockly.Blocks.see_angle_direction = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_see_angle_direction_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_see_angle_direction_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.see_angle_direction = function(b, a) {
  var c = a.getNumberValue("VALUE", a), d = b.getDirection() + b.getRotation();
  b.setRotation(b.getRotation() + c - d);
  return a.callReturn();
};
Blockly.Blocks.rotate_direction = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_rotate_direction_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_rotate_direction_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.rotate_direction = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.setDirection(c + b.getDirection());
  return a.callReturn();
};
Blockly.Blocks.locate_object_time = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_object_time_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_object_time_2);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("spritesWithMouse"), "TARGET");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_locate_object_time_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.locate_object_time = function(b, a) {
  if (!a.isStart) {
    var c, d, e;
    d = a.getField("TARGET", a);
    c = a.getNumberValue("VALUE", a);
    c = Math.floor(c * Entry.FPS);
    e = Entry.stage.mouseCoordinate;
    if (0 != c) {
      "mouse" == d ? (d = e.x - b.getX(), e = e.y - b.getY()) : (e = Entry.container.getEntity(d), d = e.getX() - b.getX(), e = e.getY() - b.getY()), a.isStart = !0, a.frameCount = c, a.dX = d / a.frameCount, a.dY = e / a.frameCount;
    } else {
      return "mouse" == d ? (d = Number(e.x), e = Number(e.y)) : (e = Entry.container.getEntity(d), d = e.getX(), e = e.getY()), b.setX(d), b.setY(e), b.brush && !b.brush.stop && b.brush.lineTo(b.getX(), -1 * b.getY()), a.callReturn();
    }
  }
  if (0 != a.frameCount) {
    return b.setX(b.getX() + a.dX), b.setY(b.getY() + a.dY), a.frameCount--, b.brush && !b.brush.stop && b.brush.lineTo(b.getX(), -1 * b.getY()), a;
  }
  delete a.isStart;
  delete a.frameCount;
  return a.callReturn();
};
Blockly.Blocks.rotate_absolute = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_set_direction_by_angle_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_set_direction_by_angle_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.rotate_absolute = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.setRotation(c);
  return a.callReturn();
};
Blockly.Blocks.rotate_relative = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_add_direction_by_angle_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_add_direction_by_angle_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.rotate_relative = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.setRotation(c + b.getRotation());
  return a.callReturn();
};
Blockly.Blocks.direction_absolute = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_see_angle_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_see_angle_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.direction_absolute = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.setDirection(c);
  return a.callReturn();
};
Blockly.Blocks.direction_relative = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_rotate_direction_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_rotate_direction_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.direction_relative = function(b, a) {
  var c = a.getNumberValue("VALUE", a);
  b.setDirection(c + b.getDirection());
  return a.callReturn();
};
Blockly.Blocks.move_to_angle = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_move_direction_angle_1);
  this.appendValueInput("ANGLE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_move_direction_angle_2);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_move_direction_angle_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.move_to_angle = function(b, a) {
  var c = a.getNumberValue("VALUE", a), d = a.getNumberValue("ANGLE", a);
  b.setX(b.getX() + c * Math.cos((d - 90) / 180 * Math.PI));
  b.setY(b.getY() - c * Math.sin((d - 90) / 180 * Math.PI));
  b.brush && !b.brush.stop && b.brush.lineTo(b.getX(), -1 * b.getY());
  return a.callReturn();
};
Blockly.Blocks.rotate_by_time = {init:function() {
  this.setColour("#A751E3");
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_add_direction_by_angle_time_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_add_direction_by_angle_time_2);
  this.appendValueInput("ANGLE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.MOVING_add_direction_by_angle_time_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_moving.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.rotate_by_time = function(b, a) {
  if (!a.isStart) {
    var c;
    c = a.getNumberValue("VALUE", a);
    var d = a.getNumberValue("ANGLE", a);
    a.isStart = !0;
    a.frameCount = Math.floor(c * Entry.FPS);
    a.dAngle = d / a.frameCount;
  }
  if (0 != a.frameCount) {
    return b.setRotation(b.getRotation() + a.dAngle), a.frameCount--, a;
  }
  delete a.isStart;
  delete a.frameCount;
  return a.callReturn();
};
Blockly.Blocks.when_scene_start = {init:function() {
  this.setColour("#189FC1");
  this.appendDummyInput().appendField(new Blockly.FieldIcon("/img/assets/block_icon/start_icon_scene.png", "*", "start")).appendField(Lang.Blocks.SCENE_when_scene_start);
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.when_scene_start = function(b, a) {
  return a.callReturn();
};
Blockly.Blocks.start_scene = {init:function() {
  this.setColour("#189FC1");
  this.appendDummyInput().appendField(Lang.Blocks.SCENE_start_scene_1).appendField(new Blockly.FieldDropdownDynamic("scenes"), "VALUE").appendField(Lang.Blocks.SCENE_start_scene_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_scene.png", "*"));
  this.setInputsInline(!0);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.start_scene = function(b, a) {
  var c = a.getField("VALUE", a);
  if (c = Entry.scene.getSceneById(c)) {
    Entry.scene.selectScene(c), Entry.engine.fireEvent("when_scene_start");
  }
  return null;
};
Blockly.Blocks.start_neighbor_scene = {init:function() {
  this.setColour("#189FC1");
  this.appendDummyInput().appendField(Lang.Blocks.SCENE_start_neighbor_scene_1).appendField(new Blockly.FieldDropdown([[Lang.Blocks.SCENE_start_scene_pre, "pre"], [Lang.Blocks.SCENE_start_scene_next, "next"]]), "OPERATOR").appendField(Lang.Blocks.SCENE_start_neighbor_scene_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_scene.png", "*"));
  this.setInputsInline(!0);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.start_neighbor_scene = function(b, a) {
  var c = Entry.scene.selectedScene, d = Entry.scene.getScenes(), c = d.indexOf(c);
  "next" == a.getField("OPERATOR", a) ? c + 1 < d.length && (d = Entry.scene.getSceneById(d[c + 1].id)) && (Entry.scene.selectScene(d), Entry.engine.fireEvent("when_scene_start")) : 0 < c && (d = Entry.scene.getSceneById(d[c - 1].id)) && (Entry.scene.selectScene(d), Entry.engine.fireEvent("when_scene_start"));
  return null;
};
Blockly.Blocks.sound_something = {init:function() {
  this.setColour("#A4D01D");
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("sounds"), "VALUE");
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_sound.png", "*"));
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.sound_something = function(b, a) {
  var c = a.getField("VALUE", a);
  Entry.isExist(c, "id", b.parent.sounds) && createjs.Sound.play(c);
  return a.callReturn();
};
Blockly.Blocks.sound_something_second = {init:function() {
  this.setColour("#A4D01D");
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_second_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("sounds"), "VALUE");
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_second_2);
  this.appendValueInput("SECOND").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_second_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_sound.png", "*"));
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.sound_something_second = function(b, a) {
  var c = a.getField("VALUE", a), d = a.getNumberValue("SECOND", a);
  if (Entry.isExist(c, "id", b.parent.sounds)) {
    var e = createjs.Sound.play(c);
    setTimeout(function() {
      e.stop();
    }, 1E3 * d);
  }
  return a.callReturn();
};
Blockly.Blocks.sound_something_wait = {init:function() {
  this.setColour("#A4D01D");
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_wait_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("sounds"), "VALUE");
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_wait_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_sound.png", "*"));
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.sound_something_wait = function(b, a) {
  if (a.isPlay) {
    if (1 == a.playState) {
      return a;
    }
    delete a.playState;
    delete a.isPlay;
    return a.callReturn();
  }
  a.isPlay = !0;
  a.playState = 1;
  var c = a.getField("VALUE", a), d = b.parent.getSound(c);
  Entry.isExist(c, "id", b.parent.sounds) && (createjs.Sound.play(c), setTimeout(function() {
    a.playState = 0;
  }, 1E3 * d.duration));
  return a;
};
Blockly.Blocks.sound_something_second_wait = {init:function() {
  this.setColour("#A4D01D");
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_second_wait_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("sounds"), "VALUE");
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_second_wait_2);
  this.appendValueInput("SECOND").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_second_wait_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_sound.png", "*"));
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.sound_something_second_wait = function(b, a) {
  if (a.isPlay) {
    if (1 == a.playState) {
      return a;
    }
    delete a.isPlay;
    delete a.playState;
    return a.callReturn();
  }
  a.isPlay = !0;
  a.playState = 1;
  var c = a.getField("VALUE", a);
  if (Entry.isExist(c, "id", b.parent.sounds)) {
    var d = createjs.Sound.play(c), c = a.getNumberValue("SECOND", a);
    setTimeout(function() {
      d.stop();
      a.playState = 0;
    }, 1E3 * c);
    d.addEventListener("complete", function(a) {
    });
  }
  return a;
};
Blockly.Blocks.sound_volume_change = {init:function() {
  this.setColour("#A4D01D");
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_volume_change_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_volume_change_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_sound.png", "*"));
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.sound_volume_change = function(b, a) {
  var c = a.getNumberValue("VALUE", a) / 100, c = c + createjs.Sound.getVolume();
  1 < c && (c = 1);
  0 > c && (c = 0);
  createjs.Sound.setVolume(c);
  return a.callReturn();
};
Blockly.Blocks.sound_volume_set = {init:function() {
  this.setColour("#A4D01D");
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_volume_set_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_volume_set_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_sound.png", "*"));
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.sound_volume_set = function(b, a) {
  var c = a.getNumberValue("VALUE", a) / 100;
  1 < c && (c = 1);
  0 > c && (c = 0);
  createjs.Sound.setVolume(c);
  return a.callReturn();
};
Blockly.Blocks.sound_silent_all = {init:function() {
  this.setColour("#A4D01D");
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_silent_all).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_sound.png", "*"));
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.sound_silent_all = function(b, a) {
  createjs.Sound.stop();
  return a.callReturn();
};
Blockly.Blocks.get_sounds = {init:function() {
  this.setColour("#A4D01D");
  this.appendDummyInput().appendField("");
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("sounds"), "VALUE");
  this.appendDummyInput().appendField(" ");
  this.setOutput(!0, "String");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.get_sounds = function(b, a) {
  return a.getStringField("VALUE");
};
Blockly.Blocks.sound_something_with_block = {init:function() {
  this.setColour("#A4D01D");
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_1);
  this.appendValueInput("VALUE").setCheck(["String", "Number"]);
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_sound.png", "*"));
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.sound_something_with_block = function(b, a) {
  var c = a.getStringValue("VALUE", a);
  (c = b.parent.getSound(c)) && createjs.Sound.play(c.id);
  return a.callReturn();
};
Blockly.Blocks.sound_something_second_with_block = {init:function() {
  this.setColour("#A4D01D");
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_second_1);
  this.appendValueInput("VALUE").setCheck(["String", "Number"]);
  this.appendDummyInput().appendField(" ").appendField(Lang.Blocks.SOUND_sound_something_second_2);
  this.appendValueInput("SECOND").setCheck(["String", "Number"]);
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_second_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_sound.png", "*"));
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.sound_something_second_with_block = function(b, a) {
  var c = a.getStringValue("VALUE", a), d = a.getNumberValue("SECOND", a);
  (c = b.parent.getSound(c)) && createjs.Sound.play(c.id, {startTime:0, duration:1E3 * d});
  return a.callReturn();
};
Blockly.Blocks.sound_something_wait_with_block = {init:function() {
  this.setColour("#A4D01D");
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_wait_1);
  this.appendValueInput("VALUE").setCheck(["String", "Number"]);
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_wait_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_sound.png", "*"));
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.sound_something_wait_with_block = function(b, a) {
  if (a.isPlay) {
    if (1 == a.playState) {
      return a;
    }
    delete a.playState;
    delete a.isPlay;
    return a.callReturn();
  }
  a.isPlay = !0;
  a.playState = 1;
  var c = a.getStringValue("VALUE", a);
  if (c = b.parent.getSound(c)) {
    createjs.Sound.play(c.id), setTimeout(function() {
      a.playState = 0;
    }, 1E3 * c.duration);
  }
  return a;
};
Blockly.Blocks.sound_something_second_wait_with_block = {init:function() {
  this.setColour("#A4D01D");
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_second_wait_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_second_wait_2).appendField(" ");
  this.appendValueInput("SECOND").setCheck(["String", "Number"]);
  this.appendDummyInput().appendField(Lang.Blocks.SOUND_sound_something_second_wait_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_sound.png", "*"));
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.sound_something_second_wait_with_block = function(b, a) {
  if (a.isPlay) {
    if (1 == a.playState) {
      return a;
    }
    delete a.isPlay;
    delete a.playState;
    return a.callReturn();
  }
  a.isPlay = !0;
  a.playState = 1;
  var c = a.getStringValue("VALUE", a);
  if (c = b.parent.getSound(c)) {
    var d = createjs.Sound.play(c.id), c = a.getNumberValue("SECOND", a);
    setTimeout(function() {
      d.stop();
      a.playState = 0;
    }, 1E3 * c);
    d.addEventListener("complete", function(a) {
    });
  }
  return a;
};
Blockly.Blocks.when_run_button_click = {init:function() {
  this.setColour("#3BBD70");
  this.appendDummyInput().appendField(new Blockly.FieldIcon("/img/assets/block_icon/start_icon_play.png", "*", "start")).appendField(Lang.Blocks.START_when_run_button_click);
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.when_run_button_click = function(b, a) {
  return a.callReturn();
};
Blockly.Blocks.press_some_key = {init:function() {
  this.setColour("#3BBD70");
  this.appendDummyInput().appendField(new Blockly.FieldIcon("/img/assets/block_icon/start_icon_keyboard.png", "*", "start")).appendField(Lang.Blocks.START_press_some_key_1).appendField(new Blockly.FieldDropdown([["q", "81"], ["w", "87"], ["e", "69"], ["r", "82"], ["a", "65"], ["s", "83"], ["d", "68"], [Lang.Blocks.START_press_some_key_up, "38"], [Lang.Blocks.START_press_some_key_down, "40"], [Lang.Blocks.START_press_some_key_left, "37"], [Lang.Blocks.START_press_some_key_right, "39"], [Lang.Blocks.START_press_some_key_enter, 
  "13"], [Lang.Blocks.START_press_some_key_space, "32"]]), "VALUE").appendField(Lang.Blocks.START_press_some_key_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_start.png", "*"));
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.press_some_key = function(b, a) {
  return a.callReturn();
};
Blockly.Blocks.when_some_key_pressed = {init:function() {
  this.setColour("#3BBD70");
  this.appendDummyInput().appendField(new Blockly.FieldIcon("/img/assets/block_icon/start_icon_keyboard.png", "*", "start")).appendField(Lang.Blocks.START_press_some_key_1).appendField(new Blockly.FieldKeydownInput("81"), "VALUE").appendField(Lang.Blocks.START_press_some_key_2);
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.when_some_key_pressed = function(b, a) {
  return a.callReturn();
};
Blockly.Blocks.mouse_clicked = {init:function() {
  this.setColour("#3BBD70");
  this.appendDummyInput().appendField(new Blockly.FieldIcon("/img/assets/block_icon/start_icon_mouse.png", "*", "start")).appendField(Lang.Blocks.START_mouse_clicked);
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.mouse_clicked = function(b, a) {
  return a.callReturn();
};
Blockly.Blocks.mouse_click_cancled = {init:function() {
  this.setColour("#3BBD70");
  this.appendDummyInput().appendField(new Blockly.FieldIcon("/img/assets/block_icon/start_icon_mouse.png", "*", "start")).appendField(Lang.Blocks.START_mouse_click_cancled);
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.mouse_click_cancled = function(b, a) {
  return a.callReturn();
};
Blockly.Blocks.when_object_click = {init:function() {
  this.setColour("#3BBD70");
  this.appendDummyInput().appendField(new Blockly.FieldIcon("/img/assets/block_icon/start_icon_mouse.png", "*", "start")).appendField(Lang.Blocks.START_when_object_click);
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.when_object_click = function(b, a) {
  return a.callReturn();
};
Blockly.Blocks.when_object_click_canceled = {init:function() {
  this.setColour("#3BBD70");
  this.appendDummyInput().appendField(new Blockly.FieldIcon("/img/assets/block_icon/start_icon_mouse.png", "*", "start")).appendField(Lang.Blocks.START_when_object_click_canceled);
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.when_object_click_canceled = function(b, a) {
  return a.callReturn();
};
Blockly.Blocks.when_some_key_click = {init:function() {
  this.setColour("#3BBD70");
  this.appendDummyInput().appendField(new Blockly.FieldIcon("/img/assets/block_icon/start_icon_keyboard.png", "*", "start")).appendField(Lang.Blocks.START_when_some_key_click);
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.when_some_key_click = function(b, a) {
  return a.callReturn();
};
Blockly.Blocks.when_message_cast = {init:function() {
  this.setColour("#3BBD70");
  this.appendDummyInput().appendField(new Blockly.FieldIcon("/img/assets/block_icon/start_icon_signal.png", "*", "start")).appendField(Lang.Blocks.START_when_message_cast_1).appendField(new Blockly.FieldDropdownDynamic("messages"), "VALUE").appendField(Lang.Blocks.START_when_message_cast_2);
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.when_message_cast = function(b, a) {
  return a.callReturn();
};
Blockly.Blocks.message_cast = {init:function() {
  this.setColour("#3BBD70");
  this.appendDummyInput().appendField(Lang.Blocks.START_message_cast_1).appendField(new Blockly.FieldDropdownDynamic("messages"), "VALUE").appendField(Lang.Blocks.START_message_cast_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_start.png", "*"));
  this.setInputsInline(!0);
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.message_cast = function(b, a) {
  var c = a.getField("VALUE", a), d = Entry.isExist(c, "id", Entry.variableContainer.messages_);
  if ("null" == c || !d) {
    throw Error("value can not be null or undefined");
  }
  Entry.container.mapEntityIncludeCloneOnScene(Entry.engine.raiseKeyEvent, ["when_message_cast", c]);
  return a.callReturn();
};
Blockly.Blocks.add_message = {init:function() {
  this.setColour("#3BBD70");
  this.appendDummyInput().appendField(Lang.Blocks.START_add_message).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_start.png", "*"));
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.add_massage = function(b, a) {
  return a.callReturn();
};
Blockly.Blocks.message_cast_wait = {init:function() {
  this.setColour("#3BBD70");
  this.appendDummyInput().appendField(Lang.Blocks.START_message_send_wait_1).appendField(new Blockly.FieldDropdownDynamic("messages"), "VALUE").appendField(Lang.Blocks.START_message_send_wait_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_start.png", "*"));
  this.setInputsInline(!0);
  this.setNextStatement(!0);
  this.setPreviousStatement(!0);
  this.setTooltip("");
}};
Entry.block.message_cast_wait = function(b, a) {
  if (a.runningScript) {
    if (a.runningScript.length) {
      return Entry.engine.computeFunction(a), a;
    }
    delete a.runningScript;
    return a.callReturn();
  }
  var c = a.getField("VALUE", a), d = Entry.isExist(c, "id", Entry.variableContainer.messages_);
  if ("null" == c || !d) {
    throw Error("value can not be null or undefined");
  }
  var e = [];
  Entry.container.mapEntityIncludeCloneOnScene(function(a, b) {
    for (var c = b[0], d = b[1], n = a.parent.script.childNodes, l = 0;l < n.length;l++) {
      var m = n[l], k = Entry.Xml.getField("VALUE", m);
      Entry.Xml.isTypeOf(c, m) && k == d && (k = new Entry.Script(a), k.init(m), e.push(k));
    }
  }, ["when_message_cast", c]);
  a.runningScript = e;
  return a;
};
var colour = "#FFCA36";
Blockly.Blocks.text = {init:function() {
  this.setColour("#FFD974");
  this.appendDummyInput().appendField(new Blockly.FieldTextInput(Lang.Blocks.TEXT_text), "NAME");
  this.setOutput(!0, "String");
  this.setInputsInline(!0);
}};
Entry.block.text = function(b, a) {
  return a.getField("NAME");
};
Blockly.Blocks.text_write = {init:function() {
  this.setColour(colour);
  this.appendDummyInput().appendField(Lang.Blocks.TEXT_text_write_1);
  this.appendValueInput("VALUE").setCheck(["String", "Number"]);
  this.appendDummyInput().appendField(Lang.Blocks.TEXT_text_write_2);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.text_write = function(b, a) {
  var c = a.getStringValue("VALUE", a), c = Entry.convertToRoundedDecimals(c, 3);
  b.setText(c);
  return a.callReturn();
};
Blockly.Blocks.text_append = {init:function() {
  this.setColour(colour);
  this.appendDummyInput().appendField(Lang.Blocks.TEXT_text_append_1);
  this.appendValueInput("VALUE").setCheck(["String", "Number"]);
  this.appendDummyInput().appendField(Lang.Blocks.TEXT_text_append_2);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.text_append = function(b, a) {
  var c = a.getStringValue("VALUE", a);
  b.setText(Entry.convertToRoundedDecimals(b.getText(), 3) + Entry.convertToRoundedDecimals(c, 3));
  return a.callReturn();
};
Blockly.Blocks.text_prepend = {init:function() {
  this.setColour(colour);
  this.appendDummyInput().appendField(Lang.Blocks.TEXT_text_prepend_1);
  this.appendValueInput("VALUE").setCheck(["String", "Number"]);
  this.appendDummyInput().appendField(Lang.Blocks.TEXT_text_prepend_2);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.text_prepend = function(b, a) {
  var c = a.getStringValue("VALUE", a);
  b.setText(Entry.convertToRoundedDecimals(c, 3) + Entry.convertToRoundedDecimals(b.getText(), 3));
  return a.callReturn();
};
Blockly.Blocks.text_flush = {init:function() {
  this.setColour(colour);
  this.appendDummyInput().appendField(Lang.Blocks.TEXT_text_flush);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.text_flush = function(b, a) {
  b.setText("");
  return a.callReturn();
};
Blockly.Blocks.change_variable = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_change_variable_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("variables"), "VARIABLE");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_change_variable_2);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_change_variable_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_variable.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.change_variable = function(b, a) {
  var c = a.getField("VARIABLE", a), d = a.getNumberValue("VALUE", a), e = 0, d = Entry.parseNumber(d);
  if (0 == d && "boolean" == typeof d) {
    throw Error("Type is not correct");
  }
  c = Entry.variableContainer.getVariable(c, b);
  e = Entry.getMaxFloatPoint([d, c.getValue()]);
  c.setValue((d + c.getValue()).toFixed(e));
  return a.callReturn();
};
Blockly.Blocks.set_variable = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_set_variable_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("variables"), "VARIABLE");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_set_variable_2);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_set_variable_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_variable.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.set_variable = function(b, a) {
  var c = a.getField("VARIABLE", a), d = a.getValue("VALUE", a);
  Entry.variableContainer.getVariable(c, b).setValue(d);
  return a.callReturn();
};
Blockly.Blocks.show_variable = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_show_variable_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("variables"), "VARIABLE").appendField(Lang.Blocks.VARIABLE_show_variable_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_variable.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.show_variable = function(b, a) {
  var c = a.getField("VARIABLE", a), c = Entry.variableContainer.getVariable(c, b);
  c.setVisible(!0);
  c.updateView();
  return a.callReturn();
};
Blockly.Blocks.hide_variable = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_hide_variable_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("variables"), "VARIABLE").appendField(Lang.Blocks.VARIABLE_hide_variable_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_variable.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.hide_variable = function(b, a) {
  var c = a.getField("VARIABLE", a);
  Entry.variableContainer.getVariable(c, b).setVisible(!1);
  return a.callReturn();
};
Blockly.Blocks.get_y = {init:function() {
  this.setColour(230);
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_get_y).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_variable.png", "*"));
  this.setOutput(!0, "Number");
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Blockly.Blocks.get_variable = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_get_variable_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("variables"), "VARIABLE").appendField(Lang.Blocks.VARIABLE_get_variable_2);
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
}};
Entry.block.get_variable = function(b, a) {
  var c = a.getField("VARIABLE", a);
  return Entry.variableContainer.getVariable(c, b).getValue();
};
Blockly.Blocks.ask_and_wait = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_ask_and_wait_1);
  this.appendValueInput("VALUE").setCheck(["String", "Number", null]);
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_ask_and_wait_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_variable.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
}};
Entry.block.ask_and_wait = function(b, a) {
  var c = Entry.container.inputValue, d = Entry.stage.inputField, e = a.getValue("VALUE", a);
  if (!e) {
    throw Error("message can not be empty");
  }
  if (c.sprite == b && d && !d._isHidden) {
    return a;
  }
  if (c.sprite != b && a.isInit || c.value && c.sprite == b && d._isHidden && a.isInit) {
    return b.dialog && b.dialog.remove(), delete a.isInit, a.callReturn();
  }
  e = Entry.convertToRoundedDecimals(e, 3);
  new Entry.Dialog(b, e, "speak");
  Entry.stage.showInputField();
  c.script = a;
  c.sprite = b;
  c.value = "";
  a.isInit = !0;
  return a;
};
Blockly.Blocks.get_canvas_input_value = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_get_canvas_input_value);
  this.appendDummyInput().appendField(" ");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
}};
Entry.block.get_canvas_input_value = function(b, a) {
  return Entry.container.getInputValue();
};
Blockly.Blocks.combine_something = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_combine_something_1);
  this.appendValueInput("VALUE1").setCheck(["String", "Number", null]);
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_combine_something_2);
  this.appendValueInput("VALUE2").setCheck(["String", "Number", null]);
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_combine_something_3);
  this.setInputsInline(!0);
  this.setOutput(!0, "String");
}};
Entry.block.combine_something = function(b, a) {
  var c = a.getStringValue("VALUE1", a), d = a.getStringValue("VALUE2", a);
  return c + d;
};
Blockly.Blocks.add_value_to_list = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_add_value_to_list_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_add_value_to_list_2);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("lists"), "LIST");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_add_value_to_list_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_variable.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.add_value_to_list = function(b, a) {
  var c = a.getField("LIST", a), d = a.getValue("VALUE", a), c = Entry.variableContainer.getList(c, b);
  c.array_ || (c.array_ = []);
  c.array_.push({data:d});
  c.updateView();
  return a.callReturn();
};
Blockly.Blocks.remove_value_from_list = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_remove_value_from_list_1);
  this.appendValueInput("VALUE").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_remove_value_from_list_2);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("lists"), "LIST");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_remove_value_from_list_3).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_variable.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.remove_value_from_list = function(b, a) {
  var c = a.getField("LIST", a), d = a.getValue("VALUE", a), c = Entry.variableContainer.getList(c, b);
  if (!c.array_ || isNaN(d) || d > c.array_.length) {
    throw Error("can not remove value from array");
  }
  c.array_.splice(d - 1, 1);
  c.updateView();
  return a.callReturn();
};
Blockly.Blocks.insert_value_to_list = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_insert_value_to_list_1);
  this.appendValueInput("DATA").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_insert_value_to_list_2);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("lists"), "LIST");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_insert_value_to_list_3);
  this.appendValueInput("INDEX").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_insert_value_to_list_4).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_variable.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.insert_value_to_list = function(b, a) {
  var c = a.getField("LIST", a), d = a.getValue("DATA", a), e = a.getValue("INDEX", a), c = Entry.variableContainer.getList(c, b);
  if (!c.array_ || isNaN(e) || 0 == e || e > c.array_.length + 1) {
    throw Error("can not insert value to array");
  }
  c.array_.splice(e - 1, 0, {data:d});
  c.updateView();
  return a.callReturn();
};
Blockly.Blocks.change_value_list_index = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_change_value_list_index_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("lists"), "LIST");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_change_value_list_index_2);
  this.appendValueInput("INDEX").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_change_value_list_index_3);
  this.appendValueInput("DATA").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_change_value_list_index_4).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_variable.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.change_value_list_index = function(b, a) {
  var c = a.getField("LIST", a), d = a.getValue("DATA", a), e = a.getValue("INDEX", a), c = Entry.variableContainer.getList(c, b);
  if (!c.array_ || isNaN(e) || e > c.array_.length) {
    throw Error("can not insert value to array");
  }
  c.array_[e - 1].data = d;
  c.updateView();
  return a.callReturn();
};
Blockly.Blocks.value_of_index_from_list = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_value_of_index_from_list_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("lists"), "LIST");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_value_of_index_from_list_2);
  this.appendValueInput("INDEX").setCheck(["Number", "String"]);
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_value_of_index_from_list_3);
  this.setOutput(!0, "String");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.value_of_index_from_list = function(b, a) {
  var c = a.getField("LIST", a), d = a.getValue("INDEX", a), c = Entry.variableContainer.getList(c, b), d = Entry.getListRealIndex(d, c);
  if (!c.array_ || isNaN(d) || d > c.array_.length) {
    throw Error("can not insert value to array");
  }
  return c.array_[d - 1].data;
};
Blockly.Blocks.length_of_list = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_length_of_list_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("lists"), "LIST");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_length_of_list_2);
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.length_of_list = function(b, a) {
  var c = a.getField("LIST", a);
  return Entry.variableContainer.getList(c).array_.length;
};
Blockly.Blocks.show_list = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_show_list_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("lists"), "LIST").appendField(Lang.Blocks.VARIABLE_show_list_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_variable.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.show_list = function(b, a) {
  var c = a.getField("LIST", a);
  Entry.variableContainer.getList(c).setVisible(!0);
  return a.callReturn();
};
Blockly.Blocks.hide_list = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField(Lang.Blocks.VARIABLE_hide_list_1);
  this.appendDummyInput().appendField(new Blockly.FieldDropdownDynamic("lists"), "LIST").appendField(Lang.Blocks.VARIABLE_hide_list_2).appendField(new Blockly.FieldIcon("/img/assets/block_icon/entry_icon_variable.png", "*"));
  this.setInputsInline(!0);
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip("");
}};
Entry.block.hide_list = function(b, a) {
  var c = a.getField("LIST", a);
  Entry.variableContainer.getList(c).setVisible(!1);
  return a.callReturn();
};
Blockly.Blocks.options_for_list = {init:function() {
  this.setColour("#E457DC");
  this.appendDummyInput().appendField("");
  this.appendDummyInput("VALUE").appendField(new Blockly.FieldDropdown([[Lang.Blocks.VARIABLE_list_option_first, "FIRST"], [Lang.Blocks.VARIABLE_list_option_last, "LAST"], [Lang.Blocks.VARIABLE_list_option_random, "RANDOM"]]), "OPERATOR");
  this.appendDummyInput().appendField(" ");
  this.setOutput(!0, "Number");
  this.setInputsInline(!0);
  this.setTooltip("");
}};
Entry.block.options_for_list = function(b, a) {
  return a.getField("OPERATOR", a);
};
Entry.Model = function(b) {
  var a = Entry.Model;
  a.generateSchema(b);
  a.generateObserve(b);
  Object.seal(b);
  return b;
};
(function(b) {
  function a(a) {
    this.observers.push(a);
  }
  function c(a) {
    a = this.observers.indexOf(a);
    -1 < a && this.observers.splice(a, 1);
  }
  function d(a, b) {
    var c = this;
    c.observers.map(function(d) {
      d.update([{name:a, object:c, oldValue:b}]);
    });
  }
  b.generateSchema = function(a) {
    var b = a.schema;
    a.data = {};
    for (var c in b) {
      (function(c) {
        a.data[c] = "object" == typeof b[c] ? $.extend(!0, {}, b[c]) : b[c];
        Object.defineProperty(a, c, {get:function() {
          return a.data[c];
        }, set:function(b) {
          a.notify(c, a.data[c]);
          a.data[c] = b;
        }});
      })(c);
    }
  };
  b.generateObserve = function(b) {
    b.observers = [];
    b.observe = a;
    b.unobserve = c;
    b.notify = d;
  };
})(Entry.Model);
Entry.db = {data:{}, typeMap:{}};
(function(b) {
  b.add = function(a) {
    this.data[a.id] = a;
    var b = a.type;
    void 0 === this.typeMap[b] && (this.typeMap[b] = {});
    this.typeMap[b][a.id] = a;
  };
  b.has = function(a) {
    return this.data.hasOwnProperty(a);
  };
  b.remove = function(a) {
    this.has(a) && (delete this.typeMap[this.data[a].type][a], delete this.data[a]);
  };
  b.get = function(a) {
    return this.data[a];
  };
  b.find = function() {
  };
  b.clear = function() {
    this.data = {};
    this.typeMap = {};
  };
})(Entry.db);
Entry.Dom = function(b, a) {
  var c = /<(\w+)>/, d;
  d = b instanceof HTMLElement ? $(b) : b instanceof jQuery ? b : c.test(b) ? $(b) : $("<" + b + "></" + b + ">");
  if (void 0 === a) {
    return d;
  }
  a.id && d.attr("id", a.id);
  a.class && d.addClass(a.class);
  a.classes && a.classes.map(function(a) {
    d.addClass(a);
  });
  a.parent && a.parent.append(d);
  return d;
};
Entry.init = function() {
};
Entry.loadProject = function(b) {
};
Entry.Script = function() {
  Entry.Model.generateObserve(this);
  this.scripts = [];
};
(function(b) {
  b.insert = function() {
  };
  b.move = function() {
  };
  b.remove = function() {
  };
  b.fromJSON = function(a) {
    "string" == typeof a && (a = JSON.parse(a));
    a instanceof Array && (this.scripts = a);
  };
  b.toJSON = function() {
    return JSON.stringify(this.scripts);
  };
  b.fromXml = function() {
  };
  b.toXml = function() {
  };
  b.clear = function() {
  };
})(Entry.Script.prototype);
Entry.STATIC = {OBJECT:0, ENTITY:1, SPRITE:2, SOUND:3, VARIABLE:4, FUNCTION:5, SCENE:6, MESSAGE:7};
Entry.Entity = function() {
  Entry.Model(this);
};
Entry.Entity.prototype.schema = {id:0, type:Entry.STATIC.ENTITY, rotation:0, direction:0, x:0, y:0, regX:0, regY:0, scaleX:0, scaleY:0, width:0, height:0, imageIndex:0, visible:0, colour:0, font:0, bgColor:0, textAlign:0, lineBreak:!1, underLine:!1, strike:!1};
Entry.Function = function() {
  Entry.Model(this, {id:0, type:Entry.STATIC.FUNCTION, block:0, content:0, fieldNames:0});
};
Entry.Message = function() {
  Entry.Model(this, {id:0, type:Entry.STATIC.MESSAGE, name:0});
};
Entry.Object = function() {
  Entry.Model(this, {id:0, type:Entry.STATIC.OBJECT, objectType:0, name:0, order:0, scene:0, active:!0, lock:!1, rotateMethod:0, entity:0, script:0, sprite:0, selectedPicture:0});
};
Entry.Scene = function() {
  Entry.Model(this, {id:0, type:Entry.STATIC.SCENE, name:0});
};
Entry.Sound = function() {
  Entry.Model(this, {id:0, type:Entry.STATIC.SOUND, name:0, filename:0, ext:0, duration:0});
};
Entry.Sprite = function() {
  Entry.Model(this, {id:0, type:Entry.STATIC.SPRITE, name:0, pictures:0, sounds:0});
};
Entry.Variable = function() {
  Entry.Model(this, {id:0, type:Entry.STATIC.VARIABLE, variableType:0, name:0, value:0, minValue:0, maxValue:0, visible:!0, x:0, y:0, width:0, height:0, isCloud:!1, object:null, array:0});
};

