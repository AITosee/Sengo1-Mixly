export const ZhHantMsg = {
    // Help文本
    SENGO_HELP_INIT_TOOLTIP: '初始化視覺傳感器，並選擇相關的地址',
    SENGO_HELP_SET_DEFAULT: '傳感器算法狀態恢複默認',
    SENGO_HELP_LED:
        '黑色為關閉LED顯示，兩種顏色相同時,LED狀態為手動，不隨著檢測結果改變',
    SENGO_HELP_GET_VISION_VALUE: '獲取算法對應結果',
    SENGO_HELP_DETECTED_VISION_VALUE:
        '是否檢測到算法目標值，檢測到返回Ture，否則False',

    // Warning文本
    SENGO_WARNING_ON_INIT:
        '請勿同時使用Serial連接Sengo與電腦打印字符，此操作會導致電腦端打印字符錯亂或通信異常',

    SENGO_VISION_ENTERPRISE: '',

    // 設置模塊文本
    SENGO2_NAME: '  Sengo2  ',
    SENGO1_NAME: '  Sengo1  ',
    SENGO_BEGIN: '初始化',
    SENGO_PORT: '端口',
    SENGO_ADDR: '地址',
    SENGO_SET_DEFAULT: '恢複默認參數',
    SENGO_VISION_CN: '算法',
    SENGO_VISION_EN: '',
    SENGO_STATUS: '狀態',
    SENGO_SET: '設置 ',
    SENGO_SET_PARAMNUM: '組參數',
    SENGO_SET_PARAM: '參數',
    SENGO_SET_PARAM_GROUP: '參數組',
    SENGO_INDEX: '索引',
    SENGO_CENTER: '中心',
    SENGO_X: '橫坐標',
    SENGO_Y: '縱坐標',
    SENGO_WEIGHT: '最小寬度',
    SENGO_HEIGHT: '最小高度',
    SENGO_COLOR: '顏色',
    SENGO_LABLE: '標簽',
    SENGO_LED_SET_COLOR: '檢測到結果时 LED顯示',
    SENGO_LED_SET_COLOR_NOT: '否則',
    SENGO_LED_SET_LEVEL: '亮度(0~15)',
    SENGO_CAMERA_SET_AWB: '白平衡模式',
    SENGO_VISION_DETECTED: '  檢測到',
    SENGO_VISION_DETECTED_1: '  識別到',
    SENGO_VISION_RETURN: '  返回的',
    SENGO_VISION_RESULT: '結果',
    SENGO_VISION_RESULT_1: '結果',
    SENGO_VISION_BLOCK: '塊',
    SENGO_VISION_DATA: '數據',
    SENGO_DETECTED_NUMBER: '  結果的數量',
    SENGO_GET_QRCODEVALUE: '  識別結果字符串',

    // Sengo Vision type
    SENGO_VISION_VISIONCOLOR: '顏色識別',
    SENGO_VISION_VISIONBLOB: '色塊檢測',
    SENGO_VISION_VISIONBALL: '球體識別',
    SENGO_VISION_VISIONAPRILTAG: '標簽識別',
    SENGO_VISION_VISIONLINE: '線條檢測',
    SENGO_VISION_VISIONLEARNING: '深度學習',
    SENGO_VISION_VISIONCARD: '卡片識別',
    SENGO_VISION_VISIONFACE: '人臉識別',
    SENGO_VISION_VISIONBODY: '人體檢測',
    SENGO_VISION_VISION20CLASSES: '20類物體',
    SENGO_VISION_VISIONQRCODE: '二維碼',
    SENGO_VISION_VISIONMOTIONDETECT: '運動物體',
    SENGO_VISION_VISIONCUSTOM: '自定義',

    // Sengo Enable Disable
    SENGO_ENABLE: '開啟',
    SENGO_DISABLE: '關閉',

    // LED color type
    SENGO_LED_CLOSE: '關閉',
    SENGO_LED_RED: '紅色',
    SENGO_LED_GREEN: '綠色',
    SENGO_LED_YELLOW: '黃色',
    SENGO_LED_BLUE: '藍色',
    SENGO_LED_PURPLE: '紫色',
    SENGO_LED_CYAN: '青色',
    SENGO_LED_WHITE: '白色',

    // Sengo White Balance Type
    SENGO_AUTO: '自動',
    SENGO_LOCK_AWB: '鎖定',
    SENGO_WHITE_LIGHT: '白光',
    SENGO_YELLOW_LIGHT: '黃光',

    // Sengo State Value Type
    SENGO_STATE_VALUE_X: '橫坐標',
    SENGO_STATE_VALUE_Y: '縱坐標',
    SENGO_STATE_VALUE_WIDTH: '寬度',
    SENGO_STATE_VALUE_HEIGHT: '高度',
    SENGO_STATE_VALUE_LABEL: '標簽',

    SENGO_STATE_LINE_EX: '終點橫坐標',
    SENGO_STATE_LINE_EY: '終點縱坐標',
    SENGO_STATE_LINE_SX: '起點橫坐標',
    SENGO_STATE_LINE_SY: '起點縱坐標',
    SENGO_STATE_LINE_A: '傾斜角度',

    SENGO_STATE_VALUE_R: '紅色分量值',
    SENGO_STATE_VALUE_G: '紅色分量值',
    SENGO_STATE_VALUE_B: '紅色分量值',

    SENGO_BALLTABLETENNIS: '乒乓球',
    SENGO_BALLTENNIS: '網球',

    // Sengo Color Type
    SENGO_COLOR_BLACK: '黑色',
    SENGO_COLOR_WHITE: '白色',
    SENGO_COLOR_RED: '紅色',
    SENGO_COLOR_GREEN: '綠色',
    SENGO_COLOR_BLUE: '藍色',
    SENGO_COLOR_YELLOW: '黃色',

    SENGO_CLASS20_AIRPLANE: '飛機',
    SENGO_CLASS20_BICYCLE: '自行車',
    SENGO_CLASS20_BIRD: '鳥',
    SENGO_CLASS20_BOAT: '船',
    SENGO_CLASS20_BOTTLE: '瓶子',
    SENGO_CLASS20_BUS: '公交車',
    SENGO_CLASS20_CAR: '小汽車',
    SENGO_CLASS20_CAT: '貓',
    SENGO_CLASS20_CHAIR: '椅子',
    SENGO_CLASS20_COW: '奶牛',
    SENGO_CLASS20_TABLE: '桌子',
    SENGO_CLASS20_DOG: '狗',
    SENGO_CLASS20_HORSE: '馬',
    SENGO_CLASS20_MOTORBIKE: '摩托車',
    SENGO_CLASS20_PERSON: '人',
    SENGO_CLASS20_PLANT: '植物',
    SENGO_CLASS20_SHEEP: '羊',
    SENGO_CLASS20_SOFA: '沙發',
    SENGO_CLASS20_TRAIN: '火車',
    SENGO_CLASS20_MONITOR: '顯示器',

    // Sengo Card Type
    SENGO_CARD_TRAFFIC: '交通卡片',
    SENGO_CARD_FORWARD: '前進',
    SENGO_CARD_LEFT: '左轉',
    SENGO_CARD_RIGHT: '右轉',
    SENGO_CARD_TURN_AROUND: '掉頭',
    SENGO_CARD_PARK: '停車',
    SENGO_CARD_GREEN_LIGHT: '綠燈',
    SENGO_CARD_RED_LIGHT: '紅燈',
    SENGO_CARD_SPEED_40: '限速40',
    SENGO_CARD_SPEED_60: '限速60',
    SENGO_CARD_SPEED_80: '限速80',
    SENGO_CARD_SYMBOL: '符號卡片',
    SENGO_CARD_CHECK: '✔',
    SENGO_CARD_CROSS: '☓',
    SENGO_CARD_CIRCLE: '◯',
    SENGO_CARD_SQUARE: '☐',
    SENGO_CARD_TRIANGLE: '△',
    SENGO_CARD_PLUS: '+',
    SENGO_CARD_MINUS: '-',
    SENGO_CARD_DIVIDE: '÷',
    SENGO_CARD_EQUAL: '=',
    SENGO_CARD_NUMBER: '數字卡片',
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

    mixly_Sengo: 'Sengo 視覺傳感器',
    Sengo1_Setup: '設置模塊',
    Sengo1_Run: '運行模塊',
    Sengo1_example: '算法示例',
}

