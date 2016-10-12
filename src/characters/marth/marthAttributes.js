charAttributes[0] = {
  dashFrameMin : 15,
  dashFrameMax : 27,
  dInitV : 1.56,
  dMaxV : 1.8,
  dAccA : 0.06,
  dAccB : 0,
  dTInitV : 1.5,
  traction : 0.06,
  maxWalk : 1.6,
  jumpSquat : 4,
  sHopInitV : 1.5,
  fHopInitV : 2.4,
  gravity : 0.085,
  groundToAir : 0.8,
  jumpHmaxV : 1.2,
  jumpHinitV : 1,
  airMobA : 0.03,
  airMobB : 0.02,
  aerialHmaxV : 0.9,
  airFriction : 0.005,
  terminalV : 2.2,
  fastFallV : 2.5,
  walkInitV : 0.15,
  walkAcc : 0,
  walkMaxV : 1.6,
  djMultiplier : 0.88,
  shieldScale : 11.75,
  modelScale : 1.15,
  weight : 87,
  waitAnimSpeed : 1,
  walljump : true,
  hurtboxOffset : [4,18],
  ledgeSnapBoxOffset : [14,12,22],
  shieldOffset : [5,40],
  charScale : 0.49,
  miniScale : 0.32,
  runTurnBreakPoint : 18,
  airdodgeIntangible : 25,
  wallJumpVelX : 1.3,
  wallJumpVelY : 2.4,
  shieldBreakVel : 2.5,
  multiJump : false
}

// start, length
intangibility[0] = {
  "ESCAPEAIR" : [4,25],
  "ESCAPEB" : [4,20],
  "ESCAPEF" : [4,20],
  "ESCAPEN" : [2,16],
  "DOWNSTANDN" : [1,22],
  "DOWNSTANDB" : [1,19],
  "DOWNSTANDF" : [6,14],
  "TECHN" : [1,20],
  "TECHB" : [1,20],
  "TECHF" : [1,20]
}

frames[0] = {
  "WAIT" : 90,
  "DASH" : 27,
  "RUN" : 23,
  "RUNBRAKE" : 25,
  "RUNTURN" : 30,
  "WALK" : 21,
  "JUMPF" : 45,
  "JUMPB" : 55,
  "FALL" : 10,
  "FALLAERIAL" : 10,
  "FALLSPECIAL" : 10,
  "SQUAT" : 7,
  "SQUATWAIT" : 80,
  "SQUATRV" : 8,
  "JUMPAERIALF" : 50,
  "JUMPAERIALB" : 50,
  "PASS" : 30,
  "GUARDON" : 8,
  "GUARDOFF" : 16,
  "CLIFFCATCH" : 7,
  "CLIFFWAIT" : 56,
  "DAMAGEFLYN" : 29,
  "DAMAGEFALL" : 30,
  "DAMAGEN2" : 23,
  "LANDINGATTACKAIRF" : 15,
  "LANDINGATTACKAIRB" : 24,
  "LANDINGATTACKAIRU" : 15,
  "LANDINGATTACKAIRD" : 32,
  "LANDINGATTACKAIRN" : 15,
  "ESCAPEB" : 35,
  "ESCAPEF" : 35,
  "ESCAPEN" : 27,
  "DOWNBOUND" : 26,
  "DOWNWAIT" : 60,
  "DOWNSTANDN" : 30,
  "DOWNSTANDB" : 35,
  "DOWNSTANDF" : 35,
  "TECHN" : 26,
  "TECHB" : 40,
  "TECHF" : 40,
  "SHIELDBREAKFALL" : 30,
  "SHIELDBREAKDOWNBOUND" : 26,
  "SHIELDBREAKSTAND" : 30,
  "FURAFURA" : 100,
  "CAPTUREWAIT" : 60,
  "CATCHWAIT" : 59,
  "CAPTURECUT" : 30,
  "CATCHCUT" : 29,
  "CAPTUREDAMAGE" : 20,
  "WALLDAMAGE" : 50,
  "WALLTECH" : 26,
  "WALLJUMP" : 40
}

actionSounds[0] = {
  "JUMP" : [[1,"jump"]],
  "ESCAPEAIR" : [[4,"airdodge"]],
  "JUMPAERIAL" : [],
  "GUARDON" : [[1,"swordsheath"]],
  "GUARDOFF" : [[6,"sworddraw"]],
  "CLIFFCATCH" : [[1,"ledgegrab"]],
  "DEAD" : [[1,"deathShout"]],
  "FURAFURA" : [[0,"furacry"]],
  "ESCAPEB" : [[33,"sworddraw"]],
  "ESCAPEF" : [[33,"sworddraw"]],
  "ESCAPEN" : [[2,"airdodge"],[18,"sworddraw"]],
}

// HITBOX OFFSETS

