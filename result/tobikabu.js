// -------- debug --------
DEBUG_FLAG = false;
function debug(text) {
  if (DEBUG_FLAG) {
    debugblock.innerHTML += 'debug: ' + text + '<br />';
  }
}
// -------- debug --------

// -------- version --------
_version = 'ver β1.0.2';
function setVerInfo() {
  verInfo.innerHTML = '（' + _version + '）';
}
// -------- version --------

// -------- const --------
SUN = 0;
MON1 = 1;
MON2 = 2;
TUE1 = 3;
TUE2 = 4;
WED1 = 5;
WED2 = 6;
THU1 = 7;
THU2 = 8;
FRI1 = 9;
FRI2 = 10;
SAT1 = 11;
SAT2 = 12;
DAY_COUNT = 13;
// -------- const --------
// -------- class --------
/// 【クラス】取りうる売値の範囲
function PriceRanges(priceMins, priceMaxs, isInRange) {
  this.priceMins = new Array(DAY_COUNT);
  this.priceMaxs = new Array(DAY_COUNT);
  for (var i = 0; i < DAY_COUNT; i++) {
    this.priceMins[i] = i in priceMins && priceMins[i] ? Math.max(priceMins[i], 1) : 1;
    this.priceMaxs[i] = i in priceMaxs && priceMaxs[i] ? Math.max(priceMaxs[i], 1) : Number.MAX_VALUE;
  }
  this.isInRange = isInRange;
}
// -------- class --------

// 結果表示欄をクリア
function resetResult() {
  resultblock.innerHTML = '';
  debugblock.innerHTML = '';
  return;
}
// 結果表示欄に結果を表示
function setResult(resultText) {
  resultblock.innerHTML = resultText;
  return;
}

// 買値比を小数点以下第４位で四捨五入した数を文字列にして返す
function stdPriceText(buy, sell) {
  if (buy && sell && buy != 0) {
    var sp = Math.round((sell * 1000) / buy);
    return Math.floor(sp / 1000) + '.' + (Math.floor(sp / 100) % 10) + (Math.floor(sp / 10) % 10) + (sp % 10);
  } else {
    // 0, -0, null, NaN, undefined の時
    return '?.???';
  }
}

// 波型の山／谷の文字列
function namiDetailText(taniSPeriod1, taniLPeriod1) {
  var yamaTani = '';
  switch (taniSPeriod1) {
    case MON1:
      yamaTani += 'A';
      break;
    case MON2:
      yamaTani += 'B';
      break;
    case TUE1:
      yamaTani += 'C';
      break;
    case TUE2:
      yamaTani += 'D';
      break;
    case WED1:
      yamaTani += 'E';
      break;
    case WED2:
      yamaTani += 'F';
      break;
    case THU1:
      yamaTani += 'G';
      break;
    case THU2:
      yamaTani += 'H';
      break;
    case FRI1:
      yamaTani += 'I';
      break;
    case FRI2:
      yamaTani += 'J';
      break;
    case SAT1:
      yamaTani += 'K';
      break;
    case SAT2:
      yamaTani += 'L';
      break;
    default:
      return '';
  }
  switch (taniLPeriod1) {
    case MON1:
      yamaTani += 'A';
      break;
    case MON2:
      yamaTani += 'B';
      break;
    case TUE1:
      yamaTani += 'C';
      break;
    case TUE2:
      yamaTani += 'D';
      break;
    case WED1:
      yamaTani += 'E';
      break;
    case WED2:
      yamaTani += 'F';
      break;
    case THU1:
      yamaTani += 'G';
      break;
    case THU2:
      yamaTani += 'H';
      break;
    case FRI1:
      yamaTani += 'I';
      break;
    case FRI2:
      yamaTani += 'J';
      break;
    case SAT1:
      yamaTani += 'K';
      break;
    case SAT2:
      yamaTani += 'L';
      break;
    default:
      return '';
  }
  //	yamaTani += "［<span class='namiDetail' title='";
  yamaTani += '［';
  for (var i = MON1; i <= SAT2; i++) {
    if ((i - MON1) % 2 == 0 && i > MON1) {
      yamaTani += ',';
    }
    if ((taniSPeriod1 <= i && i <= taniSPeriod1 + 1) || (taniLPeriod1 <= i && i <= taniLPeriod1 + 2)) {
      yamaTani += '谷';
    } else {
      yamaTani += '山';
    }
  }
  //	yamaTani += "'>詳細</span>］";
  yamaTani += '］';
  return yamaTani;
}

