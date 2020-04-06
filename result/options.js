// -------- const --------
VERSION_CUSTOM_INDEX = 0;
VERSION_MUJIRUSHI_INDEX = 1;
VERSION_PLUS_INDEX = 2;
VERSION_EPLUS_INDEX = 3;
VERSION_OIMORI_INDEX = 4;
VERSION_MACHIMORI_INDEX = 5;
VERSION_TOBIMORI_INDEX = 6;
VERSION_COUNT = 7;

METHOD_NONE = 0;
METHOD_PRICE = 1;
METHOD_SP = 2;
METHOD_PRICE_DIFF = 3;
METHOD_SP_DIFF = 4;
METHOD_PRICE_RATIO = 5;

NAMI_TANI_S_MON1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, true, true);
NAMI_TANI_S_MON2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, true, true);
NAMI_TANI_S_TUE1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, true, true);
NAMI_TANI_S_TUE2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, true);
NAMI_TANI_S_WED1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, true);
NAMI_TANI_S_WED2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, true);
NAMI_TANI_S_THU1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, true);
NAMI_TANI_S_THU2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, true, false, true);
NAMI_TANI_S_FRI1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, true, true);
NAMI_TANI_S_FRI2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, true, true);
NAMI_TANI_S_SAT1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, true, true);
NAMI_TANI_S_SAT2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, false);
NAMI_TANI_L_MON1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, true, true);
NAMI_TANI_L_MON2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, true, true, true);
NAMI_TANI_L_TUE1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, true, true);
NAMI_TANI_L_TUE2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, true);
NAMI_TANI_L_WED1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, true);
NAMI_TANI_L_WED2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, true);
NAMI_TANI_L_THU1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, true);
NAMI_TANI_L_THU2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, true, true);
NAMI_TANI_L_FRI1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, true, true);
NAMI_TANI_L_FRI2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, true, true);
NAMI_TANI_L_SAT1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, false);
NAMI_TANI_L_SAT2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, false);
FEV3_MON1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, false);
FEV3_MON2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, true);
FEV3_TUE1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, true);
FEV3_TUE2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, true);
FEV3_WED1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, true, true, true);
FEV3_WED2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, true, true, true);
FEV3_THU1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, true, true, true);
FEV3_THU2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, true, true, true);
FEV3_FRI1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, false);
FEV3_FRI2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, false);
FEV3_SAT1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, false);
FEV3_SAT2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, false);
FEV4_MON1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, true);
FEV4_MON2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, true);
FEV4_TUE1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, true, false, true);
FEV4_TUE2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, true, true, true);
FEV4_WED1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, true, true, true);
FEV4_WED2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, true, true, true);
FEV4_THU1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, true, true, true);
FEV4_THU2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, true, true, true);
FEV4_FRI1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, false);
FEV4_FRI2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, false);
FEV4_SAT1_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, false);
FEV4_SAT2_DEFAULTS = new Array(undefined, undefined, undefined, undefined, false, false, false);
NAMI_YAMA_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
NAMI_YAMA_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 80, 80, 90);
NAMI_YAMA_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 140, 140, 140);
NAMI_TANI_S1_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
NAMI_TANI_S1_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 40, 60, 60);
NAMI_TANI_S1_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 80, 80, 80);
NAMI_TANI_S2_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP_DIFF, METHOD_SP_DIFF);
NAMI_TANI_S2_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 40, -10, -10);
NAMI_TANI_S2_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 80, -4, -4);
NAMI_TANI_L1_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
NAMI_TANI_L1_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 40, 60, 60);
NAMI_TANI_L1_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 80, 80, 80);
NAMI_TANI_L2_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP_DIFF, METHOD_SP_DIFF);
NAMI_TANI_L2_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 40, -10, -10);
NAMI_TANI_L2_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 80, -4, -4);
NAMI_TANI_L3_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP_DIFF, METHOD_SP_DIFF);
NAMI_TANI_L3_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 40, -10, -10);
NAMI_TANI_L3_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 80, -4, -4);
JIRI_MON1_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
JIRI_MON1_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 78, 75, 85);
JIRI_MON1_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 80, 80, 90);
JIRI_OTHER_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP_DIFF, METHOD_SP_DIFF, METHOD_SP_DIFF);
JIRI_OTHER_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, -4, -6, -6);
JIRI_OTHER_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, -1, -2, -2);
FEV3_MON1_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
FEV3_MON1_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 78, 75, 85);
FEV3_MON1_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 80, 80, 90);
FEV3_BEFORE_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP_DIFF, METHOD_SP_DIFF, METHOD_SP_DIFF);
FEV3_BEFORE_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, -4, -6, -6);
FEV3_BEFORE_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, -1, -2, -2);
FEV3_PERIOD1_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
FEV3_PERIOD1_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 80, 80, 90);
FEV3_PERIOD1_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 140, 140, 140);
FEV3_PERIOD2_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
FEV3_PERIOD2_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 140, 140, 140);
FEV3_PERIOD2_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 200, 200, 200);
FEV3_PERIOD3_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
FEV3_PERIOD3_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 200, 200, 200);
FEV3_PERIOD3_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 600, 600, 600);
FEV3_PERIOD4_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
FEV3_PERIOD4_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 140, 140, 140);
FEV3_PERIOD4_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 200, 200, 200);
FEV3_PERIOD5_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
FEV3_PERIOD5_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 80, 80, 90);
FEV3_PERIOD5_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 140, 140, 140);
FEV3_PERIOD6_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
FEV3_PERIOD6_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 78, 75, 40);
FEV3_PERIOD6_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 80, 80, 90);
FEV3_AFTER_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP_DIFF, METHOD_SP_DIFF, METHOD_SP);
FEV3_AFTER_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, -4, -6, 40);
FEV3_AFTER_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, -1, -2, 90);
FEV4_MON1_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
FEV4_MON1_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 78, 75, 40);
FEV4_MON1_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 80, 80, 90);
FEV4_BEFORE_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP_DIFF, METHOD_SP_DIFF, METHOD_SP_DIFF);
FEV4_BEFORE_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, -4, -6, -6);
FEV4_BEFORE_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, -1, -2, -2);
FEV4_PERIOD1_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
FEV4_PERIOD1_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 80, 80, 90);
FEV4_PERIOD1_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 140, 140, 140);
FEV4_PERIOD2_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
FEV4_PERIOD2_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 80, 80, 90);
FEV4_PERIOD2_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 140, 140, 140);
FEV4_PERIOD3_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
FEV4_PERIOD3_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 140, 140, 140);
FEV4_PERIOD3_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 170, 200, 190);
FEV4_PERIOD4_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
FEV4_PERIOD4_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 170, 140, 140);
FEV4_PERIOD4_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 200, 200, 200);
FEV4_PERIOD5_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
FEV4_PERIOD5_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 140, 140, 140);
FEV4_PERIOD5_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 170, 200, 190);
FEV4_PERIOD6_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP, METHOD_SP, METHOD_SP);
FEV4_PERIOD6_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 78, 75, 40);
FEV4_PERIOD6_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, 80, 80, 90);
FEV4_AFTER_METHOD_DEFAULTS = new Array(undefined, undefined, undefined, undefined, METHOD_SP_DIFF, METHOD_SP_DIFF, METHOD_SP_DIFF);
FEV4_AFTER_MIN_DEFAULTS = new Array(undefined, undefined, undefined, undefined, -4, -6, -6);
FEV4_AFTER_MAX_DEFAULTS = new Array(undefined, undefined, undefined, undefined, -1, -2, -2);
FEV4_PERIOD4_IS_PEAK_DEFAULT = new Array(undefined, undefined, undefined, undefined, true, true, true);

