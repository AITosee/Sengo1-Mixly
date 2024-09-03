import * as Blockly from 'blockly/core'
import { Profile } from 'mixly'

Profile = Profile ?? window.profile

export const white_balance_objs = function () {
    return [
        [Blockly.Msg.SENGO_AUTO, 'kAutoWhiteBalance'],
        [Blockly.Msg.SENGO_LOCK_AWB, 'kWhiteLight'],
        [Blockly.Msg.SENGO_WHITE_LIGHT, 'kYellowLight'],
        [Blockly.Msg.SENGO_YELLOW_LIGHT, 'kWhiteBalanceCalibrating'],
    ]
}

export const vision_res_objs = function () {
    return [
        [Blockly.Msg.SENGO_STATE_VALUE_X, 'kXValue'],
        [Blockly.Msg.SENGO_STATE_VALUE_Y, 'kYValue'],
        [Blockly.Msg.SENGO_STATE_VALUE_WIDTH, 'kWidthValue'],
        [Blockly.Msg.SENGO_STATE_VALUE_HEIGHT, 'kHeightValue'],
        [Blockly.Msg.SENGO_STATE_VALUE_LABEL, 'kLabel'],
    ]
}

export const vision_custom_objs = function () {
    return [
        [Blockly.Msg.SENGO_VISION_DATA + '1', 'kXValue'],
        [Blockly.Msg.SENGO_VISION_DATA + '2', 'kYValue'],
        [Blockly.Msg.SENGO_VISION_DATA + '3', 'kWidthValue'],
        [Blockly.Msg.SENGO_VISION_DATA + '4', 'kHeightValue'],
        [Blockly.Msg.SENGO_VISION_DATA + '5', 'kLabel'],
    ]
}

export const vision_qr_objs = function () {
    return [
        [Blockly.Msg.SENGO_STATE_VALUE_X, 'kXValue'],
        [Blockly.Msg.SENGO_STATE_VALUE_Y, 'kYValue'],
        [Blockly.Msg.SENGO_STATE_VALUE_WIDTH, 'kWidthValue'],
        [Blockly.Msg.SENGO_STATE_VALUE_HEIGHT, 'kHeightValue'],
    ]
}

export const vision_color_objs = function () {
    return [
        [Blockly.Msg.SENGO_STATE_VALUE_LABEL, 'kLabel'],
        [Blockly.Msg.SENGO_STATE_VALUE_R, 'kRValue'],
        [Blockly.Msg.SENGO_STATE_VALUE_G, 'kGValue'],
        [Blockly.Msg.SENGO_STATE_VALUE_B, 'kBValue'],
    ]
}
export const vision_line_objs = function () {
    return [
        [Blockly.Msg.SENGO_STATE_LINE_EX, 'kXValue'],
        [Blockly.Msg.SENGO_STATE_LINE_EY, 'kYValue'],
        [Blockly.Msg.SENGO_STATE_LINE_SX, 'kWidthValue'],
        [Blockly.Msg.SENGO_STATE_LINE_SY, 'kHeightValue'],
        [Blockly.Msg.SENGO_STATE_LINE_A, 'kLabel'],
    ]
}

export const sentry1_vision_blod_objs = function () {
    return [
        [Blockly.Msg.SENGO_COLOR_BLACK, 'Sengo1::kColorBlack'],
        [Blockly.Msg.SENGO_COLOR_WHITE, 'Sengo1::kColorWhite'],
        [Blockly.Msg.SENGO_COLOR_RED, 'Sengo1::kColorRed'],
        [Blockly.Msg.SENGO_COLOR_GREEN, 'Sengo1::kColorGreen'],
        [Blockly.Msg.SENGO_COLOR_BLUE, 'Sengo1::kColorBlue'],
        [Blockly.Msg.SENGO_COLOR_YELLOW, 'Sengo1::kColorYellow'],
    ]
}