function buyRangeText(buys) {
  if (buys.length == 0) {
    return ' ';
  }

  var buyMin = 90;
  var buyMax = 110;
  var hasPrices = new Array(buyMax - buyMin + 1);
  for (var buy = buyMin; buy <= buyMax; buy++) {
    var index = buy - buyMin;
    hasPrices[index] = false;
  }
  for (var i = 0; i < buys.length; i++) {
    if (buys[i] && buys[i] - 0 && buyMin <= buys[i] && buys[i] <= buyMax) {
      var index = buys[i] - buyMin;
      hasPrices[index] = true;
    }
  }

  var text = '';
  var lastValue = undefined;
  for (var buy = buyMin; buy <= buyMax; buy++) {
    var index = buy - buyMin;
    if ((buy == buyMin || !hasPrices[index - 1]) && hasPrices[index]) {
      if (lastValue) {
        text += ',';
      }
      text += buy;
      lastValue = buy;
    }
    if ((buy == buyMax || !hasPrices[index + 1]) && hasPrices[index]) {
      if (buy != lastValue) {
        text += '～' + buy;
      }
    }
  }
  return text;
}

// 結果の表の行を作る
function makeResultTableRow(pattern, detail, buys, prices, priceMins, priceMaxs) {
  var resultText = '';
  resultText += '<tr>';

  // 型
  if (detail) {
    resultText += '<th>' + pattern + '</th><th>' + detail + '</th>';
  } else {
    resultText += "<th colspan='2'>" + pattern + '</th>';
  }

  // 買値
  resultText += "<td class='buy'>" + buyRangeText(buys) + '</td>';

  // 売値
  for (var i = MON1; i <= SAT2; i++) {
    resultText += '<td>';
    if (prices[i]) {
      //			resultText += "<span class='bell'>" + prices[i] + "</span>";
      resultText += prices[i];
    } else if (priceMins[i] && priceMaxs[i]) {
      //			resultText += "<span class='bell'>" + priceMins[i] + "</span>～<span class='bell'>" + priceMaxs[i] + "</span>";
      resultText += priceMins[i] + '～' + priceMaxs[i];
    } else {
      resultText += ' ';
    }
    resultText += '</td>';
  }
  resultText += '</tr>\n';

  return resultText;
}

