export const EnMsg = {
    //Help text
    SENGO_HELP_INIT_TOOLTIP:
        'initialize the vision sensor and select the relevant address',
    SENGO_HELP_SET_DEFAULT: 'sensor algorithm state returns to default',
    SENGO_HELP_LED:
        'black is the off LED display. When the two colors are the same, the LED status is manual and does not change with the test results',
    SENGO_HELP_GET_VISION_VALUE: 'get corresponding result of algorithm',
    SENGO_HELP_DETECTED_VISION_VALUE:
        'whether the target value of the algorithm is detected, return true if detected, otherwise false',

    //Warning text
    SENGO_WARNING_ON_INIT:
        'do not use serial to connect sengo1 and the computer to print characters at the same time. This operation will cause confusion of printed characters or abnormal communication at the computer end',

    SENGO_VISION_ENTERPRISE: '',

    //Set module text
    SENGO2_NAME: '  Sengo2  ',
    SENGO1_NAME: '  Sengo1  ',
    SENGO_BEGIN: 'Initialize',
    SENGO_PORT: 'port',
    SENGO_ADDR: 'addr',
    SENGO_SET_DEFAULT: 'restore default params',
    SENGO_VISION_CN: '',
    SENGO_VISION_EN: 'algo',
    SENGO_STATUS: 'status',
    SENGO_SET: 'Set',
    SENGO_SET_PARAMNUM: 'sets of params',
    SENGO_SET_PARAM: 'param',
    SENGO_SET_PARAM_GROUP: 'paramset',
    SENGO_INDEX: 'index',
    SENGO_CENTER: '',
    SENGO_X: 'x-cood',
    SENGO_Y: 'y-cood',
    SENGO_WEIGHT: 'min-width',
    SENGO_HEIGHT: 'min-height',
    SENGO_COLOR: 'color',
    SENGO_LABLE: 'label',
    SENGO_LED_SET_COLOR: 'LEDs\' color ',
    SENGO_LED_SET_COLOR_NOT: ' when targets were detected otherwise ',
    SENGO_LED_SET_LEVEL: ' luma (1~15)',
    SENGO_CAMERA_SET_AWB: 'white balance mode',
    SENGO_VISION_DETECTED: '  detected ',
    SENGO_VISION_DETECTED_1: '  recognized ',
    SENGO_VISION_RETURN: '  ',
    SENGO_VISION_RESULT: 'of result',
    SENGO_VISION_RESULT_1: 'result',
    SENGO_VISION_BLOCK: ' blob',
    SENGO_VISION_DATA: 'returnValue',
    SENGO_DETECTED_NUMBER: '  num of result',
    SENGO_GET_QRCODEVALUE: '  string of decoding result',

    SENGO_SAVE_DATA: 'save data as',
    SENGO_DEL_DATA: 'delete data',
    SENGO_SET_ID: 'ID',

    // Sengo Vision type
    SENGO_VISION_VISIONCOLOR: 'Color',
    SENGO_VISION_VISIONBLOB: 'Blob',
    SENGO_VISION_VISIONBALL: 'Ball',
    SENGO_VISION_VISIONAPRILTAG: 'AprilTag',
    SENGO_VISION_VISIONLINE: 'Line',
    SENGO_VISION_VISIONLEARNING: 'Learning',
    SENGO_VISION_VISIONCARD: 'Card',
    SENGO_VISION_VISIONFACE: 'Face',
    SENGO_VISION_VISIONBODY: 'Body',
    SENGO_VISION_VISION20CLASSES: '20Class',
    SENGO_VISION_VISIONQRCODE: 'QrCode',
    SENGO_VISION_VISIONMOTIONDETECT: 'Motion',
    SENGO_VISION_VISIONCUSTOM: 'Custom',

    // Sengo Enable Disable
    SENGO_ENABLE: 'run',
    SENGO_DISABLE: 'stop',

    // LED color type
    SENGO_LED_CLOSE: 'Close',
    SENGO_LED_RED: 'Red',
    SENGO_LED_GREEN: 'Green',
    SENGO_LED_YELLOW: 'Yellow',
    SENGO_LED_BLUE: 'Blue',
    SENGO_LED_PURPLE: 'Purple',
    SENGO_LED_CYAN: 'Cyan',
    SENGO_LED_WHITE: 'White',

    // Sengo White Balance Type
    SENGO_AUTO: 'Auto',
    SENGO_LOCK_AWB: 'Lock',
    SENGO_WHITE_LIGHT: 'WhiteLight',
    SENGO_YELLOW_LIGHT: 'YellowLight',

    // Sengo State Value Type
    SENGO_STATE_VALUE_X: 'x-coord',
    SENGO_STATE_VALUE_Y: 'y-coord',
    SENGO_STATE_VALUE_WIDTH: 'width',
    SENGO_STATE_VALUE_HEIGHT: 'height',
    SENGO_STATE_VALUE_LABEL: 'label',

    SENGO_STATE_LINE_EX: 'x-coord of ending point',
    SENGO_STATE_LINE_EY: 'y-coord of ending point',
    SENGO_STATE_LINE_SX: 'x-coord of starting point',
    SENGO_STATE_LINE_SY: 'y-coord of starting point',
    SENGO_STATE_LINE_A: 'inclination angle',

    SENGO_STATE_VALUE_R: 'red CH value',
    SENGO_STATE_VALUE_G: 'green CH value',
    SENGO_STATE_VALUE_B: 'blue CH value',

    SENGO_BALLTABLETENNIS: 'Table Tennis',
    SENGO_BALLTENNIS: 'Tennis',

    // Sengo Color Type
    SENGO_COLOR_BLACK: 'Black',
    SENGO_COLOR_WHITE: 'White',
    SENGO_COLOR_RED: 'Red',
    SENGO_COLOR_GREEN: 'Green',
    SENGO_COLOR_BLUE: 'Blue',
    SENGO_COLOR_YELLOW: 'Yellow',

    // Sengo 20 Class Type
    SENGO_CLASS20_AIRPLANE: ' Aircraft ',
    SENGO_CLASS20_BICYCLE: ' Bicycle ',
    SENGO_CLASS20_BIRD: ' Bird ',
    SENGO_CLASS20_BOAT: ' Ship ',
    SENGO_CLASS20_BOTTLE: ' Bottle ',
    SENGO_CLASS20_BUS: '  Bus',
    SENGO_CLASS20_CAR: ' Car ',
    SENGO_CLASS20_CAT: '  Cat ',
    SENGO_CLASS20_CHAIR: ' Chair ',
    SENGO_CLASS20_COW: ' Cow ',
    SENGO_CLASS20_TABLE: ' Table ',
    SENGO_CLASS20_DOG: ' Dog ',
    SENGO_CLASS20_HORSE: ' Horse ',
    SENGO_CLASS20_MOTORBIKE: ' Motorcycle ',
    SENGO_CLASS20_PERSON: ' Person ',
    SENGO_CLASS20_PLANT: ' Plant ',
    SENGO_CLASS20_SHEEP: ' Sheep ',
    SENGO_CLASS20_SOFA: ' Sofa ',
    SENGO_CLASS20_TRAIN: ' Train ',
    SENGO_CLASS20_MONITOR: ' Display ',

    // Sengo Card Type
    SENGO_CARD_TRAFFIC: 'traffic card',
    SENGO_CARD_FORWARD: 'Forward',
    SENGO_CARD_LEFT: 'Left',
    SENGO_CARD_RIGHT: 'Right',
    SENGO_CARD_TURN_AROUND: 'Turn Around',
    SENGO_CARD_PARK: 'Park',
    SENGO_CARD_GREEN_LIGHT: 'Green Light',
    SENGO_CARD_RED_LIGHT: 'Red Light',
    SENGO_CARD_SPEED_40: 'Speed 40',
    SENGO_CARD_SPEED_60: 'Speed 60',
    SENGO_CARD_SPEED_80: 'Speed 80',
    SENGO_CARD_SYMBOL: 'symbol card',
    SENGO_CARD_CHECK: '✔',
    SENGO_CARD_CROSS: '☓',
    SENGO_CARD_CIRCLE: '◯',
    SENGO_CARD_SQUARE: '☐',
    SENGO_CARD_TRIANGLE: '△',
    SENGO_CARD_PLUS: '+',
    SENGO_CARD_MINUS: '-',
    SENGO_CARD_DIVIDE: '÷',
    SENGO_CARD_EQUAL: '=',
    SENGO_CARD_NUMBER: 'digital card',
    SENGO_CARD_1: '1',
    SENGO_CARD_2: '2',
    SENGO_CARD_3: '3',
    SENGO_CARD_4: '4',
    SENGO_CARD_5: '5',
    SENGO_CARD_6: '6',
    SENGO_CARD_7: '7',
    SENGO_CARD_8: '8',
    SENGO_CARD_9: '9',
    SENGO_CARD_0: '0',

    mixly_Sengo1: 'Sengo1 Vision Sensor',
    mixly_Sengo2: 'Sengo2 Vision Sensor',
    Sengo_Setup: 'Setting Blocks',
    Sengo_Run: 'Operation Blocks',
    Sengo_example: 'Example',
}