export const sentry1_vision_objs = function () {
    return [
        [Blockly.Msg.SENGO_VISION_VISIONCOLOR, 'Sengo1::kVisionColor'],
        [Blockly.Msg.SENGO_VISION_VISIONBLOB, 'Sengo1::kVisionBlob'],
        [Blockly.Msg.SENGO_VISION_VISIONBALL, 'Sengo1::kVisionBall'],
        [Blockly.Msg.SENGO_VISION_VISIONLINE, 'Sengo1::kVisionLine'],
        [Blockly.Msg.SENGO_VISION_VISIONCARD, 'Sengo1::kVisionCard'],
        [Blockly.Msg.SENGO_VISION_VISIONBODY, 'Sengo1::kVisionBody'],
        [
            Blockly.Msg.SENGO_VISION_VISIONQRCODE +
                Blockly.Msg.SENGO_VISION_ENTERPRISE,
            'Sengo1::kVisionQrCode',
        ],
    ]
}
export const sentry1_vision_prama_support_objs = function () {
    return [
        [Blockly.Msg.SENGO_VISION_VISIONCOLOR, 'Sengo1::kVisionColor'],
        [Blockly.Msg.SENGO_VISION_VISIONBLOB, 'Sengo1::kVisionBlob'],
    ]
}
export const sentry1_vision_card_objs = function () {
    return [
        [Blockly.Msg.SENGO_CARD_FORWARD, 'Sengo1::kCardForward'],
        [Blockly.Msg.SENGO_CARD_LEFT, 'Sengo1::kCardLeft'],
        [Blockly.Msg.SENGO_CARD_RIGHT, 'Sengo1::kCardRight'],
        [Blockly.Msg.SENGO_CARD_TURN_AROUND, 'Sengo1::kCardTurnAround'],
        [Blockly.Msg.SENGO_CARD_PARK, 'Sengo1::kCardPark'],
    ]
}

export const sentry1_vision_ball_objs = function () {
    return [
        [Blockly.Msg.SENGO_BALLTABLETENNIS, 'Sengo1::kBallTableTennis'],
        [Blockly.Msg.SENGO_BALLTENNIS, 'Sengo1::kBallTennis'],
    ]
}

export const sentry2_vision_blod_objs = function () {
    return [
        [Blockly.Msg.SENGO_COLOR_BLACK, 'Sengo2::kColorBlack'],
        [Blockly.Msg.SENGO_COLOR_WHITE, 'Sengo2::kColorWhite'],
        [Blockly.Msg.SENGO_COLOR_RED, 'Sengo2::kColorRed'],
        [Blockly.Msg.SENGO_COLOR_GREEN, 'Sengo2::kColorGreen'],
        [Blockly.Msg.SENGO_COLOR_BLUE, 'Sengo2::kColorBlue'],
        [Blockly.Msg.SENGO_COLOR_YELLOW, 'Sengo2::kColorYellow'],
    ]
}
export const sentry2_vision_objs = function () {
    return [
        [Blockly.Msg.SENGO_VISION_VISIONCOLOR, 'Sengo2::kVisionColor'],
        [Blockly.Msg.SENGO_VISION_VISIONBLOB, 'Sengo2::kVisionBlob'],
        [Blockly.Msg.SENGO_VISION_VISIONAPRILTAG, 'Sengo2::kVisionAprilTag'],
        [Blockly.Msg.SENGO_VISION_VISIONLINE, 'Sengo2::kVisionLine'],
        [Blockly.Msg.SENGO_VISION_VISIONLEARNING, 'Sengo2::kVisionLearning'],
        [Blockly.Msg.SENGO_VISION_VISIONCARD, 'Sengo2::kVisionCard'],
        [Blockly.Msg.SENGO_VISION_VISIONFACE, 'Sengo2::kVisionFace'],
        [Blockly.Msg.SENGO_VISION_VISION20CLASSES, 'Sengo2::kVision20Classes'],
        [Blockly.Msg.SENGO_VISION_VISIONQRCODE, 'Sengo2::kVisionQrCode'],
        [
            Blockly.Msg.SENGO_VISION_VISIONMOTIONDETECT,
            'Sengo2::kVisionMotionDetect',
        ],
        [Blockly.Msg.SENGO_VISION_VISIONCUSTOM, 'Sengo2::kVisionCustom'],
    ]
}

