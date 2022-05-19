am5.ready(function() {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv3");
  
  
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
    maxFontSize: am5.percent(15),
  }));


  // Configure labels
  series.labels.template.setAll({
    fontFamily: "Courier New",
    templateField: "labelSettings",
  });
  
  
  series.data.setAll([
    { tag: "陳奕迅", weight: 64.96, labelSettings: {fill: am5.color(0xff0000)}},
    { tag: "周傑倫", weight: 40.07,labelSettings: { fill:am5.color(0xCC0000)} },
    { tag: "林俊傑", weight: 48.24,labelSettings: {fill:am5.color(0xA30000)}},
    { tag: "薛之謙", weight: 47.08,labelSettings: {fill:am5.color(0x881B6D) }},
    { tag: "張雲雷", weight: 35.35,labelSettings: {fill:am5.color(0x0F3235)}},
    { tag: "王菲", weight: 33.91,labelSettings: {fill:am5.color(0xDC198A) }},
    { tag: "陳粒", weight: 30.19,labelSettings: {fill:am5.color(0xE8AFEF) }},
    { tag: "五月天", weight: 27.86,labelSettings: {fill:am5.color(0x79E734) }},
    { tag: "韓紅", weight: 27.5,labelSettings: {fill:am5.color(0xAA01DE)}},
    { tag: "薩頂頂", weight: 27.13,labelSettings: {fill:am5.color(0x2AC6E9) }},
    { tag: "張信哲", weight: 24.31,labelSettings: {fill:am5.color(0x4B6C5C) }},
    { tag: "信樂隊", weight: 21.98,labelSettings: {fill:am5.color(0x2B3BD4) }},
    { tag: "謝安琪", weight: 21.01,labelSettings: {fill:am5.color(0x53EB83) }},
    { tag: "蕭敬騰", weight: 10.75,labelSettings: {fill:am5.color(0x02163B) }},
    { tag: "屠洪剛", weight: 9.55,labelSettings: {fill:am5.color(0xEB9144) }},
    { tag: "梁靜茹", weight: 8.32,labelSettings: {fill:am5.color(0x0B4FE1) }},
    { tag: "GAI", weight: 7.03,labelSettings: {fill:am5.color(0xA10ECD) }},
    { tag: "薩頂頂", weight: 6.75,labelSettings: {fill:am5.color(0xB97999) }},
    { tag: "林宥嘉", weight: 6.02,labelSettings: {fill:am5.color(0xC838E7) }},
    { tag: "李玉剛", weight: 5.61,labelSettings: {fill:am5.color(0x564843) }},
    { tag: "張國榮", weight: 5.1,labelSettings: {fill:am5.color(0xAB75C9) }},
    { tag: "鄧麗君", weight: 5.07,labelSettings: {fill:am5.color(0xC70A7E) }},
    { tag: "蘇打綠", weight: 4.66,labelSettings: {fill:am5.color(0x62643D) }},
    { tag: "古巨基", weight: 4.66,labelSettings: {fill:am5.color(0x28CC6B) }},
    { tag: "莫文蔚", weight: 3.01,labelSettings: {fill:am5.color(0x8B89D6) }},
    { tag: "Beyond", weight: 2.8,labelSettings: {fill:am5.color(0x8D72AB) }},
    { tag: "徐佳瑩", weight: 2.6,labelSettings: {fill:am5.color(0x61F053) }},
    { tag: "張懸", weight: 2.46,labelSettings: {fill:am5.color(0xC69593) }},
    { tag: "洪鐘", weight: 2.12,labelSettings: {fill:am5.color(0x79E734) }},
    { tag: "張宇", weight: 2.1,labelSettings: {fill:am5.color(0x33EEE5) }},
    { tag: "李宇春", weight: 1.88,labelSettings: {fill:am5.color(0x185A32) }},
    { tag: "洛天依", weight: 1.74,labelSettings: {fill:am5.color(0x4AE6C7) }},
    { tag: "楊宗緯", weight: 1.33,labelSettings: {fill:am5.color(0xC0B9C0) }},
    { tag: "陳慧嫻", weight: 1.29,labelSettings: {fill:am5.color(0xEE3598) }},
    { tag: "田馥甄", weight: 0.97,labelSettings: {fill:am5.color(0xAA35C9) }},
    { tag: "胡彥斌", weight: 0.79,labelSettings: {fill:am5.color(0x7CFE72) }},
    { tag: "容祖兒", weight: 0.65,labelSettings: {fill:am5.color(0x01D63B) }},
    { tag: "張惠妹", weight: 0.56,labelSettings: {fill:am5.color(0x0AC94D) }},
    { tag: "趙雷", weight: 0.53, labelSettings: { fill: am5.color(0x85FFC4) } },
  ]);
  
  }); // end am5.ready()