export const EnCatgories = {
    mixly_Sengo1: EnMsg.mixly_Sengo1,
    mixly_Sengo2: EnMsg.mixly_Sengo2,

    Sengo_Setup: EnMsg.Sengo_Setup,
    Sengo_Run: EnMsg.Sengo_Run,
    Sengo_example: EnMsg.Sengo_example,

    Sengo_example_Blod: EnMsg.SENGO_VISION_VISIONBLOB,
    Sengo_example_Color: EnMsg.SENGO_VISION_VISIONCOLOR,
    Sengo_example_AprilTag: EnMsg.SENGO_VISION_VISIONAPRILTAG,
    Sengo_example_Line: EnMsg.SENGO_VISION_VISIONLINE,
    Sengo_example_Learning: EnMsg.SENGO_VISION_VISIONLEARNING,
    Sengo_example_Card: EnMsg.SENGO_VISION_VISIONCARD,
    Sengo_example_Face: EnMsg.SENGO_VISION_VISIONFACE,
    Sengo_example_20Class: EnMsg.SENGO_VISION_VISION20CLASSES,
    Sengo_example_Qr: EnMsg.SENGO_VISION_VISIONQRCODE,
    Sengo_example_MotionDetect: EnMsg.SENGO_VISION_VISIONMOTIONDETECT,
    Sengo_example_Body: EnMsg.SENGO_VISION_VISIONBODY,
    Sengo_example_Ball: EnMsg.SENGO_VISION_VISIONBALL,
}