export const sentry2_vision_param_objs = function () {
    return [
        [Blockly.Msg.SENGO_VISION_VISIONCOLOR, 'Sengo2::kVisionColor'],
        [Blockly.Msg.SENGO_VISION_VISIONBLOB, 'Sengo2::kVisionBlob'],
        [Blockly.Msg.SENGO_VISION_VISIONCUSTOM, 'Sengo2::kVisionCustom'],
    ]
}
export const sentry2_vision_custom = function () {
    return [
        [Blockly.Msg.SENGO_VISION_VISIONCUSTOM, 'Sengo2::kVisionCustom'],
        [Blockly.Msg.SENGO_VISION_VISIONCOLOR, 'Sengo2::kVisionColor'],
        [Blockly.Msg.SENGO_VISION_VISIONBLOB, 'Sengo2::kVisionBlob'],
        [Blockly.Msg.SENGO_VISION_VISIONLEARNING, 'Sengo2::kVisionLearning'],
        [Blockly.Msg.SENGO_VISION_VISIONFACE, 'Sengo2::kVisionFace'],
    ]
}
export const sentry2_vision_20class_objs = function () {
    return [
        [Blockly.Msg.SENGO_CLASS20_AIRPLANE, 'Sengo2::kAirplane'],
        [Blockly.Msg.SENGO_CLASS20_BICYCLE, 'Sengo2::kBicycle'],
        [Blockly.Msg.SENGO_CLASS20_BIRD, 'Sengo2::kBird'],
        [Blockly.Msg.SENGO_CLASS20_BOAT, 'Sengo2::kBoat'],
        [Blockly.Msg.SENGO_CLASS20_BOTTLE, 'Sengo2::kBottle'],
        [Blockly.Msg.SENGO_CLASS20_BUS, 'Sengo2::kBus'],
        [Blockly.Msg.SENGO_CLASS20_CAR, 'Sengo2::kCar'],
        [Blockly.Msg.SENGO_CLASS20_CAT, 'Sengo2::kCat'],
        [Blockly.Msg.SENGO_CLASS20_CHAIR, 'Sengo2::kChair'],
        [Blockly.Msg.SENGO_CLASS20_COW, 'Sengo2::kCow'],
        [Blockly.Msg.SENGO_CLASS20_TABLE, 'Sengo2::kTable'],
        [Blockly.Msg.SENGO_CLASS20_DOG, 'Sengo2::kDog'],
        [Blockly.Msg.SENGO_CLASS20_HORSE, 'Sengo2::kHorse'],
        [Blockly.Msg.SENGO_CLASS20_MOTORBIKE, 'Sengo2::kMotorBike'],
        [Blockly.Msg.SENGO_CLASS20_PERSON, 'Sengo2::kPerson'],
        [Blockly.Msg.SENGO_CLASS20_PLANT, 'Sengo2::kPlant'],
        [Blockly.Msg.SENGO_CLASS20_SHEEP, 'Sengo2::kSheep'],
        [Blockly.Msg.SENGO_CLASS20_SOFA, 'Sengo2::kSofa'],
        [Blockly.Msg.SENGO_CLASS20_TRAIN, 'Sengo2::kTrain'],
        [Blockly.Msg.SENGO_CLASS20_MONITOR, 'Sengo2::kMonitor'],
    ]
}

export const sentry2_vision_card_objs = function () {
    return [
        [Blockly.Msg.SENGO_CARD_FORWARD, 'Sengo2::kCardForward'],
        [Blockly.Msg.SENGO_CARD_LEFT, 'Sengo2::kCardLeft'],
        [Blockly.Msg.SENGO_CARD_RIGHT, 'Sengo2::kCardRight'],
        [Blockly.Msg.SENGO_CARD_TURN_AROUND, 'Sengo2::kCardTurnAround'],
        [Blockly.Msg.SENGO_CARD_PARK, 'Sengo2::kCardPark'],
        [Blockly.Msg.SENGO_CARD_GREEN_LIGHT, 'Sengo2::kCardGreenLight'],
        [Blockly.Msg.SENGO_CARD_RED_LIGHT, 'Sengo2::kCardRedLight'],
        [Blockly.Msg.SENGO_CARD_SPEED_40, 'Sengo2::kCardSpeed40'],
        [Blockly.Msg.SENGO_CARD_SPEED_60, 'Sengo2::kCardSpeed60'],
        [Blockly.Msg.SENGO_CARD_SPEED_80, 'Sengo2::kCardSpeed80'],
        [Blockly.Msg.SENGO_CARD_CHECK, 'Sengo2::kCardCheck'],
        [Blockly.Msg.SENGO_CARD_CROSS, 'Sengo2::kCardCross'],
        [Blockly.Msg.SENGO_CARD_CIRCLE, 'Sengo2::kCardCircle'],
        [Blockly.Msg.SENGO_CARD_SQUARE, 'Sengo2::kCardSquare'],
        [Blockly.Msg.SENGO_CARD_TRIANGLE, 'Sengo2::kCardTriangle'],
        [Blockly.Msg.SENGO_CARD_PLUS, 'Sengo2::kCardPlus'],
        [Blockly.Msg.SENGO_CARD_MINUS, 'Sengo2::kCardMinus'],
        [Blockly.Msg.SENGO_CARD_DIVIDE, 'Sengo2::kCardDivide'],
        [Blockly.Msg.SENGO_CARD_EQUAL, 'Sengo2::kCardEqual'],
        [Blockly.Msg.SENGO_CARD_1, 'Sengo2::kCardOne'],
        [Blockly.Msg.SENGO_CARD_2, 'Sengo2::kCardTwo'],
        [Blockly.Msg.SENGO_CARD_3, 'Sengo2::kCardThree'],
        [Blockly.Msg.SENGO_CARD_4, 'Sengo2::kCardFour'],
        [Blockly.Msg.SENGO_CARD_5, 'Sengo2::kCardFive'],
        [Blockly.Msg.SENGO_CARD_6, 'Sengo2::kCardSix'],
        [Blockly.Msg.SENGO_CARD_7, 'Sengo2::kCardSeven'],
        [Blockly.Msg.SENGO_CARD_8, 'Sengo2::kCardEight'],
        [Blockly.Msg.SENGO_CARD_9, 'Sengo2::kCardNine'],
        [Blockly.Msg.SENGO_CARD_0, 'Sengo2::kCardZero'],
    ]
}