ROUNDING_ROUND = 0; // 四捨五入
ROUNDING_FLOOR = 1; // 切り捨て
ROUNDING_CEIL = 2; // 切り上げ
// -------- const --------
// -------- global variable --------
_roundingLMode = ROUNDING_ROUND; // 下限（Lower）の端数処理
_roundingUMode = ROUNDING_ROUND; // 上限（Upper）の端数処理
_errorAllowance = 1; // 許容誤差

_namiTaniSMonAm = NAMI_TANI_S_MON1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniSMonPm = NAMI_TANI_S_MON2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniSTueAm = NAMI_TANI_S_TUE1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniSTuePm = NAMI_TANI_S_TUE2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniSWedAm = NAMI_TANI_S_WED1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniSWedPm = NAMI_TANI_S_WED2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniSThuAm = NAMI_TANI_S_THU1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniSThuPm = NAMI_TANI_S_THU2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniSFriAm = NAMI_TANI_S_FRI1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniSFriPm = NAMI_TANI_S_FRI2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniSSatAm = NAMI_TANI_S_SAT1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniSSatPm = NAMI_TANI_S_SAT2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniLMonAm = NAMI_TANI_L_MON1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniLMonPm = NAMI_TANI_L_MON2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniLTueAm = NAMI_TANI_L_TUE1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniLTuePm = NAMI_TANI_L_TUE2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniLWedAm = NAMI_TANI_L_WED1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniLWedPm = NAMI_TANI_L_WED2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniLThuAm = NAMI_TANI_L_THU1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniLThuPm = NAMI_TANI_L_THU2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniLFriAm = NAMI_TANI_L_FRI1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniLFriPm = NAMI_TANI_L_FRI2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniLSatAm = NAMI_TANI_L_SAT1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniLSatPm = NAMI_TANI_L_SAT2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3MonAm = FEV3_MON1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3MonPm = FEV3_MON2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3TueAm = FEV3_TUE1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3TuePm = FEV3_TUE2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3WedAm = FEV3_WED1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3WedPm = FEV3_WED2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3ThuAm = FEV3_THU1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3ThuPm = FEV3_THU2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3FriAm = FEV3_FRI1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3FriPm = FEV3_FRI2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3SatAm = FEV3_SAT1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3SatPm = FEV3_SAT2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4MonAm = FEV4_MON1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4MonPm = FEV4_MON2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4TueAm = FEV4_TUE1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4TuePm = FEV4_TUE2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4WedAm = FEV4_WED1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4WedPm = FEV4_WED2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4ThuAm = FEV4_THU1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4ThuPm = FEV4_THU2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4FriAm = FEV4_FRI1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4FriPm = FEV4_FRI2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4SatAm = FEV4_SAT1_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4SatPm = FEV4_SAT2_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiYamaMethod = NAMI_YAMA_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiYamaMin = NAMI_YAMA_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiYamaMax = NAMI_YAMA_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniS1Method = NAMI_TANI_S1_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniS1Min = NAMI_TANI_S1_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniS1Max = NAMI_TANI_S1_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniS2Method = NAMI_TANI_S2_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniS2Min = NAMI_TANI_S2_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniS2Max = NAMI_TANI_S2_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniL1Method = NAMI_TANI_L1_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniL1Min = NAMI_TANI_L1_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniL1Max = NAMI_TANI_L1_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniL2Method = NAMI_TANI_L2_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniL2Min = NAMI_TANI_L2_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniL2Max = NAMI_TANI_L2_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniL3Method = NAMI_TANI_L3_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniL3Min = NAMI_TANI_L3_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_namiTaniL3Max = NAMI_TANI_L3_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_jiriMonAmMethod = JIRI_MON1_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_jiriMonAmMin = JIRI_MON1_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_jiriMonAmMax = JIRI_MON1_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_jiriOtherMethod = JIRI_OTHER_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_jiriOtherMin = JIRI_OTHER_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_jiriOtherMax = JIRI_OTHER_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3MonAmMethod = FEV3_MON1_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3MonAmMin = FEV3_MON1_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3MonAmMax = FEV3_MON1_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3BeforeMethod = FEV3_BEFORE_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3BeforeMin = FEV3_BEFORE_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3BeforeMax = FEV3_BEFORE_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period1Method = FEV3_PERIOD1_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period1Min = FEV3_PERIOD1_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period1Max = FEV3_PERIOD1_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period2Method = FEV3_PERIOD2_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period2Min = FEV3_PERIOD2_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period2Max = FEV3_PERIOD2_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period3Method = FEV3_PERIOD3_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period3Min = FEV3_PERIOD3_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period3Max = FEV3_PERIOD3_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period4Method = FEV3_PERIOD4_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period4Min = FEV3_PERIOD4_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period4Max = FEV3_PERIOD4_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period5Method = FEV3_PERIOD5_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period5Min = FEV3_PERIOD5_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period5Max = FEV3_PERIOD5_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period6Method = FEV3_PERIOD6_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period6Min = FEV3_PERIOD6_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3Period6Max = FEV3_PERIOD6_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3AfterMethod = FEV3_AFTER_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3AfterMin = FEV3_AFTER_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev3AfterMax = FEV3_AFTER_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4MonAmMethod = FEV4_MON1_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4MonAmMin = FEV4_MON1_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4MonAmMax = FEV4_MON1_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4BeforeMethod = FEV4_BEFORE_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4BeforeMin = FEV4_BEFORE_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4BeforeMax = FEV4_BEFORE_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period1Method = FEV4_PERIOD1_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period1Min = FEV4_PERIOD1_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period1Max = FEV4_PERIOD1_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period2Method = FEV4_PERIOD2_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period2Min = FEV4_PERIOD2_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period2Max = FEV4_PERIOD2_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period3Method = FEV4_PERIOD3_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period3Min = FEV4_PERIOD3_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period3Max = FEV4_PERIOD3_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period4Method = FEV4_PERIOD4_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period4Min = FEV4_PERIOD4_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period4Max = FEV4_PERIOD4_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period5Method = FEV4_PERIOD5_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period5Min = FEV4_PERIOD5_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period5Max = FEV4_PERIOD5_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period6Method = FEV4_PERIOD6_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period6Min = FEV4_PERIOD6_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period6Max = FEV4_PERIOD6_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4AfterMethod = FEV4_AFTER_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4AfterMin = FEV4_AFTER_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4AfterMax = FEV4_AFTER_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
_fev4Period4IsPeak = FEV4_PERIOD4_IS_PEAK_DEFAULT[VERSION_TOBIMORI_INDEX];
// -------- global variable --------