export const ZhHantCatgories = {
    mixly_Sengo: ZhHantMsg.mixly_Sengo,

    Sengo1_Setup: ZhHantMsg.Sengo1_Setup,
    Sengo1_Run: ZhHantMsg.Sengo1_Run,
    Sengo1_example: ZhHantMsg.Sengo1_example,

    Sengo1_example_Blod: ZhHantMsg.SENGO_VISION_VISIONBLOB,
    Sengo1_example_Color: ZhHantMsg.SENGO_VISION_VISIONCOLOR,
    Sengo1_example_ball: ZhHantMsg.SENGO_VISION_VISIONBALL,
    Sengo1_example_Line: ZhHantMsg.SENGO_VISION_VISIONLINE,
    Sengo1_example_Card: ZhHantMsg.SENGO_VISION_VISIONCARD,
    Sengo1_example_body: ZhHantMsg.SENGO_VISION_VISIONFACE,

    Sengo2_Setup: ZhHantMsg.Sengo1_Setup,
    Sengo2_Run: ZhHantMsg.Sengo1_Run,
    Sengo2_example: ZhHantMsg.Sengo1_example,

    Sengo_example_Blod: ZhHantMsg.SENGO_VISION_VISIONBLOB,
    Sengo_example_Color: ZhHantMsg.SENGO_VISION_VISIONCOLOR,
    Sengo_example_AprilTag: ZhHantMsg.SENGO_VISION_VISIONAPRILTAG,
    Sengo_example_Line: ZhHantMsg.SENGO_VISION_VISIONLINE,
    Sengo_example_Learning: ZhHantMsg.SENGO_VISION_VISIONLEARNING,
    Sengo_example_Card: ZhHantMsg.SENGO_VISION_VISIONCARD,
    Sengo_example_Face: ZhHantMsg.SENGO_VISION_VISIONFACE,
    Sengo_example_20Class: ZhHantMsg.SENGO_VISION_VISION20CLASSES,
    Sengo_example_Qr: ZhHantMsg.SENGO_VISION_VISIONQRCODE,
    Sengo_example_MotionDetect: ZhHantMsg.SENGO_VISION_VISIONMOTIONDETECT,
}