export const vision_obj_card_dict = function () {
    return {
        'Sengo1::kVisionBlob': sentry1_vision_blod_objs(),
        'Sengo1::kVisionCard': sentry1_vision_card_objs(),
        'Sengo1::kVisionBall': sentry1_vision_ball_objs(),
        'Sengo2::kVisionBlob': sentry2_vision_blod_objs(),
        'Sengo2::kVisionCard': sentry2_vision_card_objs(),
        'Sengo2::kVision20Classes': sentry2_vision_20class_objs(),
    }
}

export const Sengo1Begin = {
    init: function () {
        var mode_objs = [['I2C', 'Wire']].concat(Profile.default.serial_select)
        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO_BEGIN +
                    Blockly.Msg.SENGO1_NAME +
                    Blockly.Msg.SENGO_PORT
            )
            .appendField(new Blockly.FieldDropdown(mode_objs), 'mode_obj')
            .appendField(Blockly.Msg.SENGO_ADDR)
            .appendField(
                new Blockly.FieldDropdown([
                    ['0x60', '0x60'],
                    ['0x61', '0x61'],
                    ['0x62', '0x62'],
                    ['0x63', '0x63'],
                ]),
                'addr_obj'
            )
        this.setInputsInline(true)
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
        this.setTooltip(Blockly.Msg.SENGO_HELP_INIT_TOOLTIP)
    },
}

// 恢复默认设置
export const Sengo1SetDefault = {
    init: function () {
        this.appendDummyInput().appendField(
            Blockly.Msg.SENGO1_NAME + Blockly.Msg.SENGO_SET_DEFAULT
        )
        this.setInputsInline(true)
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
        this.setTooltip(Blockly.Msg.SENGO_HELP_SET_DEFAULT)
    },
}

export const Sengo1LedSetColor = {
    init: function () {
        var led_color = [
            '#fff',
            '#000',
            '#f00',
            '#0f0',
            '#ff0',
            '#00f',
            '#f0f',
            '#0ff',
        ]
        var color_detected = new Blockly.FieldColour('#0000ff')
        color_detected.setColours(led_color).setColumns(4)
        var color_undetected = new Blockly.FieldColour('#ff0000')
        color_undetected.setColours(led_color).setColumns(4)

        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO_SET +
                    Blockly.Msg.SENGO1_NAME +
                    Blockly.Msg.SENGO_LED_SET_COLOR
            )
            .appendField(color_detected, 'led_color_obj1')
            .appendField(Blockly.Msg.SENGO_LED_SET_COLOR_NOT)
            .appendField(color_undetected, 'led_color_obj2')
            .appendField(Blockly.Msg.SENGO_LED_SET_LEVEL)
        this.appendValueInput('level').setCheck([Number])
        this.setInputsInline(true)
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
        this.setTooltip(Blockly.Msg.SENGO_HELP_LED)
    },
}

