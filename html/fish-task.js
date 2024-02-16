/****************************** 
 * Fish Game Task *
 ******************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;
// import { $nd } from './nemo_data.js';

////////////////////////////////////////////////////////////////////////////////////////////

// store info about the experiment session:
let expName = 'Fish Game';  // from the Builder filename that created this script

//// Handle URL Params and Participant Data
let expInfo = { // these show up as fields on starting page if URL params are not present
  'group_id': '',
  'path_id': ''
  // 'prolific_id': '',
  // 'subject_id': ''
  // 'session_id': ''
};

var subject_data = {};
// Capture URL parameters and set study values
var url_params = window.location.search.slice(1); // slice remove first char to get rid of beginning "?"
// example of url_params: "prolific_id=pid1&study_id=si1&session_id=sid1&path_id=path"
var indiv_params = url_params.split("&")
console.log(url_params);
console.log(indiv_params)

var param;
var par_vals;
var study_group;
var redcap_completionsurvey;
var redirect_url;
for (let i = 0; i < indiv_params.length; i++) {
  var param = indiv_params[i]
  var par_vals = param.split("=");
  if (param.toLowerCase().includes("prolific_id")) { // only for prolific participants
    console.log("pid found")
    subject_data.prolific_id = par_vals[1];
  } else if (param.toLowerCase().includes("study_id")) {
    console.log("study id found")
    subject_data.study_id = par_vals[1];
  } else if (param.toLowerCase().includes("group_id")) {
    console.log("group id found")
    subject_data.study_id = par_vals[1];
  } else if (param.toLowerCase().includes("session_id")) {
    console.log("sid found")
    subject_data.session_id = par_vals[1];
  } else if (param.toLowerCase().includes("path_id")) {
    console.log("path found")
    subject_data.path_id = par_vals[1];
  } else if (param.toLowerCase().includes("subject_id")) { // only for invited subjects
    console.log("subj id found")
    subject_data.subject_id = par_vals[1];
  }
};

console.log("Subject data collected: ")
console.log(subject_data)

switch(subject_data.group_id) { // study_id determines which study it goes to 
  case "1A": study_group = "nicotine_grp_online";
    break;
  case "1B": study_group = "nicotine_ctrl_online";
    break;
  case "1C": study_group = "nicotine_grp_invited"; redcap_completionsurvey = "?s=nicotine_cc";
    break;
  case "1D": study_group = "nicotine_ctrl_invited"; redcap_completionsurvey = "?s=nicotine_ctrl_cc";
    break; 
  case "2A": study_group = "eatingdisorder_grp_online";
    break;
  case "2B": study_group = "eatingdisorder_ctrl_online";
    break;
  case "2A": study_group = "eatingdisorder_grp_invited"; redcap_completionsurvey = "?s=eatingdisorder_cc";
    break;
  case "2B": study_group = "eatingdisorder_ctrl_invited"; redcap_completionsurvey = "?s=eatingdisorder_ctrl_cc";
    break;
}

if (subject_data.path_id.toUpperCase() == "A") {
  // redirect to slot task
  redirect_url = "http://run.pavlovia.org/janetlchang/slot-machine" +  "?" + url_params;
} else if (subject_data.path_id.toUpperCase() == "B") {
  // fish task is last task, need to redirect to study completion page
    if (study_group.includes("invited") || subject_data.prolific_id == '') {
      // redirect for invited subject
      redirect_url = "http://redcap.com" + redcap_completionsurvey +  "&" + url_params; 
    } else // redirect for prolific subject
      redirect_url = "https://app.prolific.com/submissions/complete?cc=C19HH1X3" + "&" + url_params;
}

console.log("redirect_url: " + redirect_url)

//////////////////////////////////////////////

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from mainCode
// import * as random from 'random';
var pond_loc = [0, 0.25];
var boy_loc = [0.75, (- 0.3)];
var arrow_loc = [0.5, (- 0.3)];
var fish_loc = [[0.2, (- 0.3)], [0, (- 0.3)], [(- 0.2), (- 0.3)], [(- 0.4), (- 0.3)], [(- 0.6), (- 0.3)]];
var box_loc = [[(- 0.32), 0.25], [0, 0.25], [0.32, 0.25]];
var fish_interval = [0.5, 1.0, 1.5];
var block_correct = [];
var msg = "doh!";
var conditionfolder = "";

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
// first page
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
// written instructions
flowScheduler.add(ins1RoutineBegin());
flowScheduler.add(ins1RoutineEachFrame());
flowScheduler.add(ins1RoutineEnd());
flowScheduler.add(ins2RoutineBegin());
flowScheduler.add(ins2RoutineEachFrame());
flowScheduler.add(ins2RoutineEnd());
flowScheduler.add(ins3RoutineBegin());
flowScheduler.add(ins3RoutineEachFrame());
flowScheduler.add(ins3RoutineEnd());
// instruction video
flowScheduler.add(instruct_videoRoutineBegin());
flowScheduler.add(instruct_videoRoutineEachFrame());
flowScheduler.add(instruct_videoRoutineEnd());
// transition text
flowScheduler.add(ins4RoutineBegin());
flowScheduler.add(ins4RoutineEachFrame());
flowScheduler.add(ins4RoutineEnd());
// practice blocks
const prac_blockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_blockLoopBegin(prac_blockLoopScheduler));
flowScheduler.add(prac_blockLoopScheduler);
flowScheduler.add(prac_blockLoopEnd);
// transition from practice to real experiment: You have successfully completed the practice.
flowScheduler.add(waitRoutineBegin());
flowScheduler.add(waitRoutineEachFrame());
flowScheduler.add(waitRoutineEnd());
// main blocks
const blockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blockLoopBegin(blockLoopScheduler));
flowScheduler.add(blockLoopScheduler);
flowScheduler.add(blockLoopEnd);
// end of experiment message: "Thank you"
flowScheduler.add(rewardRoutineBegin());
flowScheduler.add(rewardRoutineEachFrame());
flowScheduler.add(rewardRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli/instruction_image.png', 'path': 'resources/stimuli/instruction_image.png'},
    {'name': 'stimuli/WhichPondTutorialVideo_FINAL_3.1.23.mp4', 'path': 'resources/stimuli/WhichPondTutorialVideo_FINAL_3.1.23.mp4'},
    {'name': 'stimuli/arrow.png', 'path': 'resources/stimuli/arrow.png'},
    {'name': 'stimuli/bead_b.PNG', 'path': 'resources/stimuli/bead_b.PNG'},
    {'name': 'stimuli/bead_g.PNG', 'path': 'resources/stimuli/bead_g.PNG'},
    {'name': 'stimuli/bead_y.PNG', 'path': 'resources/stimuli/bead_y.PNG'},
    {'name': 'stimuli/blank.jpg', 'path': 'resources/stimuli/blank.jpg'},
    {'name': 'stimuli/blank2.jpg', 'path': 'resources/stimuli/blank2.jpg'},
    {'name': 'stimuli/box_outline.png', 'path': 'resources/stimuli/box_outline.png'},
    {'name': 'stimuli/clear-jar.PNG', 'path': 'resources/stimuli/clear-jar.PNG'},
    {'name': 'stimuli/code_component.txt', 'path': 'resources/stimuli/code_component.txt'},
    {'name': 'stimuli/jars.PNG', 'path': 'resources/stimuli/jars.PNG'},
    {'name': 'stimuli/pond_selector_box.png', 'path': 'resources/stimuli/pond_selector_box.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    // new block and trial assignments
    {'name': '1condition/practiceBlockOrder.xlsx', 'path': 'resources/1condition/practiceBlockOrder.xlsx'},
    {'name': '1condition/practiceTrials1.xlsx', 'path': 'resources/1condition/practiceTrials1.xlsx'},
    {'name': '1condition/practiceTrials2.xlsx', 'path': 'resources/1condition/practiceTrials2.xlsx'},
    {'name': '1condition/blockOrderA.xlsx', 'path': 'resources/1condition/blockOrderA.xlsx'},
    {'name': '1condition/blockOrderB.xlsx', 'path': 'resources/1condition/blockOrderB.xlsx'},
    {'name': '1condition/blockOrderC.xlsx', 'path': 'resources/1condition/blockOrderC.xlsx'},
    {'name': '1condition/mainTrials1.xlsx', 'path': 'resources/1condition/mainTrials1.xlsx'},
    {'name': '1condition/mainTrials2.xlsx', 'path': 'resources/1condition/mainTrials2.xlsx'},
    {'name': '1condition/mainTrials3.xlsx', 'path': 'resources/1condition/mainTrials3.xlsx'},
    {'name': '1condition/mainTrials4.xlsx', 'path': 'resources/1condition/mainTrials4.xlsx'},
    {'name': '1condition/mainTrials5.xlsx', 'path': 'resources/1condition/mainTrials5.xlsx'},
    {'name': '1condition/mainTrials6.xlsx', 'path': 'resources/1condition/mainTrials6.xlsx'},
    {'name': '1condition/mainTrials7.xlsx', 'path': 'resources/1condition/mainTrials7.xlsx'},
    {'name': '1condition/mainTrials8.xlsx', 'path': 'resources/1condition/mainTrials8.xlsx'},
    {'name': '1condition/mainTrials9.xlsx', 'path': 'resources/1condition/mainTrials9.xlsx'},
    {'name': '1condition/mainTrials10.xlsx', 'path': 'resources/1condition/mainTrials10.xlsx'}
  ]
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);

let thisExp = psychoJS.experiment;
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

var welcomeClock;
var text_welcome;
var welcome_key;
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
var ins4Clock;
var text_4;
var ins4_key;
var inst4_image;
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
  
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  text_welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_welcome',
    text: "Welcome to the Which Pond? Game\n\nPress any key to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  welcome_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruct_video"
  instruct_videoClock = new util.Clock();
  ins_videoClock = new util.Clock();
  ins_video = new visual.MovieStim({
    win: psychoJS.window,
    name: 'ins_video',
    units: psychoJS.window.units,
    movie: 'stimuli/WhichPondTutorialVideo_FINAL_3.1.23.mp4',
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
    text: 'Which Pond? Fishing Game\n\nImagine a boy that goes fishing for 10 days. There are three ponds, each containing fish of different colors: blue, yellow, and green. In each pond the majority of the fish are of a single color.',
    font: 'Arial',
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
    text: 'Each day, the boy catches 15 fish. He will show you the fish he catches one by one, shown in the black square.' +
    '\nEach turn, you will guess from which pond he is fishing.' +
    '\nThe boy will pick a different pond at the beginning of a new day, and he may or may not change ponds within the same day.' + 
    '\n\nPress any key to continue.',
    font: 'Arial',
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
    text: 'A correct guess is rewarded with $1, while an incorrect guess earns $0.' +
    '\n\nAt the end of the game, you will receive the total bonus from one randomly selected session.' + 
    '\n\nThe maximum bonus you can receive from this game is $15, if you guess correctly for all trials.' +
    '\n\nPress any key to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
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
    text: 'Press LEFT, UP or RIGHT arrows on your keyboard to select your pond.'+
    '\n\nNext there will be a demonstration video.' + 
    '\n\nPress any key to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
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

  // Initialize components for Routine "ins4"
  ins4Clock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Press LEFT, UP or RIGHT arrows on your keyboard to select your pond. The game takes approximately 10 minutes to complete.' + 
    '\n\nThe game will start with a quick practice. During the practice, you will see whether you chose the right pond or not. But during the actual game, you will not get this feedback.'+
    '\n\nPress any key to start the practice.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  ins4_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  inst4_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst4_image', units : undefined, 
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
    font: 'Arial',
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
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -10, interpolate: true,
  });
  
  box_show_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box_show_2', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: fish_loc[0],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -11, interpolate: true,
  });
  // box_outline_2 = new visual.ImageStim({
  //   win : psychoJS.window,
  //   name : 'box_outline_2', units : undefined, 
  //   image : 'stimuli/box_outline.png', mask : undefined,
  //   anchor : 'center',
  //   ori : 0.0, pos : arrow_loc, size : [0.2, 0.2],
  //   color : new util.Color([1,1,1]), opacity : undefined,
  //   flipHoriz : false, flipVert : false,
  //   texRes : 128.0, interpolate : true, depth : -10.0 
  // });
  // box_show_2 = new visual.ImageStim({
  //   win : psychoJS.window,
  //   name : 'box_show_2', units : undefined, 
  //   image : 'stimuli/box_outline.png', mask : undefined,
  //   anchor : 'center',
  //   ori : 0.0, pos : arrow_loc, size : [0.2, 0.2],
  //   color : new util.Color([1,1,1]), opacity : undefined,
  //   flipHoriz : false, flipVert : false,
  //   texRes : 128.0, interpolate : true, depth : -11.0 
  // });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "response_practice"
  response_practiceClock = new util.Clock();
  pond_label2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pond_label2_2',
    text: '',
    font: 'Arial',
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
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 0, depth: -10, interpolate: true,
  });
  
  boxY_2 = new visual.Rect ({
    win: psychoJS.window, name: 'boxY_2', 
    width: [0.3, 0.45][0], height: [0.3, 0.45][1],
    ori: 0.0, pos: box_loc[1],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 0, depth: -11, interpolate: true,
  });
  
  boxG_2 = new visual.Rect ({
    win: psychoJS.window, name: 'boxG_2', 
    width: [0.3, 0.45][0], height: [0.3, 0.45][1],
    ori: 0.0, pos: box_loc[2],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 0, depth: -12, interpolate: true,
  });
  
  box_outline2_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box_outline2_2', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: fish_loc[0],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -13, interpolate: true,
  });

  // box_outline2_2 = new visual.ImageStim({
  //   win : psychoJS.window,
  //   name : 'box_outline2_2', units : undefined, 
  //   image : 'stimuli/box_outline.png', mask : undefined,
  //   anchor : 'center',
  //   ori : 0.0, pos : arrow_loc, size : [0.2, 0.2],
  //   color : new util.Color([1,1,1]), opacity : undefined,
  //   flipHoriz : false, flipVert : false,
  //   texRes : 128.0, interpolate : true, depth : -13.0 
  // });
  
  // Initialize components for Routine "wait"
  waitClock = new util.Clock();
  Begin_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'Begin_txt',
    text: 'You have successfully completed the practice. Now you are ready to start the game.' +
    '\n\nPress LEFT, UP, or RIGHT arrows on your keyboard to select your pond. \n\nPress SPACE key to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
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
    font: 'Arial',
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
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -10, interpolate: true,
  });
   box_show = new visual.Rect ({
    win: psychoJS.window, name: 'box_show', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: fish_loc[0],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -11, interpolate: true,
  });
  // box_outline = new visual.ImageStim({
  //   win : psychoJS.window,
  //   name : 'box_outline', units : undefined, 
  //   image : 'stimuli/box_outline.png', mask : undefined,
  //   anchor : 'center',
  //   ori : 0.0, pos : arrow_loc, size : [0.2, 0.2],
  //   color : new util.Color([1,1,1]), opacity : undefined,
  //   flipHoriz : false, flipVert : false,
  //   texRes : 128.0, interpolate : true, depth : -10.0 
  // });
  // box_show = new visual.ImageStim({
  //   win : psychoJS.window,
  //   name : 'box_show', units : undefined, 
  //   image : 'stimuli/box_outline.png', mask : undefined,
  //   anchor : 'center',
  //   ori : 0.0, pos : arrow_loc, size : [0.2, 0.2],
  //   color : new util.Color([1,1,1]), opacity : undefined,
  //   flipHoriz : false, flipVert : false,
  //   texRes : 128.0, interpolate : true, depth : -11.0 
  // });
  
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
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 0, depth: -9, interpolate: true,
  });
  
  boxY = new visual.Rect ({
    win: psychoJS.window, name: 'boxY', 
    width: [0.3, 0.45][0], height: [0.3, 0.45][1],
    ori: 0.0, pos: box_loc[1],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 0, depth: -10, interpolate: true,
  });
  
  boxG = new visual.Rect ({
    win: psychoJS.window, name: 'boxG', 
    width: [0.3, 0.45][0], height: [0.3, 0.45][1],
    ori: 0.0, pos: box_loc[2],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 0, depth: -11, interpolate: true,
  });
  
  box_outline2 = new visual.Rect ({
    win: psychoJS.window, name: 'box_outline2', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: fish_loc[0],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -12, interpolate: true,
  });
  // box_outline2 = new visual.ImageStim({
  //   win : psychoJS.window,
  //   name : 'box_outline2', units : undefined, 
  //   image : 'stimuli/box_outline.png', mask : undefined,
  //   anchor : 'center',
  //   ori : 0.0, pos : arrow_loc, size : [0.2, 0.2],
  //   color : new util.Color([1,1,1]), opacity : undefined,
  //   flipHoriz : false, flipVert : false,
  //   texRes : 128.0, interpolate : true, depth : -12.0 
  // });
  
  // Initialize components for Routine "block_break"
  block_breakClock = new util.Clock();
  breakStart_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'breakStart_txt',
    text: 'This day has ended.\n\nYou now have a break of 5 seconds.',
    font: 'Arial',
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
    text: 'You have successfully completed the task.\n\nThank you!',
    font: 'Arial',
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

///////////

var _welcome_key_allKeys;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    welcome_key.keys = undefined;
    welcome_key.rt = undefined;
    _welcome_key_allKeys = [];
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(text_welcome);
    welcomeComponents.push(welcome_key);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_welcome* updates
    if (t >= 0.0 && text_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_welcome.tStart = t;  // (not accounting for frame time here)
      text_welcome.frameNStart = frameN;  // exact frame index
      
      text_welcome.setAutoDraw(true);
    }

    
    // *welcome_key* updates
    if (t >= 0.0 && welcome_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_key.tStart = t;  // (not accounting for frame time here)
      welcome_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { welcome_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { welcome_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { welcome_key.clearEvents(); });
    }

    if (welcome_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = welcome_key.getKeys({keyList: [], waitRelease: false});
      _welcome_key_allKeys = _welcome_key_allKeys.concat(theseKeys);
      if (_welcome_key_allKeys.length > 0) {
        welcome_key.keys = _welcome_key_allKeys[_welcome_key_allKeys.length - 1].name;  // just the last key pressed
        welcome_key.rt = _welcome_key_allKeys[_welcome_key_allKeys.length - 1].rt;
        welcome_key.duration = _welcome_key_allKeys[_welcome_key_allKeys.length - 1].duration;
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
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(welcome_key.corr, level);
    }
    psychoJS.experiment.addData('welcome_key_keys', welcome_key.keys);
    if (typeof welcome_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('welcome_key_rt', welcome_key.rt);
        psychoJS.experiment.addData('welcome_key_duration', welcome_key.duration);
        routineTimer.reset();
        }
    
    welcome_key.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
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
    
    for (const thisComponent of instruct_videoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of instruct_videoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of instruct_videoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of ins1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of ins1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of ins1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(ins1_key.corr, level);
    }
    psychoJS.experiment.addData('ins1_key_keys', ins1_key.keys);
    if (typeof ins1_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ins1_key_rt', ins1_key.rt);
        psychoJS.experiment.addData('ins1_key_duration', ins1_key.duration);
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
    
    for (const thisComponent of ins2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of ins2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of ins2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of ins3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of ins3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of ins3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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

var _ins4_key_allKeys;
var ins4Components;
function ins4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ins4' ---
    t = 0;
    ins4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ins4_key.keys = undefined;
    ins4_key.rt = undefined;
    _ins4_key_allKeys = [];
    // keep track of which components have finished
    ins4Components = [];
    ins4Components.push(text_4);
    ins4Components.push(ins4_key);
    ins4Components.push(inst4_image);
    
    for (const thisComponent of ins4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ins4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ins4' ---
    // get current time
    t = ins4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *ins4_key* updates
    if (t >= 0.0 && ins4_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ins4_key.tStart = t;  // (not accounting for frame time here)
      ins4_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ins4_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ins4_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ins4_key.clearEvents(); });
    }

    if (ins4_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = ins4_key.getKeys({keyList: [], waitRelease: false});
      _ins4_key_allKeys = _ins4_key_allKeys.concat(theseKeys);
      if (_ins4_key_allKeys.length > 0) {
        ins4_key.keys = _ins4_key_allKeys[_ins4_key_allKeys.length - 1].name;  // just the last key pressed
        ins4_key.rt = _ins4_key_allKeys[_ins4_key_allKeys.length - 1].rt;
        ins4_key.duration = _ins4_key_allKeys[_ins4_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *inst4_image* updates
    if (t >= 0.0 && inst4_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst4_image.tStart = t;  // (not accounting for frame time here)
      inst4_image.frameNStart = frameN;  // exact frame index
      
      inst4_image.setAutoDraw(true);
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
    for (const thisComponent of ins4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ins4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ins4' ---
    for (const thisComponent of ins4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    ins4_key.stop();
    // the Routine "ins4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var pracBlock;
var practice_on; // true/false whether we are in practice block or not
function prac_blockLoopBegin(prac_blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    pracBlock = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: '1condition/practiceBlockOrder.xlsx',
      seed: undefined, name: 'pracBlock'
    });
    psychoJS.experiment.addLoop(pracBlock); // add the loop to the experiment
    currentLoop = pracBlock;  // we're now the current loop
    practice_on = true; // true because we are in the practice session

    // Schedule all the trials in the trialList:
    for (const thisBlock of pracBlock) {
      snapshot = pracBlock.getSnapshot();
      prac_blockLoopScheduler.add(importConditions(snapshot));
      // prac_blockLoopScheduler.add(reward_resetRoutineBegin(snapshot));
      // prac_blockLoopScheduler.add(reward_resetRoutineEachFrame());
      // prac_blockLoopScheduler.add(reward_resetRoutineEnd(snapshot));
      const prac_trialsLoopScheduler = new Scheduler(psychoJS);
      prac_blockLoopScheduler.add(prac_trialsLoopBegin(prac_trialsLoopScheduler, snapshot));
      prac_blockLoopScheduler.add(prac_trialsLoopScheduler);
      prac_blockLoopScheduler.add(prac_trialsLoopEnd);
      prac_blockLoopScheduler.add(block_breakRoutineBegin(snapshot));
      prac_blockLoopScheduler.add(block_breakRoutineEachFrame());
      prac_blockLoopScheduler.add(block_breakRoutineEnd(snapshot));
      prac_blockLoopScheduler.add(pracBlockLoopEndIteration(prac_blockLoopScheduler, snapshot));
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
      trialList: pracBlocksFile,
      seed: undefined, name: 'prac_trials'
    });
    psychoJS.experiment.addLoop(prac_trials); // add the loop to the experiment
    currentLoop = prac_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPrac_trial of prac_trials) {
      snapshot = prac_trials.getSnapshot();
      prac_trialsLoopScheduler.add(importConditions(snapshot));
      prac_trialsLoopScheduler.add(option_practiceRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(option_practiceRoutineEachFrame());
      prac_trialsLoopScheduler.add(option_practiceRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(response_practiceRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(response_practiceRoutineEachFrame());
      prac_trialsLoopScheduler.add(response_practiceRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(prac_trialsLoopEndIteration(prac_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function prac_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
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


async function prac_blockLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(block);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function pracBlockLoopEndIteration(scheduler, snapshot) {
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


////////////////////////// REAL BLOCKS


var block;

// Choose a semi-randomzied block order to use for this user session
var block_order_options = [
  '1condition/blockOrderA.xlsx',
  '1condition/blockOrderB.xlsx',
  '1condition/blockOrderC.xlsx'
];
var randomIndex = Math.floor(Math.random() * block_order_options.length);
console.log("random index: " + randomIndex)
var assigned_block_order = block_order_options[randomIndex];
console.log("assigned block order: " + assigned_block_order)

function blockLoopBegin(blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: assigned_block_order,
      seed: undefined, name: 'block'
    });
    psychoJS.experiment.addLoop(block); // add the loop to the experiment
    currentLoop = block;  // we're now the current loop
    practice_on = false; // we are no longer in practice mode

    // Schedule all the trials in the trialList:
    for (const thisBlock of block) {
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
    }
    
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
      trialList: condsFile, // references the "condsFile" column in blockOrder excel file, which has block order
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addData("block assignment", condsFile);
    console.log("current block assignment" + condsFile)
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop

    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(option_fishRoutineBegin(snapshot));
      trialsLoopScheduler.add(option_fishRoutineEachFrame());
      trialsLoopScheduler.add(option_fishRoutineEnd(snapshot));
      trialsLoopScheduler.add(response_fishRoutineBegin(snapshot));
      trialsLoopScheduler.add(response_fishRoutineEachFrame());
      trialsLoopScheduler.add(response_fishRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
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
    psychoJS.experiment.addData("practice_trial_started", globalClock.getTime());
    fish_int = fish_interval[(Math.floor(Math.random() * fish_interval.length))];
    endMsg = " ";
    endTrial = false;
    
    psychoJS.experiment.addData("practice_trial_num", prac_trials.thisN);

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
    
    for (const thisComponent of option_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of option_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of option_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('prac_key_resp_keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('prac_key_resp_rt', key_resp_2.rt);
        psychoJS.experiment.addData('prac_key_resp_duration', key_resp_2.duration);
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
            var time = new Date();
            // boxB_2.lineColor = "black";
            boxB_2.opacity = 0.5;
        } else {
            if (((key_resp_2.keys === "2") || (key_resp_2.keys === "up"))) {
              var time = new Date();
                // boxY_2.lineColor = "black";
                boxY_2.opacity = 0.5;
            } else {
                if (((key_resp_2.keys === "3") || (key_resp_2.keys === "right"))) {
                    var time = new Date();
                    // boxG_2.lineColor = "black";
                    boxG_2.opacity = 0.5;
                }
            }
        }
        if (((key_resp_2.keys === pond_p2.toString()) || (key_resp_2.keys === pond_p3))) {
            var practice_msg = "Correct!";
            psychoJS.experiment.addData("prac_resp_corr", 1);
        } else {
            var practice_msg = "Oops! Wrong pond.";
            psychoJS.experiment.addData("prac_resp_corr", 0);
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
    
    for (const thisComponent of response_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of response_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of response_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from boxClear_2
    // boxB_2.lineColor = "none";
    // boxY_2.lineColor = "none";
    // boxG_2.lineColor = "none";
    boxB_2.opacity = 0;
    boxY_2.opacity = 0;
    boxG_2.opacity = 0;
    
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
    
    for (const thisComponent of waitComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of waitComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of waitComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(ExpStart_key.corr, level);
    }
    psychoJS.experiment.addData('ExpStart_key_keys', ExpStart_key.keys);
    if (typeof ExpStart_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ExpStart_key_rt', ExpStart_key.rt);
        psychoJS.experiment.addData('ExpStart_key_duration', ExpStart_key.duration);
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
var block_counter = 0; // real blocks start at counter = 1

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
    block_counter += 1;
    console.log("current block: " + block_counter)
    psychoJS.experiment.addData("block number", block_counter)
    // keep track of which components have finished
    reward_resetComponents = [];
    
    for (const thisComponent of reward_resetComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of reward_resetComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of reward_resetComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
var fish_key_button_rt;
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
    psychoJS.experiment.addData("main_trial_started", globalClock.getTime());
    fish_int = fish_interval[(Math.floor(Math.random() * fish_interval.length))];
    endMsg = " ";
    endTrial = false;

    psychoJS.experiment.addData("main_trial_num", trials.thisN);
    
    F1.setImage(fish1);
    F2.setImage(fish2);
    F3.setImage(fish3);
    F4.setImage(fish4);
    F5.setImage(fish5);
    fish_key_button.keys = undefined;
    fish_key_button_rt = undefined;
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
    
    for (const thisComponent of option_fishComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of option_fishComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of option_fishComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(fish_key_button.corr, level);
    }
    psychoJS.experiment.addData('trial_resp_keys', fish_key_button.keys);
    if (typeof fish_key_button.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trial_resp_rt', fish_key_button.rt);
        psychoJS.experiment.addData('trial_resp_duration', fish_key_button.duration);
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
var resp_time;
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
          // resp_time = new Date();
          resp_time = globalClock.getTime();
            // boxB.lineColor = "black";
            boxB.opacity = 0.5;
        } else {
            if (((fish_key_button.keys === "2") || (fish_key_button.keys === "up"))) {
              // resp_time = new Date();
              resp_time = globalClock.getTime();
                // boxY.lineColor = "black";
                boxY.opacity = 0.5;
            } else {
                if (((fish_key_button.keys === "3") || (fish_key_button.keys === "right"))) {
                  // resp_time = new Date();
                  resp_time = globalClock.getTime();
                    // boxG.lineColor = "black";
                    boxG.opacity = 0.5;
                }
            }
        }
        if (((fish_key_button.keys === pond2.toString()) || (fish_key_button.keys === pond3))) {
            nCorr += 1;
            psychoJS.experiment.addData("main_resp_corr", 1);
        } else {
            psychoJS.experiment.addData("main_resp_corr", 0);
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
    
    for (const thisComponent of response_fishComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of response_fishComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of response_fishComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from boxClear
    // boxB.lineColor = "none";
    // boxY.lineColor = "none";
    // boxG.lineColor = "none";
    boxB.opacity = 0;
    boxY.opacity = 0;
    boxG.opacity = 0;
    
    // thisExp.addData("fish_interval", fish_int);
    // thisExp.addData("key_time", time);
    psychoJS.experiment.addData("fish_interval", fish_int);
    psychoJS.experiment.addData("key_resp_time", resp_time);
    
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
    // block_correct.append(nCorr);
    
    if (practice_on == false)
      block_correct.push(nCorr); // skip this if doing a practice round
    
    
    // keep track of which components have finished
    block_breakComponents = [];
    block_breakComponents.push(breakStart_txt);
    
    for (const thisComponent of block_breakComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of block_breakComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of block_breakComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of rewardComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of rewardComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of rewardComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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


var reward_score;
var reward_amt;
var end_task_time; 
async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  // Run 'End Experiment' code from reward_pay
  reward_score = util.randchoice(util.range(block_correct.length));
  reward_amt = (reward_score + 1);
  psychoJS.experiment.addData("reward_amount", reward_amt);
  
  // Save end task time
  end_task_time = util.MonotonicClock.getDateStr();
  psychoJS.experiment.addData("date_end_task", end_task_time);
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  // redirect to the new URL after finished
  // figure out which line to insert this exactly
  window.location.replace(redirect_url)
  
  return Scheduler.Event.QUIT;
}
