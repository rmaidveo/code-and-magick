'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var NAME_X = 250;
var GAP = 10;
var HORIZONT_GAP = 50;
var BAR_WIDTH = 40;
var TEXT_WIDTH = 20;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var renderText = function (ctx, text, x, y, font, color) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
};

var getRandomColor = function () {
  return 'hsl(235, 100%,' + Math.random() * 100 + '%';
};

var getColorByName = function (names) {
  if (names === `Вы`) {
    return `rgba(255, 0, 0, 1)`;
  }
  return getRandomColor();
};

var renderHistogram = function (ctx, times, maxTime, names) {
  for (var i = 0; i < names.length; i++) {
    var GAP_X = CLOUD_X + HORIZONT_GAP + (BAR_WIDTH + HORIZONT_GAP) * i;
    var BAR_HEIGTH = Math.round((BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = getColorByName(names[i]);
    ctx.fillRect(GAP_X, NAME_X - GAP, BAR_WIDTH, -BAR_HEIGTH);
    renderText(ctx, names[i], GAP_X, NAME_X, 'PT Mono', '#000');
    renderText(ctx, Math.round(times[i]), GAP_X, NAME_X - TEXT_WIDTH - BAR_HEIGTH - GAP, 'PT Mono', '#000');
  }
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderHistogram(ctx, times, maxTime, names);
  renderText(ctx, 'Ура вы победили!', CLOUD_X + TEXT_WIDTH, CLOUD_Y + TEXT_WIDTH, 'PT Mono', '#000');
  renderText(ctx, 'Список результатов:', CLOUD_X + TEXT_WIDTH, CLOUD_Y + TEXT_WIDTH * 2, 'PT Mono', '#000');
};