// 启用算法
export const Sengo1VisionSetStatus = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENGO_SET + Blockly.Msg.SENGO1_NAME)
            .appendField(
                new Blockly.FieldDropdown([
                    [Blockly.Msg.SENGO_ENABLE, 'Begin'],
                    [Blockly.Msg.SENGO_DISABLE, 'End'],
                ]),
                'VisionStatus'
            )
            .appendField(
                Blockly.Msg.SENGO_VISION_CN + Blockly.Msg.SENGO_VISION_EN
            )
            .appendField(
                new Blockly.FieldDropdown(sentry1_vision_objs()),
                'vision_obj'
            )

        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo1SetAWB = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO_SET +
                    Blockly.Msg.SENGO1_NAME +
                    Blockly.Msg.SENGO_CAMERA_SET_AWB
            )
            .appendField(
                new Blockly.FieldDropdown(white_balance_objs()),
                'awb_obj'
            )
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo1VisionSetParamNum = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO_SET +
                    Blockly.Msg.SENGO1_NAME +
                    Blockly.Msg.SENGO_VISION_EN
            )
            .appendField(
                new Blockly.FieldDropdown(sentry1_vision_prama_support_objs()),
                'vision_obj'
            )
            .appendField(new Blockly.FieldNumber(1, 1, 25, 1), 'num')
            .appendField(Blockly.Msg.SENGO_SET_PARAMNUM)
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo1VisionColorSetParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO_SET +
                    Blockly.Msg.SENGO1_NAME +
                    Blockly.Msg.SENGO_VISION_EN
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO_VISION_VISIONCOLOR,
                        'Sengo1::kVisionColor',
                    ],
                ]),
                'vision_obj'
            )
        this.appendDummyInput('VisionParam')
            .appendField(Blockly.Msg.SENGO_STATE_VALUE_X)
            .appendField(new Blockly.FieldNumber(50, 0, 9999, 1), 'x')
            .appendField(Blockly.Msg.SENGO_STATE_VALUE_Y)
            .appendField(new Blockly.FieldNumber(50, 0, 9999, 1), 'y')
            .appendField(Blockly.Msg.SENGO_STATE_VALUE_WIDTH)
            .appendField(new Blockly.FieldNumber(3, 0, 9999, 1), 'w')
            .appendField(Blockly.Msg.SENGO_STATE_VALUE_HEIGHT)
            .appendField(new Blockly.FieldNumber(4, 0, 9999, 1), 'h')
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo1VisionBlobSetParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO_SET +
                    Blockly.Msg.SENGO1_NAME +
                    Blockly.Msg.SENGO_VISION_EN
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO_VISION_VISIONBLOB,
                        'Sengo1::kVisionBlob',
                    ],
                ]),
                'vision_obj'
            )
        this.appendDummyInput('VisionParam')
            .appendField(Blockly.Msg.SENGO_WEIGHT)
            .appendField(new Blockly.FieldNumber(3, 0, 9999, 1), 'w')
            .appendField(Blockly.Msg.SENGO_HEIGHT)
            .appendField(new Blockly.FieldNumber(4, 0, 9999, 1), 'h')
            .appendField(Blockly.Msg.SENGO_COLOR)
            .appendField(
                new Blockly.FieldDropdown(sentry1_vision_blod_objs()),
                'lable'
            )
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo1VisionGetStatus = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENGO1_NAME + Blockly.Msg.SENGO_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown(sentry1_vision_objs()),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO_STATUS)
        this.setOutput(true, Number)
        this.setColour('#EAA20A')
    },
}

export const Sengo1VisionDetectedCount = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENGO1_NAME + Blockly.Msg.SENGO_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown(sentry1_vision_objs()),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO_DETECTED_NUMBER)
        this.setInputsInline(true)
        this.setOutput(true, Number)
        this.setColour('#EAA20A')
    },
}

export const Sengo1VisionObj = {
    init: function () {
        var _vision_objs = [
            [Blockly.Msg.SENGO_VISION_VISIONBLOB, 'Sengo1::kVisionBlob'],
            [Blockly.Msg.SENGO_VISION_VISIONBALL, 'Sengo1::kVisionBall'],
            [Blockly.Msg.SENGO_VISION_VISIONCARD, 'Sengo1::kVisionCard'],
            [Blockly.Msg.SENGO_VISION_VISIONBODY, 'Sengo1::kVisionBody'],
        ]
        this.appendDummyInput().appendField(
            Blockly.Msg.SENGO1_NAME + Blockly.Msg.SENGO_VISION_EN
        )
        this.appendDummyInput('VisionValue')
            .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
            .appendField(Blockly.Msg.SENGO_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_res_objs()),
                'vision_res_obj'
            )
            .appendField(Blockly.Msg.SENGO_VISION_RESULT)
        this.setOutput(true, Number)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}

export const Sengo1VisionObjColor = {
    init: function () {
        var _vision_objs = [
            [Blockly.Msg.SENGO_VISION_VISIONCOLOR, 'Sengo1::kVisionColor'],
        ]
        this.appendDummyInput().appendField(
            Blockly.Msg.SENGO1_NAME + Blockly.Msg.SENGO_VISION_EN
        )
        this.appendDummyInput('VisionValue')
            .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
            .appendField(Blockly.Msg.SENGO_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_color_objs()),
                'vision_res_obj'
            )
            .appendField(Blockly.Msg.SENGO_VISION_RESULT)
        this.setOutput(true, Number)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}

export const Sengo1VisionObjLine = {
    init: function () {
        var _vision_objs = [
            [Blockly.Msg.SENGO_VISION_VISIONLINE, 'Sengo1::kVisionLine'],
        ]
        this.appendDummyInput().appendField(
            Blockly.Msg.SENGO1_NAME + Blockly.Msg.SENGO_VISION_EN
        )
        this.appendDummyInput('VisionValue')
            .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
            .appendField(Blockly.Msg.SENGO_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_line_objs()),
                'vision_res_obj'
            )
            .appendField(Blockly.Msg.SENGO_VISION_RESULT)
        this.setOutput(true, Number)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}

