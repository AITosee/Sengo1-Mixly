//import { JSFuncs, Boards } from 'mixly'
import * as Blockly from 'blockly/core'

export const Sengo1Begin = function (_, generator) {
    generator = generator ?? Blockly.Arduino

    var dropdown_mode_obj = this.getFieldValue('mode_obj')
    var dropdown_addr_obj = this.getFieldValue('addr_obj')

    generator.definitions_['include_Sentry'] = '#include <Sentry.h>'
    generator.definitions_[
        `var_declare_Sengo1`
    ] = `Sengo1 sengo1(${dropdown_addr_obj});`

    if (dropdown_mode_obj == 'Wire') {
        generator.definitions_['include_Wire'] = '#include <Wire.h>'
        generator.setups_['setup_Wire'] = 'Wire.begin();\n'
    }

    var code = `while (SENTRY_OK != sengo1.begin(&${dropdown_mode_obj})) {yield();}\n`

    return code
}

export const Sengo1SetDefault = function (_, generator) {
    generator = generator ?? Blockly.Arduino

    return `sengo1.SensorSetDefault();\n`
}

export const Sengo1VisionSetStatus = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_VisionStatus = this.getFieldValue('VisionStatus')
    var dropdown_vision_obj = this.getFieldValue('vision_obj')

    return `sengo1.Vision${dropdown_VisionStatus}(${dropdown_vision_obj});\n`
}

export const Sengo1VisionSetParamNum = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')
    var input_num = this.getFieldValue('num')

    return `sengo1.SetParamNum(${dropdown_vision_obj},${input_num});\n`
}

export const Sengo1VisionBlobSetParam = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')
    var input_index = 1
    var input_x = 0
    var input_y = 0
    var input_w =
        generator.valueToCode(this, 'w', generator.ORDER_ATOMIC)
    var input_h =
        generator.valueToCode(this, 'h', generator.ORDER_ATOMIC)
    var input_l = this.getFieldValue('lable')

    generator.definitions_['param_obj'] = 'sentry_object_t param;\n'

    var code = '\n'
    code += `param.x_value = ${input_x};\n`
    code += `param.y_value = ${input_y};\n`
    code += `param.width = ${input_w};\n`
    code += `param.height = ${input_h};\n`
    code += `param.label = ${input_l};\n`

    code += `sengo1.SetParam(${dropdown_vision_obj},&param,${input_index});\n`

    return code
}

export const Sengo1VisionColorSetParam = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')
    var input_index = 1
    var input_x =
        generator.valueToCode(this, 'x', generator.ORDER_ATOMIC)
    var input_y =
        generator.valueToCode(this, 'y', generator.ORDER_ATOMIC)
    var input_w =
        generator.valueToCode(this, 'w', generator.ORDER_ATOMIC)
    var input_h =
        generator.valueToCode(this, 'h', generator.ORDER_ATOMIC)

    generator.definitions_['param_obj'] = 'sentry_object_t param;\n'

    var code = '\n'
    code += `param.x_value = ${input_x};\n`
    code += `param.y_value = ${input_y};\n`
    code += `param.width = ${input_w};\n`
    code += `param.height = ${input_h};\n`
    code += `param.label = 0;\n`

    code += `sengo1.SetParam(${dropdown_vision_obj},&param,${input_index});\n`

    return code
}

export const Sengo1VisionFaceSetParam = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')
    var input_index = '1'

    var input_x = 0
    var input_y = 0
    var input_w = 0
    var input_h = 0

    var input_l = this.getFieldValue('lable')

    generator.definitions_['param_obj'] = 'sentry_object_t param;\n'

    var code = '\n'
    code += `param.x_value = ${input_x};\n`
    code += `param.y_value = ${input_y};\n`
    code += `param.width = ${input_w};\n`
    code += `param.height = ${input_h};\n`
    code += `param.label = ${input_l};\n`

    code += `sengo1.SetParam(${dropdown_vision_obj},&param,${input_index});\n`

    return code
}