// 取りうる売値の範囲を求める
function calcPriceRanges(buy, prices, methods, borderMins, borderMaxs) {
  var priceMins = new Array(DAY_COUNT);
  var priceMaxs = new Array(DAY_COUNT);
  var isInRange = true;

  // 前から
  for (var i = MON1; i <= SAT2; i++) {
    switch (methods[i]) {
      case METHOD_PRICE:
        priceMins[i] = roundingL(borderMins[i] - _errorAllowance);
        priceMaxs[i] = roundingU(borderMaxs[i] + _errorAllowance);
        break;
      case METHOD_SP:
        priceMins[i] = roundingL((buy * borderMins[i]) / 100 - _errorAllowance);
        priceMaxs[i] = roundingU((buy * borderMaxs[i]) / 100 + _errorAllowance);
        break;
      case METHOD_PRICE_DIFF:
        if (i == MON1) {
          priceMins[i] = roundingL(buy + borderMins[i] - _errorAllowance);
          priceMaxs[i] = roundingU(buy + borderMaxs[i] + _errorAllowance);
        } else if (prices[i - 1]) {
          priceMins[i] = roundingL(prices[i - 1] + borderMins[i] - _errorAllowance);
          priceMaxs[i] = roundingU(prices[i - 1] + borderMaxs[i] + _errorAllowance);
        } else {
          priceMins[i] = roundingL(priceMins[i - 1] + borderMins[i] - _errorAllowance);
          priceMaxs[i] = roundingU(priceMaxs[i - 1] + borderMaxs[i] + _errorAllowance);
        }
        break;
      case METHOD_SP_DIFF:
        var spMin = 0;
        var spMax = 0;
        for (var j = i; j >= MON1; j--) {
          if (prices[j] && j != i) {
            priceMins[i] = roundingL(prices[j] + (buy * spMin) / 100 - _errorAllowance);
            priceMaxs[i] = roundingU(prices[j] + (buy * spMax) / 100 + _errorAllowance);
            break;
          } else if (methods[j] == METHOD_PRICE || methods[j] == METHOD_PRICE_DIFF || methods[j] == METHOD_PRICE_RATIO) {
            priceMins[i] = roundingL(priceMins[j] + (buy * spMin) / 100 - _errorAllowance);
            priceMaxs[i] = roundingU(priceMaxs[j] + (buy * spMax) / 100 + _errorAllowance);
            break;
          } else if (methods[j] == METHOD_SP) {
            spMin += borderMins[j];
            spMax += borderMaxs[j];
            priceMins[i] = roundingL((buy * spMin) / 100 - _errorAllowance);
            priceMaxs[i] = roundingU((buy * spMax) / 100 + _errorAllowance);
            break;
          } else if (methods[j] == METHOD_SP_DIFF) {
            spMin += borderMins[j];
            spMax += borderMaxs[j];
            if (j == MON1) {
              spMin += 100;
              spMax += 100;
              priceMins[i] = roundingL((buy * spMin) / 100 - _errorAllowance);
              priceMaxs[i] = roundingU((buy * spMax) / 100 + _errorAllowance);
              break;
            }
            continue;
          } else {
            priceMins[i] = undefined;
            priceMaxs[i] = undefined;
            break;
          }
        }
        break;
      case METHOD_PRICE_RATIO:
        if (i == MON1) {
          priceMins[i] = roundingL((buy * borderMins[i]) / 100 - _errorAllowance);
          priceMaxs[i] = roundingU((buy * borderMaxs[i]) / 100 + _errorAllowance);
        } else if (prices[i - 1]) {
          priceMins[i] = roundingL((prices[i - 1] * borderMins[i]) / 100 - _errorAllowance);
          priceMaxs[i] = roundingU((prices[i - 1] * borderMaxs[i]) / 100 + _errorAllowance);
        } else {
          priceMins[i] = roundingL((priceMins[i - 1] * borderMins[i]) / 100 - _errorAllowance);
          priceMaxs[i] = roundingU((priceMaxs[i - 1] * borderMaxs[i]) / 100 + _errorAllowance);
        }
        break;
      default:
        priceMins[i] = undefined;
        priceMaxs[i] = undefined;
        break;
    }
  }

  // 後ろから
  for (var i = SAT2; i >= MON2; i--) {
    var priceMinNew = undefined;
    var priceMaxNew = undefined;

    switch (methods[i]) {
      case METHOD_PRICE:
      case METHOD_SP:
        // NOP
        break;
      case METHOD_PRICE_DIFF:
        if (prices[i]) {
          priceMinNew = roundingL(prices[i] - borderMaxs[i] - _errorAllowance);
          priceMaxNew = roundingU(prices[i] - borderMins[i] + _errorAllowance);
        } else {
          priceMinNew = roundingL(priceMins[i] - borderMaxs[i] - _errorAllowance);
          priceMaxNew = roundingU(priceMaxs[i] - borderMins[i] + _errorAllowance);
        }
        break;
      case METHOD_SP_DIFF:
        var spMin = 0;
        var spMax = 0;
        for (var j = i; j <= SAT2; j++) {
          if (methods[j] == METHOD_PRICE || methods[j] == METHOD_SP) {
            break;
          } else if (methods[j] == METHOD_PRICE_DIFF || methods[j] == METHOD_PRICE_RATIO) {
            if (prices[j - 1]) {
              priceMinNew = roundingL(prices[j - 1] - (buy * spMax) / 100 - _errorAllowance);
              priceMaxNew = roundingU(prices[j - 1] - (buy * spMin) / 100 + _errorAllowance);
              break;
            } else {
              priceMinNew = roundingL(priceMins[j - 1] - (buy * spMax) / 100 - _errorAllowance);
              priceMaxNew = roundingU(priceMaxs[j - 1] - (buy * spMin) / 100 + _errorAllowance);
              break;
            }
          } else if (methods[j] == METHOD_SP_DIFF) {
            spMin += borderMins[j];
            spMax += borderMaxs[j];
            if (prices[j]) {
              priceMinNew = roundingL(prices[j] - (buy * spMax) / 100 - _errorAllowance);
              priceMaxNew = roundingU(prices[j] - (buy * spMin) / 100 + _errorAllowance);
              break;
            } else {
              continue;
            }
          } else {
            //					priceMins[i] = undefined;
            //					priceMaxs[i] = undefined;
            break;
          }
        }
        break;
      case METHOD_PRICE_RATIO:
        if (prices[i]) {
          priceMinNew = roundingL((prices[i] * 100) / borderMaxs[i] - _errorAllowance);
          priceMaxNew = roundingU((prices[i] * 100) / borderMins[i] + _errorAllowance);
        } else {
          priceMinNew = roundingL((priceMins[i] * 100) / borderMaxs[i] - _errorAllowance);
          priceMaxNew = roundingU((priceMaxs[i] * 100) / borderMins[i] + _errorAllowance);
        }
        break;
      default:
        //			priceMins[i] = undefined;
        //			priceMaxs[i] = undefined;
        break;
    }

    if (priceMinNew) {
      priceMins[i - 1] = priceMins[i - 1] ? Math.max(priceMins[i - 1], priceMinNew) : priceMinNew;
    }
    if (priceMaxNew) {
      priceMaxs[i - 1] = priceMaxs[i - 1] ? Math.min(priceMaxs[i - 1], priceMaxNew) : priceMaxNew;
    }
  }

  for (var i = MON1; i <= SAT2; i++) {
    if (prices[i] && priceMins[i] && priceMaxs[i]) {
      isInRange &= priceMins[i] <= prices[i] && prices[i] <= priceMaxs[i];
    }
  }
  return new PriceRanges(priceMins, priceMaxs, isInRange);
}
// 波型チェック
function checkNami(buyL, buyU, prices) {
  var namiTaniSPeriod1s = new Array(
    false,
    _namiTaniSMonAm,
    _namiTaniSMonPm,
    _namiTaniSTueAm,
    _namiTaniSTuePm,
    _namiTaniSWedAm,
    _namiTaniSWedPm,
    _namiTaniSThuAm,
    _namiTaniSThuPm,
    _namiTaniSFriAm,
    _namiTaniSFriPm,
    _namiTaniSSatAm,
    _namiTaniSSatPm
  );
  var namiTaniLPeriod1s = new Array(
    false,
    _namiTaniLMonAm,
    _namiTaniLMonPm,
    _namiTaniLTueAm,
    _namiTaniLTuePm,
    _namiTaniLWedAm,
    _namiTaniLWedPm,
    _namiTaniLThuAm,
    _namiTaniLThuPm,
    _namiTaniLFriAm,
    _namiTaniLFriPm,
    _namiTaniLSatAm,
    _namiTaniLSatPm
  );

  var text = '';
  for (var i = MON1; i <= SAT2; i++) {
    if (!namiTaniSPeriod1s[i]) {
      continue;
    }
    for (var j = MON1; j <= SAT2; j++) {
      if (!namiTaniLPeriod1s[j]) {
        continue;
      } else if (j - i == -3 || j - i == 2) {
        // ５連谷になる場合
        continue;
      } else if (-3 < j - i && j - i < 2) {
        // ８山以上になる場合
        continue;
      }

      var methods = new Array(DAY_COUNT);
      var borderMins = new Array(DAY_COUNT);
      var borderMaxs = new Array(DAY_COUNT);
      for (var k = MON1; k <= SAT2; k++) {
        if (k == i) {
          methods[k] = _namiTaniS1Method;
          borderMins[k] = _namiTaniS1Min;
          borderMaxs[k] = _namiTaniS1Max;
        } else if (k == i + 1) {
          methods[k] = _namiTaniS2Method;
          borderMins[k] = _namiTaniS2Min;
          borderMaxs[k] = _namiTaniS2Max;
        } else if (k == j) {
          methods[k] = _namiTaniL1Method;
          borderMins[k] = _namiTaniL1Min;
          borderMaxs[k] = _namiTaniL1Max;
        } else if (k == j + 1) {
          methods[k] = _namiTaniL2Method;
          borderMins[k] = _namiTaniL2Min;
          borderMaxs[k] = _namiTaniL2Max;
        } else if (k == j + 2) {
          methods[k] = _namiTaniL3Method;
          borderMins[k] = _namiTaniL3Min;
          borderMaxs[k] = _namiTaniL3Max;
        } else {
          methods[k] = _namiYamaMethod;
          borderMins[k] = _namiYamaMin;
          borderMaxs[k] = _namiYamaMax;
        }
      }

      var buys = new Array();
      var priceMins = new Array(DAY_COUNT);
      var priceMaxs = new Array(DAY_COUNT);
      for (var buy = buyL; buy <= buyU; buy++) {
        var pr = calcPriceRanges(buy, prices, methods, borderMins, borderMaxs);
        if (pr.isInRange) {
          buys.push(buy);
          for (var k = MON1; k <= SAT2; k++) {
            priceMins[k] = priceMins[k] ? Math.min(priceMins[k], pr.priceMins[k]) : pr.priceMins[k];
            priceMaxs[k] = priceMaxs[k] ? Math.max(priceMaxs[k], pr.priceMaxs[k]) : pr.priceMaxs[k];
          }
        }
      }
      if (buys.length > 0) {
        text += makeResultTableRow('웨이브', namiDetailText(i, j), buys, prices, priceMins, priceMaxs);
      }
    }
  }
  return text;
}
// ジリ貧型チェック
function checkJiri(buyL, buyU, prices) {
  var methods = new Array(DAY_COUNT);
  var borderMins = new Array(DAY_COUNT);
  var borderMaxs = new Array(DAY_COUNT);
  for (var i = MON1; i <= SAT2; i++) {
    methods[i] = i == MON1 ? _jiriMonAmMethod : _jiriOtherMethod;
    borderMins[i] = i == MON1 ? _jiriMonAmMin : _jiriOtherMin;
    borderMaxs[i] = i == MON1 ? _jiriMonAmMax : _jiriOtherMax;
  }

  var text = '';
  var buys = new Array();
  var priceMins = new Array(DAY_COUNT);
  var priceMaxs = new Array(DAY_COUNT);
  for (var buy = buyL; buy <= buyU; buy++) {
    var pr = calcPriceRanges(buy, prices, methods, borderMins, borderMaxs);
    if (pr.isInRange) {
      buys.push(buy);
      for (var i = MON1; i <= SAT2; i++) {
        priceMins[i] = priceMins[i] ? Math.min(priceMins[i], pr.priceMins[i]) : pr.priceMins[i];
        priceMaxs[i] = priceMaxs[i] ? Math.max(priceMaxs[i], pr.priceMaxs[i]) : pr.priceMaxs[i];
      }
    }
  }
  if (buys.length > 0) {
    text += makeResultTableRow('시세 하락', '', buys, prices, priceMins, priceMaxs);
  }
  return text;
}
// ３期型チェック
function checkFev3(buyL, buyU, prices) {
  var fev3Period1s = new Array(
    false,
    _fev3MonAm,
    _fev3MonPm,
    _fev3TueAm,
    _fev3TuePm,
    _fev3WedAm,
    _fev3WedPm,
    _fev3ThuAm,
    _fev3ThuPm,
    _fev3FriAm,
    _fev3FriPm,
    _fev3SatAm,
    _fev3SatPm
  );
  var details = new Array(
    '',
    '월요일 오전 징조',
    '월요일 오후 징조',
    '화요일 오전 징조',
    '화요일 오후 징조',
    '수요일 오전 징조',
    '수요일 오후 징조',
    '목요일 오전 징조',
    '목요일 오후 징조',
    '금요일 오전 징조',
    '금요일 오전 징조',
    '토요일 오전 징조',
    '토요일 오후 징조'
  );

  var text = '';
  for (var i = MON1; i <= SAT2; i++) {
    if (!fev3Period1s[i]) {
      continue;
    }

    var methods = new Array(DAY_COUNT);
    var borderMins = new Array(DAY_COUNT);
    var borderMaxs = new Array(DAY_COUNT);
    for (var j = MON1; j < i; j++) {
      methods[j] = j == MON1 ? _fev3MonAmMethod : _fev3BeforeMethod;
      borderMins[j] = j == MON1 ? _fev3MonAmMin : _fev3BeforeMin;
      borderMaxs[j] = j == MON1 ? _fev3MonAmMax : _fev3BeforeMax;
    }
    for (var j = i; j <= SAT2; j++) {
      switch (j - i) {
        case 0:
          methods[j] = _fev3Period1Method;
          borderMins[j] = _fev3Period1Min;
          borderMaxs[j] = _fev3Period1Max;
          break;
        case 1:
          methods[j] = _fev3Period2Method;
          borderMins[j] = _fev3Period2Min;
          borderMaxs[j] = _fev3Period2Max;
          break;
        case 2:
          methods[j] = _fev3Period3Method;
          borderMins[j] = _fev3Period3Min;
          borderMaxs[j] = _fev3Period3Max;
          break;
        case 3:
          methods[j] = _fev3Period4Method;
          borderMins[j] = _fev3Period4Min;
          borderMaxs[j] = _fev3Period4Max;
          break;
        case 4:
          methods[j] = _fev3Period5Method;
          borderMins[j] = _fev3Period5Min;
          borderMaxs[j] = _fev3Period5Max;
          break;
        case 5:
          methods[j] = _fev3Period6Method;
          borderMins[j] = _fev3Period6Min;
          borderMaxs[j] = _fev3Period6Max;
          break;
        default:
          methods[j] = _fev3AfterMethod;
          borderMins[j] = _fev3AfterMin;
          borderMaxs[j] = _fev3AfterMax;
          break;
      }
    }

    var buys = new Array();
    var priceMins = new Array(DAY_COUNT);
    var priceMaxs = new Array(DAY_COUNT);
    for (var buy = buyL; buy <= buyU; buy++) {
      var pr = calcPriceRanges(buy, prices, methods, borderMins, borderMaxs);
      if (pr.isInRange) {
        buys.push(buy);
        for (var j = MON1; j <= SAT2; j++) {
          priceMins[j] = priceMins[j] ? Math.min(priceMins[j], pr.priceMins[j]) : pr.priceMins[j];
          priceMaxs[j] = priceMaxs[j] ? Math.max(priceMaxs[j], pr.priceMaxs[j]) : pr.priceMaxs[j];
        }
      }
    }
    if (buys.length > 0) {
      text += makeResultTableRow('３기형', details[i], buys, prices, priceMins, priceMaxs);
    }
  }
  return text;
}
// ４期型チェック
function checkFev4(buyL, buyU, prices) {
  var fev4Period1s = new Array(
    false,
    _fev4MonAm,
    _fev4MonPm,
    _fev4TueAm,
    _fev4TuePm,
    _fev4WedAm,
    _fev4WedPm,
    _fev4ThuAm,
    _fev4ThuPm,
    _fev4FriAm,
    _fev4FriPm,
    _fev4SatAm,
    _fev4SatPm
  );
  var details = new Array(
    '',
    '월요일 오전 징조',
    '월요일 오후 징조',
    '화요일 오전 징조',
    '화요일 오후 징조',
    '수요일 오전 징조',
    '수요일 오후 징조',
    '목요일 오전 징조',
    '목요일 오후 징조',
    '금요일 오전 징조',
    '금요일 오전 징조',
    '토요일 오전 징조',
    '토요일 오후 징조'
  );

  var text = '';
  for (var i = MON1; i <= SAT2; i++) {
    if (!fev4Period1s[i]) {
      continue;
    }

    var methods = new Array(DAY_COUNT);
    var borderMins = new Array(DAY_COUNT);
    var borderMaxs = new Array(DAY_COUNT);
    for (var j = MON1; j < i; j++) {
      methods[j] = j == MON1 ? _fev4MonAmMethod : _fev4BeforeMethod;
      borderMins[j] = j == MON1 ? _fev4MonAmMin : _fev4BeforeMin;
      borderMaxs[j] = j == MON1 ? _fev4MonAmMax : _fev4BeforeMax;
    }
    for (var j = i; j <= SAT2; j++) {
      switch (j - i) {
        case 0:
          methods[j] = _fev4Period1Method;
          borderMins[j] = _fev4Period1Min;
          borderMaxs[j] = _fev4Period1Max;
          break;
        case 1:
          methods[j] = _fev4Period2Method;
          borderMins[j] = _fev4Period2Min;
          borderMaxs[j] = _fev4Period2Max;
          break;
        case 2:
          methods[j] = _fev4Period3Method;
          borderMins[j] = _fev4Period3Min;
          borderMaxs[j] = _fev4Period3Max;
          break;
        case 3:
          methods[j] = _fev4Period4Method;
          borderMins[j] = _fev4Period4Min;
          borderMaxs[j] = _fev4Period4Max;
          break;
        case 4:
          methods[j] = _fev4Period5Method;
          borderMins[j] = _fev4Period5Min;
          borderMaxs[j] = _fev4Period5Max;
          break;
        case 5:
          methods[j] = _fev4Period6Method;
          borderMins[j] = _fev4Period6Min;
          borderMaxs[j] = _fev4Period6Max;
          break;
        default:
          methods[j] = _fev4AfterMethod;
          borderMins[j] = _fev4AfterMin;
          borderMaxs[j] = _fev4AfterMax;
          break;
      }
    }

    var buys = new Array();
    var priceMins = new Array(DAY_COUNT);
    var priceMaxs = new Array(DAY_COUNT);
    for (var buy = buyL; buy <= buyU; buy++) {
      var pr = calcPriceRanges(buy, prices, methods, borderMins, borderMaxs);
      if (pr.isInRange) {
        buys.push(buy);
        for (var j = MON1; j <= SAT2; j++) {
          priceMins[j] = priceMins[j] ? Math.min(priceMins[j], pr.priceMins[j]) : pr.priceMins[j];
          priceMaxs[j] = priceMaxs[j] ? Math.max(priceMaxs[j], pr.priceMaxs[j]) : pr.priceMaxs[j];
        }
      }
    }
    // 第４期がピークになるように予想値を変更する（※応急処置：設定に汎用性がないため要修正）
    if (_fev4Period4IsPeak) {
      if (i + 3 > SAT2) {
        // NOP
      } else if (prices[i + 3]) {
        // 第４期のカブ価が入力されている場合
        if (!prices[i + 2] && priceMaxs[i + 2] > prices[i + 3]) {
          // 第３期のカブ価が未入力で、第３期の予想値の最大値が第４期のカブ価を越えている場合
          priceMaxs[i + 2] = prices[i + 3];
        }
        if (i + 4 <= SAT2 && !prices[i + 4] && priceMaxs[i + 4] > prices[i + 3]) {
          // 第５期のカブ価が未入力で、第５期の予想値の最大値が第４期のカブ価を越えている場合
          priceMaxs[i + 4] = prices[i + 3];
        }
      } else {
        // 第４期のカブ価が未入力の場合
        if (prices[i + 2] && priceMins[i + 3] < prices[i + 2]) {
          // 第４期の予想値の最小値が第３期のカブ価を下回る場合
          priceMins[i + 3] = prices[i + 2];
        }
        if (i + 4 <= SAT2 && prices[i + 4] && priceMins[i + 3] < prices[i + 4]) {
          // 第４期の予想値の最小値が第５期のカブ価を下回る場合
          priceMins[i + 3] = prices[i + 4];
        }
      }
    }
    if (buys.length > 0) {
      text += makeResultTableRow('４기형', details[i], buys, prices, priceMins, priceMaxs);
    }
  }
  return text;
}
// カブ価分析
function analyze(prices) {
  var buyL = prices[SUN] && prices[SUN] > 0 ? prices[SUN] : 90;
  var buyU = prices[SUN] && prices[SUN] > 0 ? prices[SUN] : 110;

  var resultText = '';
  resultText += '<p>\n';
  resultText += "<table class='result'><tbody>\n";
  resultText += "<tr><th rowspan='2' colspan='2'>형태</th><th class='buy' rowspan='2'>판매가</th><th colspan='12'>매매・예측매매</th></tr>\n";
  resultText +=
    '<tr><th>월AM</th><th>월PM</th><th>화AM</th><th>화PM</th><th>수AM</th><th>수PM</th><th>목AM</th><th>목PM</th><th>금AM</th><th>금PM</th><th>토AM</th><th>토PM</th></tr>\n';
  resultText += "<tr><th colspan='2'>（입력값）</th>";
  for (var i = SUN; i <= SAT2; i++) {
    resultText += '<td>';
    if (prices[i]) {
      resultText += "<span class='bell'>" + prices[i] + '</span>';
      if (i != SUN && prices[SUN]) {
        resultText += "<br /><span class='sp'>(" + stdPriceText(prices[SUN], prices[i]) + ')</span>';
      }
    } else {
      resultText += ' ';
    }
    resultText += '</td>';
  }
  resultText += '</tr>\n';
  resultText += "<tr><th colspan='15'> </th></tr>\n"; // 区切り線

  var hasResult = false;
  // 波型チェック
  var resultTextNami = checkNami(buyL, buyU, prices);
  if (resultTextNami) {
    resultText += resultTextNami;
    hasResult = true;
  }
  // ジリ貧型チェック
  var resultTextJiri = checkJiri(buyL, buyU, prices);
  if (resultTextJiri) {
    resultText += resultTextJiri;
    hasResult = true;
  }
  // ３期型チェック
  var resultTextFev3 = checkFev3(buyL, buyU, prices);
  if (resultTextFev3) {
    resultText += resultTextFev3;
    hasResult = true;
  }
  // ４期型チェック
  var resultTextFev4 = checkFev4(buyL, buyU, prices);
  if (resultTextFev4) {
    resultText += resultTextFev4;
    hasResult = true;
  }
  if (!hasResult) {
    resultText += "<tr><td colspan='15'>該当なし</td></tr>\n";
  }

  resultText += '</table></tbody>\n';
  resultText += '</p>\n';
  resultText += '<br />\n';
  resultText += '</div>\n';
  return resultText;
}