export const Sengo1VisionObjQr = {
    init: function () {
        var _vision_objs = [
            [
                Blockly.Msg.SENGO_VISION_VISIONQRCODE +
                    Blockly.Msg.SENGO_VISION_ENTERPRISE,
                'Sengo1::kVisionQrCode',
            ],
        ]
        this.appendDummyInput().appendField(
            Blockly.Msg.SENGO1_NAME + Blockly.Msg.SENGO_VISION_EN
        )
        this.appendDummyInput('VisionValue')
            .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
            .appendField(Blockly.Msg.SENGO_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_qr_objs),
                'vision_res_obj'
            )
            .appendField(Blockly.Msg.SENGO_VISION_RESULT)
        this.setOutput(true, Number)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}

export const Sengo1GetQrValue = {
    init: function () {
        var _vision_objs = [
            [Blockly.Msg.SENGO_VISION_VISIONQRCODE, 'Sengo1::kVisionQrCode'],
        ]
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENGO1_NAME + Blockly.Msg.SENGO_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
            .appendField(Blockly.Msg.SENGO_GET_QRCODEVALUE)
        this.setInputsInline(true)
        this.setOutput(true, String)
        this.setColour('#EAA20A')
    },
}

export const Sengo1VisionColor = {
    init: function () {
        this.appendDummyInput().appendField(
            Blockly.Msg.SENGO1_NAME + Blockly.Msg.SENGO_VISION_EN
        )
        this.appendDummyInput('VisionValue')
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO_VISION_VISIONCOLOR,
                        'Sengo1::kVisionColor',
                    ],
                ]),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()['Sengo1::kVisionBlob']
                ),
                'vision_card_obj'
            )
        this.setOutput(true, Boolean)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}

export const Sengo1VisionCardBlob = {
    init: function () {
        this.appendDummyInput().appendField(
            Blockly.Msg.SENGO1_NAME + Blockly.Msg.SENGO_VISION_EN
        )
        this.appendDummyInput('VisionValue')
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO_VISION_VISIONBLOB,
                        'Sengo1::kVisionBlob',
                    ],
                ]),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO_VISION_DETECTED)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()['Sengo1::kVisionBlob']
                ),
                'vision_card_obj'
            )
            .appendField(Blockly.Msg.SENGO_VISION_BLOCK)
        this.setOutput(true, Boolean)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}

export const Sengo1VisionCard = {
    init: function () {
        this.appendDummyInput().appendField(
            Blockly.Msg.SENGO1_NAME + Blockly.Msg.SENGO_VISION_EN
        )
        this.appendDummyInput('VisionValue')
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO_VISION_VISIONCARD,
                        'Sengo1::kVisionCard',
                    ],
                ]),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()['Sengo1::kVisionCard']
                ),
                'vision_card_obj'
            )
        this.setOutput(true, Boolean)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}

export const Sengo1VisionBall = {
    init: function () {
        this.appendDummyInput().appendField(
            Blockly.Msg.SENGO1_NAME + Blockly.Msg.SENGO_VISION_EN
        )
        this.appendDummyInput('VisionValue')
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO_VISION_VISIONBALL,
                        'Sengo1::kVisionBall',
                    ],
                ]),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()['Sengo1::kVisionBall']
                ),
                'vision_card_obj'
            )
        this.setOutput(true, Boolean)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}

// Sengo2
export const Sengo2Begin = {
    init: function () {
        var mode_objs = [['I2C', 'Wire']].concat(Profile.default.serial_select)
        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO_BEGIN +
                    Blockly.Msg.SENGO2_NAME +
                    Blockly.Msg.SENGO_PORT
            )
            .appendField(new Blockly.FieldDropdown(mode_objs), 'mode_obj')
            .appendField(Blockly.Msg.SENGO_ADDR)
            .appendField(
                new Blockly.FieldDropdown([
                    ['0x60', '0x60'],
                    ['0x61', '0x61'],
                    ['0x62', '0x62'],
                    ['0x63', '0x63'],
                ]),
                'addr_obj'
            )
        this.setInputsInline(true)
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
        this.setTooltip(Blockly.Msg.SENGO_HELP_INIT_TOOLTIP)
    },
}

// 恢复默认设置
export const Sengo2SetDefault = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENGO2_NAME)
            .appendField(Blockly.Msg.SENGO_SET_DEFAULT)
        this.setInputsInline(true)
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
        this.setTooltip(Blockly.Msg.SENGO_HELP_SET_DEFAULT)
    },
}