offsets[0] = {
  fair : {
    id0 : [new Vec2D(9.26,16.34),
    new Vec2D(11.15,9.93),
  new Vec2D(9.19,5.23),
new Vec2D(3.87,2.43)],
id1 : [new Vec2D(5.46,13.21),
  new Vec2D(6.26,10.84),
  new Vec2D(5.82,8.63),
  new Vec2D(3.93,6.98)],
id2 : [new Vec2D(0.88,13.20),
new Vec2D(1.14,12.76),
new Vec2D(1.20,12.41),
new Vec2D(1.21,12.14)],
id3 : [new Vec2D(11.10,21.41),
new Vec2D(16.53,9.67),
new Vec2D(13.15,1.64),
new Vec2D(5.34,-2.18)]
  },
bair : {
id0 : [new Vec2D(-11.71,6.43),
new Vec2D(-13.16,13.32),
new Vec2D(-9.65,17.03),
new Vec2D(-4.29,17.32),
new Vec2D(-3.64,17.13)],
id1 : [new Vec2D(-7.88,9.56),
new Vec2D(-8.73,11.06),
new Vec2D(-7.80,12.38),
new Vec2D(-5.82,12.95),
new Vec2D(-5.42,12.91)],
id2 : [new Vec2D(-2.84,13.05),
new Vec2D(-2.76,13.05),
new Vec2D(-2.71,13.05),
new Vec2D(-2.69,13.06),
new Vec2D(-2.68,13.06)],
id3 : [new Vec2D(-13.71,1.75),
new Vec2D(-18.52,13.41),
new Vec2D(-12.25,21.73),
new Vec2D(-2.71,22.27),
new Vec2D(-2.02,22.08)]
},
dair : {
id0 : [new Vec2D(10.13,-0.93),
  new Vec2D(-1.89,-4.63),
  new Vec2D(-9.24,0.37),
  new Vec2D(-12.98,8.16)],
id1 : [new Vec2D(6.38,0.55),
new Vec2D(-1.68,-0.60),
new Vec2D(-6.75,3.33),
new Vec2D(-9.01,8.90)],
id2 : [new Vec2D(2.96,4.21),
new Vec2D(0.04,4.02),
new Vec2D(-2.94,6.59),
new Vec2D(-4.13,8.61)],
id3 : [new Vec2D(2.66,10.54),
new Vec2D(2.71,10.14),
new Vec2D(2.46,9.84),
new Vec2D(1.93,9.66)]
},
upair : {
id0 : [new Vec2D(12.14,14.60),
new Vec2D(7.42,23.27),
new Vec2D(-1.33,26.74),
new Vec2D(-10.99,23.29)],
id1 : [new Vec2D(7.46,16.76),
new Vec2D(2.70,20.80),
new Vec2D(-2.77,21.56),
new Vec2D(-8.30,18.63)],
id2 : [new Vec2D(2.63,15.58),
new Vec2D(-0.33,16.52),
new Vec2D(-2.60,16.32),
new Vec2D(-4.92,14.73)],
id3 : [new Vec2D(0.43,11.46),
new Vec2D(0.25,12.43),
new Vec2D(0.07,12.93),
new Vec2D(-0.42,13.26)]
},
nair1 : {
id0 : [new Vec2D(14.63,8.71),
new Vec2D(6.37,12.57)],
id1 : [new Vec2D(8.65,10.24),
new Vec2D(6.42,11.23)],
id2 : [new Vec2D(0.07,13.43),
new Vec2D(0.67,13.40)],
id3 : [new Vec2D(-0.47,7.74),
new Vec2D(-0.47,7.74)]
},
nair2 : {
id0 : [new Vec2D(12.35,4.38),
new Vec2D(0.52,9.91),
new Vec2D(-12.86,19.45),
new Vec2D(-7.52,17.11),
new Vec2D(5.76,10.14),
new Vec2D(12.26,5.79),
new Vec2D(11.80,5.33)],
id1 : [new Vec2D(7.18,7.89),
new Vec2D(-1.38,11.67),
new Vec2D(-7.63,16.29),
new Vec2D(-3.81,14.73),
new Vec2D(3.67,11.08),
new Vec2D(6.86,8.92),
new Vec2D(6.69,8.52)],
id2 : [new Vec2D(0.70,13.51),
new Vec2D(0.26,13.43),
new Vec2D(1.01,12.94),
new Vec2D(0.80,13.13),
new Vec2D(-0.01,13.41),
new Vec2D(-0.68,13.66),
new Vec2D(-0.46,13.68)],
id3 : [new Vec2D(-0.47,7.74),
new Vec2D(-0.47,7.74),
new Vec2D(-0.47,7.74),
new Vec2D(-0.47,7.74),
new Vec2D(-0.48,7.74),
new Vec2D(-0.48,7.74),
new Vec2D(-0.48,7.74)]
},
upb1 : {
id0 : [new Vec2D(9.74,4.31)],
id1 : [new Vec2D(6.39,6.58)],
id2 : [new Vec2D(-0.53,5.88)]
},
upb2 : {
id0 : [new Vec2D(13.85,13.53),
new Vec2D(10.60,24.21),
new Vec2D(8.68,26.72),
new Vec2D(6.97,27.35),
new Vec2D(4.78,27.94)],
id1 : [new Vec2D(9.83,13.99),
new Vec2D(7.55,21.56),
new Vec2D(5.85,23.84),
new Vec2D(4.32,24.33),
new Vec2D(2.61,24.55)],
id2 : [new Vec2D(0.01,8.80),
new Vec2D(0.07,10.68),
new Vec2D(0.07,11.68),
new Vec2D(0.07,11.68),
new Vec2D(0.09,11.67)]
},
dtilt : {
id0 : [new Vec2D(18.90,2.38),
new Vec2D(18.96,2.87),
new Vec2D(18.81,2.94)],
id1 : [new Vec2D(13.12,4.02),
new Vec2D(13.17,4.45),
new Vec2D(13.07,4.69)],
id2 : [new Vec2D(8.81,7.67),
new Vec2D(8.72,7.77),
new Vec2D(8.64,7.85)],
id3 : [new Vec2D(23.60,0.88),
new Vec2D(23.72,1.55),
new Vec2D(23.57,1.62)]
},
uptilt1 : {
id0 : [new Vec2D(14.64,13.62),
new Vec2D(12.78,21.24),
new Vec2D(7.78,23.94)],
id1 : [new Vec2D(9.86,15.22),
new Vec2D(8.52,17.26),
new Vec2D(6.52,18.25)],
id2 : [new Vec2D(3.56,13.40),
new Vec2D(4.28,13.19),
new Vec2D(5.37,12.98)],
id3 : [new Vec2D(16.87,10.48),
new Vec2D(16.18,23.26),
new Vec2D(9.25,27.69)]
},
uptilt2 : {
id0 : [new Vec2D(3.50,23.34),
new Vec2D(0.18,20.96),
new Vec2D(-2.00,16.58),
new Vec2D(-2.09,12.08)],
id1 : [new Vec2D(4.81,17.71),
new Vec2D(3.27,16.16),
new Vec2D(2.75,13.91),
new Vec2D(2.98,11.92)],
id2 : [new Vec2D(7.18,13.37),
new Vec2D(8.38,12.76),
new Vec2D(8.69,12.45),
new Vec2D(8.67,12.40)],
id3 : [new Vec2D(3.11,27.30),
new Vec2D(-0.87,24.71),
new Vec2D(-4.29,19.86),
new Vec2D(-5.30,14.32)]
},
ftilt : {
id0 : [new Vec2D(8.54,4.11),
new Vec2D(16.17,9.33),
new Vec2D(18.10,13.45),
new Vec2D(14.84,18.26)],
id1 : [new Vec2D(9.39,8.39),
new Vec2D(11.99,12.21),
new Vec2D(13.09,11.90),
new Vec2D(12.10,13.63)],
id2 : [new Vec2D(4.58,12.75),
new Vec2D(5.70,11.87),
new Vec2D(7.10,10.66),
new Vec2D(8.58,9.60)],
id3 : [new Vec2D(4.12,1.46),
new Vec2D(18.41,4.48),
new Vec2D(23.49,13.65),
new Vec2D(18.61,22.11)]
},
dashattack : {
id0 : [new Vec2D(11.03,3.26),
new Vec2D(15.21,6.22),
new Vec2D(15.05,7.87),
new Vec2D(13.97,12.26)],
id1 : [new Vec2D(9.54,5.43),
new Vec2D(10.63,7.23),
new Vec2D(10.13,8.36),
new Vec2D(9.47,10.73)],
id2 : [new Vec2D(5.49,9.14),
new Vec2D(6.38,7.95),
new Vec2D(7.27,7.04),
new Vec2D(7.26,6.89)],
id3 : [new Vec2D(6.48,1.06),
new Vec2D(19.59,2.77),
new Vec2D(21.26,6.96),
new Vec2D(20.08,13.48)]
},
jab1 : {
id0 : [new Vec2D(13.68,7.34),
new Vec2D(16.64,10.96),
new Vec2D(15.79,15.10),
new Vec2D(12.70,18.69)],
id1 : [new Vec2D(10.22,9.87),
new Vec2D(12.21,11.53),
new Vec2D(11.63,13.74),
new Vec2D(10.03,15.89)],
id2 : [new Vec2D(5.18,12.23),
new Vec2D(5.58,12.10),
new Vec2D(5.96,12.11),
new Vec2D(6.75,12.65)],
id3 : [new Vec2D(16.45,1.88),
new Vec2D(22.52,8.98),
new Vec2D(21.85,16.40),
new Vec2D(18.57,20.40)]
},
jab2 : {
id0 : [new Vec2D(16.61,8.05),
new Vec2D(16.65,13.43),
new Vec2D(13.12,17.59),
new Vec2D(7.91,18.53),
new Vec2D(3.47,16.83)],
id1 : [new Vec2D(12.87,10.31),
new Vec2D(12.38,13.23),
new Vec2D(10.27,15.37),
new Vec2D(7.70,15.82),
new Vec2D(5.58,15.06)],
id2 : [new Vec2D(7.04,13.09),
new Vec2D(6.30,13.75),
new Vec2D(5.20,13.28),
new Vec2D(5.26,12.96),
new Vec2D(5.59,13.11)],
id3 : [new Vec2D(19.38,3.39),
new Vec2D(22.57,12.52),
new Vec2D(17.07,19.43),
new Vec2D(9.85,21.01),
new Vec2D(4.67,18.33)]
},
dbground : {
id0 : [new Vec2D(11.97,19.81),
new Vec2D(18.79,12.44),
new Vec2D(16.47,5.00)],
id1 : [new Vec2D(9.62,25.13),
new Vec2D(23.82,15.40),
new Vec2D(21.42,1.90)],
id2 : [new Vec2D(11.60,14.07),
new Vec2D(13.01,11.51),
new Vec2D(12.41,9.36)],
id3 : [new Vec2D(5.43,14.48),
new Vec2D(7.02,14.17),
new Vec2D(9.50,11.87)]
},
fsmash : {
id0 : [new Vec2D(14.73,20.43),
new Vec2D(23.35,12.45),
new Vec2D(18.63,0.49),
new Vec2D(18.83,0.19)],
id1 : [new Vec2D(14.85,15.44),
new Vec2D(18.30,10.69),
new Vec2D(15.87,4.03),
new Vec2D(15.37,3.52)],
id2 : [new Vec2D(9.32,8.08),
new Vec2D(10.74,6.82),
new Vec2D(12.01,5.69),
new Vec2D(12.01,5.08)],
id3 : [new Vec2D(10.98,24.89),
new Vec2D(28.11,15.83),
new Vec2D(24.45,0.79),
new Vec2D(24.65,0.33)]
},
upsmash : {
id0 : [new Vec2D(6.29,7.64),
new Vec2D(6.29,7.64),
new Vec2D(6.29,7.64),
new Vec2D(6.29,7.64)],
id1 : [new Vec2D(-6.29,7.64),
new Vec2D(-6.29,7.64),
new Vec2D(-6.29,7.64),
new Vec2D(-6.29,7.64)],
id2 : [new Vec2D(0.91,21.71),
new Vec2D(0.82,21.13),
new Vec2D(0.78,20.56),
new Vec2D(0.78,20.87)],
id3 : [new Vec2D(0.19,26.06),
new Vec2D(0.03,25.46),
new Vec2D(-0.04,24.89),
new Vec2D(-0.03,25.20)]
},
dsmash1 : {
id0 : [new Vec2D(13.69,4.12),
new Vec2D(19.33,5.53),
new Vec2D(15.33,6.20)],
id1 : [new Vec2D(12.67,7.34),
new Vec2D(14.83,8.08),
new Vec2D(12.92,8.48)],
id2 : [new Vec2D(6.48,6.94),
new Vec2D(7.05,6.49),
new Vec2D(6.79,6.43)],
id3 : [new Vec2D(11.96,2.87),
new Vec2D(24.08,3.30),
new Vec2D(19.09,3.90)]
},
dsmash2 : {
id0 : [new Vec2D(-9.69,3.24),
new Vec2D(-12.61,2.91),
new Vec2D(-10.56,3.43)],
id1 : [new Vec2D(-6.68,4.54),
new Vec2D(-8.18,4.30),
new Vec2D(-7.89,4.30)],
id2 : [new Vec2D(-0.35,5.31),
new Vec2D(-0.65,5.17),
new Vec2D(-0.63,5.09)],
id3 : [new Vec2D(-10.28,2.16),
new Vec2D(-17.91,2.01),
new Vec2D(-14.94,2.54)]
},
grab : {
id0 : [new Vec2D(14.82,9.43),
new Vec2D(14.82,9.43)],
id1 : [new Vec2D(11.23,8.98),
new Vec2D(11.23,8.98)],
id2 : [new Vec2D(8.09,8.53),
new Vec2D(8.09,8.53)]
},
downattack1 : {
id0 : [new Vec2D(-11.59,7.12),
new Vec2D(-11.57,7.18),
new Vec2D(-11.59,7.20),
new Vec2D(-11.61,7.26)],
id1 : [new Vec2D(-7.46,8.54),
new Vec2D(-7.43,8.59),
new Vec2D(-7.43,8.56),
new Vec2D(-7.43,8.57)],
id2 : [new Vec2D(-3.85,11.23),
new Vec2D(-3.84,11.27),
new Vec2D(-3.84,11.21),
new Vec2D(-3.83,11.17)],
id3 : [new Vec2D(-17.85,7.02),
new Vec2D(-17.84,7.07),
new Vec2D(-17.86,7.15),
new Vec2D(-17.89,7.30)]
},
downattack2 : {
id0 : [new Vec2D(17.65,9.84),
new Vec2D(18.77,10.73)],
id1 : [new Vec2D(13.16,10.31),
new Vec2D(14.52,10.42)],
id2 : [new Vec2D(6.59,11.20),
new Vec2D(8.36,10.74)],
id3 : [new Vec2D(23.38,8.95),
new Vec2D(25.05,10.63)]
},
pummel : {
id0 : [new Vec2D(8.87,10.75)]
},
thrown : {
id0 : [new Vec2D(0,12)]
},
dbground2up : {
  id0 : [new Vec2D(13.93,9.48),
  new Vec2D(18.57,15.55),
new Vec2D(17.22,20.42),
new Vec2D(12.86,23.98)],
  id1 : [new Vec2D(19.32,8.20),
  new Vec2D(24.08,17.50),
new Vec2D(20.91,24.94),
new Vec2D(12.96,29.82)],
  id2 : [new Vec2D(9.24,12.30),
  new Vec2D(12.61,15.16),
new Vec2D(12.23,17.11),
new Vec2D(10.91,18.34)],
  id3 : [new Vec2D(6.41,13.82),
  new Vec2D(6.20,14.16),
new Vec2D(6.17,14.29),
new Vec2D(6.25,14.38)]
},
dbground2forward : {
  id0 : [new Vec2D(20.48,7.48),
  new Vec2D(22.65,6.76),
new Vec2D(22.41,6.82)],
  id1 : [new Vec2D(26.00,6.04),
    new Vec2D(28.33,5.44),
    new Vec2D(28.10,5.49)],
  id2 : [new Vec2D(14.63,9.09),
  new Vec2D(16.95,8.56),
new Vec2D(16.71,8.60)],
  id3 : [new Vec2D(11.13,11.01),
  new Vec2D(11.36,11.47),
new Vec2D(11.12,11.51)]
},
dbground3down : {
  id0 : [new Vec2D(6.45,11.60),
  new Vec2D(9.05,7.71),
new Vec2D(10.29,7.69),
new Vec2D(9.56,7.64)],
  id1 : [new Vec2D(4.21,13.62),
  new Vec2D(13.25,3.86),
new Vec2D(14.43,3.80),
new Vec2D(13.66,3.73)],
  id2 : [new Vec2D(4.79,12.73),
  new Vec2D(5.08,12.33),
new Vec2D(6.37,12.35),
new Vec2D(5.68,12.32)],
  id3 : [new Vec2D(-0.12,15.10),
  new Vec2D(0.67,15.04),
new Vec2D(2.06,15.02),
new Vec2D(1.38,15.03)]
},
dbground3forward : {
  id0 : [new Vec2D(17.73,5.45),
  new Vec2D(20.78,7.78),
new Vec2D(21.21,11.12),
new Vec2D(15.61,14.32)],
  id1 : [new Vec2D(20.65,4.16),
  new Vec2D(26.30,7.46),
new Vec2D(26.86,12.57),
new Vec2D(18.57,17.31)],
  id2 : [new Vec2D(13.30,7.27),
  new Vec2D(14.85,8.36),
new Vec2D(15.33,9.71),
new Vec2D(13.16,11.30)],
  id3 : [new Vec2D(7.89,10.10),
  new Vec2D(9.16,10.31),
new Vec2D(10.14,10.25),
new Vec2D(10.22,9.96)]
},
dbground3up : {
  id0 : [new Vec2D(8.37-1.35,19.27),
  new Vec2D(13.18-1.11,17.75),
new Vec2D(14.46-0.88,13.50),
new Vec2D(9.87-0.76,6.11),
new Vec2D(1.39-0.54,6.55)],
  id1 : [new Vec2D(4.28-1.35,23.32),
  new Vec2D(14.74-1.11,23.36),
new Vec2D(19.02-0.88,17.14),
new Vec2D(15.08-0.76,5.41),
new Vec2D(2.70-0.54,4.51)],
  id2 : [new Vec2D(10.07-1.35,14.81),
  new Vec2D(10.13-1.11,13.05),
new Vec2D(8.88-0.88,11.79),
new Vec2D(5.65-0.76,9.28),
new Vec2D(2.50-0.54,9.95)],
  id3 : [new Vec2D(5.17-1.35,13.40),
  new Vec2D(6.35-1.11,12.52),
new Vec2D(5.87-0.88,12.28),
new Vec2D(6.66-0.76,11.39),
new Vec2D(7.12-0.54,10.53)]
},
dbground4down1 : {
  id0 : [new Vec2D(21.17-0.13,6.45),
  new Vec2D(18.94,7.01),
new Vec2D(15.57,5.85)],
  id1 : [new Vec2D(26.88-0.13,7.64),
  new Vec2D(24.16,9.42),
new Vec2D(21.10,7.07)],
  id2 : [new Vec2D(15.16-0.13,6.32),
  new Vec2D(13.81,4.08),
new Vec2D(10.58,3.82)],
  id3 : [new Vec2D(9.04-0.13,7.81),
  new Vec2D(8.41,7.95),
new Vec2D(7.62,8.22)]
},
dbground4down2 : {
  id0 : [new Vec2D(20.51,9.29),
  new Vec2D(18.81,9.30),
new Vec2D(16.14,6.16)],
  id1 : [new Vec2D(25.63,12.09),
  new Vec2D(23.56,12.36),
new Vec2D(21.74,6.97)],
  id2 : [new Vec2D(14.84,7.33),
  new Vec2D(13.60,6.35),
new Vec2D(10.08,6.04)],
  id3 : [new Vec2D(8.91,7.73),
  new Vec2D(9.13,7.50),
new Vec2D(9.16,7.32)]
},
dbground4down3 : {
  id0 : [new Vec2D(20.55,3.33),
  new Vec2D(18.79,3.87),
new Vec2D(15.32,4.44)],
  id1 : [new Vec2D(26.12,1.62),
  new Vec2D(24.29,2.43),
new Vec2D(20.91,3.36)],
  id2 : [new Vec2D(14.86,5.25),
  new Vec2D(13.12,6.02),
new Vec2D(9.95,7.15)],
  id3 : [new Vec2D(8.86,7.75),
  new Vec2D(8.97,7.58),
new Vec2D(9.09,7.35)]
},
dbground4down4 : {
  id0 : [new Vec2D(21.11,6.62),
  new Vec2D(17.96,7.02),
new Vec2D(13.81,6.48)],
  id1 : [new Vec2D(26.77,8.03),
  new Vec2D(23.64,7.41),
new Vec2D(19.60,7.02)],
  id2 : [new Vec2D(15.06,6.39),
  new Vec2D(13.16,4.37),
new Vec2D(9.48,4.31)],
  id3 : [new Vec2D(8.93,7.72),
  new Vec2D(8.24,8.03),
new Vec2D(7.52,8.26)]
},
dbground4down5 : {
  id0 : [new Vec2D(20.59,9.14),
  new Vec2D(20.73,8.59)],
  id1 : [new Vec2D(25.69,11.47),
  new Vec2D(25.73,11.07)],
  id2 : [new Vec2D(14.86,7.23),
  new Vec2D(14.98,6.80)],
  id3 : [new Vec2D(8.85,7.75),
  new Vec2D(8.93,7.79)]
},
dbground4forward : {
  id0 : [new Vec2D(7.75-0.16,22.46),
  new Vec2D(15.35-0.14,17.36),
new Vec2D(16.76-0.11,12.44),
new Vec2D(16.11-0.08,6.98)],
  id1 : [new Vec2D(4.82-0.16,26.91),
  new Vec2D(19.73-0.14,21.10),
new Vec2D(22.54-0.11,13.09),
new Vec2D(21.64-0.08,5.58)],
  id2 : [new Vec2D(7.02-0.16,17.26),
  new Vec2D(9.82-0.14,14.66),
new Vec2D(10.57-0.11,12.39),
new Vec2D(10.53-0.08,9.54)],
  id3 : [new Vec2D(2.34-0.16,13.84),
  new Vec2D(3.55-0.14,13.76),
new Vec2D(5.34-0.11,13.22),
new Vec2D(6.43-0.08,12.58)]
},
dbground4up : {
  id0 : [new Vec2D(-1.72-0.26,27.08),
  new Vec2D(4.35-0.23,28.03),
new Vec2D(11.82-0.21,24.78),
new Vec2D(14.90-0.21,20.08),
new Vec2D(15.40-0.23,12.73),
new Vec2D(8.19-0.27,10.37)],
  id1 : [new Vec2D(-7.03-0.26,29.52),
  new Vec2D(1.57-0.23,33.13),
new Vec2D(13.84-0.21,30.24),
new Vec2D(18.47-0.21,24.70),
new Vec2D(21.19-0.23,13.36),
new Vec2D(9.59-0.27,10.62)],
  id2 : [new Vec2D(2.67-0.26,22.97),
  new Vec2D(5.41-0.23,22.16),
new Vec2D(7.79-0.21,20.32),
new Vec2D(9.59-0.21,17.46),
new Vec2D(9.55-0.23,14.28),
new Vec2D(8.31-0.27,12.21)],
  id3 : [new Vec2D(0.06-0.26,19.48),
  new Vec2D(0.67-0.23,19.77),
new Vec2D(2.61-0.21,19.64),
new Vec2D(4.88-0.21,18.70),
new Vec2D(6.43-0.23,17.34),
new Vec2D(6.56-0.27,16.51)]
},
dbair : {
  id0 : [new Vec2D(4.35,19.82),
  new Vec2D(11.56,12.39),
new Vec2D(9.50,5.19)],
  id1 : [new Vec2D(1.79,25.05),
  new Vec2D(16.67,15.21),
new Vec2D(14.53,2.24)],
  id2 : [new Vec2D(4.24,14.07),
  new Vec2D(5.68,11.56),
new Vec2D(5.29,9.46)],
  id3 : [new Vec2D(-1.91,14.46),
  new Vec2D(-0.31,14.16),
new Vec2D(2.29,11.91)]
},
dbair2forward : {
  id0 : [new Vec2D(10.47,8.09),
  new Vec2D(12.58,6.03),
new Vec2D(12.53,6.03)],
  id1 : [new Vec2D(15.86,5.95),
  new Vec2D(17.99,3.84),
new Vec2D(17.97,3.90)],
  id2 : [new Vec2D(4.76,10.02),
  new Vec2D(6.85,8.81),
new Vec2D(6.82,8.81)],
  id3 : [new Vec2D(1.39,11.76),
  new Vec2D(1.43,12.30),
new Vec2D(1.38,12.34)]
},
dbair2up : {
  id0 : [new Vec2D(5.11,9.38),
  new Vec2D(9.48,15.48),
new Vec2D(8.06,20.27),
new Vec2D(3.92,23.87)],
  id1 : [new Vec2D(10.46,7.94),
  new Vec2D(15.00,17.39),
new Vec2D(11.83,24.72),
new Vec2D(4.22,29.70)],
  id2 : [new Vec2D(0.52,12.31),
  new Vec2D(3.51,15.13),
new Vec2D(3.01,17.06),
new Vec2D(1.77,18.31)],
  id3 : [new Vec2D(-2.20,13.84),
  new Vec2D(-2.89,14.16),
new Vec2D(-3.08,14.29),
new Vec2D(-2.98,14.36)]
},
dbair3down : {
  id0 : [new Vec2D(5.56,10.46),
  new Vec2D(7.38,6.58),
new Vec2D(7.23,6.55),
new Vec2D(7.19,6.50)],
  id1 : [new Vec2D(3.27,12.44),
  new Vec2D(11.59,2.75),
new Vec2D(11.37,2.67),
new Vec2D(11.30,2.59)],
  id2 : [new Vec2D(3.91,11.60),
  new Vec2D(3.40,11.19),
new Vec2D(3.31,11.20),
new Vec2D(3.30,11.17)],
  id3 : [new Vec2D(-1.03,13.94),
  new Vec2D(-1.03,13.89),
new Vec2D(-1.00,13.87),
new Vec2D(-0.99,13.88)]
},
dbair3forward : {
  id0 : [new Vec2D(9.20,8.07),
  new Vec2D(11.86,9.69),
new Vec2D(12.27,12.54),
new Vec2D(7.42,15.50)],
  id1 : [new Vec2D(12.24,6.78),
  new Vec2D(17.37,9.25),
new Vec2D(17.94,13.87),
new Vec2D(10.56,18.45)],
  id2 : [new Vec2D(4.68,9.88),
  new Vec2D(5.94,10.37),
new Vec2D(6.35,11.24),
new Vec2D(4.77,12.52)],
  id3 : [new Vec2D(-0.76,12.73),
  new Vec2D(0.26,12.40),
new Vec2D(1.14,11.87),
new Vec2D(1.73,11.22)]
},
dbair3up : {
  id0 : [new Vec2D(3.23,19.33),
  new Vec2D(7.85,18.08),
new Vec2D(9.69,9.79),
new Vec2D(5.30,6.09),
new Vec2D(-3.15,6.46)],
  id1 : [new Vec2D(-0.80,23.41),
  new Vec2D(9.23,23.75),
new Vec2D(115.18,11.52),
new Vec2D(10.49,5.29),
new Vec2D(-2.14,4.43)],
  id2 : [new Vec2D(4.82,14.84),
  new Vec2D(4.94,13.19),
new Vec2D(3.91,10.51),
new Vec2D(1.13,9.31),
new Vec2D(-1.86,9.89)],
  id3 : [new Vec2D(0.01,13.39),
  new Vec2D(1.23,12.52),
new Vec2D(0.98,12.27),
new Vec2D(2.14,11.35),
new Vec2D(2.85,10.55)]
},
dbair4down1 : {
  id0 : [new Vec2D(12.28,8.31),
  new Vec2D(10.38,7.90),
new Vec2D(7.21,6.87)],
  id1 : [new Vec2D(17.98,9.57),
  new Vec2D(15.99,9.47),
new Vec2D(12.93,7.55)],
  id2 : [new Vec2D(6.27,8.12),
  new Vec2D(5.06,5.91),
new Vec2D(2.13,5.76)],
  id3 : [new Vec2D(0.18,9.54),
  new Vec2D(-0.30,9.68),
new Vec2D(-1.06,9.97)]
},
dbair4down2 : {
  id0 : [new Vec2D(11.82,10.87),
  new Vec2D(10.11,10.94),
new Vec2D(7.41,7.82)],
  id1 : [new Vec2D(16.97,13.60),
  new Vec2D(14.88,13.97),
new Vec2D(13.02,8.58)],
  id2 : [new Vec2D(6.12,8.99),
  new Vec2D(4.87,8.04),
new Vec2D(1.35,7.75)],
  id3 : [new Vec2D(0.26,9.47),
  new Vec2D(0.45,9.22),
new Vec2D(0.49,9.04)]
},
dbair4down3 : {
  id0 : [new Vec2D(11.81,5.10),
  new Vec2D(10.06,5.71),
new Vec2D(6.59,6.23)],
  id1 : [new Vec2D(17.39,3.40),
  new Vec2D(15.58,4.32),
new Vec2D(12.19,5.17)],
  id2 : [new Vec2D(6.11,7.00),
  new Vec2D(4.37,7.80),
new Vec2D(1.21,8.90)],
  id3 : [new Vec2D(0.16,9.49),
  new Vec2D(0.24,9.32),
new Vec2D(0.38,9.08)]
},
dbair4down4 : {
  id0 : [new Vec2D(12.36,8.44),
  new Vec2D(9.24,8.76),
new Vec2D(5.05,8.29)],
  id1 : [new Vec2D(18.01,9.89),
  new Vec2D(14.92,9.13),
new Vec2D(10.65,8.87)],
  id2 : [new Vec2D(6.31,8.16),
  new Vec2D(4.43,6.11),
new Vec2D(0.83,6.17)],
  id3 : [new Vec2D(0.24,9.47),
  new Vec2D(-0.44,9.77),
new Vec2D(-1.16,10.01)]
},
dbair4down5 : {
  id0 : [new Vec2D(11.79,11.03),
  new Vec2D(11.74,10.05)],
  id1 : [new Vec2D(16.86,13.42),
  new Vec2D(16.19,12.88)],
  id2 : [new Vec2D(6.09,9.05),
  new Vec2D(6.29,7.91)],
  id3 : [new Vec2D(0.12,9.49),
  new Vec2D(0.25,9.53)]
},
dbair4forward : {
  id0 : [new Vec2D(2.87,22.48),
  new Vec2D(10.00,17.42),
new Vec2D(11.05,12.44),
new Vec2D(10.19,7.07)],
  id1 : [new Vec2D(-0.05,26.92),
  new Vec2D(14.40,21.18),
new Vec2D(16.85,13.09),
new Vec2D(15.73,5.74)],
  id2 : [new Vec2D(2.03,17.26),
  new Vec2D(4.44,14.69),
new Vec2D(4.86,12.40),
new Vec2D(4.61,9.58)],
  id3 : [new Vec2D(-2.71,13.83),
  new Vec2D(-1.83,13.75),
new Vec2D(-0.35,13.21),
new Vec2D(0.51,12.58)]
},
dbair4up : {
  id0 : [new Vec2D(-3.76,22.93),
  new Vec2D(1.42,23.11),
new Vec2D(8.70,20.12),
new Vec2D(11.57,15.69),
new Vec2D(11.86,8.82),
new Vec2D(4.65,7.07)],
  id1 : [new Vec2D(-7.94,26.72),
  new Vec2D(-1.49,28.14),
new Vec2D(10.69,25.59),
new Vec2D(15.14,20.31),
new Vec2D(17.65,9.45),
new Vec2D(6.14,7.29)],
  id2 : [new Vec2D(-1.11,17.99),
  new Vec2D(2.63,17.25),
new Vec2D(4.70,15.63),
new Vec2D(6.25,13.08),
new Vec2D(6.01,10.37),
new Vec2D(4.66,8.94)],
  id3 : [new Vec2D(-2.37,14.48),
  new Vec2D(-2.13,14.83),
new Vec2D(-0.48,14.93),
new Vec2D(1.53,14.33),
new Vec2D(2.91,13.42),
new Vec2D(2.95,13.23)]
}
}

