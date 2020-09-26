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

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    if (names[i] === "Вы") {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(235, 54%,' + Math.random() * 100 + '%';
    }
    var GAP_X = CLOUD_X + HORIZONT_GAP + (BAR_WIDTH + HORIZONT_GAP) * i;
    ctx.fillRect(GAP_X, NAME_X - TEXT_WIDTH, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    renderText(ctx, names[i], GAP_X, NAME_X, 'PT Mono', '#000');
    renderText(ctx, Math.round(times[i]), GAP_X, NAME_X - GAP - TEXT_WIDTH - (BAR_HEIGHT * times[i]) / maxTime - GAP, 'PT Mono', '#000');
  }
  renderText(ctx, 'Ура вы победили!', CLOUD_X + TEXT_WIDTH, CLOUD_Y + TEXT_WIDTH, 'PT Mono', '#000');
  renderText(ctx, 'Список результатов:', CLOUD_X + TEXT_WIDTH, CLOUD_Y + TEXT_WIDTH * 2, 'PT Mono', '#000');
};