// 启用算法
export const Sengo2VisionSetStatus = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENGO_SET + Blockly.Msg.SENGO2_NAME)
            .appendField(
                new Blockly.FieldDropdown([
                    [Blockly.Msg.SENGO_ENABLE, 'Begin'],
                    [Blockly.Msg.SENGO_DISABLE, 'End'],
                ]),
                'VisionStatus'
            )
            .appendField(
                Blockly.Msg.SENGO_VISION_EN + Blockly.Msg.SENGO_VISION_CN
            )
            .appendField(
                new Blockly.FieldDropdown(sentry2_vision_objs()),
                'vision_obj'
            )

        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo2SetAWB = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO_SET +
                    Blockly.Msg.SENGO2_NAME +
                    Blockly.Msg.SENGO_CAMERA_SET_AWB
            )
            .appendField(
                new Blockly.FieldDropdown(white_balance_objs()),
                'awb_obj'
            )
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo2VisionSetParamNum = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENGO_SET + Blockly.Msg.SENGO2_NAME)
            .appendField(Blockly.Msg.SENGO_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown(sentry2_vision_param_objs()),
                'vision_obj'
            )
            .appendField(new Blockly.FieldNumber(1, 1, 25, 1), 'num')
            .appendField(Blockly.Msg.SENGO_SET_PARAMNUM)
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo2VisionColorSetParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENGO_SET + Blockly.Msg.SENGO2_NAME)
            .appendField(Blockly.Msg.SENGO_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO_VISION_VISIONCOLOR,
                        'Sengo2::kVisionColor',
                    ],
                ]),
                'vision_obj'
            )
        this.appendDummyInput('VisionParam')
            .appendField(
                Blockly.Msg.SENGO_CENTER + Blockly.Msg.SENGO_STATE_VALUE_X
            )
            .appendField(new Blockly.FieldNumber(50, 0, 9999, 1), 'x')
            .appendField(
                Blockly.Msg.SENGO_CENTER + Blockly.Msg.SENGO_STATE_VALUE_Y
            )
            .appendField(new Blockly.FieldNumber(50, 0, 9999, 1), 'y')
            .appendField(Blockly.Msg.SENGO_STATE_VALUE_WIDTH)
            .appendField(new Blockly.FieldNumber(3, 0, 9999, 1), 'w')
            .appendField(Blockly.Msg.SENGO_STATE_VALUE_HEIGHT)
            .appendField(new Blockly.FieldNumber(4, 0, 9999, 1), 'h')
            .appendField(Blockly.Msg.SENGO_SET_PARAM_GROUP)
            .appendField(new Blockly.FieldNumber(1, 1, 25, 1), 'index')
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo2VisionBlobSetParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENGO_SET + Blockly.Msg.SENGO2_NAME)
            .appendField(Blockly.Msg.SENGO_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO_VISION_VISIONBLOB,
                        'Sengo2::kVisionBlob',
                    ],
                ]),
                'vision_obj'
            )
        this.appendDummyInput('VisionParam')
            .appendField(Blockly.Msg.SENGO_STATE_VALUE_WIDTH)
            .appendField(new Blockly.FieldNumber(3, 0, 9999, 1), 'w')
            .appendField(Blockly.Msg.SENGO_STATE_VALUE_HEIGHT)
            .appendField(new Blockly.FieldNumber(4, 0, 9999, 1), 'h')
            .appendField(Blockly.Msg.SENGO_STATE_VALUE_LABEL)
            .appendField(
                new Blockly.FieldDropdown(sentry2_vision_blod_objs()),
                'lable'
            )
            .appendField(Blockly.Msg.SENGO_SET_PARAM_GROUP)
            .appendField(new Blockly.FieldNumber(1, 1, 25, 1), 'index')
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo2VisionSetParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENGO_SET + Blockly.Msg.SENGO2_NAME)
            .appendField(Blockly.Msg.SENGO_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown(sentry2_vision_custom()),
                'vision_obj'
            )
        this.appendDummyInput('VisionParam')
            .appendField(Blockly.Msg.SENGO_SET_PARAM + '1')
            .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), 'x')
            .appendField(Blockly.Msg.SENGO_SET_PARAM + '2')
            .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), 'y')
            .appendField(Blockly.Msg.SENGO_SET_PARAM + '3')
            .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), 'w')
            .appendField(Blockly.Msg.SENGO_SET_PARAM + '4')
            .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), 'h')
            .appendField(Blockly.Msg.SENGO_SET_PARAM + '5')
            .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), 'lable')
            .appendField(Blockly.Msg.SENGO_SET_PARAM_GROUP)
            .appendField(new Blockly.FieldNumber(1, 1, 25, 1), 'index')
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo2VisionDetectedCount = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENGO2_NAME)
            .appendField(Blockly.Msg.SENGO_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown(sentry2_vision_objs()),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO_DETECTED_NUMBER)
        this.setInputsInline(true)
        this.setOutput(true, null)
        this.setColour('#EAA20A')
    },
}

