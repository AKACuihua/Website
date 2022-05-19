am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv2");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/word-cloud/
    var series = root.container.children.push(am5wc.WordCloud.new(root, {
      categoryField: "tag",
      valueField: "weight",
      maxFontSize: am5.percent(20),
    }));


    // Configure labels
    series.labels.template.setAll({
      fontFamily: "Courier New",
      templateField: "labelSettings",
    });
    
    
    series.data.setAll([
      { tag: "浮誇", weight: 64.96, labelSettings: {fill: am5.color(0xff0000)}},
      { tag: "新貴妃醉酒", weight: 40.07,labelSettings: { fill:am5.color(0xCC0000)} },
      { tag: "情歌王", weight: 48.24,labelSettings: {fill:am5.color(0xA30000)}},
      { tag: "死了都要愛", weight: 47.08,labelSettings: {fill:am5.color(0x881B6D) }},
      { tag: "青藏高原", weight: 35.35,labelSettings: {fill:am5.color(0x0F3235)}},
      { tag: "探清水河", weight: 33.91,labelSettings: {fill:am5.color(0xDC198A) }},
      { tag: "悟空", weight: 30.19,labelSettings: {fill:am5.color(0xE8AFEF) }},
      { tag: "煎熬", weight: 27.86,labelSettings: {fill:am5.color(0x79E734) }},
      { tag: "演員", weight: 27.5,labelSettings: {fill:am5.color(0xAA01DE)}},
      { tag: "十年", weight: 27.13,labelSettings: {fill:am5.color(0x2AC6E9) }},
      { tag: "王妃", weight: 24.31,labelSettings: {fill:am5.color(0x4B6C5C) }},
      { tag: "鍾無艷", weight: 21.98,labelSettings: {fill:am5.color(0x2B3BD4) }},
      { tag: "野子", weight: 21.01,labelSettings: {fill:am5.color(0x53EB83) }},
      { tag: "鐵窗淚", weight: 10.75,labelSettings: {fill:am5.color(0x02163B) }},
      { tag: "萬物生", weight: 9.55,labelSettings: {fill:am5.color(0xEB9144) }},
      { tag: "後來", weight: 8.32,labelSettings: {fill:am5.color(0x0B4FE1) }},
      { tag: "鎖麟囊", weight: 7.03,labelSettings: {fill:am5.color(0xA10ECD) }},
      { tag: "卡路里", weight: 6.75,labelSettings: {fill:am5.color(0xB97999) }},
      { tag: "精忠報國", weight: 6.02,labelSettings: {fill:am5.color(0xC838E7) }},
      { tag: "左手指月", weight: 5.61,labelSettings: {fill:am5.color(0x564843) }},
      { tag: "難念的經", weight: 5.1,labelSettings: {fill:am5.color(0xAB75C9) }},
      { tag: "三天三夜", weight: 5.07,labelSettings: {fill:am5.color(0xC70A7E) }},
      { tag: "月半小夜曲", weight: 4.66,labelSettings: {fill:am5.color(0x62643D) }},
      { tag: "向天再借五百年", weight: 4.66,labelSettings: {fill:am5.color(0x28CC6B) }},
      { tag: "追追追", weight: 3.01,labelSettings: {fill:am5.color(0x8B89D6) }},
      { tag: "小幸運", weight: 2.8,labelSettings: {fill:am5.color(0x8D72AB) }},
      { tag: "K歌之王", weight: 2.6,labelSettings: {fill:am5.color(0x61F053) }},
      { tag: "我的太陽", weight: 2.46,labelSettings: {fill:am5.color(0xC69593) }},
      { tag: "易燃易爆炸", weight: 2.12,labelSettings: {fill:am5.color(0x79E734) }},
      { tag: "以父之名", weight: 2.1,labelSettings: {fill:am5.color(0x33EEE5) }},
      { tag: "男孩", weight: 1.88,labelSettings: {fill:am5.color(0x185A32) }},
      { tag: "倒帶", weight: 1.74,labelSettings: {fill:am5.color(0x4AE6C7) }},
      { tag: "醜八怪", weight: 1.33,labelSettings: {fill:am5.color(0xC0B9C0) }},
      { tag: "大悲咒", weight: 1.29,labelSettings: {fill:am5.color(0xEE3598) }},
      { tag: "不爲誰而作的歌", weight: 0.97,labelSettings: {fill:am5.color(0xAA35C9) }},
      { tag: "千千闕歌", weight: 0.79,labelSettings: {fill:am5.color(0x7CFE72) }},
      { tag: "髮如雪", weight: 0.65,labelSettings: {fill:am5.color(0x01D63B) }},
      { tag: "葫蘆娃", weight: 0.56,labelSettings: {fill:am5.color(0x0AC94D) }},
      { tag: "殘酷月光", weight: 0.53, labelSettings: { fill: am5.color(0x85FFC4) } },
    ]);
    
    }); // end am5.ready()