hitboxes[0] = {
  fair : new hitboxObject(new hitbox(offsets[0].fair.id0,3.906,10,361,70,30,0,1,0,1,1),new hitbox(offsets[0].fair.id1,3.906,9,361,70,20,0,1,0,1,1),new hitbox(offsets[0].fair.id2,3.906,9,361,70,20,0,1,0,1,1),new hitbox(offsets[0].fair.id3,3.906,13,67,70,42,0,1,0,1,1)),
  bair : new hitboxObject(new hitbox(offsets[0].bair.id0,3.906,10,361,70,30,0,1,0,1,1),new hitbox(offsets[0].bair.id1,3.906,9,361,70,25,0,1,0,1,1),new hitbox(offsets[0].bair.id2,3.906,9,361,70,10,0,1,0,1,1),new hitbox(offsets[0].bair.id3,3.906,13,361,70,30,0,1,0,1,1)),
  nair1 : new hitboxObject(new hitbox(offsets[0].nair1.id0,3.906,4,100,40,30,0,1,0,1,1),new hitbox(offsets[0].nair1.id1,3.906,4,100,40,30,0,1,0,1,1),new hitbox(offsets[0].nair1.id2,3.906,4,100,40,30,0,1,0,1,1),new hitbox(offsets[0].nair1.id3,3.906,4,90,40,30,0,0,0,1,1)),
  nair2 : new hitboxObject(new hitbox(offsets[0].nair2.id0,3.906,10,361,80,50,0,1,0,1,1),new hitbox(offsets[0].nair2.id1,3.906,10,361,80,50,0,1,0,1,1),new hitbox(offsets[0].nair2.id2,3.906,10,361,80,50,0,1,0,1,1),new hitbox(offsets[0].nair2.id3,3.906,10,361,80,50,0,0,0,1,1)),
  dair : new hitboxObject(new hitbox(offsets[0].dair.id0,3.515,13,290,70,40,0,1,0,1,1),new hitbox(offsets[0].dair.id1,3.515,10,80,70,40,0,1,0,1,1),new hitbox(offsets[0].dair.id2,3.515,9,361,70,30,0,1,0,1,1),new hitbox(offsets[0].dair.id3,3.515,9,361,70,20,0,1,0,1,1)),
  upair : new hitboxObject(new hitbox(offsets[0].upair.id0,3.906,13,90,70,40,0,1,0,1,1),new hitbox(offsets[0].upair.id1,3.906,10,80,70,30,0,1,0,1,1),new hitbox(offsets[0].upair.id2,3.906,9,80,70,20,0,1,0,1,1),new hitbox(offsets[0].upair.id3,3.906,9,80,70,18,0,1,0,1,1)),
  upb1 : new hitboxObject(new hitbox(offsets[0].upb1.id0,3.906,13,361,70,80,0,1,2,1,1),new hitbox(offsets[0].upb1.id1,3.906,10,74,70,60,0,1,2,1,1),new hitbox(offsets[0].upb1.id2,3.906,10,74,70,60,0,1,2,1,1)),
  upb2 : new hitboxObject(new hitbox(offsets[0].upb2.id0,3.906,7,361,90,20,0,1,0,1,1),new hitbox(offsets[0].upb2.id1,3.906,7,74,90,20,0,1,0,1,1),new hitbox(offsets[0].upb2.id2,3.125,6,74,90,20,0,0,0,1,1)),
  dtilt : new hitboxObject(new hitbox(offsets[0].dtilt.id0,3.906,9,30,40,30,0,1,1,1,1),new hitbox(offsets[0].dtilt.id1,2.734,8,30,40,25,0,1,1,1,1),new hitbox(offsets[0].dtilt.id2,3.047,8,30,40,20,0,1,1,1,1),new hitbox(offsets[0].dtilt.id3,3.906,10,30,40,50,0,1,1,1,1)),
  uptilt1 : new hitboxObject(new hitbox(offsets[0].uptilt1.id0,3.906,9,110,120,40,0,1,1,1,1),new hitbox(offsets[0].uptilt1.id1,3.125,9,361,118,40,0,1,1,1,1),new hitbox(offsets[0].uptilt1.id2,3.047,8,361,116,40,0,1,1,1,1),new hitbox(offsets[0].uptilt1.id3,3.906,12,110,100,50,0,1,1,1,1)),
  uptilt2 : new hitboxObject(new hitbox(offsets[0].uptilt2.id0,3.906,10,85,120,40,0,1,1,1,1),new hitbox(offsets[0].uptilt2.id1,2.734,9,361,118,30,0,1,1,1,1),new hitbox(offsets[0].uptilt2.id2,2.265,9,361,116,30,0,1,1,1,1),new hitbox(offsets[0].uptilt2.id3,3.906,13,85,100,50,0,1,1,1,1)),
  ftilt : new hitboxObject(new hitbox(offsets[0].ftilt.id0,3.906,9,361,70,30,0,1,1,1,1),new hitbox(offsets[0].ftilt.id1,2.734,9,361,70,30,0,1,1,1,1),new hitbox(offsets[0].ftilt.id2,3.047,9,361,70,30,0,1,1,1,1),new hitbox(offsets[0].ftilt.id3,3.906,13,361,70,60,0,1,1,1,1)),
  dashattack : new hitboxObject(new hitbox(offsets[0].dashattack.id0,3.906,11,110,55,70,0,1,1,1,1),new hitbox(offsets[0].dashattack.id1,3.125,9,361,60,35,0,0,1,1,1),new hitbox(offsets[0].dashattack.id2,2.344,9,361,60,35,0,0,1,1,1),new hitbox(offsets[0].dashattack.id3,3.906,12,110,55,70,0,1,1,1,1)),
  jab1 : new hitboxObject(new hitbox(offsets[0].jab1.id0,3.906,4,361,50,20,0,1,1,1,1),new hitbox(offsets[0].jab1.id1,3.125,4,361,50,20,0,1,1,1,1),new hitbox(offsets[0].jab1.id2,2.344,4,361,50,20,0,1,1,1,1),new hitbox(offsets[0].jab1.id3,3.906,6,361,60,30,0,1,1,1,1)),
  jab2 : new hitboxObject(new hitbox(offsets[0].jab2.id0,3.906,4,361,50,20,0,1,1,1,1),new hitbox(offsets[0].jab2.id1,3.125,4,361,50,20,0,1,1,1,1),new hitbox(offsets[0].jab2.id2,2.344,4,361,50,20,0,1,1,1,1),new hitbox(offsets[0].jab2.id3,3.906,6,361,60,30,0,1,1,1,1)),
  dbground : new hitboxObject(new hitbox(offsets[0].dbground.id0,3.906,4,85,25,55,0,1,0,1,1),new hitbox(offsets[0].dbground.id1,3.125,4,96,25,55,0,1,0,1,1),new hitbox(offsets[0].dbground.id2,3.125,4,80,25,55,0,1,0,1,1),new hitbox(offsets[0].dbground.id3,2.344,4,76,25,55,0,1,0,1,1)),
  dbground2forward : new hitboxObject(new hitbox(offsets[0].dbground2forward.id0,3.906,5,105,100,16,0,1,0,1,1),new hitbox(offsets[0].dbground2forward.id1,3.125,5,80,100,16,0,1,0,1,1),new hitbox(offsets[0].dbground2forward.id2,3.125,5,70,100,16,0,1,0,1,1),new hitbox(offsets[0].dbground2forward.id3,2.344,5,50,100,16,0,1,0,1,1)),
  dbground2up : new hitboxObject(new hitbox(offsets[0].dbground2up.id0,3.906,5,90,40,30,0,1,0,1,1),new hitbox(offsets[0].dbground2up.id1,3.125,5,90,40,60,0,1,0,1,1),new hitbox(offsets[0].dbground2up.id2,3.125,5,85,40,70,0,1,0,1,1),new hitbox(offsets[0].dbground2up.id3,2.344,5,79,40,85,0,1,0,1,1)),
  dbground3down : new hitboxObject(new hitbox(offsets[0].dbground3down.id0,3.906,12,270,100,50,0,1,0,1,1),new hitbox(offsets[0].dbground3down.id1,3.125,12,270,100,50,0,1,0,1,1),new hitbox(offsets[0].dbground3down.id2,3.125,12,270,100,50,0,1,0,1,1),new hitbox(offsets[0].dbground3down.id3,2.344,12,270,100,50,0,1,0,1,1)),
  dbground3forward : new hitboxObject(new hitbox(offsets[0].dbground3forward.id0,3.906,10,361,160,0,0,1,0,1,1),new hitbox(offsets[0].dbground3forward.id1,3.125,10,361,160,0,0,1,0,1,1),new hitbox(offsets[0].dbground3forward.id2,3.125,10,361,160,0,0,1,0,1,1),new hitbox(offsets[0].dbground3forward.id3,2.344,10,361,160,0,0,1,0,1,1)),
  dbground3up : new hitboxObject(new hitbox(offsets[0].dbground3up.id0,3.906,6,80,60,60,0,1,0,1,1),new hitbox(offsets[0].dbground3up.id1,3.125,6,80,60,60,0,1,0,1,1),new hitbox(offsets[0].dbground3up.id2,3.125,6,80,60,60,0,1,0,1,1),new hitbox(offsets[0].dbground3up.id3,2.344,6,80,60,60,0,1,0,1,1)),
  dbground4down1 : new hitboxObject(new hitbox(offsets[0].dbground4down1.id0,3.906,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbground4down1.id1,3.125,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbground4down1.id2,3.125,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbground4down1.id3,2.344,3,80,40,2,0,1,0,1,1)),
  dbground4down2 : new hitboxObject(new hitbox(offsets[0].dbground4down2.id0,3.906,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbground4down2.id1,3.125,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbground4down2.id2,3.125,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbground4down2.id3,2.344,3,80,40,2,0,1,0,1,1)),
  dbground4down3 : new hitboxObject(new hitbox(offsets[0].dbground4down3.id0,3.906,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbground4down3.id1,3.125,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbground4down3.id2,3.125,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbground4down3.id3,2.344,3,80,40,2,0,1,0,1,1)),
  dbground4down4 : new hitboxObject(new hitbox(offsets[0].dbground4down4.id0,3.906,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbground4down4.id1,3.125,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbground4down4.id2,3.125,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbground4down4.id3,2.344,3,80,40,2,0,1,0,1,1)),
  dbground4down5 : new hitboxObject(new hitbox(offsets[0].dbground4down5.id0,4.687,5,361,130,20,0,1,0,1,1),new hitbox(offsets[0].dbground4down5.id1,3.906,5,361,130,20,0,1,0,1,1),new hitbox(offsets[0].dbground4down5.id2,3.125,5,361,130,20,0,1,0,1,1),new hitbox(offsets[0].dbground4down5.id3,2.344,5,361,130,20,0,1,0,1,1)),
  dbground4forward : new hitboxObject(new hitbox(offsets[0].dbground4forward.id0,3.906,14,361,120,15,0,1,0,1,1),new hitbox(offsets[0].dbground4forward.id1,3.125,14,361,120,15,0,1,0,1,1),new hitbox(offsets[0].dbground4forward.id2,3.125,14,361,120,15,0,1,0,1,1),new hitbox(offsets[0].dbground4forward.id3,2.344,14,361,120,15,0,1,0,1,1)),
  dbground4up : new hitboxObject(new hitbox(offsets[0].dbground4up.id0,3.906,10,80,130,40,0,1,0,1,1),new hitbox(offsets[0].dbground4up.id1,3.125,10,80,130,40,0,1,0,1,1),new hitbox(offsets[0].dbground4up.id2,3.125,10,80,130,40,0,1,0,1,1),new hitbox(offsets[0].dbground4up.id3,2.344,10,80,130,40,0,1,0,1,1)),
  dbair : new hitboxObject(new hitbox(offsets[0].dbair.id0,3.906,4,85,25,55,0,1,0,1,1),new hitbox(offsets[0].dbair.id1,3.125,4,96,25,55,0,1,0,1,1),new hitbox(offsets[0].dbair.id2,3.125,4,80,25,55,0,1,0,1,1),new hitbox(offsets[0].dbair.id3,2.344,4,76,25,55,0,1,0,1,1)),
  dbair2forward : new hitboxObject(new hitbox(offsets[0].dbair2forward.id0,3.906,5,105,100,16,0,1,0,1,1),new hitbox(offsets[0].dbair2forward.id1,3.125,5,80,100,16,0,1,0,1,1),new hitbox(offsets[0].dbair2forward.id2,3.125,5,70,100,16,0,1,0,1,1),new hitbox(offsets[0].dbair2forward.id3,2.344,5,50,100,16,0,1,0,1,1)),
  dbair2up : new hitboxObject(new hitbox(offsets[0].dbair2up.id0,3.906,5,90,40,30,0,1,0,1,1),new hitbox(offsets[0].dbair2up.id1,3.125,5,90,40,60,0,1,0,1,1),new hitbox(offsets[0].dbair2up.id2,3.125,5,85,40,70,0,1,0,1,1),new hitbox(offsets[0].dbair2up.id3,2.344,5,79,40,85,0,1,0,1,1)),
  dbair3down : new hitboxObject(new hitbox(offsets[0].dbair3down.id0,3.906,12,270,100,50,0,1,0,1,1),new hitbox(offsets[0].dbair3down.id1,3.125,12,270,100,50,0,1,0,1,1),new hitbox(offsets[0].dbair3down.id2,3.125,12,270,100,50,0,1,0,1,1),new hitbox(offsets[0].dbair3down.id3,2.344,12,270,100,50,0,1,0,1,1)),
  dbair3forward : new hitboxObject(new hitbox(offsets[0].dbair3forward.id0,3.906,10,361,160,0,0,1,0,1,1),new hitbox(offsets[0].dbair3forward.id1,3.125,10,361,160,0,0,1,0,1,1),new hitbox(offsets[0].dbair3forward.id2,3.125,10,361,160,0,0,1,0,1,1),new hitbox(offsets[0].dbair3forward.id3,2.344,10,361,160,0,0,1,0,1,1)),
  dbair3up : new hitboxObject(new hitbox(offsets[0].dbair3up.id0,3.906,6,80,60,60,0,1,0,1,1),new hitbox(offsets[0].dbair3up.id1,3.125,6,80,60,60,0,1,0,1,1),new hitbox(offsets[0].dbair3up.id2,3.125,6,80,60,60,0,1,0,1,1),new hitbox(offsets[0].dbair3up.id3,2.344,6,80,60,60,0,1,0,1,1)),
  dbair4down1 : new hitboxObject(new hitbox(offsets[0].dbair4down1.id0,3.906,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbair4down1.id1,3.125,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbair4down1.id2,3.125,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbair4down1.id3,2.344,3,80,40,2,0,1,0,1,1)),
  dbair4down2 : new hitboxObject(new hitbox(offsets[0].dbair4down2.id0,3.906,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbair4down2.id1,3.125,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbair4down2.id2,3.125,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbair4down2.id3,2.344,3,80,40,2,0,1,0,1,1)),
  dbair4down3 : new hitboxObject(new hitbox(offsets[0].dbair4down3.id0,3.906,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbair4down3.id1,3.125,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbair4down3.id2,3.125,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbair4down3.id3,2.344,3,80,40,2,0,1,0,1,1)),
  dbair4down4 : new hitboxObject(new hitbox(offsets[0].dbair4down4.id0,3.906,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbair4down4.id1,3.125,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbair4down4.id2,3.125,3,80,40,2,0,1,0,1,1),new hitbox(offsets[0].dbair4down4.id3,2.344,3,80,40,2,0,1,0,1,1)),
  dbair4down5 : new hitboxObject(new hitbox(offsets[0].dbair4down5.id0,4.687,5,361,130,20,0,1,0,1,1),new hitbox(offsets[0].dbair4down5.id1,3.906,5,361,130,20,0,1,0,1,1),new hitbox(offsets[0].dbair4down5.id2,3.125,5,361,130,20,0,1,0,1,1),new hitbox(offsets[0].dbair4down5.id3,2.344,5,361,130,20,0,1,0,1,1)),
  dbair4forward : new hitboxObject(new hitbox(offsets[0].dbair4forward.id0,3.906,14,361,120,15,0,1,0,1,1),new hitbox(offsets[0].dbair4forward.id1,3.125,14,361,120,15,0,1,0,1,1),new hitbox(offsets[0].dbair4forward.id2,3.125,14,361,120,15,0,1,0,1,1),new hitbox(offsets[0].dbair4forward.id3,2.344,14,361,120,15,0,1,0,1,1)),
  dbair4up : new hitboxObject(new hitbox(offsets[0].dbair4up.id0,3.906,10,80,130,40,0,1,0,1,1),new hitbox(offsets[0].dbair4up.id1,3.125,10,80,130,40,0,1,0,1,1),new hitbox(offsets[0].dbair4up.id2,3.125,10,80,130,40,0,1,0,1,1),new hitbox(offsets[0].dbair4up.id3,2.344,10,80,130,40,0,1,0,1,1)),
  fsmash : new hitboxObject(new hitbox(offsets[0].fsmash.id0,3.906,14,361,70,60,0,1,1,1,1),new hitbox(offsets[0].fsmash.id1,3.125,14,361,70,60,0,1,1,1,1),new hitbox(offsets[0].fsmash.id2,3.515,14,361,70,60,0,1,1,1,1),new hitbox(offsets[0].fsmash.id3,3.906,20,361,70,80,0,1,1,1,1)),
  upsmash : new hitboxObject(new hitbox(offsets[0].upsmash.id0,4.297,8,70,100,0,100,0,1,1,1),new hitbox(offsets[0].upsmash.id1,4.297,8,70,100,0,100,0,1,1,1),new hitbox(offsets[0].upsmash.id2,4.687,15,90,80,30,0,1,1,1,1),new hitbox(offsets[0].upsmash.id3,4.297,18,90,80,60,0,1,1,1,1)),
  dsmash1 : new hitboxObject(new hitbox(offsets[0].dsmash1.id0,4.297,11,75,72,70,0,1,1,1,1),new hitbox(offsets[0].dsmash1.id1,3.125,11,361,100,20,0,1,1,1,1),new hitbox(offsets[0].dsmash1.id2,3.515,11,361,100,16,0,1,1,1,1),new hitbox(offsets[0].dsmash1.id3,3.906,16,70,100,70,0,1,1,1,1)),
  dsmash2 : new hitboxObject(new hitbox(offsets[0].dsmash2.id0,3.906,11,75,72,70,0,1,1,1,1),new hitbox(offsets[0].dsmash2.id1,3.125,11,361,100,30,0,1,1,1,1),new hitbox(offsets[0].dsmash2.id2,3.515,11,361,100,15,0,1,1,1,1),new hitbox(offsets[0].dsmash2.id3,3.906,16,75,100,70,0,1,1,1,1)),
  grab : new hitboxObject(new hitbox(offsets[0].grab.id0,3.906,0,361,100,0,0,2,3,1,1),new hitbox(offsets[0].grab.id1,3.906,0,361,100,0,0,2,3,1,1),new hitbox(offsets[0].grab.id2,3.906,0,361,100,0,0,2,3,1,1)),
  downattack1 : new hitboxObject(new hitbox(offsets[0].downattack1.id0,5.468,6,361,50,80,0,1,1,1,1),new hitbox(offsets[0].downattack1.id1,3.906,6,361,50,80,0,1,1,1,1),new hitbox(offsets[0].downattack1.id2,3.906,6,361,50,80,0,1,1,1,1),new hitbox(offsets[0].downattack1.id3,4.687,6,361,50,80,0,1,1,1,1)),
  downattack2 : new hitboxObject(new hitbox(offsets[0].downattack2.id0,5.468,6,361,50,80,0,1,1,1,1),new hitbox(offsets[0].downattack2.id1,3.906,6,361,50,80,0,1,1,1,1),new hitbox(offsets[0].downattack2.id2,3.906,6,361,50,80,0,1,1,1,1),new hitbox(offsets[0].downattack2.id3,4.687,6,361,50,80,0,1,1,1,1)),
  pummel : new hitboxObject(new hitbox(offsets[0].pummel.id0,4.687,3,80,100,0,30,0,0,1,1)),
  throwup : new hitboxObject(new hitbox(new Vec2D(5.02334,15.9095),0,4,93,130,60,0,0,0,1,1)),
  throwdown : new hitboxObject(new hitbox(new Vec2D(3.57509,0),0,5,135,50,65,0,0,0,1,1)),
  throwback : new hitboxObject(new hitbox(new Vec2D(-1.29306,0),0,4,117,60,70,0,0,0,1,1)),
  throwforward : new hitboxObject(new hitbox(new Vec2D(7.69851,0),0,4,50,45,70,0,0,0,1,1)),
  thrown : new hitboxObject(new hitbox(offsets[0].thrown.id0,3.906,4,361,50,20,0,1,0,1,1))
};

for (var l=0;l<20;l++){
  offsets[0].thrown.id0.push(new Vec2D(0,12));
}

chars[0] = new charObject(0);