export const Sengo2VisionObjColor = {
    init: function () {
        var _vision_objs = [
            [Blockly.Msg.SENGO_VISION_VISIONCOLOR, 'Sengo2::kVisionColor'],
        ]
        this.appendDummyInput().appendField(Blockly.Msg.SENGO2_NAME)
        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
            .appendField(Blockly.Msg.SENGO_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_color_objs()),
                'vision_res_obj'
            )
        this.setOutput(true, Number)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}

export const Sengo2VisionObjLine = {
    init: function () {
        var _vision_objs = [
            [Blockly.Msg.SENGO_VISION_VISIONLINE, 'Sengo2::kVisionLine'],
        ]
        this.appendDummyInput().appendField(Blockly.Msg.SENGO2_NAME)
        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
            .appendField(Blockly.Msg.SENGO_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_line_objs()),
                'vision_res_obj'
            )
        this.setOutput(true, Number)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}

export const Sengo2VisionObjQr = {
    init: function () {
        var _vision_objs = [
            [Blockly.Msg.SENGO_VISION_VISIONQRCODE, 'Sengo2::kVisionQrCode'],
        ]
        this.appendDummyInput().appendField(Blockly.Msg.SENGO2_NAME)
        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
            .appendField(Blockly.Msg.SENGO_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_qr_objs),
                'vision_res_obj'
            )
        this.setOutput(true, Number)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}

export const Sengo2VisionObj = {
    init: function () {
        var _vision_objs = [
            [Blockly.Msg.SENGO_VISION_VISIONBLOB, 'Sengo2::kVisionBlob'],
            [
                Blockly.Msg.SENGO_VISION_VISIONAPRILTAG,
                'Sengo2::kVisionAprilTag',
            ],
            [
                Blockly.Msg.SENGO_VISION_VISIONLEARNING,
                'Sengo2::kVisionLearning',
            ],
            [Blockly.Msg.SENGO_VISION_VISIONCARD, 'Sengo2::kVisionCard'],
            [Blockly.Msg.SENGO_VISION_VISIONFACE, 'Sengo2::kVisionFace'],
            [
                Blockly.Msg.SENGO_VISION_VISION20CLASSES,
                'Sengo2::kVision20Classes',
            ],
            [
                Blockly.Msg.SENGO_VISION_VISIONMOTIONDETECT,
                'Sengo2::kVisionMotionDetect',
            ],
        ]
        this.appendDummyInput().appendField(Blockly.Msg.SENGO2_NAME)
        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
            .appendField(Blockly.Msg.SENGO_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_res_objs()),
                'vision_res_obj'
            )
        this.setOutput(true, Number)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}

export const Sengo2VisionCustom = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.SENGO2_NAME)
        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown(sentry2_vision_custom()),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_custom_objs()),
                'vision_res_obj'
            )
        this.setOutput(true, Number)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}

export const Sengo2GetQrValue = {
    init: function () {
        var _vision_objs = [
            [Blockly.Msg.SENGO_VISION_VISIONQRCODE, 'Sengo2::kVisionQrCode'],
        ]
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENGO2_NAME)
            .appendField(Blockly.Msg.SENGO_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
            .appendField(Blockly.Msg.SENGO_GET_QRCODEVALUE)
        this.setInputsInline(true)
        this.setOutput(true, String)
        this.setColour('#EAA20A')
    },
}

export const Sengo2VisionColor = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.SENGO2_NAME)
        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO_VISION_VISIONCOLOR,
                        'Sengo2::kVisionColor',
                    ],
                ]),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()['Sengo2::kVisionBlob']
                ),
                'vision_card_obj'
            )
        this.setOutput(true, Boolean)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}

export const Sengo2VisionCardBlob = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.SENGO2_NAME)
        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO_VISION_VISIONBLOB,
                        'Sengo2::kVisionBlob',
                    ],
                ]),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO_VISION_DETECTED)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()['Sengo2::kVisionBlob']
                ),
                'vision_card_obj'
            )
            .appendField(Blockly.Msg.SENGO_VISION_BLOCK)
        this.setOutput(true, Boolean)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}

export const Sengo2VisionCard = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.SENGO2_NAME)
        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO_VISION_VISIONCARD,
                        'Sengo2::kVisionCard',
                    ],
                ]),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()['Sengo2::kVisionCard']
                ),
                'vision_card_obj'
            )
        this.setOutput(true, Boolean)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}

export const Sengo2VisionCard20Classes = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.SENGO2_NAME)
        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO_VISION_VISION20CLASSES,
                        'Sengo2::kVision20Classes',
                    ],
                ]),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()['Sengo2::kVision20Classes']
                ),
                'vision_card_obj'
            )
        this.setOutput(true, Boolean)
        this.setInputsInline(true)
        this.setColour('#EAA20A')
    },
}
