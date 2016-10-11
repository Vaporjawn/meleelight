// action state object creation
aS[0]={};
// base action states added
var keys = Object.keys(baseActionStates);
for (var i=0;i<keys.length;i++){
  aS[0][keys[i]] = {};
  $.extend(true,aS[0][keys[i]],baseActionStates[keys[i]]);
}
// set pointer for readibility
var marth = aS[0];

// OVERWRITES START

// OVERWRITES END

// UNIQUE ACTION STATES START

//--------------- NORMALS -----------------------
// TILTS

marth.JAB1 = {
  name : "JAB1",
  canEdgeCancel : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "JAB1";
    player[p].timer = 0;
    player[p].phys.jabCombo = false;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.jab1.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.jab1.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.jab1.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.jab1.id3;
    marth.JAB1.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.JAB1.interrupt(p)){
      reduceByTraction(p,true);
      if (player[p].timer > 3 && player[p].timer < 14){
        drawVfx("swingJab1",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-4);
      }
      if (player[p].timer > 2 && player[p].timer < 26 && player[p].inputs.a[0] && !player[p].inputs.a[1]){
        player[p].phys.jabCombo = true;
      }
      if (player[p].timer == 4){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        sounds.sword1.play();
      }
      if (player[p].timer > 4 && player[p].timer < 8){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 8){
        turnOffHitboxes(p);
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 19 && player[p].phys.jabCombo){
      marth.JAB2.init(p);
      return true;
    }
    else if (player[p].timer > 27){
      marth.WAIT.init(p);
      return true;
    }
    else if (player[p].timer > 26){
      var b = checkForSpecials(p);
      var t = checkForTilts(p);
      var s = checkForSmashes(p);
      if (checkForJump(p)){
        marth.KNEEBEND.init(p);
        return true;
      }
      else if (b[0]){
        marth[b[1]].init(p);
        return true;
      }
      else if (s[0]){
        marth[s[1]].init(p);
        return true;
      }
      else if (t[0]){
        marth[t[1]].init(p);
        return true;
      }
      else if (checkForDash(p)){
        marth.DASH.init(p);
        return true;
      }
      else if (checkForSmashTurn(p)){
        marth.SMASHTURN.init(p);
        return true;
      }
      else if (checkForTiltTurn(p)){
        player[p].phys.dashbuffer = tiltTurnDashBuffer(p);
        marth.TILTTURN.init(p);
        return true;
      }
      else if (Math.abs(player[p].inputs.lStickAxis[0].x) > 0.3){
        marth.WALK.init(p,true);
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
}

marth.JAB2 = {
  name : "JAB2",
  canEdgeCancel : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "JAB2";
    player[p].timer = 0;
    player[p].phys.jabCombo = false;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.jab2.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.jab2.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.jab2.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.jab2.id3;
    marth.JAB2.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.JAB2.interrupt(p)){
      reduceByTraction(p,true);
      if (player[p].timer > 4 && player[p].timer < 14){
        drawVfx("swingJab2",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-5);
      }
      if (player[p].timer > 1 && player[p].timer < 26 && player[p].inputs.a[0] && !player[p].inputs.a[1]){
        player[p].phys.jabCombo = true;
      }
      if (player[p].timer == 5){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        sounds.sword1.play();
      }
      if (player[p].timer > 5 && player[p].timer < 10){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 10){
        turnOffHitboxes(p);
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 19 && player[p].phys.jabCombo){
      marth.JAB1.init(p);
      return true;
    }
    else if (player[p].timer > 28){
      marth.WAIT.init(p);
      return true;
    }
    else if (player[p].timer > 27){
      var b = checkForSpecials(p);
      var t = checkForTilts(p);
      var s = checkForSmashes(p);
      if (checkForJump(p)){
        marth.KNEEBEND.init(p);
        return true;
      }
      else if (b[0]){
        marth[b[1]].init(p);
        return true;
      }
      else if (s[0]){
        marth[s[1]].init(p);
        return true;
      }
      else if (t[0]){
        marth[t[1]].init(p);
        return true;
      }
      else if (checkForDash(p)){
        marth.DASH.init(p);
        return true;
      }
      else if (checkForSmashTurn(p)){
        marth.SMASHTURN.init(p);
        return true;
      }
      else if (checkForTiltTurn(p)){
        player[p].phys.dashbuffer = tiltTurnDashBuffer(p);
        marth.TILTTURN.init(p);
        return true;
      }
      else if (Math.abs(player[p].inputs.lStickAxis[0].x) > 0.3){
        marth.WALK.init(p,true);
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
}

marth.DOWNTILT = {
  name : "DOWNTILT",
  canEdgeCancel : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "DOWNTILT";
    player[p].timer = 0;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.dtilt.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.dtilt.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.dtilt.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.dtilt.id3;
    marth.DOWNTILT.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.DOWNTILT.interrupt(p)){
      reduceByTraction(p,true);
      if (player[p].timer > 5 && player[p].timer < 10){
        drawVfx("swingDtilt",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-6);
      }
      if (player[p].timer == 7){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        sounds.sword2.play();
      }
      if (player[p].timer > 7 && player[p].timer < 10){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 10){
        turnOffHitboxes(p);
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 49){
      marth.SQUATWAIT.init(p);
      return true;
    }
    else if (player[p].timer > 19){
      var b = checkForSpecials(p);
      var t = checkForTilts(p);
      var s = checkForSmashes(p);
      if (checkForJump(p)){
        marth.KNEEBEND.init(p);
        return true;
      }
      else if (b[0]){
        marth[b[1]].init(p);
        return true;
      }
      else if (s[0]){
        marth[s[1]].init(p);
        return true;
      }
      else if (t[0]){
        marth[t[1]].init(p);
        return true;
      }
      else if (checkForDash(p)){
        marth.DASH.init(p);
        return true;
      }
      else if (checkForSmashTurn(p)){
        marth.SMASHTURN.init(p);
        return true;
      }
      else if (player[p].inputs.lStickAxis[0].x*player[p].phys.face < -0.3 && Math.abs(player[p].inputs.lStickAxis[0].x) > player[p].inputs.lStickAxis[0].y*-1){
        player[p].phys.dashbuffer = tiltTurnDashBuffer(p);
        marth.TILTTURN.init(p);
        return true;
      }
      else if (player[p].inputs.lStickAxis[0].x*player[p].phys.face > 0.3 && Math.abs(player[p].inputs.lStickAxis[0].x) > player[p].inputs.lStickAxis[0].y*-1){
        marth.WALK.init(p,true);
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
}

marth.UPTILT = {
  name : "UPTILT",
  canEdgeCancel : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "UPTILT";
    player[p].timer = 0;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.uptilt1.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.uptilt1.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.uptilt1.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.uptilt1.id3;
    marth.UPTILT.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.UPTILT.interrupt(p)){
      reduceByTraction(p,true);
      if (player[p].timer > 4 && player[p].timer < 15){
        drawVfx("swingUptilt",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-5);
      }
      if (player[p].timer == 6){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        sounds.sword2.play();
      }
      if (player[p].timer > 6 && player[p].timer < 13){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 9){
        player[p].hitboxes.frame = 0;
        player[p].hitboxes.id[0] = player[p].charHitboxes.uptilt2.id0;
        player[p].hitboxes.id[1] = player[p].charHitboxes.uptilt2.id1;
        player[p].hitboxes.id[2] = player[p].charHitboxes.uptilt2.id2;
        player[p].hitboxes.id[3] = player[p].charHitboxes.uptilt2.id3;
      }
      if (player[p].timer == 13){
        turnOffHitboxes(p);
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 39){
      marth.WAIT.init(p);
      return true;
    }
    else if (player[p].timer > 31){
      var b = checkForSpecials(p);
      var t = checkForTilts(p);
      var s = checkForSmashes(p);
      if (checkForJump(p)){
        marth.KNEEBEND.init(p);
        return true;
      }
      else if (b[0]){
        marth[b[1]].init(p);
        return true;
      }
      else if (s[0]){
        marth[s[1]].init(p);
        return true;
      }
      else if (t[0]){
        marth[t[1]].init(p);
        return true;
      }
      else if (checkForDash(p)){
        marth.DASH.init(p);
        return true;
      }
      else if (checkForSmashTurn(p)){
        marth.SMASHTURN.init(p);
        return true;
      }
      else if (checkForTiltTurn(p)){
        player[p].phys.dashbuffer = tiltTurnDashBuffer(p);
        marth.TILTTURN.init(p);
        return true;
      }
      else if (Math.abs(player[p].inputs.lStickAxis[0].x) > 0.3){
        marth.WALK.init(p,true);
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
}

marth.FORWARDTILT = {
  name : "FORWARDTILT",
  canEdgeCancel : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "FORWARDTILT";
    player[p].timer = 0;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.ftilt.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.ftilt.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.ftilt.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.ftilt.id3;
    marth.FORWARDTILT.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.FORWARDTILT.interrupt(p)){
      reduceByTraction(p,true);
      if (player[p].timer > 5 && player[p].timer < 14){
        drawVfx("swingFtilt",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-6);
      }
      if (player[p].timer == 7){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        sounds.sword2.play();
      }
      if (player[p].timer > 7 && player[p].timer < 11){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 11){
        turnOffHitboxes(p);
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 35){
      marth.WAIT.init(p);
      return true;
    }
    else {
      return false;
    }
  }
}

// ---------- AERIALS --------------

marth.ATTACKAIRF = {
  name : "ATTACKAIRF",
  canPassThrough : false,
  canGrabLedge : [false,false],
  wallJumpAble : false,
  headBonk : false,
  canBeGrabbed : true,
  landType : 1,
  init : function(p){
    player[p].actionState = "ATTACKAIRF";
    player[p].timer = 0;
    player[p].phys.autoCancel = false;
    player[p].inAerial = true;
    player[p].hitboxes.id[0] = player[p].charHitboxes.fair.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.fair.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.fair.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.fair.id3;
    turnOffHitboxes(p);
    marth.ATTACKAIRF.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.ATTACKAIRF.interrupt(p)){
      fastfall(p);
      airDrift(p);
      if (player[p].timer > 2 && player[p].timer < 11){
        drawVfx("swingFair",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-3);
      }
      if (player[p].timer == 4){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        sounds.sword3.play();
      }
      if (player[p].timer > 4 && player[p].timer < 8){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 8){
        turnOffHitboxes(p);
      }
      if (player[p].timer == 27){
        player[p].phys.autoCancel = true;
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 33){
      marth.FALL.init(p);
      return true;
    }
    else if (player[p].timer > 29){
      var a = checkForAerials(p);
      if (((player[p].inputs.x[0] && !player[p].inputs.x[1]) || (player[p].inputs.y[0] && !player[p].inputs.y[1]) || (player[p].inputs.lStickAxis[0].y > 0.7 && player[p].inputs.lStickAxis[1].y <= 0.7)) && !player[p].phys.doubleJumped){
        if (player[p].inputs.lStickAxis[0].x*player[p].phys.face < -0.3){
          marth.JUMPAERIALB.init(p);
        }
        else {
          marth.JUMPAERIALF.init(p);
        }
        return true;
      }
      else if (a[0]){
        marth[a[1]].init(p);
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  },
  land : function(p){
    if (player[p].phys.autoCancel){
      marth.LANDING.init(p);
    }
    else {
      marth.LANDINGATTACKAIRF.init(p);
    }
  }
}

marth.ATTACKAIRB = {
  name : "ATTACKAIRB",
  canPassThrough : false,
  canGrabLedge : [false,false],
  wallJumpAble : false,
  headBonk : false,
  canBeGrabbed : true,
  landType : 1,
  init : function(p){
    player[p].actionState = "ATTACKAIRB";
    player[p].timer = 0;
    player[p].phys.autoCancel = false;
    player[p].inAerial = true;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.bair.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.bair.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.bair.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.bair.id3;
    marth.ATTACKAIRB.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.ATTACKAIRB.interrupt(p)){
      if (player[p].timer == 30){
        player[p].phys.face *= -1;
      }
      fastfall(p);
      airDrift(p);
      if (player[p].timer > 2 && player[p].timer < 12){
        drawVfx("swingBair",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-3);
      }
      if (player[p].timer == 7){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        sounds.sword3.play();
      }
      if (player[p].timer > 7 && player[p].timer < 12){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 12){
        turnOffHitboxes(p);
      }
      if (player[p].timer == 32){
        player[p].phys.autoCancel = true;
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 39){
      marth.FALL.init(p);
      return true;
    }
    else if (player[p].timer > 34){
      var a = checkForAerials(p);
      if (((player[p].inputs.x[0] && !player[p].inputs.x[1]) || (player[p].inputs.y[0] && !player[p].inputs.y[1]) || (player[p].inputs.lStickAxis[0].y > 0.7 && player[p].inputs.lStickAxis[1].y <= 0.7)) && !player[p].phys.doubleJumped){
        if (player[p].inputs.lStickAxis[0].x*player[p].phys.face < -0.3){
          marth.JUMPAERIALB.init(p);
        }
        else {
          marth.JUMPAERIALF.init(p);
        }
        return true;
      }
      else if (a[0]){
        marth[a[1]].init(p);
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  },
  land : function(p){
    if (player[p].phys.autoCancel){
      marth.LANDING.init(p);
    }
    else {
      marth.LANDINGATTACKAIRB.init(p);
    }
  }
}

marth.ATTACKAIRU = {
  name : "ATTACKAIRU",
  canPassThrough : false,
  canGrabLedge : [false,false],
  wallJumpAble : false,
  headBonk : false,
  canBeGrabbed : true,
  landType : 1,
  init : function(p){
    player[p].actionState = "ATTACKAIRU";
    player[p].timer = 0;
    player[p].phys.autoCancel = true;
    player[p].inAerial = true;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.upair.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.upair.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.upair.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.upair.id3;
    marth.ATTACKAIRU.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.ATTACKAIRU.interrupt(p)){
      fastfall(p);
      airDrift(p);
      if (player[p].timer > 4 && player[p].timer < 15){
        drawVfx("swingUpair",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-5);
      }
      if (player[p].timer == 5){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        player[p].phys.autoCancel = false;
        sounds.sword3.play();
      }
      if (player[p].timer > 5 && player[p].timer < 9){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 9){
        turnOffHitboxes(p);
      }
      if (player[p].timer == 27){
        player[p].phys.autoCancel = true;
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 45){
      marth.FALL.init(p);
      return true;
    }
    else {
      return false;
    }
  },
  land : function(p){
    if (player[p].phys.autoCancel){
      marth.LANDING.init(p);
    }
    else {
      marth.LANDINGATTACKAIRU.init(p);
    }
  }
}

marth.ATTACKAIRD = {
  name : "ATTACKAIRD",
  canPassThrough : false,
  canGrabLedge : [false,false],
  wallJumpAble : false,
  headBonk : false,
  canBeGrabbed : true,
  landType : 1,
  init : function(p){
    player[p].actionState = "ATTACKAIRD";
    player[p].timer = 0;
    player[p].phys.autoCancel = true;
    player[p].inAerial = true;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.dair.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.dair.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.dair.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.dair.id3;
    marth.ATTACKAIRD.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.ATTACKAIRD.interrupt(p)){
      fastfall(p);
      airDrift(p);
      if (player[p].timer > 4 && player[p].timer < 12){
        drawVfx("swingDair",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-5);
      }
      if (player[p].timer == 6){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        player[p].phys.autoCancel = false;
        sounds.sword3.play();
      }
      if (player[p].timer > 6 && player[p].timer < 10){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 10){
        turnOffHitboxes(p);
      }
      if (player[p].timer == 48){
        player[p].phys.autoCancel = true;
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 59){
      marth.FALL.init(p);
      return true;
    }
    else {
      return false;
    }
  },
  land : function(p){
    if (player[p].phys.autoCancel){
      marth.LANDING.init(p);
    }
    else {
      marth.LANDINGATTACKAIRD.init(p);
    }
  }
}

marth.ATTACKAIRN = {
  name : "ATTACKAIRN",
  canPassThrough : false,
  canGrabLedge : [false,false],
  wallJumpAble : false,
  headBonk : false,
  canBeGrabbed : true,
  landType : 1,
  init : function(p){
    player[p].actionState = "ATTACKAIRN";
    player[p].timer = 0;
    player[p].phys.autoCancel = true;
    player[p].inAerial = true;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.nair1.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.nair1.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.nair1.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.nair1.id3;
    marth.ATTACKAIRN.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.ATTACKAIRN.interrupt(p)){
      fastfall(p);
      airDrift(p);
      if (player[p].timer > 4 && player[p].timer < 9){
        drawVfx("swingNair1",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-5);
      }
      if (player[p].timer > 13 && player[p].timer < 18){
        drawVfx("swingNair2",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-14);
      }
      if (player[p].timer == 6){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        player[p].phys.autoCancel = false;
        sounds.sword1.play();
      }
      if (player[p].timer == 7){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 8){
        turnOffHitboxes(p);
      }

      if (player[p].timer == 15){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.id[0] = player[p].charHitboxes.nair2.id0;
        player[p].hitboxes.id[1] = player[p].charHitboxes.nair2.id1;
        player[p].hitboxes.id[2] = player[p].charHitboxes.nair2.id2;
        player[p].hitboxes.id[3] = player[p].charHitboxes.nair2.id3;
        player[p].hitboxes.frame = 0;
        sounds.sword2.play();
      }
      if (player[p].timer > 15 && player[p].timer < 22){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 22){
        turnOffHitboxes(p);
      }
      if (player[p].timer == 25){
        player[p].phys.autoCancel = true;
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 49){
      marth.FALL.init(p);
      return true;
    }
    else {
      return false;
    }
  },
  land : function(p){
    if (player[p].phys.autoCancel){
      marth.LANDING.init(p);
    }
    else {
      marth.LANDINGATTACKAIRN.init(p);
    }
  }
}

// ----------------SMASHES -----------
marth.FORWARDSMASH = {
  name : "FORWARDSMASH",
  canEdgeCancel : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "FORWARDSMASH";
    player[p].timer = 0;
    player[p].phys.charging = false;
    player[p].phys.chargeFrames = 0;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.fsmash.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.fsmash.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.fsmash.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.fsmash.id3;
    marth.FORWARDSMASH.main(p);
  },
  main : function(p){
    if (player[p].timer == 3){
      if (player[p].inputs.a[0] || player[p].inputs.z[0]){
        player[p].phys.charging = true;
        player[p].phys.chargeFrames++;
        if (player[p].phys.chargeFrames == 5){
          sounds.smashcharge.play();
        }
        if (player[p].phys.chargeFrames == 60){
          player[p].timer++;
          player[p].phys.charging = false;
        }
      }
      else {
        player[p].timer++;
        player[p].phys.charging = false;
      }
    }
    else {
      player[p].timer++;
      player[p].phys.charging = false;
    }
    if (!marth.FORWARDSMASH.interrupt(p)){
      reduceByTraction(p,true);


      if (player[p].timer == 5){
        sounds.sword3.play();
      }

      if (player[p].timer > 6 && player[p].timer < 14){
        drawVfx("swingFsmash",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-7);
      }
      if (player[p].timer == 10){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        randomShout(cS[p]);
      }
      if (player[p].timer > 10 && player[p].timer < 14){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 14){
        turnOffHitboxes(p);
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 49){
      marth.WAIT.init(p);
      return true;
    }
    else if (player[p].timer > 47 && !player[p].inCSS){
      var b = checkForSpecials(p);
      var t = checkForTilts(p);
      var s = checkForSmashes(p);
      if (checkForJump(p)){
        marth.KNEEBEND.init(p);
        return true;
      }
      else if (b[0]){
        marth[b[1]].init(p);
        return true;
      }
      else if (s[0]){
        marth[s[1]].init(p);
        return true;
      }
      else if (t[0]){
        marth[t[1]].init(p);
        return true;
      }
      else if (checkForDash(p)){
        marth.DASH.init(p);
        return true;
      }
      else if (checkForSmashTurn(p)){
        marth.SMASHTURN.init(p);
        return true;
      }
      else if (checkForTiltTurn(p)){
        player[p].phys.dashbuffer = tiltTurnDashBuffer(p);
        marth.TILTTURN.init(p);
        return true;
      }
      else if (Math.abs(player[p].inputs.lStickAxis[0].x) > 0.3){
        marth.WALK.init(p,true);
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
}

marth.UPSMASH = {
  name : "UPSMASH",
  canEdgeCancel : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "UPSMASH";
    player[p].timer = 0;
    player[p].phys.charging = false;
    player[p].phys.chargeFrames = 0;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.upsmash.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.upsmash.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.upsmash.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.upsmash.id3;
    marth.UPSMASH.main(p);
  },
  main : function(p){
    if (player[p].timer == 7){
      if (player[p].inputs.a[0] || player[p].inputs.z[0]){
        player[p].phys.charging = true;
        player[p].phys.chargeFrames++;
        if (player[p].phys.chargeFrames == 5){
          sounds.smashcharge.play();
        }
        if (player[p].phys.chargeFrames == 60){
          player[p].timer++;
          player[p].phys.charging = false;
        }
      }
      else {
        player[p].timer++;
        player[p].phys.charging = false;
      }
    }
    else {
      player[p].timer++;
      player[p].phys.charging = false;
    }
    if (!marth.UPSMASH.interrupt(p)){
      reduceByTraction(p,true);




      if (player[p].timer > 10 && player[p].timer < 15){
        drawVfx("swingUpsmash",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-11);
      }
      if (player[p].timer == 13){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        sounds.sword3.play();
        randomShout(cS[p]);
      }
      if (player[p].timer > 13 && player[p].timer < 17){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 17){
        turnOffHitboxes(p);
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 54){
      marth.WAIT.init(p);
      return true;
    }
    else if (player[p].timer > 45 && !player[p].inCSS){
      var b = checkForSpecials(p);
      var t = checkForTilts(p);
      var s = checkForSmashes(p);
      if (checkForJump(p)){
        marth.KNEEBEND.init(p);
        return true;
      }
      else if (b[0]){
        marth[b[1]].init(p);
        return true;
      }
      else if (s[0]){
        marth[s[1]].init(p);
        return true;
      }
      else if (t[0]){
        marth[t[1]].init(p);
        return true;
      }
      else if (checkForDash(p)){
        marth.DASH.init(p);
        return true;
      }
      else if (checkForSmashTurn(p)){
        marth.SMASHTURN.init(p);
        return true;
      }
      else if (checkForTiltTurn(p)){
        player[p].phys.dashbuffer = tiltTurnDashBuffer(p);
        marth.TILTTURN.init(p);
        return true;
      }
      else if (Math.abs(player[p].inputs.lStickAxis[0].x) > 0.3){
        marth.WALK.init(p,true);
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
}

marth.DOWNSMASH = {
  name : "DOWNSMASH",
  canEdgeCancel : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "DOWNSMASH";
    player[p].timer = 0;
    player[p].phys.charging = false;
    player[p].phys.chargeFrames = 0;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.dsmash1.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.dsmash1.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.dsmash1.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.dsmash1.id3;
    marth.DOWNSMASH.main(p);
  },
  main : function(p){
    if (player[p].timer == 3){
      if (player[p].inputs.a[0] || player[p].inputs.z[0]){
        player[p].phys.charging = true;
        player[p].phys.chargeFrames++;
        if (player[p].phys.chargeFrames == 5){
          sounds.smashcharge.play();
        }
        if (player[p].phys.chargeFrames == 60){
          player[p].timer++;
          player[p].phys.charging = false;
        }
      }
      else {
        player[p].timer++;
        player[p].phys.charging = false;
      }
    }
    else {
      player[p].timer++;
      player[p].phys.charging = false;
    }
    if (!marth.DOWNSMASH.interrupt(p)){
      reduceByTraction(p,true);




      if (player[p].timer > 3 && player[p].timer < 10){
        drawVfx("swingDsmash1",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-4);
      }
      if (player[p].timer > 16 && player[p].timer < 26){
        drawVfx("swingDsmash2",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-17);
      }
      if (player[p].timer == 5){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        sounds.sword3.play();
        randomShout(cS[p]);
      }
      if (player[p].timer > 5 && player[p].timer < 8){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 8){
        turnOffHitboxes(p);
      }

      if (player[p].timer == 20){
        player[p].hitboxes.id[0] = player[p].charHitboxes.dsmash2.id0;
        player[p].hitboxes.id[1] = player[p].charHitboxes.dsmash2.id1;
        player[p].hitboxes.id[2] = player[p].charHitboxes.dsmash2.id2;
        player[p].hitboxes.id[3] = player[p].charHitboxes.dsmash2.id3;
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        sounds.sword3.play();
      }
      if (player[p].timer > 20 && player[p].timer < 23){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 23){
        turnOffHitboxes(p);
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 64){
      marth.WAIT.init(p);
      return true;
    }
    else if (player[p].timer > 61 && !player[p].inCSS){
      var b = checkForSpecials(p);
      var t = checkForTilts(p);
      var s = checkForSmashes(p);
      if (checkForJump(p)){
        marth.KNEEBEND.init(p);
        return true;
      }
      else if (b[0]){
        marth[b[1]].init(p);
        return true;
      }
      else if (s[0]){
        marth[s[1]].init(p);
        return true;
      }
      else if (t[0]){
        marth[t[1]].init(p);
        return true;
      }
      else if (checkForDash(p)){
        marth.DASH.init(p);
        return true;
      }
      else if (checkForSmashTurn(p)){
        marth.SMASHTURN.init(p);
        return true;
      }
      else if (checkForTiltTurn(p)){
        player[p].phys.dashbuffer = tiltTurnDashBuffer(p);
        marth.TILTTURN.init(p);
        return true;
      }
      else if (Math.abs(player[p].inputs.lStickAxis[0].x) > 0.3){
        marth.WALK.init(p,true);
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
}

// OTHER

marth.GRAB = {
  name : "GRAB",
  canEdgeCancel : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "GRAB";
    player[p].timer = 0;
    player[p].phys.charging = false;
    player[p].phys.chargeFrames = 0;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.grab.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.grab.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.grab.id2;
    marth.GRAB.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.GRAB.interrupt(p)){
      reduceByTraction(p,true);
      if (player[p].timer == 7){
        player[p].hitboxes.active = [true,true,true,false];
        player[p].hitboxes.frame = 0;
        sounds.grab.play();
      }
      if (player[p].timer > 7 && player[p].timer < 9){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 9){
        turnOffHitboxes(p);
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 30){
      marth.WAIT.init(p);
      return true;
    }
    else {
      return false;
    }
  }
}


marth.ATTACKDASH = {
  name : "ATTACKDASH",
  canEdgeCancel : false,
  setVelocities : [0.755,1.962,2.714,3.010,2.849,2.232,1.184,0.542,0.704,1.325,1.487,1.079,0.666,0.631,0.597,0.565,0.536,0.508,0.482,0.458,0.436,0.416,0.398,0.370,0.332,0.299,0.270,0.244,0.222,0.205,0.191,0.181,0.176,0.165,0.148,0.130,0.112,0.093,0.073,0.053,0.032,0.011,-0.783,-0.783,0,0,0.001,0.001,0],
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "ATTACKDASH";
    player[p].timer = 0;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.dashattack.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.dashattack.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.dashattack.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.dashattack.id3;
    marth.ATTACKDASH.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.ATTACKDASH.interrupt(p)){
      player[p].phys.cVel.x = marth.ATTACKDASH.setVelocities[player[p].timer-1]*player[p].phys.face;

      if (player[p].timer > 12 && player[p].timer < 21){
        drawVfx("swingDashAttack",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-13);
      }
      if (player[p].timer == 12){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        sounds.sword1.play();
      }
      if (player[p].timer > 12 && player[p].timer < 16){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 16){
        turnOffHitboxes(p);
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 49){
      marth.WAIT.init(p);
      return true;
    }
    else if (player[p].timer < 5 && player[p].inputs.lAnalog[0] > 0 || player[p].inputs.rAnalog[0] > 0){
      if (player[p].phys.cVel.x*player[p].phys.face > player[p].charAttributes.dMaxV){
        player[p].phys.cVel.x = player[p].charAttributes.dMaxV*player[p].phys.face;
      }
      marth.GRAB.init(p);
      return true;
    }
    else if (player[p].timer > 39){
      var b = checkForSpecials(p);
      var t = checkForTilts(p);
      var s = checkForSmashes(p);
      if (checkForJump(p)){
        marth.KNEEBEND.init(p);
        return true;
      }
      else if (b[0]){
        marth[b[1]].init(p);
        return true;
      }
      else if (s[0]){
        marth[s[1]].init(p);
        return true;
      }
      else if (t[0]){
        marth[t[1]].init(p);
        return true;
      }
      else if (checkForDash(p)){
        marth.DASH.init(p);
        return true;
      }
      else if (checkForSmashTurn(p)){
        marth.SMASHTURN.init(p);
        return true;
      }
      else if (checkForTiltTurn(p)){
        player[p].phys.dashbuffer = tiltTurnDashBuffer(p);
        marth.TILTTURN.init(p);
        return true;
      }
      else if (Math.abs(player[p].inputs.lStickAxis[0].x) > 0.3){
        marth.WALK.init(p,true);
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
}

// -------- SPECIALS -----------

marth.SIDESPECIALGROUND = {
  name : "SIDESPECIALGROUND",
  canPassThrough : false,
  canEdgeCancel : false,
  canGrabLedge : [false,false],
  wallJumpAble : false,
  headBonk : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "SIDESPECIALGROUND";
    player[p].timer = 0;
    if (!player[p].phys.grounded){
      if (player[p].phys.sideBJumpFlag){
        player[p].phys.cVel.y = 1;
        player[p].phys.sideBJumpFlag = false;
      }
      else {
        player[p].phys.cVel.y = 0;
      }
      player[p].phys.fastfalled = false;
      player[p].phys.cVel.x *= 0.8;
    }
    else {
      player[p].phys.cVel.x *= 0.2;
    }
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.sidespecial.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.sidespecial.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.sidespecial.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.sidespecial.id3;
    sounds.shout6.play();
    marth.SIDESPECIALGROUND.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.SIDESPECIALGROUND.interrupt(p)){
      if (player[p].timer == 6){
        sounds.dancingBlade.play();
      }
      if (!player[p].phys.grounded){
        player[p].phys.cVel.y -= 0.06;
        if (player[p].phys.cVel.x > 0){
          player[p].phys.cVel.x -= 0.0025;
          if (player[p].phys.cVel.x < 0){
            player[p].phys.cVel.x = 0;
          }
        }
        else {
          player[p].phys.cVel.x += 0.0025;
          if (player[p].phys.cVel.x > 0){
            player[p].phys.cVel.x = 0
          }
        }
      }
      else {
        reduceByTraction(p,true);
      }

      if (player[p].timer > 4 && player[p].timer < 12){
        drawVfx("swingSideB",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-5);
      }
      if (player[p].timer == 6){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
      }
      if (player[p].timer > 6 && player[p].timer < 9){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 9){
        turnOffHitboxes(p);
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 29){
      if (player[p].phys.grounded){
        marth.WAIT.init(p);
      }
      else {
        marth.FALL.init(p);
      }
      return true;
    }
    else {
      return false;
    }
  }
}

marth.SIDESPECIALAIR = {
  name : "SIDESPECIALAIR",
  canPassThrough : false,
  canEdgeCancel : false,
  canGrabLedge : [false,false],
  wallJumpAble : false,
  headBonk : false,
  canBeGrabbed : true,
  landType : 1,
  init : function(p){
    player[p].actionState = "SIDESPECIALAIR";
    player[p].timer = 0;
    if (!player[p].phys.grounded){
      if (player[p].phys.sideBJumpFlag){
        player[p].phys.cVel.y = 1;
        player[p].phys.sideBJumpFlag = false;
      }
      else {
        player[p].phys.cVel.y = 0;
      }
      player[p].phys.fastfalled = false;
      player[p].phys.cVel.x *= 0.8;
    }
    else {
      player[p].phys.cVel.x *= 0.2;
    }
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.sidespecial.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.sidespecial.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.sidespecial.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.sidespecial.id3;
    sounds.shout6.play();
    marth.SIDESPECIALAIR.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.SIDESPECIALAIR.interrupt(p)){
      if (player[p].timer == 6){
        sounds.dancingBlade.play();
      }
      if (!player[p].phys.grounded){
        player[p].phys.cVel.y -= 0.06;
        if (player[p].phys.cVel.x > 0){
          player[p].phys.cVel.x -= 0.0025;
          if (player[p].phys.cVel.x < 0){
            player[p].phys.cVel.x = 0;
          }
        }
        else {
          player[p].phys.cVel.x += 0.0025;
          if (player[p].phys.cVel.x > 0){
            player[p].phys.cVel.x = 0
          }
        }
      }
      else {
        reduceByTraction(p,true);
      }

      if (player[p].timer > 4 && player[p].timer < 12){
        drawVfx("swingSideB",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-5);
      }
      if (player[p].timer == 6){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
      }
      if (player[p].timer > 6 && player[p].timer < 9){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 9){
        turnOffHitboxes(p);
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 29){
      if (player[p].phys.grounded){
        marth.WAIT.init(p);
      }
      else {
        marth.FALL.init(p);
      }
      return true;
    }
    else {
      return false;
    }
  },
  land : function(p){
    player[p].actionState = "SIDESPECIALGROUND";
  }
}

marth.DOWNSPECIALAIR = {
  name : "DOWNSPECIALAIR",
  canPassThrough : false,
  canEdgeCancel : false,
  canGrabLedge : [false,false],
  wallJumpAble : false,
  headBonk : false,
  canBeGrabbed : true,
  landType : 1,
  init : function(p){
    player[p].actionState = "DOWNSPECIALAIR";
    player[p].timer = 0;
    player[p].phys.fastfalled = false;
    marth.DOWNSPECIALAIR.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.DOWNSPECIALAIR.interrupt(p)){

    }
  },
  interrupt : function(p){
    if (player[p].timer > 59){
      if (player[p].phys.grounded){
        marth.WAIT.init(p);
      }
      else {
        marth.FALL.init(p);
      }
      return true;
    }
    else {
      return false;
    }
  },
  land : function(p){
    player[p].actionState = "DOWNSPECIALGROUND";
  }
}

marth.DOWNSPECIALGROUND = {
  name : "DOWNSPECIALGROUND",
  canPassThrough : false,
  canEdgeCancel : false,
  canGrabLedge : [false,false],
  wallJumpAble : false,
  headBonk : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "DOWNSPECIALGROUND";
    player[p].timer = 0;
    marth.DOWNSPECIALGROUND.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.DOWNSPECIALGROUND.interrupt(p)){
    }
  },
  interrupt : function(p){
    if (player[p].timer > 59){
      if (player[p].phys.grounded){
        marth.WAIT.init(p);
      }
      else {
        marth.FALL.init(p);
      }
      return true;
    }
    else {
      return false;
    }
  }
}

marth.NEUTRALSPECIALAIR = {
  name : "NEUTRALSPECIALAIR",
  canPassThrough : false,
  canGrabLedge : [false,false],
  wallJumpAble : false,
  headBonk : false,
  canBeGrabbed : true,
  landType : 1,
  init : function(p){
    player[p].actionState = "NEUTRALSPECIALAIR";
    player[p].timer = 0;
    marth.NEUTRALSPECIALAIR.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.NEUTRALSPECIALAIR.interrupt(p)){
      fastfall(p);
      airDrift(p);
    }
  },
  interrupt : function(p){
    if (player[p].timer > 74){
      marth.FALL.init(p);
      return true;
    }
    else {
      return false;
    }
  },
  land : function(p){
    player[p].actionState = "NEUTRALSPECIALGROUND";
  }
}

marth.NEUTRALSPECIALGROUND = {
  name : "NEUTRALSPECIALGROUND",
  canPassThrough : false,
  canEdgeCancel : true,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "NEUTRALSPECIALGROUND";
    player[p].timer = 0;
    marth.NEUTRALSPECIALGROUND.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.NEUTRALSPECIALGROUND.interrupt(p)){
      reduceByTraction(p);
    }
  },
  interrupt : function(p){
    if (player[p].timer > 74){
      marth.WAIT.init(p);
      return true;
    }
    else {
      return false;
    }
  }
}
marth.UPSPECIAL = {
  name : "UPSPECIAL",
  canPassThrough : true,
  canGrabLedge : [true,false],
  setVelocities : [[0.75685,14.41555],
  [0.71450,15.51062],
  [0.67334,8.65633],
  [0.63338,2.42162],
  [0.59462,2.11897],
  [0.55706,1.83569],
  [0.52069,1.57181],
  [0.48552,1.32731],
  [0.45155,1.10218],
  [0.41878,0.89645],
  [0.38720,0.71010],
  [0.35682,0.54314],
  [0.32765,0.39556],
  [0.29966,0.26735],
  [0.27288,0.15855],
  [0.24729,0.06912],
  [0.22290,-0.00093]],
  wallJumpAble : false,
  headBonk : false,
  canBeGrabbed : true,
  landType : 1,
  init : function(p){
    player[p].actionState = "UPSPECIAL";
    player[p].timer = 0;
    player[p].phys.cVel = new Vec2D(0,0);
    player[p].phys.fastfalled = false;
    player[p].phys.upbAngleMultiplier = 0;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.upb1.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.upb1.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.upb1.id2;
    player[p].phys.landingMultiplier = 30/34;
    sounds.dolphinSlash.play();
    sounds.dolphinSlash2.play();
    marth.UPSPECIAL.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.UPSPECIAL.interrupt(p)){
      if (player[p].phys.cVel.y <= 0){
        player[p].phys.canWallJump = true;
      }
      if (player[p].timer < 6){
        if (Math.abs(player[p].inputs.lStickAxis[0].x) > 0.7){
          player[p].phys.upbAngleMultiplier = -player[p].inputs.lStickAxis[0].x * Math.PI/16;
        }
      }
      if (player[p].timer == 6){
        player[p].phys.grounded = false;
        if (player[p].inputs.lStickAxis[0].x * player[p].phys.face < -0.7){
          player[p].phys.face *= -1;
        }
      }
      if (player[p].timer > 5 && player[p].timer < 23){
        player[p].phys.cVel = new Vec2D(marth.UPSPECIAL.setVelocities[player[p].timer-6][0]*player[p].phys.face*Math.cos(player[p].phys.upbAngleMultiplier)-marth.UPSPECIAL.setVelocities[player[p].timer-6][1]*Math.sin(player[p].phys.upbAngleMultiplier),marth.UPSPECIAL.setVelocities[player[p].timer-6][0]*player[p].phys.face*Math.sin(player[p].phys.upbAngleMultiplier)+marth.UPSPECIAL.setVelocities[player[p].timer-6][1]*Math.cos(player[p].phys.upbAngleMultiplier));
      }
      else if (player[p].timer > 22){
        fastfall(p);
        airDrift(p);
        if (Math.abs(player[p].phys.cVel.x) > 0.36){
          player[p].phys.cVel.x = 0.36*Math.sign(player[p].phys.cVel.x);
        }
      }

      if (player[p].timer == 5){
        player[p].hitboxes.active = [true,true,true,false];
        player[p].hitboxes.frame = 0;
      }
      if (player[p].timer == 6){
        player[p].hitboxes.id[0] = player[p].charHitboxes.upb2.id0;
        player[p].hitboxes.id[1] = player[p].charHitboxes.upb2.id1;
        player[p].hitboxes.id[2] = player[p].charHitboxes.upb2.id2;
      }
      if (player[p].timer > 6 && player[p].timer < 11){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 11){
        turnOffHitboxes(p);
      }
      if (player[p].timer > 2 && player[p].timer < 12){
        drawVfx("swingUpb",new Vec2D(player[p].phys.pos.x+player[p].phys.cVel.x,player[p].phys.pos.y+player[p].phys.cVel.y),player[p].phys.face,player[p].timer-3);
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 39){
      marth.FALLSPECIAL.init(p);
      return true;
    }
    else {
      return false;
    }
  },
  land : function(p){
    if (player[p].phys.cVel.y+player[p].phys.kVel.y <= 0){
      marth.LANDINGFALLSPECIAL.init(p);
    }
  }
}

// --------------- THROWS ------------
marth.THROWFORWARD = {
  name : "THROWFORWARD",
  canEdgeCancel : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "THROWFORWARD";
    player[p].timer = 0;
    aS[cS[player[p].phys.grabbing]].THROWNMARTHFORWARD.init(player[p].phys.grabbing);
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.throwforward.id0;
    randomShout(cS[p]);
    var frame = 0;
    switch (cS[player[p].phys.grabbing]){
      case 0:
        frame = 13;
        break;
      case 1:
        frame = 9;
        break;
      case 2:
        frame = 9;
        break;
      default:
        break;
    }
    player[p].phys.releaseFrame = frame;
    marth.THROWFORWARD.main(p);
  },
  main : function(p){
    player[p].timer+=13/player[p].phys.releaseFrame;
    if (!marth.THROWFORWARD.interrupt(p)){
      if (Math.floor(player[p].timer) == 13){
        hitQueue.push([player[p].phys.grabbing,p,0,false,true,true]);
        turnOffHitboxes(p);
      }

    }
  },
  interrupt : function(p){
    if (player[p].timer > 27){
      player[p].phys.grabbing = -1;
      marth.WAIT.init(p);
      return true;
    }
    else if (player[p].timer < 13 && player[player[p].phys.grabbing].phys.grabbedBy != p){
      marth.CATCHCUT.init(p);
      return true;
    }
    else {
      return false;
    }
  }
}
marth.THROWBACK = {
  name : "THROWBACK",
  canEdgeCancel : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "THROWBACK";
    player[p].timer = 0;
    aS[cS[player[p].phys.grabbing]].THROWNMARTHBACK.init(player[p].phys.grabbing);
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.throwback.id0;
    randomShout(cS[p]);
    var frame = 0;
    switch (cS[player[p].phys.grabbing]){
      case 0:
        frame = 7;
        break;
      case 1:
        frame = 5;
        break;
      case 2:
        frame = 9;
        break;
      default:
        break;
    }
    player[p].phys.releaseFrame = frame;
    marth.THROWBACK.main(p);
  },
  main : function(p){
    player[p].timer+=7/player[p].phys.releaseFrame;
    if (!marth.THROWBACK.interrupt(p)){
      if (Math.floor(player[p].timer) == 7){
        hitQueue.push([player[p].phys.grabbing,p,0,false,true,true]);
        turnOffHitboxes(p);
      }

    }
  },
  interrupt : function(p){
    if (player[p].timer > 39){
      player[p].phys.grabbing = -1;
      marth.WAIT.init(p);
      return true;
    }
    else if (player[p].timer < 7 && player[player[p].phys.grabbing].phys.grabbedBy != p){
      marth.CATCHCUT.init(p);
      return true;
    }
    else {
      return false;
    }
  }
}
marth.THROWUP = {
  name : "THROWUP",
  canEdgeCancel : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "THROWUP";
    player[p].timer = 0;
    aS[cS[player[p].phys.grabbing]].THROWNMARTHUP.init(player[p].phys.grabbing);
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.throwup.id0;
    var frame = 0;
    switch (cS[player[p].phys.grabbing]){
      case 0:
        frame = 11;
        break;
      case 1:
        frame = 8;
        break;
      case 2:
        frame = 9;
        break;
      default:
        break;
    }
    player[p].phys.releaseFrame = frame;
    randomShout(cS[p]);
    marth.THROWUP.main(p);
  },
  main : function(p){
    player[p].timer+=11/player[p].phys.releaseFrame;
    if (!marth.THROWUP.interrupt(p)){
      if (Math.floor(player[p].timer) == 11){
        hitQueue.push([player[p].phys.grabbing,p,0,false,true,false]);
        turnOffHitboxes(p);
      }

    }
  },
  interrupt : function(p){
    if (player[p].timer > 39){
      player[p].phys.grabbing = -1;
      marth.WAIT.init(p);
      return true;
    }
    else if (player[p].timer < 11 && player[player[p].phys.grabbing].phys.grabbedBy != p){
      console.log("test");
      marth.CATCHCUT.init(p);
      return true;
    }
    else {
      return false;
    }
  }
}
marth.THROWDOWN = {
  name : "THROWDOWN",
  canEdgeCancel : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "THROWDOWN";
    player[p].timer = 0;
    aS[cS[player[p].phys.grabbing]].THROWNMARTHDOWN.init(player[p].phys.grabbing);
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.throwdown.id0;
    randomShout(cS[p]);
    var frame = 0;
    switch (cS[player[p].phys.grabbing]){
      case 0:
        frame = 13;
        break;
      case 1:
        frame = 9;
        break;
      case 2:
        frame = 9;
        break;
      default:
        break;
    }
    player[p].phys.releaseFrame = frame;
    marth.THROWDOWN.main(p);
  },
  main : function(p){
    player[p].timer+=13/player[p].phys.releaseFrame;
    if (!marth.THROWDOWN.interrupt(p)){
      if (Math.floor(player[p].timer) == 13){
        hitQueue.push([player[p].phys.grabbing,p,0,false,true,true]);
        turnOffHitboxes(p);
      }

    }
  },
  interrupt : function(p){
    if (player[p].timer > 37){
      player[p].phys.grabbing = -1;
      marth.WAIT.init(p);
      return true;
    }
    else if (player[p].timer < 13 && player[player[p].phys.grabbing].phys.grabbedBy != p){
      console.log("test");
      marth.CATCHCUT.init(p);
      return true;
    }
    else {
      return false;
    }
  }
}

//---------------------THROWNS--------
marth.THROWNMARTHUP = {
  name : "THROWNMARTHUP",
  canEdgeCancel : false,
  canGrabLedge : [false,false],
  canBeGrabbed : false,
  ignoreCollision : true,
  init : function(p){
    player[p].actionState = "THROWNMARTHUP";
    if (player[p].phys.grabbedBy < p){
      player[p].timer = -1;
    }
    else {
      player[p].timer = 0;
    }
    player[p].phys.grounded = false;
    player[p].phys.pos = new Vec2D(player[player[p].phys.grabbedBy].phys.pos.x,player[player[p].phys.grabbedBy].phys.pos.y);
    marth.THROWNMARTHUP.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.THROWNMARTHUP.interrupt(p)){

    }
  },
  interrupt : function(p){
    return false;
  }
}


marth.THROWNMARTHDOWN = {
  name : "THROWNMARTHDOWN",
  canEdgeCancel : false,
  reverseModel : true,
  canGrabLedge : [false,false],
  canBeGrabbed : false,
  ignoreCollision : true,
  init : function(p){
    player[p].actionState = "THROWNMARTHDOWN";
    if (player[p].phys.grabbedBy < p){
      player[p].timer = -1;
    }
    else {
      player[p].timer = 0;
    }
    player[p].phys.grounded = false;
    player[p].phys.face *= -1;
    player[p].phys.pos = new Vec2D(player[player[p].phys.grabbedBy].phys.pos.x,player[player[p].phys.grabbedBy].phys.pos.y);
    marth.THROWNMARTHDOWN.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.THROWNMARTHDOWN.interrupt(p)){

    }
  },
  interrupt : function(p){
    return false;
  }
}


marth.THROWNMARTHBACK = {
  name : "THROWNMARTHBACK",
  canEdgeCancel : false,
  reverseModel : true,
  canGrabLedge : [false,false],
  canBeGrabbed : false,
  ignoreCollision : true,
  init : function(p){
    player[p].actionState = "THROWNMARTHBACK";
    if (player[p].phys.grabbedBy < p){
      player[p].timer = -1;
    }
    else {
      player[p].timer = 0;
    }
    player[p].phys.grounded = false;
    player[p].phys.face *= -1;
    player[p].phys.pos = new Vec2D(player[player[p].phys.grabbedBy].phys.pos.x,player[player[p].phys.grabbedBy].phys.pos.y);
    marth.THROWNMARTHBACK.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.THROWNMARTHBACK.interrupt(p)){

    }
  },
  interrupt : function(p){
    return false;
  }
}


marth.THROWNMARTHFORWARD = {
  name : "THROWNMARTHFORWARD",
  canEdgeCancel : false,
  canGrabLedge : [false,false],
  canBeGrabbed : false,
  ignoreCollision : true,
  init : function(p){
    player[p].actionState = "THROWNMARTHFORWARD";
    if (player[p].phys.grabbedBy < p){
      player[p].timer = -1;
    }
    else {
      player[p].timer = 0;
    }
    player[p].phys.grounded = false;
    player[p].phys.pos = new Vec2D(player[player[p].phys.grabbedBy].phys.pos.x,player[player[p].phys.grabbedBy].phys.pos.y);
    marth.THROWNMARTHFORWARD.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.THROWNMARTHFORWARD.interrupt(p)){

    }
  },
  interrupt : function(p){
    return false;
  }
}
marth.THROWNPUFFFORWARD = {
  name : "THROWNPUFFFORWARD",
  canEdgeCancel : false,
  canGrabLedge : [false,false],
  canBeGrabbed : false,
  ignoreCollision : true,
  offset : [[-10.52,-3.27],[-9.84,-3.27],[-9.13,-3.27],[-8.70,-3.27],[-8.60,-3.27],[-8.61,-3.27],[-8.67,-3.27],[-8.70,-3.27],[-9.78,-3.27],[-9.78,0.01]],
  init : function(p){
    player[p].actionState = "THROWNPUFFFORWARD";
    if (player[p].phys.grabbedBy < p){
      player[p].timer = -1;
    }
    else {
      player[p].timer = 0;
    }
    player[p].phys.grounded = false;
    marth.THROWNPUFFFORWARD.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.THROWNPUFFFORWARD.interrupt(p)){
      if (player[p].timer > 0){
        player[p].phys.pos = new Vec2D(player[player[p].phys.grabbedBy].phys.pos.x+marth.THROWNPUFFFORWARD.offset[player[p].timer-1][0]*player[p].phys.face,player[player[p].phys.grabbedBy].phys.pos.y+marth.THROWNPUFFFORWARD.offset[player[p].timer-1][1]);
      }
    }
  },
  interrupt : function(p){
    return false;
  }
}

marth.THROWNPUFFDOWN = {
  name : "THROWNPUFFDOWN",
  canEdgeCancel : false,
  canGrabLedge : [false,false],
  canBeGrabbed : false,
  ignoreCollision : true,
  offset : [[-9.84,-3.86],[-7.24,-5.16],[-4.52,-6.41],[-2.68,-7.35],[-0.51,-8.44],[-0.48,-8.42],[-0.58,-8.37],[-0.59,-8.41],[-0.51,-8.47],[-0.54,-8.45],[-0.59,-8.42],[-0.61,-8.41],[-0.57,-8.42],[-0.50,-8.43],[-0.48,-8.46],[-0.49,-8.49],[-0.49,-8.48],[-0.49,-8.44],[-0.50,-8.42],[-0.54,-8.41],[-0.57,-8.44],[-0.56,-8.47],[-0.54,-8.47],[-0.50,-8.44],[-0.46,-8.40],[-0.49,-8.39],[-0.54,-8.42],[-0.52,-8.47],[-0.51,-8.52],[-0.50,-8.50],[-0.52,-8.43],[-0.46,-8.37],[-0.41,-8.38],[-0.47,-8.44],[-0.51,-8.45],[-0.53,-8.43],[-0.54,-8.41],[-0.47,-8.39],[-0.44,-8.43],[-0.45,-8.48],[-0.46,-8.46],[-0.48,-8.43],[-0.49,-8.41],[-0.55,-8.41],[-0.57,-8.43],[-0.57,-8.46],[-0.55,-8.47],[-0.51,-8.45],[-0.48,-8.40],[-0.51,-8.38],[-0.57,-8.39],[-0.55,-8.44],[-0.55,-8.47],[-0.54,-8.46],[-0.53,-8.43],[-0.48,-8.38],[-0.48,-8.38],[-0.52,-8.44],[-0.50,-8.46],[-0.48,-8.50],[-0.51,-8.49],[-0.55,-8.47],[-0.55,-8.47]],
  init : function(p){
    player[p].actionState = "THROWNPUFFDOWN";
    if (player[p].phys.grabbedBy < p){
      player[p].timer = -1;
    }
    else {
      player[p].timer = 0;
    }
    player[p].phys.grounded = false;

    marth.THROWNPUFFDOWN.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.THROWNPUFFDOWN.interrupt(p)){
      if (player[p].timer > 0){
        player[p].phys.pos = new Vec2D(player[player[p].phys.grabbedBy].phys.pos.x+marth.THROWNPUFFDOWN.offset[player[p].timer-1][0]*player[p].phys.face,player[player[p].phys.grabbedBy].phys.pos.y+marth.THROWNPUFFDOWN.offset[player[p].timer-1][1]);
      }
    }
  },
  interrupt : function(p){
    return false;
  }
}

marth.THROWNPUFFBACK = {
  name : "THROWNPUFFBACK",
  canEdgeCancel : false,
  canGrabLedge : [false,false],
  canBeGrabbed : false,
  ignoreCollision : true,
  reverseModel : true,
  //[1.05,7.14],[3.78,7.55],[10.37,1.56],[13.72,-6.85],[13.66,-9.95],[13.67,-10.28],[13.85,-9.92],[14.04,-9.34],[14.04,-9.34]],
  offset : [[-11.22,-3.35],[-11.51,-3.60],[-11.64,-3.90],[-11.51,-4.11],[-10.99,-4.13],[-9.98,-4.05],[-8.74,-3.92],[-7.52,-3.55],[-6.37,-2.46],[-5.04,-0.22],[-3.44,2.32],[-1.58,3.79],[0.31,4.86],[0.92,7.14],[2.41,7.55],[5.89,1.56],[6.52,-6.85],[6.13,-9.95],[6.14,-10.28],[6.32,-9.92],[6.51,-9.34],[6.51,-9.34]],
  offsetVel : [-0.12755,-1.24035,-3.10533,-2.72023,-0.32654],
  //7.53
  init : function(p){
    player[p].actionState = "THROWNPUFFBACK";
    if (player[p].phys.grabbedBy < p){
      player[p].timer = -1;
    }
    else {
      player[p].timer = 0;
    }
    player[p].phys.grounded = false;
    player[p].phys.face*= -1;
    marth.THROWNPUFFBACK.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.THROWNPUFFBACK.interrupt(p)){
      if (player[p].timer > 0){
        player[p].phys.pos = new Vec2D(player[player[p].phys.grabbedBy].phys.pos.x+marth.THROWNPUFFBACK.offset[player[p].timer-1][0]*player[p].phys.face*-1,player[player[p].phys.grabbedBy].phys.pos.y+marth.THROWNPUFFBACK.offset[player[p].timer-1][1]);
        /*if (player[p].timer > 13 && player[p].timer < 19){
          player[p].phys.pos.x += marth.THROWNPUFFBACK.offsetVel[player[p].timer-14]*player[p].phys.face;
        }*/
      }

    }
  },
  interrupt : function(p){
    return false;
  }
}

marth.THROWNPUFFUP = {
  name : "THROWNPUFFUP",
  canEdgeCancel : false,
  canGrabLedge : [false,false],
  canBeGrabbed : false,
  ignoreCollision : true,
  offset : [[-10.63,-3.65],[-9.46,-4.14],[-7.29,-4.39],[-2.98,-3.79],[2.65,-2.33],[4.95,-0.64],[4.95,-0.64]],
  init : function(p){
    player[p].actionState = "THROWNPUFFUP";
    if (player[p].phys.grabbedBy < p){
      player[p].timer = -1;
    }
    else {
      player[p].timer = 0;
    }
    player[p].phys.grounded = false;
    marth.THROWNPUFFUP.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.THROWNPUFFUP.interrupt(p)){
      if (player[p].timer > 0){
        player[p].phys.pos = new Vec2D(player[player[p].phys.grabbedBy].phys.pos.x+marth.THROWNPUFFUP.offset[player[p].timer-1][0]*player[p].phys.face,player[player[p].phys.grabbedBy].phys.pos.y+marth.THROWNPUFFUP.offset[player[p].timer-1][1]);
      }
    }
  },
  interrupt : function(p){
    return false;
  }
}

//------------CLIFF ACTIONS-----------

marth.CLIFFGETUPQUICK = {
  name : "CLIFFGETUPQUICK",
  canBeGrabbed : true,
  offset : [[-71.33,-23.71],[-71.38,-23.71],[-71.42,-23.71],[-71.45,-23.71],[-71.46,-23.71],[-71.44,-23.71],[-71.38,-23.71],[-71.26,-23.71],[-71.07,-22.69],[-70.80,-19.99],[-70.47,-16.19],[-70.11,-11.83],[-69.71,-7.48],[-69.28,-3.68],[-68.83,-1.01],[-67.88,0],[-67.38,0],[-66.87,0],[-66.35,0],[-65.81,0],[-65.27,0],[-64.73,0],[-64.19,0],[-63.65,0],[-63.12,0],[-62.59,0],[-62.08,0],[-61.60,0],[-61.17,0],[-60.80,0],[-60.50,0],[-60.28,0]],
  init : function(p){
    player[p].actionState = "CLIFFGETUPQUICK";
    player[p].timer = 0;
    player[p].phys.intangibleTimer = 30;
    marth.CLIFFGETUPQUICK.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.CLIFFGETUPQUICK.interrupt(p)){
      var x = stage.ledge[player[p].phys.onLedge][1]?stage.box[stage.ledge[player[p].phys.onLedge][0]].max.x:stage.box[stage.ledge[player[p].phys.onLedge][0]].min.x;
      var y = stage.box[stage.ledge[player[p].phys.onLedge][0]].max.y;
      if (player[p].timer < 16){
        player[p].phys.pos = new Vec2D(x+(marth.CLIFFGETUPQUICK.offset[player[p].timer-1][0]+68.4)*player[p].phys.face,y+marth.CLIFFGETUPQUICK.offset[player[p].timer-1][1]);
      }
      else {
        player[p].phys.pos.x = x+(68.4+marth.CLIFFGETUPQUICK.offset[player[p].timer-1][0])*player[p].phys.face;
      }
      if (player[p].timer == 16){
        player[p].phys.grounded = true;
        player[p].phys.onSurface = [0,stage.ledge[player[p].phys.onLedge][0]];
        player[p].phys.airborneTimer = 0;
        player[p].phys.pos.y = y;
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 32){
      player[p].phys.onLedge = -1;
      player[p].phys.ledgeRegrabCount = true;
      marth.WAIT.init(p);
      return true;
    }
    else {
      return false;
    }
  }
}

marth.CLIFFGETUPSLOW = {
  name : "CLIFFGETUPSLOW",
  init : function(p){
    player[p].timer = 1;
  },
  main : function(p){

  },
  interrupt : function(p){

  }
}

marth.CLIFFESCAPEQUICK = {
  name : "CLIFFESCAPEQUICK",
  init : function(p){
    player[p].timer = 1;
  },
  main : function(p){

  },
  interrupt : function(p){

  }
}

marth.CLIFFESCAPESLOW = {
  name : "CLIFFESCAPESLOW",
  init : function(p){
    player[p].timer = 1;
  },
  main : function(p){

  },
  interrupt : function(p){

  }
}

marth.CLIFFATTACKSLOW = {
  name : "CLIFFATTACKSLOW",
  init : function(p){
    player[p].timer = 1;
  },
  main : function(p){

  },
  interrupt : function(p){

  }
}

marth.CLIFFATTACKQUICK = {
  name : "CLIFFATTACKQUICK",
  init : function(p){
    player[p].timer = 1;
  },
  main : function(p){

  },
  interrupt : function(p){

  }
}

marth.CLIFFJUMPQUICK = {
  name : "CLIFFJUMPQUICK",
  init : function(p){
    player[p].timer = 1;
  },
  main : function(p){

  },
  interrupt : function(p){

  }
}

marth.CLIFFJUMPSLOW = {
  name : "CLIFFJUMPSLOW",
  init : function(p){
    player[p].timer = 1;
  },
  main : function(p){

  },
  interrupt : function(p){

  }
}

//------------MISC----------------
marth.CATCHATTACK = {
  name : "CATCHATTACK",
  canEdgeCancel : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "CATCHATTACK";
    player[p].timer = 0;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.pummel.id0;
    marth.CATCHATTACK.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.CATCHATTACK.interrupt(p)){
      if (player[p].timer == 6){
        player[p].hitboxes.active = [true,false,false,false];
        player[p].hitboxes.frame = 0;
      }
      if (player[p].timer == 7){
        turnOffHitboxes(p);
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 24){
      marth.CATCHWAIT.init(p);
      return true;
    }
    else {
      return false;
    }
  }
}
marth.DOWNATTACK = {
  name : "DOWNATTACK",
  canEdgeCancel : false,
  canBeGrabbed : true,
  init : function(p){
    player[p].actionState = "DOWNATTACK";
    player[p].timer = 0;
    turnOffHitboxes(p);
    player[p].hitboxes.id[0] = player[p].charHitboxes.downattack1.id0;
    player[p].hitboxes.id[1] = player[p].charHitboxes.downattack1.id1;
    player[p].hitboxes.id[2] = player[p].charHitboxes.downattack1.id2;
    player[p].hitboxes.id[3] = player[p].charHitboxes.downattack1.id3;
    marth.DOWNATTACK.main(p);
  },
  main : function(p){
    player[p].timer++;
    if (!marth.DOWNATTACK.interrupt(p)){
      reduceByTraction(p,true);
      if (player[p].timer == 1){
        player[p].phys.intangibleTimer = 31
      }
      if (player[p].timer == 20){
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        sounds.sword2.play();
      }
      if (player[p].timer > 20 && player[p].timer < 24){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 24){
        turnOffHitboxes(p);
      }
      if (player[p].timer == 30){
        player[p].hitboxes.id[0] = player[p].charHitboxes.downattack2.id0;
        player[p].hitboxes.id[1] = player[p].charHitboxes.downattack2.id1;
        player[p].hitboxes.id[2] = player[p].charHitboxes.downattack2.id2;
        player[p].hitboxes.id[3] = player[p].charHitboxes.downattack2.id3;
        player[p].hitboxes.active = [true,true,true,true];
        player[p].hitboxes.frame = 0;
        sounds.sword2.play();
      }
      if (player[p].timer > 30 && player[p].timer < 32){
        player[p].hitboxes.frame++;
      }
      if (player[p].timer == 32){
        turnOffHitboxes(p);
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 49){
      marth.WAIT.init(p);
      return true;
    }
    else {
      return false;
    }
  }
}

// UNIQUE ACTION STATES END

// SET VELOCITIES AND POSITIONS

marth.ESCAPEB.setVelocities = [-2.267,-2.536,-2.706,-2.780,-2.758,-2.640,-2.426,-2.116,-1.711,-1.209,-0.888,-0.819,-0.758,-0.707,-0.664,-0.631,-0.606,-0.591,-0.585,-0.587,-0.599,-0.620,-0.809,-1.072,-1.205,-1.207,-1.078,-0.819,-0.617,-0.556,-0.487,-0.413,-0.332,-0.245,-0.152];
marth.ESCAPEF.setVelocities = [2.267,2.536,2.706,2.780,2.758,2.640,2.426,2.116,1.711,1.209,0.888,0.819,0.758,0.707,0.664,0.631,0.606,0.591,0.585,0.587,0.599,0.620,0.809,1.072,1.205,1.207,1.078,0.819,0.617,0.556,0.487,0.413,0.332,0.245,0.152];
marth.DOWNSTANDB.setVelocities = [-0.185,-0.370,-0.573,-1.540,-1.614,-1.586,-1.566,-1.614,-1.647,-1.666,-1.669,-1.657,-1.630,-1.588,-1.531,-1.397,-1.224,-1.094,-1.006,-0.962,-0.960,-0.926,-0.816,-0.684,-0.529,-0.352,-0.226,-0.171,-0.124,-0.084,-0.051,-0.025,-0.007,0.004,0.008];
marth.DOWNSTANDF.setVelocities = [0.467,1.360,1.733,2.135,2.355,2.581,2.055,2.281,2.184,1.902,1.703,1.521,1.357,1.211,1.082,0.971,0.878,0.802,0.743,0.703,0.680,0.674,0.686,0.716,0.763,0.775,0.727,0.661,0.577,0.474,0.352,0.241,0.163,0.101,0.055];
marth.TECHB.setVelocities = [0,0,0,0,0,0,0,-2.832,-2.726,-2.622,-2.521,-2.422,-2.326,-2.233,-2.142,-2.054,-1.968,-1.885,-1.811,-1.748,-1.691,-1.639,-1.593,-1.553,-1.519,-1.490,-1.467,-1.450,-1.439,-1.433,-1.433,-0.002,-0.003,-0.004,-0.005,-0.006,-0.006,-0.007,-0.007,-0.006];
marth.TECHF.setVelocities = [0,0,0,0,0,0,0,4.036,3.526,2.726,2.317,1.862,1.656,1.625,1.768,1.989,2.094,2.083,1.956,1.846,1.814,1.757,1.676,1.570,1.440,1.286,1.107,0.949,0.834,0.727,0.629,0.540,0.459,0.387,0.323,0.268,0.222,0.184,0.155,0.135];
marth.CLIFFCATCH.posOffset = [[-71.9,-22.3],[-73.1,-22.19],[-72.21,-24],[-71.8,-24],[-71.1,-23.74],[-70.74,-23.76],[-71.3,-23.75]];
marth.CLIFFWAIT.posOffset = [-71.3,-23.75];