export const Sengo1LedSetColor = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var color_dic = {
        '#000000': 'kLedClose',
        '#ff0000': 'kLedRed',
        '#00ff00': 'kLedGreen',
        '#ffff00': 'kLedYellow',
        '#0000ff': 'kLedBlue',
        '#ff00ff': 'kLedPurple',
        '#00ffff': 'kLedCyan',
        '#ffffff': 'kLedWhite',
    }

    var dropdown_led_color_obj1 =
        color_dic[this.getFieldValue('led_color_obj1')]
    var dropdown_led_color_obj2 =
        color_dic[this.getFieldValue('led_color_obj2')]

    var input_level =
        generator.valueToCode(this, 'level', generator.ORDER_ATOMIC) || '1'

    return `sengo1.LedSetColor(${dropdown_led_color_obj1},${dropdown_led_color_obj2},${input_level});\n`
}

export const Sengo1SetAWB = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_awb_obj = this.getFieldValue('awb_obj')

    return `sengo1.CameraSetAwb(${dropdown_awb_obj});\n`
}

export const Sengo1VisionGetStatus = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')

    var code = `sengo1.VisionGetStatus(${dropdown_vision_obj})`
    return [code, generator.ORDER_ATOMIC]
}

export const Sengo1VisionDetectedCount = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')

    var code = `sengo1.GetValue(${dropdown_vision_obj}, kStatus)`
    return [code, generator.ORDER_ATOMIC]
}

export const Sengo1GetQrValue = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var code = `String(sengo1.GetQrCodeValue())`
    return [code, generator.ORDER_ATOMIC]
}

export const Sengo1VisionObj = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')
    var dropdown_res_obj = this.getFieldValue('vision_res_obj')
    var input_index = '1'

    var code = `sengo1.GetValue(${dropdown_vision_obj},${dropdown_res_obj},${input_index})`
    return [code, generator.ORDER_ATOMIC]
}

export const Sengo1VisionObjColor = Sengo1VisionObj
export const Sengo1VisionObjLine = Sengo1VisionObj
export const Sengo1VisionObjQr = Sengo1VisionObj

export const Sengo1VisionColor = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')
    var dropdown_lable_obj = this.getFieldValue('vision_card_obj')
    var input_index = '1'

    var code = `(sengo1.GetValue(${dropdown_vision_obj},kLabel,${input_index})==${dropdown_lable_obj})`
    return [code, generator.ORDER_ATOMIC]
}

export const Sengo1VisionCardBlob = Sengo1VisionColor
export const Sengo1VisionBall = Sengo1VisionColor
export const Sengo1VisionCard = Sengo1VisionColor

// Sengo2
export const Sengo2Begin = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_mode_obj = this.getFieldValue('mode_obj')
    var dropdown_addr_obj = this.getFieldValue('addr_obj')

    generator.definitions_['include_Sengo2'] = '#include <Sengo2.h>'
    generator.definitions_[
        `var_declare_Sengo2`
    ] = `Sengo2 sengo2(${dropdown_addr_obj});`

    if (dropdown_mode_obj == 'Wire') {
        generator.definitions_['include_Wire'] = '#include <Wire.h>'
        generator.setups_['setup_Wire'] = 'Wire.begin();\n'
    }

    var code = `while (SENTRY_OK != sengo2.begin(&${dropdown_mode_obj})) {yield();}\n`

    return code
}

export const Sengo2SetDefault = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    return `sengo2.SensorSetDefault();\n`
}

export const Sengo2VisionSetStatus = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_VisionStatus = this.getFieldValue('VisionStatus')
    var dropdown_vision_obj = this.getFieldValue('vision_obj')

    return `sengo2.Vision${dropdown_VisionStatus}(${dropdown_vision_obj});\n`
}

