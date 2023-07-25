/****************************** 
 * Fg-6B20T_Updated_Main Test *
 ******************************/


// store info about the experiment session:
let expName = 'FG-6B20T_updated_main';  // from the Builder filename that created this script
let expInfo = {
    'participant': '99',
};

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from mainCode
import * as random from 'random';
pond_loc = [0, 0.25];
boy_loc = [0.75, (- 0.3)];
arrow_loc = [0.5, (- 0.3)];
fish_loc = [[0.2, (- 0.3)], [0, (- 0.3)], [(- 0.2), (- 0.3)], [(- 0.4), (- 0.3)], [(- 0.6), (- 0.3)]];
box_loc = [[(- 0.32), 0.25], [0, 0.25], [0.32, 0.25]];
fish_interval = [0.5, 1.0, 1.5];
block_correct = [];
msg = "doh!";
conditionfolder = "";

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instruct_videoRoutineBegin());
flowScheduler.add(instruct_videoRoutineEachFrame());
flowScheduler.add(instruct_videoRoutineEnd());
flowScheduler.add(ins1RoutineBegin());
flowScheduler.add(ins1RoutineEachFrame());
flowScheduler.add(ins1RoutineEnd());
flowScheduler.add(ins2RoutineBegin());
flowScheduler.add(ins2RoutineEachFrame());
flowScheduler.add(ins2RoutineEnd());
flowScheduler.add(ins3RoutineBegin());
flowScheduler.add(ins3RoutineEachFrame());
flowScheduler.add(ins3RoutineEnd());
const prac_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_trialsLoopBegin(prac_trialsLoopScheduler));
flowScheduler.add(prac_trialsLoopScheduler);
flowScheduler.add(prac_trialsLoopEnd);
flowScheduler.add(waitRoutineBegin());
flowScheduler.add(waitRoutineEachFrame());
flowScheduler.add(waitRoutineEnd());
const blockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blockLoopBegin(blockLoopScheduler));
flowScheduler.add(blockLoopScheduler);
flowScheduler.add(blockLoopEnd);
flowScheduler.add(rewardRoutineBegin());
flowScheduler.add(rewardRoutineEachFrame());
flowScheduler.add(rewardRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var instruct_videoClock;
var ins_videoClock;
var ins_video;
var ins1Clock;
var text_1a;
var ins1_key;
var ins1_image;
var text_1b;
var ins2Clock;
var text_2;
var ins2_key;
var inst2_image;
var ins3Clock;
var text_3;
var ins3_key;
var inst3_image;
var option_practiceClock;
var pond_label_2;
var jars_2;
var arrow_2;
var boy_2;
var F1_2;
var F2_2;
var F3_2;
var F4_2;
var F5_2;
var box_outline_2;
var box_show_2;
var key_resp_2;
var response_practiceClock;
var pond_label2_2;
var jars2_2;
var arrow2_2;
var boy2_2;
var f1_2;
var f2_2;
var f3_2;
var f4_2;
var f5_2;
var boxB_2;
var boxY_2;
var boxG_2;
var box_outline2_2;
var waitClock;
var Begin_txt;
var ExpStart_key;
var reward_resetClock;
var option_fishClock;
var pond_label;
var jars;
var arrow;
var boy;
var F1;
var F2;
var F3;
var F4;
var F5;
var box_outline;
var box_show;
var fish_key_button;
var response_fishClock;
var jars2;
var arrow2;
var boy2;
var f1;
var f2;
var f3;
var f4;
var f5;
var boxB;
var boxY;
var boxG;
var box_outline2;
var block_breakClock;
var breakStart_txt;
var rewardClock;
var reward_txt;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruct_video"
  instruct_videoClock = new util.Clock();
  ins_videoClock = new util.Clock();
  ins_video = new visual.MovieStim({
    win: psychoJS.window,
    name: 'ins_video',
    units: psychoJS.window.units,
    movie: 'stimuli/Which Pond Tutorial Video_FINAL_3.1.23.mp4',
    pos: [0, 0],
    anchor: 'center',
    size: [0.9, 0.5],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  // Initialize components for Routine "ins1"
  ins1Clock = new util.Clock();
  text_1a = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_1a',
    text: 'The Fishing Game\n\nImagine a boy that goes fishing for 6 days. There are three ponds, each containing fish of different colors: blue, yellow, and green. In each pond the majority of the fish are of a single color.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  ins1_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  ins1_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ins1_image', units : undefined, 
    image : 'stimuli/instruction_image.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.05], size : [0.6, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_1b = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_1b',
    text: 'Each day, the boy catches 15 fish. He will show you the fish he catches one by one, shown in the black square. Each turn, you will guess from which pond he is fishing. \n\nThe boy will pick a different pond at the beginning of a new day, and he may or may not change ponds within the same day.\n\nPress any key to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "ins2"
  ins2Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'A correct guess is rewarded with $0.50, while an incorrect guess earns $0. \n\nAt the end of the game, you will receive the total bonus from one randomly selected session. The maximum bonus you can receive from this game is $7.50, if you guess correctly for all trials. \n\nPress any key to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  ins2_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  inst2_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst2_image', units : undefined, 
    image : 'stimuli/instruction_image.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.25], size : [0.6, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "ins3"
  ins3Clock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Press LEFT, UP or RIGHT arrows to select your pond.\n\nThe game will start with a quick practice. During the practice, you will see whether you chose the right pond or not. But during the actual game, you will not get this feedback. The game takes approximately 10 minutes to complete.\n\nPress any key to start the practice',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  ins3_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  inst3_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst3_image', units : undefined, 
    image : 'stimuli/instruction_image.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.25], size : [0.6, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "option_practice"
  option_practiceClock = new util.Clock();
  pond_label_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pond_label_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  jars_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'jars_2', units : undefined, 
    image : 'stimuli/jars.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : pond_loc, size : [1, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -2.0 
  });
  arrow_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'arrow_2', units : undefined, 
    image : 'stimuli/arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : arrow_loc, size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  boy_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'boy_2', units : undefined, 
    image : 'stimuli/clear-jar.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : boy_loc, size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  F1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F1_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[0], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  F2_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F2_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[1], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  F3_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F3_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[2], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  F4_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F4_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[3], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  F5_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F5_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[4], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  box_outline_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box_outline_2', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: fish_loc[0],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  box_show_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box_show_2', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: fish_loc[0],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -11, interpolate: true,
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "response_practice"
  response_practiceClock = new util.Clock();
  pond_label2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pond_label2_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  jars2_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'jars2_2', units : undefined, 
    image : 'stimuli/jars.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : pond_loc, size : [1, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -2.0 
  });
  arrow2_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'arrow2_2', units : undefined, 
    image : 'stimuli/arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : arrow_loc, size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  boy2_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'boy2_2', units : undefined, 
    image : 'stimuli/clear-jar.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : boy_loc, size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  f1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'f1_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[0], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  f2_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'f2_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[1], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  f3_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'f3_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[2], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  f4_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'f4_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[3], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  f5_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'f5_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[4], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  boxB_2 = new visual.Rect ({
    win: psychoJS.window, name: 'boxB_2', 
    width: [0.3, 0.45][0], height: [0.3, 0.45][1],
    ori: 0.0, pos: box_loc[0],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color(undefined),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  boxY_2 = new visual.Rect ({
    win: psychoJS.window, name: 'boxY_2', 
    width: [0.3, 0.45][0], height: [0.3, 0.45][1],
    ori: 0.0, pos: box_loc[1],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color(undefined),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -11, interpolate: true,
  });
  
  boxG_2 = new visual.Rect ({
    win: psychoJS.window, name: 'boxG_2', 
    width: [0.3, 0.45][0], height: [0.3, 0.45][1],
    ori: 0.0, pos: box_loc[2],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color(undefined),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -12, interpolate: true,
  });
  
  box_outline2_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box_outline2_2', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: fish_loc[0],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -13, interpolate: true,
  });
  
  // Initialize components for Routine "wait"
  waitClock = new util.Clock();
  Begin_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'Begin_txt',
    text: 'You have successfully completed the practice.\n\nNow you are ready to start the game.\n\nPress SPACE key to continue. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  ExpStart_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "reward_reset"
  reward_resetClock = new util.Clock();
  // Initialize components for Routine "option_fish"
  option_fishClock = new util.Clock();
  // Run 'Begin Experiment' code from mainCode
  /* Syntax Error: Fix Python code */
  pond_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'pond_label',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  jars = new visual.ImageStim({
    win : psychoJS.window,
    name : 'jars', units : undefined, 
    image : 'stimuli/jars.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : pond_loc, size : [1, 0.5],
    color : new util.Color((1.0000, 1.0000, 1.0000)), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -2.0 
  });
  arrow = new visual.ImageStim({
    win : psychoJS.window,
    name : 'arrow', units : undefined, 
    image : 'stimuli/arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : arrow_loc, size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  boy = new visual.ImageStim({
    win : psychoJS.window,
    name : 'boy', units : undefined, 
    image : 'stimuli/clear-jar.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : boy_loc, size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  F1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[0], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  F2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[1], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  F3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[2], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  F4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[3], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  F5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F5', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[4], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  box_outline = new visual.Rect ({
    win: psychoJS.window, name: 'box_outline', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: fish_loc[0],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  box_show = new visual.Rect ({
    win: psychoJS.window, name: 'box_show', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: fish_loc[0],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -11, interpolate: true,
  });
  
  fish_key_button = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "response_fish"
  response_fishClock = new util.Clock();
  jars2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'jars2', units : undefined, 
    image : 'stimuli/jars.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : pond_loc, size : [1, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -1.0 
  });
  arrow2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'arrow2', units : undefined, 
    image : 'stimuli/arrow.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : arrow_loc, size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  boy2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'boy2', units : undefined, 
    image : 'stimuli/clear-jar.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : boy_loc, size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  f1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'f1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[0], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  f2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'f2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[1], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  f3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'f3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[2], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  f4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'f4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[3], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  f5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'f5', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : fish_loc[4], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  boxB = new visual.Rect ({
    win: psychoJS.window, name: 'boxB', 
    width: [0.3, 0.45][0], height: [0.3, 0.45][1],
    ori: 0.0, pos: box_loc[0],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color(undefined),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  boxY = new visual.Rect ({
    win: psychoJS.window, name: 'boxY', 
    width: [0.3, 0.45][0], height: [0.3, 0.45][1],
    ori: 0.0, pos: box_loc[1],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color(undefined),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  boxG = new visual.Rect ({
    win: psychoJS.window, name: 'boxG', 
    width: [0.3, 0.45][0], height: [0.3, 0.45][1],
    ori: 0.0, pos: box_loc[2],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color(undefined),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -11, interpolate: true,
  });
  
  box_outline2 = new visual.Rect ({
    win: psychoJS.window, name: 'box_outline2', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: fish_loc[0],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -12, interpolate: true,
  });
  
  // Initialize components for Routine "block_break"
  block_breakClock = new util.Clock();
  breakStart_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'breakStart_txt',
    text: 'End of the day.\n\nNew day starts soon.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "reward"
  rewardClock = new util.Clock();
  reward_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'reward_txt',
    text: 'Thank you!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var instruct_videoComponents;
function instruct_videoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruct_video' ---
    t = 0;
    instruct_videoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    instruct_videoComponents = [];
    instruct_videoComponents.push(ins_video);
    
    instruct_videoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruct_videoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruct_video' ---
    // get current time
    t = instruct_videoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ins_video* updates
    if (t >= 0.0 && ins_video.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ins_video.tStart = t;  // (not accounting for frame time here)
      ins_video.frameNStart = frameN;  // exact frame index
      
      ins_video.setAutoDraw(true);
      ins_video.play();
    }

    if (ins_video.status === PsychoJS.Status.FINISHED) {  // force-end the routine
        continueRoutine = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instruct_videoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruct_videoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruct_video' ---
    instruct_videoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    ins_video.stop();
    // the Routine "instruct_video" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _ins1_key_allKeys;
var ins1Components;
function ins1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ins1' ---
    t = 0;
    ins1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ins1_key.keys = undefined;
    ins1_key.rt = undefined;
    _ins1_key_allKeys = [];
    // keep track of which components have finished
    ins1Components = [];
    ins1Components.push(text_1a);
    ins1Components.push(ins1_key);
    ins1Components.push(ins1_image);
    ins1Components.push(text_1b);
    
    ins1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ins1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ins1' ---
    // get current time
    t = ins1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_1a* updates
    if (t >= 0.0 && text_1a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_1a.tStart = t;  // (not accounting for frame time here)
      text_1a.frameNStart = frameN;  // exact frame index
      
      text_1a.setAutoDraw(true);
    }

    
    // *ins1_key* updates
    if (t >= 0.0 && ins1_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ins1_key.tStart = t;  // (not accounting for frame time here)
      ins1_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ins1_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ins1_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ins1_key.clearEvents(); });
    }

    if (ins1_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = ins1_key.getKeys({keyList: [], waitRelease: false});
      _ins1_key_allKeys = _ins1_key_allKeys.concat(theseKeys);
      if (_ins1_key_allKeys.length > 0) {
        ins1_key.keys = _ins1_key_allKeys[_ins1_key_allKeys.length - 1].name;  // just the last key pressed
        ins1_key.rt = _ins1_key_allKeys[_ins1_key_allKeys.length - 1].rt;
        ins1_key.duration = _ins1_key_allKeys[_ins1_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *ins1_image* updates
    if (t >= 0.0 && ins1_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ins1_image.tStart = t;  // (not accounting for frame time here)
      ins1_image.frameNStart = frameN;  // exact frame index
      
      ins1_image.setAutoDraw(true);
    }

    
    // *text_1b* updates
    if (t >= 0.0 && text_1b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_1b.tStart = t;  // (not accounting for frame time here)
      text_1b.frameNStart = frameN;  // exact frame index
      
      text_1b.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ins1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ins1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ins1' ---
    ins1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(ins1_key.corr, level);
    }
    psychoJS.experiment.addData('ins1_key.keys', ins1_key.keys);
    if (typeof ins1_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ins1_key.rt', ins1_key.rt);
        psychoJS.experiment.addData('ins1_key.duration', ins1_key.duration);
        routineTimer.reset();
        }
    
    ins1_key.stop();
    // the Routine "ins1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _ins2_key_allKeys;
var ins2Components;
function ins2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ins2' ---
    t = 0;
    ins2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ins2_key.keys = undefined;
    ins2_key.rt = undefined;
    _ins2_key_allKeys = [];
    // keep track of which components have finished
    ins2Components = [];
    ins2Components.push(text_2);
    ins2Components.push(ins2_key);
    ins2Components.push(inst2_image);
    
    ins2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ins2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ins2' ---
    // get current time
    t = ins2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *ins2_key* updates
    if (t >= 0.0 && ins2_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ins2_key.tStart = t;  // (not accounting for frame time here)
      ins2_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ins2_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ins2_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ins2_key.clearEvents(); });
    }

    if (ins2_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = ins2_key.getKeys({keyList: [], waitRelease: false});
      _ins2_key_allKeys = _ins2_key_allKeys.concat(theseKeys);
      if (_ins2_key_allKeys.length > 0) {
        ins2_key.keys = _ins2_key_allKeys[_ins2_key_allKeys.length - 1].name;  // just the last key pressed
        ins2_key.rt = _ins2_key_allKeys[_ins2_key_allKeys.length - 1].rt;
        ins2_key.duration = _ins2_key_allKeys[_ins2_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *inst2_image* updates
    if (t >= 0.0 && inst2_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst2_image.tStart = t;  // (not accounting for frame time here)
      inst2_image.frameNStart = frameN;  // exact frame index
      
      inst2_image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ins2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ins2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ins2' ---
    ins2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    ins2_key.stop();
    // the Routine "ins2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _ins3_key_allKeys;
var ins3Components;
function ins3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ins3' ---
    t = 0;
    ins3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ins3_key.keys = undefined;
    ins3_key.rt = undefined;
    _ins3_key_allKeys = [];
    // keep track of which components have finished
    ins3Components = [];
    ins3Components.push(text_3);
    ins3Components.push(ins3_key);
    ins3Components.push(inst3_image);
    
    ins3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ins3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ins3' ---
    // get current time
    t = ins3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *ins3_key* updates
    if (t >= 0.0 && ins3_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ins3_key.tStart = t;  // (not accounting for frame time here)
      ins3_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ins3_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ins3_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ins3_key.clearEvents(); });
    }

    if (ins3_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = ins3_key.getKeys({keyList: [], waitRelease: false});
      _ins3_key_allKeys = _ins3_key_allKeys.concat(theseKeys);
      if (_ins3_key_allKeys.length > 0) {
        ins3_key.keys = _ins3_key_allKeys[_ins3_key_allKeys.length - 1].name;  // just the last key pressed
        ins3_key.rt = _ins3_key_allKeys[_ins3_key_allKeys.length - 1].rt;
        ins3_key.duration = _ins3_key_allKeys[_ins3_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *inst3_image* updates
    if (t >= 0.0 && inst3_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst3_image.tStart = t;  // (not accounting for frame time here)
      inst3_image.frameNStart = frameN;  // exact frame index
      
      inst3_image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ins3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ins3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ins3' ---
    ins3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    ins3_key.stop();
    // the Routine "ins3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_trials;
function prac_trialsLoopBegin(prac_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: '1condition/practice.xlsx',
      seed: undefined, name: 'prac_trials'
    });
    psychoJS.experiment.addLoop(prac_trials); // add the loop to the experiment
    currentLoop = prac_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    prac_trials.forEach(function() {
      snapshot = prac_trials.getSnapshot();
    
      prac_trialsLoopScheduler.add(importConditions(snapshot));
      prac_trialsLoopScheduler.add(option_practiceRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(option_practiceRoutineEachFrame());
      prac_trialsLoopScheduler.add(option_practiceRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(response_practiceRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(response_practiceRoutineEachFrame());
      prac_trialsLoopScheduler.add(response_practiceRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(prac_trialsLoopEndIteration(prac_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function prac_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var block;
function blockLoopBegin(blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: '1condition/Blocks.xlsx',
      seed: undefined, name: 'block'
    });
    psychoJS.experiment.addLoop(block); // add the loop to the experiment
    currentLoop = block;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    block.forEach(function() {
      snapshot = block.getSnapshot();
    
      blockLoopScheduler.add(importConditions(snapshot));
      blockLoopScheduler.add(reward_resetRoutineBegin(snapshot));
      blockLoopScheduler.add(reward_resetRoutineEachFrame());
      blockLoopScheduler.add(reward_resetRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blockLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blockLoopScheduler.add(trialsLoopScheduler);
      blockLoopScheduler.add(trialsLoopEnd);
      blockLoopScheduler.add(block_breakRoutineBegin(snapshot));
      blockLoopScheduler.add(block_breakRoutineEachFrame());
      blockLoopScheduler.add(block_breakRoutineEnd(snapshot));
      blockLoopScheduler.add(blockLoopEndIteration(blockLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: condsFile,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(option_fishRoutineBegin(snapshot));
      trialsLoopScheduler.add(option_fishRoutineEachFrame());
      trialsLoopScheduler.add(option_fishRoutineEnd(snapshot));
      trialsLoopScheduler.add(response_fishRoutineBegin(snapshot));
      trialsLoopScheduler.add(response_fishRoutineEachFrame());
      trialsLoopScheduler.add(response_fishRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blockLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(block);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blockLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var fish_int;
var endMsg;
var endTrial;
var _key_resp_2_allKeys;
var option_practiceComponents;
function option_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'option_practice' ---
    t = 0;
    option_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    fish_int = random.choice(fish_interval);
    endMsg = " ";
    endTrial = false;
    
    F1_2.setImage(fish1_p);
    F2_2.setImage(fish2_p);
    F3_2.setImage(fish3_p);
    F4_2.setImage(fish4_p);
    F5_2.setImage(fish5_p);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    option_practiceComponents = [];
    option_practiceComponents.push(pond_label_2);
    option_practiceComponents.push(jars_2);
    option_practiceComponents.push(arrow_2);
    option_practiceComponents.push(boy_2);
    option_practiceComponents.push(F1_2);
    option_practiceComponents.push(F2_2);
    option_practiceComponents.push(F3_2);
    option_practiceComponents.push(F4_2);
    option_practiceComponents.push(F5_2);
    option_practiceComponents.push(box_outline_2);
    option_practiceComponents.push(box_show_2);
    option_practiceComponents.push(key_resp_2);
    
    option_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function option_practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'option_practice' ---
    // get current time
    t = option_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_2
    if (((t > 5.0) && (key_resp_2.getKeys().length === 0))) {
        endMsg = "Too slow";
        endTrial = true;
        if (((t > 5.5) && (key_resp_2.getKeys().length === 0))) {
            continueRoutine = false;
        }
    }
    
    
    // *pond_label_2* updates
    if (t >= 0.0 && pond_label_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pond_label_2.tStart = t;  // (not accounting for frame time here)
      pond_label_2.frameNStart = frameN;  // exact frame index
      
      pond_label_2.setAutoDraw(true);
    }

    
    if (pond_label_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      pond_label_2.setText(endMsg, false);
    }
    
    // *jars_2* updates
    if (t >= 0.0 && jars_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      jars_2.tStart = t;  // (not accounting for frame time here)
      jars_2.frameNStart = frameN;  // exact frame index
      
      jars_2.setAutoDraw(true);
    }

    
    // *arrow_2* updates
    if (t >= 0.0 && arrow_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_2.tStart = t;  // (not accounting for frame time here)
      arrow_2.frameNStart = frameN;  // exact frame index
      
      arrow_2.setAutoDraw(true);
    }

    
    // *boy_2* updates
    if (t >= 0.0 && boy_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boy_2.tStart = t;  // (not accounting for frame time here)
      boy_2.frameNStart = frameN;  // exact frame index
      
      boy_2.setAutoDraw(true);
    }

    
    // *F1_2* updates
    if (t >= fish_int && F1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F1_2.tStart = t;  // (not accounting for frame time here)
      F1_2.frameNStart = frameN;  // exact frame index
      
      F1_2.setAutoDraw(true);
    }

    
    // *F2_2* updates
    if (t >= 0.0 && F2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F2_2.tStart = t;  // (not accounting for frame time here)
      F2_2.frameNStart = frameN;  // exact frame index
      
      F2_2.setAutoDraw(true);
    }

    
    // *F3_2* updates
    if (t >= 0.0 && F3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F3_2.tStart = t;  // (not accounting for frame time here)
      F3_2.frameNStart = frameN;  // exact frame index
      
      F3_2.setAutoDraw(true);
    }

    
    // *F4_2* updates
    if (t >= 0.0 && F4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F4_2.tStart = t;  // (not accounting for frame time here)
      F4_2.frameNStart = frameN;  // exact frame index
      
      F4_2.setAutoDraw(true);
    }

    
    // *F5_2* updates
    if (t >= 0.0 && F5_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F5_2.tStart = t;  // (not accounting for frame time here)
      F5_2.frameNStart = frameN;  // exact frame index
      
      F5_2.setAutoDraw(true);
    }

    
    // *box_outline_2* updates
    if (t >= 0.0 && box_outline_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_outline_2.tStart = t;  // (not accounting for frame time here)
      box_outline_2.frameNStart = frameN;  // exact frame index
      
      box_outline_2.setAutoDraw(true);
    }

    
    // *box_show_2* updates
    if (t >= 0.0 && box_show_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_show_2.tStart = t;  // (not accounting for frame time here)
      box_show_2.frameNStart = frameN;  // exact frame index
      
      box_show_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + fish_int - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (box_show_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      box_show_2.setAutoDraw(false);
    }
    
    // *key_resp_2* updates
    if (t >= fish_int && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['left', 'up', 'right'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    option_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function option_practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'option_practice' ---
    option_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "option_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var response_practiceComponents;
function response_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'response_practice' ---
    t = 0;
    response_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.800000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from boxChange_2
    if (endTrial) {
        continueRoutine = false;
    } else {
        if (((key_resp_2.keys === "1") || (key_resp_2.keys === "left"))) {
            time = core.getTime();
            boxB_2.lineColor = "black";
        } else {
            if (((key_resp_2.keys === "2") || (key_resp_2.keys === "up"))) {
                time = core.getTime();
                boxY_2.lineColor = "black";
            } else {
                if (((key_resp_2.keys === "3") || (key_resp_2.keys === "right"))) {
                    time = core.getTime();
                    boxG_2.lineColor = "black";
                }
            }
        }
        if (((key_resp_2.keys === pond_p2.toString()) || (key_resp_2.keys === pond_p3))) {
            practice_msg = "Correct!";
            psychoJS.experiment.addData("fish_key_2.corr", 1);
        } else {
            practice_msg = "Oops! Wrong pond.";
            psychoJS.experiment.addData("fish_key_2.corr", 0);
        }
    }
    
    pond_label2_2.setText(practice_msg);
    f1_2.setImage(fish1_p);
    f2_2.setImage(fish2_p);
    f3_2.setImage(fish3_p);
    f4_2.setImage(fish4_p);
    f5_2.setImage(fish5_p);
    // keep track of which components have finished
    response_practiceComponents = [];
    response_practiceComponents.push(pond_label2_2);
    response_practiceComponents.push(jars2_2);
    response_practiceComponents.push(arrow2_2);
    response_practiceComponents.push(boy2_2);
    response_practiceComponents.push(f1_2);
    response_practiceComponents.push(f2_2);
    response_practiceComponents.push(f3_2);
    response_practiceComponents.push(f4_2);
    response_practiceComponents.push(f5_2);
    response_practiceComponents.push(boxB_2);
    response_practiceComponents.push(boxY_2);
    response_practiceComponents.push(boxG_2);
    response_practiceComponents.push(box_outline2_2);
    
    response_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function response_practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'response_practice' ---
    // get current time
    t = response_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pond_label2_2* updates
    if (t >= 0.3 && pond_label2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pond_label2_2.tStart = t;  // (not accounting for frame time here)
      pond_label2_2.frameNStart = frameN;  // exact frame index
      
      pond_label2_2.setAutoDraw(true);
    }

    frameRemains = 0.3 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pond_label2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pond_label2_2.setAutoDraw(false);
    }
    
    // *jars2_2* updates
    if (t >= 0.0 && jars2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      jars2_2.tStart = t;  // (not accounting for frame time here)
      jars2_2.frameNStart = frameN;  // exact frame index
      
      jars2_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (jars2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      jars2_2.setAutoDraw(false);
    }
    
    // *arrow2_2* updates
    if (t >= 0.0 && arrow2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow2_2.tStart = t;  // (not accounting for frame time here)
      arrow2_2.frameNStart = frameN;  // exact frame index
      
      arrow2_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (arrow2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      arrow2_2.setAutoDraw(false);
    }
    
    // *boy2_2* updates
    if (t >= 0.0 && boy2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boy2_2.tStart = t;  // (not accounting for frame time here)
      boy2_2.frameNStart = frameN;  // exact frame index
      
      boy2_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (boy2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      boy2_2.setAutoDraw(false);
    }
    
    // *f1_2* updates
    if (t >= 0.0 && f1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      f1_2.tStart = t;  // (not accounting for frame time here)
      f1_2.frameNStart = frameN;  // exact frame index
      
      f1_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (f1_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      f1_2.setAutoDraw(false);
    }
    
    // *f2_2* updates
    if (t >= 0.0 && f2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      f2_2.tStart = t;  // (not accounting for frame time here)
      f2_2.frameNStart = frameN;  // exact frame index
      
      f2_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (f2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      f2_2.setAutoDraw(false);
    }
    
    // *f3_2* updates
    if (t >= 0.0 && f3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      f3_2.tStart = t;  // (not accounting for frame time here)
      f3_2.frameNStart = frameN;  // exact frame index
      
      f3_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (f3_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      f3_2.setAutoDraw(false);
    }
    
    // *f4_2* updates
    if (t >= 0.0 && f4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      f4_2.tStart = t;  // (not accounting for frame time here)
      f4_2.frameNStart = frameN;  // exact frame index
      
      f4_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (f4_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      f4_2.setAutoDraw(false);
    }
    
    // *f5_2* updates
    if (t >= 0.0 && f5_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      f5_2.tStart = t;  // (not accounting for frame time here)
      f5_2.frameNStart = frameN;  // exact frame index
      
      f5_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (f5_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      f5_2.setAutoDraw(false);
    }
    
    // *boxB_2* updates
    if (t >= 0.0 && boxB_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boxB_2.tStart = t;  // (not accounting for frame time here)
      boxB_2.frameNStart = frameN;  // exact frame index
      
      boxB_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (boxB_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      boxB_2.setAutoDraw(false);
    }
    
    // *boxY_2* updates
    if (t >= 0.0 && boxY_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boxY_2.tStart = t;  // (not accounting for frame time here)
      boxY_2.frameNStart = frameN;  // exact frame index
      
      boxY_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (boxY_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      boxY_2.setAutoDraw(false);
    }
    
    // *boxG_2* updates
    if (t >= 0.0 && boxG_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boxG_2.tStart = t;  // (not accounting for frame time here)
      boxG_2.frameNStart = frameN;  // exact frame index
      
      boxG_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (boxG_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      boxG_2.setAutoDraw(false);
    }
    
    // *box_outline2_2* updates
    if (t >= 0.0 && box_outline2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_outline2_2.tStart = t;  // (not accounting for frame time here)
      box_outline2_2.frameNStart = frameN;  // exact frame index
      
      box_outline2_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (box_outline2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      box_outline2_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    response_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function response_practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'response_practice' ---
    response_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from boxClear_2
    boxB_2.lineColor = "none";
    boxY_2.lineColor = "none";
    boxG_2.lineColor = "none";
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _ExpStart_key_allKeys;
var waitComponents;
function waitRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'wait' ---
    t = 0;
    waitClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ExpStart_key.keys = undefined;
    ExpStart_key.rt = undefined;
    _ExpStart_key_allKeys = [];
    // keep track of which components have finished
    waitComponents = [];
    waitComponents.push(Begin_txt);
    waitComponents.push(ExpStart_key);
    
    waitComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function waitRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'wait' ---
    // get current time
    t = waitClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Begin_txt* updates
    if (t >= 0.0 && Begin_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Begin_txt.tStart = t;  // (not accounting for frame time here)
      Begin_txt.frameNStart = frameN;  // exact frame index
      
      Begin_txt.setAutoDraw(true);
    }

    
    // *ExpStart_key* updates
    if (t >= 0.0 && ExpStart_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ExpStart_key.tStart = t;  // (not accounting for frame time here)
      ExpStart_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ExpStart_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ExpStart_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ExpStart_key.clearEvents(); });
    }

    if (ExpStart_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = ExpStart_key.getKeys({keyList: ['space'], waitRelease: false});
      _ExpStart_key_allKeys = _ExpStart_key_allKeys.concat(theseKeys);
      if (_ExpStart_key_allKeys.length > 0) {
        ExpStart_key.keys = _ExpStart_key_allKeys[_ExpStart_key_allKeys.length - 1].name;  // just the last key pressed
        ExpStart_key.rt = _ExpStart_key_allKeys[_ExpStart_key_allKeys.length - 1].rt;
        ExpStart_key.duration = _ExpStart_key_allKeys[_ExpStart_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    waitComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function waitRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'wait' ---
    waitComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(ExpStart_key.corr, level);
    }
    psychoJS.experiment.addData('ExpStart_key.keys', ExpStart_key.keys);
    if (typeof ExpStart_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ExpStart_key.rt', ExpStart_key.rt);
        psychoJS.experiment.addData('ExpStart_key.duration', ExpStart_key.duration);
        routineTimer.reset();
        }
    
    ExpStart_key.stop();
    // the Routine "wait" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var nCorr;
var reward_resetComponents;
function reward_resetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reward_reset' ---
    t = 0;
    reward_resetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from rewardReset
    nCorr = 0;
    
    // keep track of which components have finished
    reward_resetComponents = [];
    
    reward_resetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function reward_resetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reward_reset' ---
    // get current time
    t = reward_resetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    reward_resetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function reward_resetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reward_reset' ---
    reward_resetComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "reward_reset" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _fish_key_button_allKeys;
var option_fishComponents;
function option_fishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'option_fish' ---
    t = 0;
    option_fishClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from mainCode
    fish_int = random.choice(fish_interval);
    endMsg = " ";
    endTrial = false;
    
    F1.setImage(fish1);
    F2.setImage(fish2);
    F3.setImage(fish3);
    F4.setImage(fish4);
    F5.setImage(fish5);
    fish_key_button.keys = undefined;
    fish_key_button.rt = undefined;
    _fish_key_button_allKeys = [];
    // keep track of which components have finished
    option_fishComponents = [];
    option_fishComponents.push(pond_label);
    option_fishComponents.push(jars);
    option_fishComponents.push(arrow);
    option_fishComponents.push(boy);
    option_fishComponents.push(F1);
    option_fishComponents.push(F2);
    option_fishComponents.push(F3);
    option_fishComponents.push(F4);
    option_fishComponents.push(F5);
    option_fishComponents.push(box_outline);
    option_fishComponents.push(box_show);
    option_fishComponents.push(fish_key_button);
    
    option_fishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function option_fishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'option_fish' ---
    // get current time
    t = option_fishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from mainCode
    if (((t > 5.0) && (fish_key_button.getKeys().length === 0))) {
        endMsg = "Too slow";
        endTrial = true;
        if (((t > 5.2) && (fish_key_button.getKeys().length === 0))) {
            continueRoutine = false;
        }
    }
    
    
    // *pond_label* updates
    if (t >= 0.0 && pond_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pond_label.tStart = t;  // (not accounting for frame time here)
      pond_label.frameNStart = frameN;  // exact frame index
      
      pond_label.setAutoDraw(true);
    }

    
    if (pond_label.status === PsychoJS.Status.STARTED){ // only update if being drawn
      pond_label.setText(endMsg, false);
    }
    
    // *jars* updates
    if (t >= 0.0 && jars.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      jars.tStart = t;  // (not accounting for frame time here)
      jars.frameNStart = frameN;  // exact frame index
      
      jars.setAutoDraw(true);
    }

    
    // *arrow* updates
    if (t >= 0.0 && arrow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow.tStart = t;  // (not accounting for frame time here)
      arrow.frameNStart = frameN;  // exact frame index
      
      arrow.setAutoDraw(true);
    }

    
    // *boy* updates
    if (t >= 0.0 && boy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boy.tStart = t;  // (not accounting for frame time here)
      boy.frameNStart = frameN;  // exact frame index
      
      boy.setAutoDraw(true);
    }

    
    // *F1* updates
    if (t >= fish_int && F1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F1.tStart = t;  // (not accounting for frame time here)
      F1.frameNStart = frameN;  // exact frame index
      
      F1.setAutoDraw(true);
    }

    
    // *F2* updates
    if (t >= 0.0 && F2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F2.tStart = t;  // (not accounting for frame time here)
      F2.frameNStart = frameN;  // exact frame index
      
      F2.setAutoDraw(true);
    }

    
    // *F3* updates
    if (t >= 0.0 && F3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F3.tStart = t;  // (not accounting for frame time here)
      F3.frameNStart = frameN;  // exact frame index
      
      F3.setAutoDraw(true);
    }

    
    // *F4* updates
    if (t >= 0.0 && F4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F4.tStart = t;  // (not accounting for frame time here)
      F4.frameNStart = frameN;  // exact frame index
      
      F4.setAutoDraw(true);
    }

    
    // *F5* updates
    if (t >= 0.0 && F5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F5.tStart = t;  // (not accounting for frame time here)
      F5.frameNStart = frameN;  // exact frame index
      
      F5.setAutoDraw(true);
    }

    
    // *box_outline* updates
    if (t >= 0.0 && box_outline.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_outline.tStart = t;  // (not accounting for frame time here)
      box_outline.frameNStart = frameN;  // exact frame index
      
      box_outline.setAutoDraw(true);
    }

    
    // *box_show* updates
    if (t >= 0.0 && box_show.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_show.tStart = t;  // (not accounting for frame time here)
      box_show.frameNStart = frameN;  // exact frame index
      
      box_show.setAutoDraw(true);
    }

    frameRemains = 0.0 + fish_int - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (box_show.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      box_show.setAutoDraw(false);
    }
    
    // *fish_key_button* updates
    if (t >= fish_int && fish_key_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fish_key_button.tStart = t;  // (not accounting for frame time here)
      fish_key_button.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { fish_key_button.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { fish_key_button.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { fish_key_button.clearEvents(); });
    }

    if (fish_key_button.status === PsychoJS.Status.STARTED) {
      let theseKeys = fish_key_button.getKeys({keyList: ['left', 'up', 'right'], waitRelease: false});
      _fish_key_button_allKeys = _fish_key_button_allKeys.concat(theseKeys);
      if (_fish_key_button_allKeys.length > 0) {
        fish_key_button.keys = _fish_key_button_allKeys[_fish_key_button_allKeys.length - 1].name;  // just the last key pressed
        fish_key_button.rt = _fish_key_button_allKeys[_fish_key_button_allKeys.length - 1].rt;
        fish_key_button.duration = _fish_key_button_allKeys[_fish_key_button_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    option_fishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function option_fishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'option_fish' ---
    option_fishComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(fish_key_button.corr, level);
    }
    psychoJS.experiment.addData('fish_key_button.keys', fish_key_button.keys);
    if (typeof fish_key_button.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('fish_key_button.rt', fish_key_button.rt);
        psychoJS.experiment.addData('fish_key_button.duration', fish_key_button.duration);
        routineTimer.reset();
        }
    
    fish_key_button.stop();
    // the Routine "option_fish" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var response_fishComponents;
function response_fishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'response_fish' ---
    t = 0;
    response_fishClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from boxChange
    if (endTrial) {
        continueRoutine = false;
    } else {
        if (((fish_key_button.keys === "1") || (fish_key_button.keys === "left"))) {
            time = core.getTime();
            boxB.lineColor = "black";
        } else {
            if (((fish_key_button.keys === "2") || (fish_key_button.keys === "up"))) {
                time = core.getTime();
                boxY.lineColor = "black";
            } else {
                if (((fish_key_button.keys === "3") || (fish_key_button.keys === "right"))) {
                    time = core.getTime();
                    boxG.lineColor = "black";
                }
            }
        }
        if (((fish_key_button.keys === pond2.toString()) || (fish_key_button.keys === pond3))) {
            nCorr += 1;
            psychoJS.experiment.addData("fish_key.corr", 1);
        } else {
            psychoJS.experiment.addData("fish_key.corr", 0);
        }
    }
    
    f1.setImage(fish1);
    f2.setImage(fish2);
    f3.setImage(fish3);
    f4.setImage(fish4);
    f5.setImage(fish5);
    // keep track of which components have finished
    response_fishComponents = [];
    response_fishComponents.push(jars2);
    response_fishComponents.push(arrow2);
    response_fishComponents.push(boy2);
    response_fishComponents.push(f1);
    response_fishComponents.push(f2);
    response_fishComponents.push(f3);
    response_fishComponents.push(f4);
    response_fishComponents.push(f5);
    response_fishComponents.push(boxB);
    response_fishComponents.push(boxY);
    response_fishComponents.push(boxG);
    response_fishComponents.push(box_outline2);
    
    response_fishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function response_fishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'response_fish' ---
    // get current time
    t = response_fishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *jars2* updates
    if (t >= 0.0 && jars2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      jars2.tStart = t;  // (not accounting for frame time here)
      jars2.frameNStart = frameN;  // exact frame index
      
      jars2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (jars2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      jars2.setAutoDraw(false);
    }
    
    // *arrow2* updates
    if (t >= 0.0 && arrow2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow2.tStart = t;  // (not accounting for frame time here)
      arrow2.frameNStart = frameN;  // exact frame index
      
      arrow2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (arrow2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      arrow2.setAutoDraw(false);
    }
    
    // *boy2* updates
    if (t >= 0.0 && boy2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boy2.tStart = t;  // (not accounting for frame time here)
      boy2.frameNStart = frameN;  // exact frame index
      
      boy2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (boy2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      boy2.setAutoDraw(false);
    }
    
    // *f1* updates
    if (t >= 0.0 && f1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      f1.tStart = t;  // (not accounting for frame time here)
      f1.frameNStart = frameN;  // exact frame index
      
      f1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (f1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      f1.setAutoDraw(false);
    }
    
    // *f2* updates
    if (t >= 0.0 && f2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      f2.tStart = t;  // (not accounting for frame time here)
      f2.frameNStart = frameN;  // exact frame index
      
      f2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (f2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      f2.setAutoDraw(false);
    }
    
    // *f3* updates
    if (t >= 0.0 && f3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      f3.tStart = t;  // (not accounting for frame time here)
      f3.frameNStart = frameN;  // exact frame index
      
      f3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (f3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      f3.setAutoDraw(false);
    }
    
    // *f4* updates
    if (t >= 0.0 && f4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      f4.tStart = t;  // (not accounting for frame time here)
      f4.frameNStart = frameN;  // exact frame index
      
      f4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (f4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      f4.setAutoDraw(false);
    }
    
    // *f5* updates
    if (t >= 0.0 && f5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      f5.tStart = t;  // (not accounting for frame time here)
      f5.frameNStart = frameN;  // exact frame index
      
      f5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (f5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      f5.setAutoDraw(false);
    }
    
    // *boxB* updates
    if (t >= 0.0 && boxB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boxB.tStart = t;  // (not accounting for frame time here)
      boxB.frameNStart = frameN;  // exact frame index
      
      boxB.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (boxB.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      boxB.setAutoDraw(false);
    }
    
    // *boxY* updates
    if (t >= 0.0 && boxY.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boxY.tStart = t;  // (not accounting for frame time here)
      boxY.frameNStart = frameN;  // exact frame index
      
      boxY.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (boxY.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      boxY.setAutoDraw(false);
    }
    
    // *boxG* updates
    if (t >= 0.0 && boxG.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boxG.tStart = t;  // (not accounting for frame time here)
      boxG.frameNStart = frameN;  // exact frame index
      
      boxG.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (boxG.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      boxG.setAutoDraw(false);
    }
    
    // *box_outline2* updates
    if (t >= 0.0 && box_outline2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_outline2.tStart = t;  // (not accounting for frame time here)
      box_outline2.frameNStart = frameN;  // exact frame index
      
      box_outline2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (box_outline2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      box_outline2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    response_fishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function response_fishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'response_fish' ---
    response_fishComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from boxClear
    boxB.lineColor = "none";
    boxY.lineColor = "none";
    boxG.lineColor = "none";
    thisExp.addData("fish_interval", fish_int);
    thisExp.addData("key_time", time);
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var block_breakComponents;
function block_breakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block_break' ---
    t = 0;
    block_breakClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from reward_list
    block_correct.append(nCorr);
    
    // keep track of which components have finished
    block_breakComponents = [];
    block_breakComponents.push(breakStart_txt);
    
    block_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function block_breakRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block_break' ---
    // get current time
    t = block_breakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *breakStart_txt* updates
    if (t >= 0.0 && breakStart_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakStart_txt.tStart = t;  // (not accounting for frame time here)
      breakStart_txt.frameNStart = frameN;  // exact frame index
      
      breakStart_txt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (breakStart_txt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      breakStart_txt.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    block_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block_breakRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block_break' ---
    block_breakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var rewardComponents;
function rewardRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reward' ---
    t = 0;
    rewardClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    rewardComponents = [];
    rewardComponents.push(reward_txt);
    
    rewardComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function rewardRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reward' ---
    // get current time
    t = rewardClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *reward_txt* updates
    if (t >= 0.0 && reward_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reward_txt.tStart = t;  // (not accounting for frame time here)
      reward_txt.frameNStart = frameN;  // exact frame index
      
      reward_txt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (reward_txt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      reward_txt.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    rewardComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rewardRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reward' ---
    rewardComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


var final_pay;
var blockID;
async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  // Run 'End Experiment' code from reward_pay
  final_pay = util.randchoice(util.range(block_correct.length));
  blockID = (final_pay + 1);
  psychoJS.experiment.addData("reward_block_chosen", blockID);
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