// 下限（Lower）の端数処理
function roundingL(x) {
  switch (_roundingLMode) {
    case ROUNDING_ROUND:
      return Math.round(x); // 四捨五入
    case ROUNDING_FLOOR:
      return Math.floor(x); // 切り捨て
    case ROUNDING_CEIL:
      return Math.ceil(x); // 切り上げ
    default:
      return Math.round(x); // 四捨五入
  }
}
// 上限（Upper）の端数処理
function roundingU(x) {
  switch (_roundingUMode) {
    case ROUNDING_ROUND:
      return Math.round(x); // 四捨五入
    case ROUNDING_FLOOR:
      return Math.floor(x); // 切り捨て
    case ROUNDING_CEIL:
      return Math.ceil(x); // 切り上げ
    default:
      return Math.round(x); // 四捨五入
  }
}

function getOption() {
  _roundingLMode = ROUNDING_ROUND;
  _roundingUMode = ROUNDING_ROUND;
  _errorAllowance = 0;

  // 詳細設定
  _namiTaniSMonAm = true;
  _namiTaniSMonPm = true;
  _namiTaniSTueAm = true;
  _namiTaniSTuePm = true;
  _namiTaniSWedAm = true;
  _namiTaniSWedPm = true;
  _namiTaniSThuAm = true;
  _namiTaniSThuPm = true;
  _namiTaniSFriAm = true;
  _namiTaniSFriPm = true;
  _namiTaniSSatAm = true;
  _namiTaniSSatPm = false;
  _namiTaniLMonAm = true;
  _namiTaniLMonPm = true;
  _namiTaniLTueAm = true;
  _namiTaniLTuePm = true;
  _namiTaniLWedAm = true;
  _namiTaniLWedPm = true;
  _namiTaniLThuAm = true;
  _namiTaniLThuPm = true;
  _namiTaniLFriAm = true;
  _namiTaniLFriPm = true;
  _namiTaniLSatAm = false;
  _namiTaniLSatPm = false;
  _fev3MonAm = false;
  _fev3MonPm = true;
  _fev3TueAm = true;
  _fev3TuePm = true;
  _fev3WedAm = true;
  _fev3WedPm = true;
  _fev3ThuAm = true;
  _fev3ThuPm = true;
  _fev3FriAm = false;
  _fev3FriPm = false;
  _fev3SatAm = false;
  _fev3SatPm = false;
  _fev4MonAm = true;
  _fev4MonPm = true;
  _fev4TueAm = true;
  _fev4TuePm = true;
  _fev4WedAm = true;
  _fev4WedPm = true;
  _fev4ThuAm = true;
  _fev4ThuPm = true;
  _fev4FriAm = false;
  _fev4FriPm = false;
  _fev4SatAm = false;
  _fev4SatPm = false;
  _namiYamaMethod = NAMI_YAMA_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiYamaMin = NAMI_YAMA_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiYamaMax = NAMI_YAMA_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiTaniS1Method = NAMI_TANI_S1_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiTaniS1Min = NAMI_TANI_S1_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiTaniS1Max = NAMI_TANI_S1_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiTaniS2Method = NAMI_TANI_S2_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiTaniS2Min = NAMI_TANI_S2_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiTaniS2Max = NAMI_TANI_S2_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiTaniL1Method = NAMI_TANI_L1_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiTaniL1Min = NAMI_TANI_L1_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiTaniL1Max = NAMI_TANI_L1_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiTaniL2Method = NAMI_TANI_L2_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiTaniL2Min = NAMI_TANI_L2_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiTaniL2Max = NAMI_TANI_L2_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiTaniL3Method = NAMI_TANI_L3_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiTaniL3Min = NAMI_TANI_L3_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _namiTaniL3Max = NAMI_TANI_L3_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _jiriMonAmMethod = JIRI_MON1_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _jiriMonAmMin = JIRI_MON1_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _jiriMonAmMax = JIRI_MON1_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _jiriOtherMethod = JIRI_OTHER_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _jiriOtherMin = JIRI_OTHER_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _jiriOtherMax = JIRI_OTHER_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3MonAmMethod = FEV3_MON1_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3MonAmMin = FEV3_MON1_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3MonAmMax = FEV3_MON1_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3BeforeMethod = FEV3_BEFORE_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3BeforeMin = FEV3_BEFORE_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3BeforeMax = FEV3_BEFORE_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period1Method = FEV3_PERIOD1_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period1Min = FEV3_PERIOD1_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period1Max = FEV3_PERIOD1_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period2Method = FEV3_PERIOD2_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period2Min = FEV3_PERIOD2_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period2Max = FEV3_PERIOD2_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period3Method = FEV3_PERIOD3_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period3Min = FEV3_PERIOD3_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period3Max = FEV3_PERIOD3_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period4Method = FEV3_PERIOD4_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period4Min = FEV3_PERIOD4_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period4Max = FEV3_PERIOD4_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period5Method = FEV3_PERIOD5_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period5Min = FEV3_PERIOD5_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period5Max = FEV3_PERIOD5_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period6Method = FEV3_PERIOD6_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period6Min = FEV3_PERIOD6_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3Period6Max = FEV3_PERIOD6_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3AfterMethod = FEV3_AFTER_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3AfterMin = FEV3_AFTER_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev3AfterMax = FEV3_AFTER_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4MonAmMethod = FEV4_MON1_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4MonAmMin = FEV4_MON1_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4MonAmMax = FEV4_MON1_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4BeforeMethod = FEV4_BEFORE_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4BeforeMin = FEV4_BEFORE_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4BeforeMax = FEV4_BEFORE_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period1Method = FEV4_PERIOD1_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period1Min = FEV4_PERIOD1_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period1Max = FEV4_PERIOD1_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period2Method = FEV4_PERIOD2_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period2Min = FEV4_PERIOD2_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period2Max = FEV4_PERIOD2_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period3Method = FEV4_PERIOD3_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period3Min = FEV4_PERIOD3_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period3Max = FEV4_PERIOD3_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period4Method = FEV4_PERIOD4_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period4Min = FEV4_PERIOD4_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period4Max = FEV4_PERIOD4_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period5Method = FEV4_PERIOD5_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period5Min = FEV4_PERIOD5_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period5Max = FEV4_PERIOD5_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period6Method = FEV4_PERIOD6_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period6Min = FEV4_PERIOD6_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period6Max = FEV4_PERIOD6_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4AfterMethod = FEV4_AFTER_METHOD_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4AfterMin = FEV4_AFTER_MIN_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4AfterMax = FEV4_AFTER_MAX_DEFAULTS[VERSION_TOBIMORI_INDEX];
  _fev4Period4IsPeak = true;
  return;
}