function calc(array) {
  // オプション値を取得
  getOption();

  var prices = new Array(DAY_COUNT);
  for (var i = 0; i < prices.length; i++) {
    if (i in array) {
      if (array[i] == null || array[i] == undefined || array[i] == '') {
        prices[i] = undefined;
      } else {
        array[i] = array[i].replace(/０/g, '0'); // "０"を"0"に置換
        array[i] = array[i].replace(/１/g, '1'); // "１"を"1"に置換
        array[i] = array[i].replace(/２/g, '2'); // "２"を"2"に置換
        array[i] = array[i].replace(/３/g, '3'); // "３"を"3"に置換
        array[i] = array[i].replace(/４/g, '4'); // "４"を"4"に置換
        array[i] = array[i].replace(/５/g, '5'); // "５"を"5"に置換
        array[i] = array[i].replace(/６/g, '6'); // "６"を"6"に置換
        array[i] = array[i].replace(/７/g, '7'); // "７"を"7"に置換
        array[i] = array[i].replace(/８/g, '8'); // "８"を"8"に置換
        array[i] = array[i].replace(/９/g, '9'); // "９"を"9"に置換
        prices[i] = array[i] - 0; // 文字列を数に変換
      }
    } else {
      prices[i] = undefined;
    }
  }

  // カブ価を分析
  var resultText = analyze(prices);
  setResult(resultText);
  return;
}