export const Sengo2VisionSetParamNum = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')
    var input_num = this.getFieldValue('num')

    return `sengo2.SetParamNum(${dropdown_vision_obj},${input_num});\n`
}

export const Sengo2VisionSetParam = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')
    var input_index = this.getFieldValue('index') || '1'
    var input_x = this.getFieldValue('x')
    var input_y = this.getFieldValue('y')
    var input_w = this.getFieldValue('w')
    var input_h = this.getFieldValue('h')
    var input_l = this.getFieldValue('lable')

    generator.definitions_['param_obj'] = 'sengo2_object_t param;\n'

    var code = '\n'
    if (input_x != null) code += `param.x_value = ${input_x};\n`
    if (input_y != null) code += `param.y_value = ${input_y};\n`
    if (input_w != null) code += `param.width = ${input_w};\n`
    if (input_h != null) code += `param.height = ${input_h};\n`
    if (input_l != null) code += `param.label = ${input_l};\n`

    code += `sengo2.SetParam(${dropdown_vision_obj},&param,${input_index});\n`

    return code
}

export const Sengo2VisionBlobSetParam = Sengo2VisionSetParam
export const Sengo2VisionColorSetParam = Sengo2VisionSetParam

export const Sengo2LedSetColor = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var color_dic = {
        '#000000': 'kLedClose',
        '#ff0000': 'kLedRed',
        '#00ff00': 'kLedGreen',
        '#ffff00': 'kLedYellow',
        '#0000ff': 'kLedBlue',
        '#ff00ff': 'kLedPurple',
        '#00ffff': 'kLedCyan',
        '#ffffff': 'kLedWhite',
    }

    var dropdown_led_color_obj1 =
        color_dic[this.getFieldValue('led_color_obj1')]
    var dropdown_led_color_obj2 =
        color_dic[this.getFieldValue('led_color_obj2')]

    var input_level =
        generator.valueToCode(this, 'level', generator.ORDER_ATOMIC) || '1'

    return `sengo2.LedSetColor(${dropdown_led_color_obj1},${dropdown_led_color_obj2},${input_level});\n`
}

export const Sengo2SetAWB = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_awb_obj = this.getFieldValue('awb_obj')

    return `sengo2.CameraSetAwb(${dropdown_awb_obj});\n`
}

export const Sengo2VisionDetectedCount = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')

    var code = `sengo2.GetValue(${dropdown_vision_obj}, kStatus)`
    return [code, generator.ORDER_ATOMIC]
}

export const Sengo2GetQrValue = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var code = `String(sengo2.GetQrCodeValue())`
    return [code, generator.ORDER_ATOMIC]
}

export const Sengo2VisionObj = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')
    var dropdown_res_obj = this.getFieldValue('vision_res_obj')
    var input_index =
        generator.valueToCode(this, 'index', generator.ORDER_ATOMIC) || '1'

    var code = `sengo2.GetValue(${dropdown_vision_obj},${dropdown_res_obj},${input_index})`
    return [code, generator.ORDER_ATOMIC]
}

export const Sengo2VisionObjColor = Sengo2VisionObj
export const Sengo2VisionObjLine = Sengo2VisionObj
export const Sengo2VisionCustom = Sengo2VisionObj
export const Sengo2VisionObjQr = Sengo2VisionObj

export const Sengo2VisionColor = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')
    var dropdown_lable_obj = this.getFieldValue('vision_card_obj')
    var input_index =
        generator.valueToCode(this, 'index', generator.ORDER_ATOMIC) || '1'

    var code = `(sengo2.GetValue(${dropdown_vision_obj},kLabel,${input_index})==${dropdown_lable_obj})`
    return [code, generator.ORDER_ATOMIC]
}

export const Sengo2VisionCard20Classes = Sengo2VisionColor
export const Sengo2VisionCardBlob = Sengo2VisionColor
export const Sengo2VisionCard = Sengo2VisionColor
