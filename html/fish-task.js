/**************************** 
 * Slot Machine Task *
 ****************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Slot Machine Game';  // from the Builder filename that created this script

//// CUSTOM CONFIGURATIONS
var show_trial_history = false; // toggle true or false to show point earned from previous trials (row of 5)
var debug_mode = false; // toggle true reduces blocks from 10 to 1

//// Handle URL Params and Participant Data
let expInfo = { // these show up as fields on starting page if URL params are not present
  // If running a prolific study, use these params:
  'prolific_id': '', // asks the user to input if not found in url params
  'path_id': '', // asks the user to input if not found in url params
  
  // If running study for invite-only participants, use these params: 
  // 'subject_id': '' 
  // 'path_id': '',

  // Extra params for reference:
  // 'group_id': '', // defunct feature for now
  // 'study_id': '', // only for prolific studies
  // 'session_id': '' // only for prolific studies
};

var subject_data = {};
// Capture URL parameters and set study values
var url_params = window.location.search.slice(1); // slice remove first char to get rid of beginning "?"
// example of url_params: "prolific_id=pid1&study_id=si1&session_id=sid1&path_id=path"
var indiv_params = url_params.split("&")
console.log(url_params)
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
  } // else if (param.toLowerCase().includes("group_id")) { // now defunct because not using in Redcap
  //   console.log("group id found")
  //   subject_data.group_id = par_vals[1];
  else if (param.toLowerCase().includes("study_id")) { // only for prolific participants
    console.log("study id found")
    subject_data.study_id = par_vals[1];
  } else if (param.toLowerCase().includes("session_id")) { // only for prolific participants
    console.log("sid found")
    subject_data.session_id = par_vals[1];
  } else if (param.toLowerCase().includes("path_id")) {
    console.log("path id found")
    subject_data.path_id = par_vals[1];
  } // else if (param.toLowerCase().includes("subject_id")) { // only for invited subjects
  //   console.log("subj id found")
  //   subject_data.subject_id = par_vals[1];
  // }
};

console.log("Subject data collected: ")
console.log(subject_data)

// switch(subject_data.group_id) { // study_id determines which study it goes to 
//   case "1A": study_group = "nicotine_grp_online";
//     break;
//   case "1B": study_group = "nicotine_ctrl_online";
//     break;
//   case "1C": study_group = "nicotine_grp_invited"; redcap_completionsurvey = "?s=nicotine_cc";
//     break;
//   case "1D": study_group = "nicotine_ctrl_invited"; redcap_completionsurvey = "?s=nicotine_ctrl_cc";
//     break; 
//   case "2A": study_group = "eatingdisorder_grp_online";
//     break;
//   case "2B": study_group = "eatingdisorder_ctrl_online";
//     break;
//   case "2A": study_group = "eatingdisorder_grp_invited"; redcap_completionsurvey = "?s=eatingdisorder_cc";
//     break;
//   case "2B": study_group = "eatingdisorder_ctrl_invited"; redcap_completionsurvey = "?s=eatingdisorder_ctrl_cc";
//     break;
//   case undefined: console.log("no group id found in switch case block")  
//     break;
// }

if (subject_data.path_id) {
  if (subject_data.path_id.toUpperCase() == "B") {
    // redirect to slot task
    redirect_url = "http://run.pavlovia.org/janetlchang/fish-task/html" +  "?" + url_params;
  } else if (subject_data.path_id.toUpperCase() == "A") {
    // fish task is last task, need to redirect to study completion page
      // if (study_group.includes("invited") || subject_data.prolific_id == '') {
      //   // redirect for invited subject
      //   redirect_url = "http://redcap.com" + redcap_completionsurvey +  "&" + url_params; 
      // } else // redirect for prolific subject
      redirect_url = "https://app.prolific.com/submissions/complete?cc=C2RO6365"; // completion code for prolific main general study for all groups
  } else {
    redirect_url = "";
    console.log("no redirect url set due to invalid path ID")
  }
} else {
  redirect_url = "";
  console.log("no redirect url set due to missing path ID")
}

console.log("redirect_url: " + redirect_url)



//////////////////////////

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from code_practice_reset
var card_size = [0.4, 0.4];
var cardPositions = [[(- 0.5), 0.2], [0, 0.2], [0.5, 0.2]];
var slotImageLocations = ["stimuli/card_circ_transparent.png", "stimuli/card_pent_transparent.png", "stimuli/card_sqr_transparent.png", "stimuli/card_star_transparent.png", "stimuli/card_tri_transparent.png"];
var textPosition = [0, (- 0.1)];
var intervalAfterSelection = [0.5, 1, 1.5];
var arrowSize = [0.2, 0.2];
var arrow_loc = [0.5, (- 0.3)];
var boxPos = [0, 0];
var rewardImageSize = [0.3, 0.25];
var rewardPresentationTime = 0.3;
var rewardImagePostions = [[(- 0.53), 0.21], [(- 0.025), 0.21], [0.475, 0.21]];
var rewardImageLocations = ["stimuli/card_100_transparent.png", "stimuli/card_10_transparent.png", "stimuli/card_0_transparent.png"];
var consReward_pos = [[0.2, (- 0.3)], [0, (- 0.3)], [(- 0.2), (- 0.3)], [(- 0.4), (- 0.3)], [(- 0.6), (- 0.3)]];

var pracCondRew = { // Note: conditions are by number of trials for first reward set, not trial index
  [[9, 15]]: [[2, 1, 3], [2, 3, 1]], 
  [[6, 15]]: [[1, 3, 2], [3, 1, 2]]
};
// const practiceConditions = Object.keys(pracCondRew); // list of arrays, each array represents a block's trial indices where slot rewards change
const practiceConditions = [[9, 15], [6, 15]];
const practiceRewardSeqs = Object.values(pracCondRew); // list of arrays, each array represents a block's slot reward sequences
// [ [[2, 1, 3], [2, 3, 1]], 
//   [[1, 3, 2], [3, 2, 1]] ];

// Run 'Before Experiment' code from code_practice_rewards
var joystickValues = [0, 1, 2];
var keyboardNumbers = ["1", "2", "3"];
var keyboardArrows = ["left", "up", "right"];
var rand_val = 0;
var currentTrialReward = 0;
var x, y, z;

// Run 'Before Experiment' code from code_reward_reset
// Semi-randomization function for block orders
var block_order;
var block_options = [1, 2, 3];
var block_option = util.randchoice(block_options); // randomly choose 1 of 3 block order conditions to use
console.log("block_option: " + block_option)
switch(block_option){
  case 1:
    block_order = [0,1,2,3,4,5,6,7,8,9]; // block orders are by indices starting from zero. 
    // actual nums: 1 2 3 4 5 6 7 8 9 10
    break;
  case 2:
    block_order = [2,4,8,0,1,3,9,6,8,5]; // block orders are by indices starting from zero.
    // actual nums: 3 5 8 1 2 4 10 7 9 6
    break;
  case 3:
    block_order = [0,4,6,3,5,7,8,1,9,2]; // block orders are by indices starting from zero. 
    // actual nums: 1 5 7 4 6 8 9 2 10 3
    break;
}
console.log("Assigned block order: " + block_order)

// var mainCondRew = {[[12, 20]]: [[2, 1, 3], [2, 3, 1]], [[8, 20]]: [[1, 3, 2], [3, 2, 1]], [[7, 20]]: [[3, 1, 2], [1, 2, 3]], [[10, 20]]: [[1, 2, 3], [3, 2, 1]], [[7, 14, 20]]: [[2, 3, 1], [2, 1, 3], [1, 3, 2]], [[13, 20]]: [[3, 2, 1], [1, 3, 2]]};
var mainCondRew = {
  [[12, 15]]: [[2, 1, 3], [2, 3, 1]], 
  [[6, 15]]: [[1, 3, 2], [3, 2, 1]], 
  [[15, 15]]: [[3, 1, 2], [3, 1, 2]],
  [[7, 15]]: [[2, 3, 1], [1, 2, 3]],  
  [[5, 15]]: [[1, 2, 3], [3, 1, 2]],
  [[4, 10, 15]]: [[2, 3, 1], [1, 3, 2], [3, 2, 1]], 
  [[9, 15]]: [[1, 3, 2], [2, 3, 1]], 
  [[11, 15]]: [[2, 1, 3], [1, 2, 3]], 
  [[8, 15]]: [[3, 2, 1], [3, 1, 2]],
  [[10, 15]]: [[3, 1, 2], [1, 3, 2]]
};
const mainConditions = [ // list of arrays, each array represents a block's trial indices where slot rewards change
  [12, 15],
  [6, 15],
  [15, 15],
  [7, 15],
  [5, 15],
  [4, 10, 15],
  [9, 15],
  [11, 15],
  [8, 15],
  [10, 15]
];
const mainRewardSeqs = Object.values(mainCondRew); // list of arrays, each array represents a block's slot reward sequences

// Run 'Before Experiment' code from code_reward_reset
var main_reward_seqs = [];
var main_reward_seq = [];
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: false
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
flowScheduler.add(instruction1RoutineBegin());
flowScheduler.add(instruction1RoutineEachFrame());
flowScheduler.add(instruction1RoutineEnd());
flowScheduler.add(instruction2RoutineBegin());
flowScheduler.add(instruction2RoutineEachFrame());
flowScheduler.add(instruction2RoutineEnd());
flowScheduler.add(instruction3RoutineBegin());
flowScheduler.add(instruction3RoutineEachFrame());
flowScheduler.add(instruction3RoutineEnd());
// instruction video
flowScheduler.add(intro_videoRoutineBegin());
flowScheduler.add(intro_videoRoutineEachFrame());
flowScheduler.add(intro_videoRoutineEnd());
// practice start instruction
flowScheduler.add(instruction4RoutineBegin());
flowScheduler.add(instruction4RoutineEachFrame());
flowScheduler.add(instruction4RoutineEnd());
// practice blocks
const practice_blockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_blockLoopBegin(practice_blockLoopScheduler));
flowScheduler.add(practice_blockLoopScheduler);
flowScheduler.add(practice_blockLoopEnd);
// transition from practice to real experiment: 
flowScheduler.add(practice_endRoutineBegin()); // "You have successfully completed the practice."
flowScheduler.add(practice_endRoutineEachFrame());
flowScheduler.add(practice_endRoutineEnd());
flowScheduler.add(Main_InstructionRoutineBegin());
flowScheduler.add(Main_InstructionRoutineEachFrame());
flowScheduler.add(Main_InstructionRoutineEnd());
// main blocks
const blockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blockLoopBegin(blockLoopScheduler));
flowScheduler.add(blockLoopScheduler);
flowScheduler.add(blockLoopEnd);
// end of experiment message
flowScheduler.add(End_insRoutineBegin());
flowScheduler.add(End_insRoutineEachFrame());
flowScheduler.add(End_insRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli/SlotMachineGameVideo-10.06.23.mp4', 'path': 'stimuli/SlotMachineGameVideo-10.06.23.mp4'},
    {'name': 'stimuli/arrow_transparent.png', 'path': 'stimuli/arrow_transparent.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'stimuli/arrow.png', 'path': 'stimuli/arrow.png'},
    {'name': 'stimuli/arrow_transparent.png', 'path': 'stimuli/arrow_transparent.png'},
    {'name': 'stimuli/blank.jpg', 'path': 'stimuli/blank.jpg'},
    {'name': 'stimuli/blank_transparent.png', 'path': 'stimuli/blank_transparent.png'},
    {'name': 'stimuli/blank2.jpg', 'path': 'stimuli/blank2.jpg'},
    {'name': 'stimuli/card_0.PNG', 'path': 'stimuli/card_0.PNG'},
    {'name': 'stimuli/card_0_transparent.png', 'path': 'stimuli/card_0_transparent.png'},
    {'name': 'stimuli/card_10.PNG', 'path': 'stimuli/card_10.PNG'},
    {'name': 'stimuli/card_10_transparent.png', 'path': 'stimuli/card_10_transparent.png'},
    {'name': 'stimuli/card_100.PNG', 'path': 'stimuli/card_100.PNG'},
    {'name': 'stimuli/card_100_transparent.png', 'path': 'stimuli/card_100_transparent.png'},
    {'name': 'stimuli/card_circ.PNG', 'path': 'stimuli/card_circ.PNG'},
    {'name': 'stimuli/card_circ_transparent.png', 'path': 'stimuli/card_circ_transparent.png'},
    {'name': 'stimuli/card_pent.PNG', 'path': 'stimuli/card_pent.PNG'},
    {'name': 'stimuli/card_pent_transparent.png', 'path': 'stimuli/card_pent_transparent.png'},
    {'name': 'stimuli/card_sqr.PNG', 'path': 'stimuli/card_sqr.PNG'},
    {'name': 'stimuli/card_sqr_transparent.png', 'path': 'stimuli/card_sqr_transparent.png'},
    {'name': 'stimuli/card_star.PNG', 'path': 'stimuli/card_star.PNG'},
    {'name': 'stimuli/card_star_transparent.png', 'path': 'stimuli/card_star_transparent.png'},
    {'name': 'stimuli/card_tri.PNG', 'path': 'stimuli/card_tri.PNG'},
    {'name': 'stimuli/card_tri_transparent.png', 'path': 'stimuli/card_tri_transparent.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var currentLoop;
var frameDur;
var data_subject_id;
let experiment_mode = "prolific";
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.1.3';
  expInfo['OS'] = window.navigator.platform;

  if (experiment_mode = "prolific") {
    data_subject_id = expInfo['prolific_id'];
  } else if (experiment_mode = "invited") {
    data_subject_id = expInfo['subject_id'];
  } else {
    data_subject_id = "";
  }

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${data_subject_id}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}

var intro_videoClock;
var movie;
var nPracticeBlocks;
var nPracticeTrials;
var welcomeClock;
var text_welcome;
var key_resp_welcome;
var instruction1Clock;
var text_instruction1;
var key_resp_instruction1;
var instruction2Clock;
var text_instruction2;
var key_resp_instruction2;
var instruction3Clock;
var text_instruction3;
var key_resp_instruction3;
var instruction4Clock;
var text_instruction4;
var key_resp_instruction4;
var practice_resetClock;
var practice_slotsClock;
var card_circ;
var card_pent;
var card_sqr;
var arrow_4;
var image;
var image_18;
var image_19;
var image_20;
var image_21;
var text_practice_slots;
var text_practice_slots_2;
var polygon;
var key_resp_practice_slots;
var practice_intervalClock;
var card_circ_6;
var card_pent_6;
var card_sqr_6;
var arrow_5;
var image_22;
var image_23;
var image_24;
var image_25;
var image_26;
var text_practice_interval;
var polygon_2;
var polygon_practice_interval;
var practice_rewardsClock;
var rewPos;
var rewImg;
var card_circ_7;
var card_pent_7;
var card_sqr_7;
var image_27; // reward image
var arrow_6;
var image_28;
var image_29;
var image_30;
var image_31;
var image_32;
var polygon_3;
var text_practice_rewards;
var practice_endClock;
var text_practice_end;
var key_resp_practice_end;
var Main_InstructionClock;
var nBlocks;
var nTrials;
var text_main_instruction;
var key_resp_main_instruction;
var reward_resetClock;
var block_reward;
var slots_presentationClock;
var card_circ_3;
var card_pent_3;
var card_sqr_3;
var arrow;
var image_3;
var image_6;
var image_9;
var image_12;
var image_15;
var text_slots_presentation;
var text_slots_presentation_2;
var polygon_4;
var key_resp_slots_presentation;
var selection_intervalClock;
var card_circ_5;
var card_pent_5;
var card_sqr_5;
var arrow_2;
var image_4;
var image_7;
var image_10;
var image_13;
var image_16;
var polygon_selection_interval;
var polygon_5;
var text_selection_interval;
var reward_presentationClock;
var card_circ_4;
var card_pent_4;
var card_sqr_4;
var image_2; // reward image
var arrow_3;
var image_5;
var image_8;
var image_11;
var image_14;
var image_17;
var polygon_6;
var text_reward_presentation;
var Block_breakClock;
var text_block_break;
var End_insClock;
var text_end_ins;
var globalClock;
var routineTimer;

async function experimentInit() {
  nPracticeBlocks = 2;
  nPracticeTrials = 15;

  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  // Run 'Begin Experiment' code from code_welcome
  text_welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_welcome',
    text: 'Welcome to the Slot Machine Game！\n\n\nPress any key to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  key_resp_welcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
   // Initialize components for Routine "intro_video"
   intro_videoClock = new util.Clock();
   movie = new visual.MovieStim({
     win: psychoJS.window,
     name: 'movie',
     units: psychoJS.window.units,
     movie: 'stimuli/SlotMachineGameVideo-10.06.23.mp4',
     pos: [0, 0],
     anchor: 'center',
     size: [1, 0.6],
     ori: 0.0,
     opacity: undefined,
     loop: false,
     noAudio: false,
     depth: 0
     });
   

  // Initialize components for Routine "instruction1"
  instruction1Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_instruction1
  text_instruction1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instruction1',
    text: 'Slot Machine Game' +
    '\n\nImagine that you go to a casino to play with three slot machines for 10 days.' +
    '\n\nEach day, you can play 15 rounds. Each round, you select a machine to play and you can earn a reward.'+
    '\n\nPress any key to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  key_resp_instruction1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction2"
  instruction2Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_instruction2
  text_instruction2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instruction2',
    text: 'But there is something strange about these machines!' +
    '\n\nOne machine earns high rewards - mostly 100 points, but sometimes 10 or 0 points.' +
    '\nOne machine earns low rewards - mostly 10 points, but sometimes 100 or 0 points.' +
    '\nOne machine earns no rewards - mostly 0 points, but sometimes 100 or 10 points.' +
    '\n\nIn this game, you will have to find the best machines to maximize your rewards.'+
    '\nEvery 100 points won in this game can be rewarded $1.' +
    '\nAt the end of the study, you will receive the total bonus from one randomly selected session in this game OR another game played in this study.' + 
    '\nThe maximum bonus you can receive from this game is $15, if you guess correctly for all trials.' +
    '\n\nPress any key to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  key_resp_instruction2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction3"
  instruction3Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_instruction3
  text_instruction3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instruction3',
    text: 'Every day, the machines will be different.' +
    '\nThe winning machine may or may not change within the same day. ' +
    '\nSo the best machine may change after a while. You will have to adapt!'+
    // '\n\nThe game takes about 10 minutes and starts with a practice.'+
    '\n\nNext you will watch a brief video demonstration. Press any key to continue.',
    // Press LEFT, UP or RIGHT arrows on your keyboard to select your slot machine.'+
    // '\n\nPress any key to start the practice.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  key_resp_instruction3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  

  // Initialize components for Routine "instruction4"
  instruction4Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_instruction4
  text_instruction4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instruction4',
    text: 'The game takes about 10 minutes and will start with a practice.'+
    '\n\nPress any key to begin the practice!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  key_resp_instruction4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});


  // Initialize components for Routine "practice_reset"
  practice_resetClock = new util.Clock();
  
  // Initialize components for Routine "practice_slots"
  practice_slotsClock = new util.Clock();
  card_circ = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_circ', units : undefined, 
    image : slotImageLocations[0], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[0], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  card_pent = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_pent', units : undefined, 
    image : slotImageLocations[1], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[1], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  card_sqr = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_sqr', units : undefined, 
    image : slotImageLocations[2], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[2], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  if (show_trial_history == true) {
    arrow_4 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'arrow_4', units : undefined, 
      image : 'stimuli/arrow_transparent.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : arrow_loc, size : arrowSize,
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -4.0 
    });
    image = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -5.0 
    });
    image_18 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_18', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -6.0 
    });
    image_19 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_19', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -7.0 
    });
    image_20 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_20', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -8.0 
    });
    image_21 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_21', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -9.0 
    });
  }

  text_practice_slots = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_practice_slots',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: textPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -10.0 
  });
  
  text_practice_slots_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_practice_slots_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  polygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon', 
    width: [0.17, 0.17][0], height: [0.17, 0.17][1],
    ori: 0.0, pos: consReward_pos[0],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color(undefined),
    opacity: 0.5, depth: -12, interpolate: true,
  });
  
  key_resp_practice_slots = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_interval"
  practice_intervalClock = new util.Clock();
  card_circ_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_circ_6', units : undefined, 
    image : slotImageLocations[0], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[0], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  card_pent_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_pent_6', units : undefined, 
    image : slotImageLocations[1], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[1], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  card_sqr_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_sqr_6', units : undefined, 
    image : slotImageLocations[2], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[2], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });

  if (show_trial_history == true) {
    arrow_5 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'arrow_5', units : undefined, 
        image : 'stimuli/arrow_transparent.png', mask : undefined,
        anchor : 'center',
        ori : 0.0, pos : arrow_loc, size : arrowSize,
        color : new util.Color([1,1,1]), opacity : undefined,
        flipHoriz : false, flipVert : false,
        texRes : 128.0, interpolate : true, depth : -4.0 
      });
      image_22 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'image_22', units : undefined, 
        image : 'default.png', mask : undefined,
        anchor : 'center',
        ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
        color : new util.Color([1,1,1]), opacity : undefined,
        flipHoriz : false, flipVert : false,
        texRes : 128.0, interpolate : true, depth : -5.0 
      });
      image_23 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'image_23', units : undefined, 
        image : 'default.png', mask : undefined,
        anchor : 'center',
        ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
        color : new util.Color([1,1,1]), opacity : undefined,
        flipHoriz : false, flipVert : false,
        texRes : 128.0, interpolate : true, depth : -6.0 
      });
      image_24 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'image_24', units : undefined, 
        image : 'default.png', mask : undefined,
        anchor : 'center',
        ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
        color : new util.Color([1,1,1]), opacity : undefined,
        flipHoriz : false, flipVert : false,
        texRes : 128.0, interpolate : true, depth : -7.0 
      });
      image_25 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'image_25', units : undefined, 
        image : 'default.png', mask : undefined,
        anchor : 'center',
        ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
        color : new util.Color([1,1,1]), opacity : undefined,
        flipHoriz : false, flipVert : false,
        texRes : 128.0, interpolate : true, depth : -8.0 
      });
      image_26 = new visual.ImageStim({
        win : psychoJS.window,
        name : 'image_26', units : undefined, 
        image : 'default.png', mask : undefined,
        anchor : 'center',
        ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
        color : new util.Color([1,1,1]), opacity : undefined,
        flipHoriz : false, flipVert : false,
        texRes : 128.0, interpolate : true, depth : -9.0 
      });
  }
  
  text_practice_interval = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_practice_interval',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: textPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1.0,
    depth: -10.0 
  });
  
  polygon_2 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_2', 
    width: [0.17, 0.17][0], height: [0.17, 0.17][1],
    ori: 0.0, pos: consReward_pos[0],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color(undefined),
    opacity: 0.5, depth: -11, interpolate: true,
  });
  
  polygon_practice_interval = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_practice_interval', 
    width: card_size[0], height: card_size[1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.7255, (- 0.8431), (- 0.5294)]),
    fillColor: new util.Color([(- 0.0667), 0.0667, 0.2]),
    opacity: 0.5, depth: -12, interpolate: true,
  });
  
  // Initialize components for Routine "practice_rewards"
  practice_rewardsClock = new util.Clock();
  // Run 'Begin Experiment' code from code_practice_rewards
  rewPos = [0, 0];
  rewImg = "stimuli/blank_transparent.png";
  
  card_circ_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_circ_7', units : undefined, 
    image : slotImageLocations[0], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[0], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  card_pent_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_pent_7', units : undefined, 
    image : slotImageLocations[1], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[1], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  card_sqr_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_sqr_7', units : undefined, 
    image : slotImageLocations[2], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[2], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_27 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_27', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : rewardImageSize,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });

  if (show_trial_history == true) {
    arrow_6 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'arrow_6', units : undefined, 
      image : 'stimuli/arrow_transparent.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : arrow_loc, size : arrowSize,
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -4.0 
    });
    image_28 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_28', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : consReward_pos[0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -6.0 
    });
    image_29 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_29', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : consReward_pos[1], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -7.0 
    });
    image_30 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_30', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : consReward_pos[2], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -8.0 
    });
    image_31 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_31', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : consReward_pos[3], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -9.0 
    });
    image_32 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_32', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : consReward_pos[4], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -10.0 
    });
  }
  
  polygon_3 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_3', 
    width: [0.17, 0.17][0], height: [0.17, 0.17][1],
    ori: 0.0, pos: consReward_pos[0],
    anchor: 'center',
    lineWidth: 20.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color(undefined),
    opacity: 0.5, depth: -11, interpolate: true,
  });
  
  text_practice_rewards = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_practice_rewards',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: textPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.0039, 0.0039, (- 1.0)]),  opacity: undefined,
    depth: -12.0 
  });
  
  // Initialize components for Routine "practice_end"
  practice_endClock = new util.Clock();
  text_practice_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_practice_end',
    text: 'You have successfully completed the practice.' +
    '\n\nNow you are ready to start the game.'+
    '\n\nPress SPACE key to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_practice_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Main_Instruction"
  Main_InstructionClock = new util.Clock();
  // Run 'Begin Experiment' code from code_main_instruction
  if (debug_mode == true) {
    nBlocks = 1;
    nTrials = 15;
  } else {
    nBlocks = 10;
    nTrials = 15;
  };
  
  text_main_instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_main_instruction',
    text: 'Press one of the following arrows on the keyboard to select your slot machine:' +
    '\n\nLEFT, UP, or RIGHT\n\n\nPress SPACE key to start the game.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_main_instruction = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "reward_reset"
  reward_resetClock = new util.Clock();
  // Run 'Begin Experiment' code from code_reward_reset
  block_reward = [];
  
  // Initialize components for Routine "slots_presentation"
  slots_presentationClock = new util.Clock();
  card_circ_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_circ_3', units : undefined, 
    image : slotImageLocations[0], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[0], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  card_pent_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_pent_3', units : undefined, 
    image : slotImageLocations[1], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[1], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  card_sqr_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_sqr_3', units : undefined, 
    image : slotImageLocations[2], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[2], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });

  if (show_trial_history == true) {
    arrow = new visual.ImageStim({
      win : psychoJS.window,
      name : 'arrow', units : undefined, 
      image : 'stimuli/arrow_transparent.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : arrow_loc, size : arrowSize,
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -4.0 
    });
    image_3 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_3', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -5.0 
    });
    image_6 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_6', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -6.0 
    });
    image_9 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_9', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -7.0 
    });
    image_12 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_12', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -8.0 
    });
    image_15 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_15', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -9.0 
    });
  }
  
  text_slots_presentation = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_slots_presentation',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: textPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -10.0 
  });
  
  text_slots_presentation_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_slots_presentation_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  polygon_4 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_4', 
    width: [0.17, 0.17][0], height: [0.17, 0.17][1],
    ori: 0.0, pos: consReward_pos[0],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color(undefined),
    opacity: 0.5, depth: -12, interpolate: true,
  });
  
  key_resp_slots_presentation = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "selection_interval"
  selection_intervalClock = new util.Clock();
  card_circ_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_circ_5', units : undefined, 
    image : slotImageLocations[0], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[0], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  card_pent_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_pent_5', units : undefined, 
    image : slotImageLocations[1], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[1], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  card_sqr_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_sqr_5', units : undefined, 
    image : slotImageLocations[2], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[2], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });

  if (show_trial_history == true) {
    arrow_2 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'arrow_2', units : undefined, 
      image : 'stimuli/arrow_transparent.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : arrow_loc, size : arrowSize,
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -4.0 
    });
    image_4 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_4', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -5.0 
    });
    image_7 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_7', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -6.0 
    });
    image_10 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_10', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -7.0 
    });
    image_13 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_13', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -8.0 
    });
    image_16 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_16', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : [0, 0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -9.0 
    });
  }
  
  polygon_selection_interval = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_selection_interval', 
    width: card_size[0], height: card_size[1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.7255, (- 0.8431), (- 0.5294)]),
    fillColor: new util.Color([(- 0.0667), 0.0667, 0.2]),
    opacity: 0.5, depth: -10, interpolate: true,
  });
  
  polygon_5 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_5', 
    width: [0.17, 0.17][0], height: [0.17, 0.17][1],
    ori: 0.0, pos: consReward_pos[0],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color(undefined),
    opacity: 0.5, depth: -11, interpolate: true,
  });
  
  text_selection_interval = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_selection_interval',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: textPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1.0,
    depth: -12.0 
  });
  
  // Initialize components for Routine "reward_presentation"
  reward_presentationClock = new util.Clock();
  // Run 'Begin Experiment' code from code_reward_presentation
  var rewImg, rewPos;
  rewPos = [0, 0];
  rewImg = "stimuli/blank_transparent.png";
  
  card_circ_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_circ_4', units : undefined, 
    image : slotImageLocations[0], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[0], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  card_pent_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_pent_4', units : undefined, 
    image : slotImageLocations[1], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[1], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  card_sqr_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'card_sqr_4', units : undefined, 
    image : slotImageLocations[2], mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : cardPositions[2], size : card_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : rewardImageSize,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });

  if (show_trial_history == true) {
    arrow_3 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'arrow_3', units : undefined, 
      image : 'stimuli/arrow_transparent.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : arrow_loc, size : arrowSize,
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -4.0 
    });
    image_5 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_5', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : consReward_pos[0], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -6.0 
    });
    image_8 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_8', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : consReward_pos[1], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -7.0 
    });
    image_11 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_11', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : consReward_pos[2], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -8.0 
    });
    image_14 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_14', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : consReward_pos[3], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -9.0 
    });
    image_17 = new visual.ImageStim({
      win : psychoJS.window,
      name : 'image_17', units : undefined, 
      image : 'default.png', mask : undefined,
      anchor : 'center',
      ori : 0.0, pos : consReward_pos[4], size : [0.15, 0.15],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -10.0 
    });  
  }
  
  polygon_6 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_6', 
    width: [0.17, 0.17][0], height: [0.17, 0.17][1],
    ori: 0.0, pos: consReward_pos[0],
    anchor: 'center',
    lineWidth: 20.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color(undefined),
    opacity: 0.5, depth: -11, interpolate: true,
  });
  
  text_reward_presentation = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_reward_presentation',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: textPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.0039, 0.0039, (- 1.0)]),  opacity: undefined,
    depth: -12.0 
  });
  
  // Initialize components for Routine "Block_break"
  Block_breakClock = new util.Clock();
  text_block_break = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_block_break',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  var ending_text;
  var alternate_redirect = "http://run.pavlovia.org/janetlchang/fish-task/html" +  "?" + url_params;
  if (redirect_url) { // if the redirect_url available (should be the case for prolific studies)
    if (subject_data.path_id.toUpperCase === "B") { 
      ending_text = '\nYou have successfully completed the task.'+
                    '\n\nYou will now be directed to the next task of the study. Thank you!';
    } else if (subject_data.path_id.toUpperCase === "A") { 
      ending_text = '\nYou have successfully completed the task and this study.';
                    // + 
                    // '\n\nProlific users, your completion code is: C2RO6365'+
                    // '\n\nIn 10 seconds, you will be redirected to Prolific to complete the study.' +
                    // '\n\nIf you are not redirected, copy and paste the following webpage into your browser:' +
                    // '\n\nhttps://app.prolific.com/submissions/complete?cc=C2RO6365'; 
    } else { // if there is no redirect_url available
      ending_text = '\nYou have successfully completed the task.';
      console.log("Redirect URL was not null but not A / B")
      // '\n\nAttention PROLIFIC users: ' + 
      // '\n\nTo complete this study, please complete the "Fishing Game" task if you have not already done so, by going to this link:' + 
      // '\n\n' + alternate_redirect +
      // '\n\nIf you have already done BOTH Slot Machine and Fishing Game tasks, please return to Prolific and send us a message alerting us of your completion to receive your final compensation.' + 
      // '\n\nThank you!'
    } 
  } else { // if there is no redirect_url available
    ending_text = '\nYou have successfully completed the task.';
    console.log("Redirect URL was null")
    // '\n\nAttention PROLIFIC users: ' + 
    // '\n\nTo complete this study, please complete the "Fishing Game" task if you have not already done so, by going to this link:' + 
    // '\n\n' + alternate_redirect +
    // '\n\nIf you have already done BOTH Slot Machine and Fishing Game tasks, please return to Prolific and send us a message alerting us of your completion to receive your final compensation.' + 
    // '\n\nThank you!'
  }
  
  // Initialize components for Routine "End_ins"
  End_insClock = new util.Clock();
  text_end_ins = new visual.TextStim({
  win: psychoJS.window,
  name: 'text_end_ins',
  text: ending_text,
  font: 'Arial',
  units: undefined, 
  pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
  languageStyle: 'LTR',
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
  depth: -1.0 
  });
  
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


//////////////


var _key_resp_welcome_allKeys;
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
    // Run 'Begin Routine' code from code_welcome
    psychoJS.experiment.addData("key_resp_welcome_started", globalClock.getTime());
    
    key_resp_welcome.keys = undefined;
    key_resp_welcome.rt = undefined;
    _key_resp_welcome_allKeys = [];
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(text_welcome);
    welcomeComponents.push(key_resp_welcome);
    
    // Create new url params if non-existent in URL from user input
    if (!url_params || url_params == "") {
      url_params = "path_id=" + subject_data.path_id;
      console.log("This is the new path ID after user input: " + subject_data.path_id)
      console.log("This is the new url_params after user input: " + url_params)
    }

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

    
    // *key_resp_welcome* updates
    if (t >= 0.0 && key_resp_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_welcome.tStart = t;  // (not accounting for frame time here)
      key_resp_welcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_welcome.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_welcome.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_welcome.clearEvents(); });
    }

    if (key_resp_welcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_welcome.getKeys({keyList: [], waitRelease: false});
      _key_resp_welcome_allKeys = _key_resp_welcome_allKeys.concat(theseKeys);
      if (_key_resp_welcome_allKeys.length > 0) {
        key_resp_welcome.keys = _key_resp_welcome_allKeys[_key_resp_welcome_allKeys.length - 1].name;  // just the last key pressed
        key_resp_welcome.rt = _key_resp_welcome_allKeys[_key_resp_welcome_allKeys.length - 1].rt;
        key_resp_welcome.duration = _key_resp_welcome_allKeys[_key_resp_welcome_allKeys.length - 1].duration;
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
      currentLoop.addResponse(key_resp_welcome.corr, level);
    }
    psychoJS.experiment.addData('key_resp_welcome_keys', key_resp_welcome.keys);
    if (typeof key_resp_welcome.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_welcome_rt', key_resp_welcome.rt);
        psychoJS.experiment.addData('key_resp_welcome_duration', key_resp_welcome.duration);
        routineTimer.reset();
        }
    
    key_resp_welcome.stop();
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
var intro_videoComponents;
function intro_videoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro_video' ---
    t = 0;
    intro_videoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    intro_videoComponents = [];
    intro_videoComponents.push(movie);
    
    for (const thisComponent of intro_videoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function intro_videoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro_video' ---
    // get current time
    t = intro_videoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *movie* updates
    if (t >= 0.0 && movie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie.tStart = t;  // (not accounting for frame time here)
      movie.frameNStart = frameN;  // exact frame index
      
      movie.setAutoDraw(true);
      movie.play();
    }

    if (movie.status === PsychoJS.Status.FINISHED) {  // force-end the routine
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
    for (const thisComponent of intro_videoComponents)
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


function intro_videoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro_video' ---
    for (const thisComponent of intro_videoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    movie.stop();
    // the Routine "intro_video" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_instruction1_allKeys;
var instruction1Components;
function instruction1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction1' ---
    t = 0;
    instruction1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_instruction1
    psychoJS.experiment.addData("key_resp_instruction1_started", globalClock.getTime());
    
    key_resp_instruction1.keys = undefined;
    key_resp_instruction1.rt = undefined;
    _key_resp_instruction1_allKeys = [];
    // keep track of which components have finished
    instruction1Components = [];
    instruction1Components.push(text_instruction1);
    instruction1Components.push(key_resp_instruction1);
    
    for (const thisComponent of instruction1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction1' ---
    // get current time
    t = instruction1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instruction1* updates
    if (t >= 0.0 && text_instruction1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instruction1.tStart = t;  // (not accounting for frame time here)
      text_instruction1.frameNStart = frameN;  // exact frame index
      
      text_instruction1.setAutoDraw(true);
    }

    
    // *key_resp_instruction1* updates
    if (t >= 0.0 && key_resp_instruction1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instruction1.tStart = t;  // (not accounting for frame time here)
      key_resp_instruction1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instruction1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instruction1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instruction1.clearEvents(); });
    }

    if (key_resp_instruction1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instruction1.getKeys({keyList: [], waitRelease: false});
      _key_resp_instruction1_allKeys = _key_resp_instruction1_allKeys.concat(theseKeys);
      if (_key_resp_instruction1_allKeys.length > 0) {
        key_resp_instruction1.keys = _key_resp_instruction1_allKeys[_key_resp_instruction1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instruction1.rt = _key_resp_instruction1_allKeys[_key_resp_instruction1_allKeys.length - 1].rt;
        key_resp_instruction1.duration = _key_resp_instruction1_allKeys[_key_resp_instruction1_allKeys.length - 1].duration;
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
    for (const thisComponent of instruction1Components)
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


function instruction1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction1' ---
    for (const thisComponent of instruction1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_instruction1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_instruction1_keys', key_resp_instruction1.keys);
    if (typeof key_resp_instruction1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_instruction1_rt', key_resp_instruction1.rt);
        psychoJS.experiment.addData('key_resp_instruction1_duration', key_resp_instruction1.duration);
        routineTimer.reset();
        }
    
    key_resp_instruction1.stop();
    // the Routine "instruction1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_instruction2_allKeys;
var instruction2Components;
function instruction2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction2' ---
    t = 0;
    instruction2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_instruction2
    psychoJS.experiment.addData("key_resp_instruction2_started", globalClock.getTime());
    
    key_resp_instruction2.keys = undefined;
    key_resp_instruction2.rt = undefined;
    _key_resp_instruction2_allKeys = [];
    // keep track of which components have finished
    instruction2Components = [];
    instruction2Components.push(text_instruction2);
    instruction2Components.push(key_resp_instruction2);
    
    for (const thisComponent of instruction2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction2' ---
    // get current time
    t = instruction2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instruction2* updates
    if (t >= 0.0 && text_instruction2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instruction2.tStart = t;  // (not accounting for frame time here)
      text_instruction2.frameNStart = frameN;  // exact frame index
      
      text_instruction2.setAutoDraw(true);
    }

    
    // *key_resp_instruction2* updates
    if (t >= 0.0 && key_resp_instruction2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instruction2.tStart = t;  // (not accounting for frame time here)
      key_resp_instruction2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instruction2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instruction2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instruction2.clearEvents(); });
    }

    if (key_resp_instruction2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instruction2.getKeys({keyList: [], waitRelease: false});
      _key_resp_instruction2_allKeys = _key_resp_instruction2_allKeys.concat(theseKeys);
      if (_key_resp_instruction2_allKeys.length > 0) {
        key_resp_instruction2.keys = _key_resp_instruction2_allKeys[_key_resp_instruction2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instruction2.rt = _key_resp_instruction2_allKeys[_key_resp_instruction2_allKeys.length - 1].rt;
        key_resp_instruction2.duration = _key_resp_instruction2_allKeys[_key_resp_instruction2_allKeys.length - 1].duration;
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
    for (const thisComponent of instruction2Components)
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


function instruction2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction2' ---
    for (const thisComponent of instruction2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_instruction2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_instruction2_keys', key_resp_instruction2.keys);
    if (typeof key_resp_instruction2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_instruction2_rt', key_resp_instruction2.rt);
        psychoJS.experiment.addData('key_resp_instruction2_duration', key_resp_instruction2.duration);
        routineTimer.reset();
        }
    
    key_resp_instruction2.stop();
    // the Routine "instruction2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_instruction3_allKeys;
var instruction3Components;
function instruction3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction3' ---
    t = 0;
    instruction3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_instruction3
    psychoJS.experiment.addData("key_resp_instruction3_started", globalClock.getTime());
    
    key_resp_instruction3.keys = undefined;
    key_resp_instruction3.rt = undefined;
    _key_resp_instruction3_allKeys = [];
    // keep track of which components have finished
    instruction3Components = [];
    instruction3Components.push(text_instruction3);
    instruction3Components.push(key_resp_instruction3);
    
    for (const thisComponent of instruction3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction3' ---
    // get current time
    t = instruction3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instruction3* updates
    if (t >= 0.0 && text_instruction3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instruction3.tStart = t;  // (not accounting for frame time here)
      text_instruction3.frameNStart = frameN;  // exact frame index
      
      text_instruction3.setAutoDraw(true);
    }

    
    // *key_resp_instruction3* updates
    if (t >= 0.0 && key_resp_instruction3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instruction3.tStart = t;  // (not accounting for frame time here)
      key_resp_instruction3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instruction3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instruction3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instruction3.clearEvents(); });
    }

    if (key_resp_instruction3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instruction3.getKeys({keyList: [], waitRelease: false});
      _key_resp_instruction3_allKeys = _key_resp_instruction3_allKeys.concat(theseKeys);
      if (_key_resp_instruction3_allKeys.length > 0) {
        key_resp_instruction3.keys = _key_resp_instruction3_allKeys[_key_resp_instruction3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instruction3.rt = _key_resp_instruction3_allKeys[_key_resp_instruction3_allKeys.length - 1].rt;
        key_resp_instruction3.duration = _key_resp_instruction3_allKeys[_key_resp_instruction3_allKeys.length - 1].duration;
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
    for (const thisComponent of instruction3Components)
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


function instruction3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction3' ---
    for (const thisComponent of instruction3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_instruction3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_instruction3_keys', key_resp_instruction3.keys);
    if (typeof key_resp_instruction3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_instruction3_rt', key_resp_instruction3.rt);
        psychoJS.experiment.addData('key_resp_instruction3_duration', key_resp_instruction3.duration);
        routineTimer.reset();
        }
    
    key_resp_instruction3.stop();
    // the Routine "instruction3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var _key_resp_instruction4_allKeys;
var instruction4Components;
function instruction4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction3' ---
    t = 0;
    instruction4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_instruction4
    psychoJS.experiment.addData("key_resp_instruction4_started", globalClock.getTime());
    
    key_resp_instruction4.keys = undefined;
    key_resp_instruction4.rt = undefined;
    _key_resp_instruction4_allKeys = [];
    // keep track of which components have finished
    instruction4Components = [];
    instruction4Components.push(text_instruction4);
    instruction4Components.push(key_resp_instruction4);
    
    for (const thisComponent of instruction4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction4' ---
    // get current time
    t = instruction4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instruction4* updates
    if (t >= 0.0 && text_instruction4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instruction4.tStart = t;  // (not accounting for frame time here)
      text_instruction4.frameNStart = frameN;  // exact frame index
      
      text_instruction4.setAutoDraw(true);
    }

    
    // *key_resp_instruction4* updates
    if (t >= 0.0 && key_resp_instruction4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instruction4.tStart = t;  // (not accounting for frame time here)
      key_resp_instruction4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instruction4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instruction4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instruction4.clearEvents(); });
    }

    if (key_resp_instruction4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instruction4.getKeys({keyList: [], waitRelease: false});
      _key_resp_instruction4_allKeys = _key_resp_instruction4_allKeys.concat(theseKeys);
      if (_key_resp_instruction4_allKeys.length > 0) {
        key_resp_instruction4.keys = _key_resp_instruction4_allKeys[_key_resp_instruction4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instruction4.rt = _key_resp_instruction4_allKeys[_key_resp_instruction4_allKeys.length - 1].rt;
        key_resp_instruction4.duration = _key_resp_instruction4_allKeys[_key_resp_instruction4_allKeys.length - 1].duration;
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
    for (const thisComponent of instruction4Components)
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


function instruction4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction4' ---
    for (const thisComponent of instruction4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_instruction4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_instruction4_keys', key_resp_instruction4.keys);
    if (typeof key_resp_instruction4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_instruction4_rt', key_resp_instruction4.rt);
        psychoJS.experiment.addData('key_resp_instruction4_duration', key_resp_instruction4.duration);
        routineTimer.reset();
        }
    
    key_resp_instruction4.stop();
    // the Routine "instruction4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var practice_block;
function practice_blockLoopBegin(practice_blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nPracticeBlocks, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_block'
    });
    psychoJS.experiment.addLoop(practice_block); // add the loop to the experiment
    currentLoop = practice_block;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPracticeBlock of practice_block) {
      // List of things that go into each practice block...
      snapshot = practice_block.getSnapshot();
      practice_blockLoopScheduler.add(importConditions(snapshot));
      practice_blockLoopScheduler.add(practice_resetRoutineBegin(snapshot));
      practice_blockLoopScheduler.add(practice_resetRoutineEachFrame());
      practice_blockLoopScheduler.add(practice_resetRoutineEnd(snapshot));
      const practice_trialsLoopScheduler = new Scheduler(psychoJS);
      practice_blockLoopScheduler.add(practice_trialsLoopBegin(practice_trialsLoopScheduler, snapshot));
      practice_blockLoopScheduler.add(practice_trialsLoopScheduler);
      practice_blockLoopScheduler.add(practice_trialsLoopEnd);
      practice_blockLoopScheduler.add(Block_breakRoutineBegin(snapshot)); // Prints "next day starts" text
      practice_blockLoopScheduler.add(Block_breakRoutineEachFrame());
      practice_blockLoopScheduler.add(Block_breakRoutineEnd(snapshot));
      practice_blockLoopScheduler.add(practice_blockLoopEndIteration(practice_blockLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var nCorr;
var consRewardImgs;
var practice_resetComponents;
var practiceCondition;
var practiceSwitchTrial;
var practice_reward_seqs;

function practice_resetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_reset' ---
    t = 0;
    practice_resetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    nCorr = 0;
    consRewardImgs = ["stimuli/blank_transparent.png", "stimuli/blank_transparent.png", "stimuli/blank_transparent.png", "stimuli/blank_transparent.png", "stimuli/blank_transparent.png"];
    // update component parameters for each repeat
    
    // Run 'Begin Routine' code from code_practice_reset
    // get conditions for this block
    practiceCondition = practiceConditions[0]; // array that provides trial indices at which the winning slot changes
    practiceSwitchTrial = practiceCondition[0]; // upcoming trial at which the winning slot changes
    psychoJS.experiment.addData("practiceCondition", practiceCondition);
    console.log("PracticeCondition: " + practiceCondition)
    console.log("practiceSwitchTrial: " + practiceSwitchTrial)
    if (practiceConditions.length > 1) {
      practiceConditions.shift(); // prep next block's conditions
    }
    // get reward sequences for this block
    practice_reward_seqs = practiceRewardSeqs[0];
    if (practiceRewardSeqs.length > 1){
      practiceRewardSeqs.shift();
      console.log("practiceRewardSeqs shifted")
    }
    psychoJS.experiment.addData("practice_reward_seqs", practice_reward_seqs);
    console.log("This block's practice_reward_seqs: " + practice_reward_seqs)


    // keep track of which components have finished
    practice_resetComponents = [];
    
    for (const thisComponent of practice_resetComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function practice_resetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_reset' ---
    // get current time
    t = practice_resetClock.getTime();
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
    for (const thisComponent of practice_resetComponents)
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
  }
}

function practice_resetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_reset' ---
    for (const thisComponent of practice_resetComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "practice_reset" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}



var practice_trials;
function practice_trialsLoopBegin(practice_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nPracticeTrials, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_trials'
    });
    psychoJS.experiment.addLoop(practice_trials); // add the loop to the experiment
    currentLoop = practice_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_trial of practice_trials) {
      // List of things that go into each practice trial
      snapshot = practice_trials.getSnapshot();
      practice_trialsLoopScheduler.add(importConditions(snapshot));
      practice_trialsLoopScheduler.add(practice_slotsRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(practice_slotsRoutineEachFrame());
      practice_trialsLoopScheduler.add(practice_slotsRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(practice_intervalRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(practice_intervalRoutineEachFrame());
      practice_trialsLoopScheduler.add(practice_intervalRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(practice_rewardsRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(practice_rewardsRoutineEachFrame());
      practice_trialsLoopScheduler.add(practice_rewardsRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(practice_trialsLoopEndIteration(practice_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_trialsLoopEndIteration(scheduler, snapshot) {
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

async function practice_blockLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_block);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function practice_blockLoopEndIteration(scheduler, snapshot) {
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
// Main Blocks and Experimental Trials
var block;
function blockLoopBegin(blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nBlocks, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'block'
    });
    psychoJS.experiment.addLoop(block); // add the loop to the experiment
    currentLoop = block;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of block) {
      console.log("thisBlock: " + thisBlock)
      snapshot = block.getSnapshot();
      blockLoopScheduler.add(importConditions(snapshot));
      blockLoopScheduler.add(reward_resetRoutineBegin(snapshot));
      blockLoopScheduler.add(reward_resetRoutineEachFrame());
      blockLoopScheduler.add(reward_resetRoutineEnd(snapshot));
      const main_trialsLoopScheduler = new Scheduler(psychoJS);
      blockLoopScheduler.add(main_trialsLoopBegin(main_trialsLoopScheduler, snapshot));
      blockLoopScheduler.add(main_trialsLoopScheduler);
      blockLoopScheduler.add(main_trialsLoopEnd);
      blockLoopScheduler.add(Block_breakRoutineBegin(snapshot)); // Prints "next day starts" text
      blockLoopScheduler.add(Block_breakRoutineEachFrame());
      blockLoopScheduler.add(Block_breakRoutineEnd(snapshot));
      blockLoopScheduler.add(blockLoopEndIteration(blockLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

var main_trials;
function main_trialsLoopBegin(main_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    main_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTrials, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'main_trials'
    });
    psychoJS.experiment.addLoop(main_trials); // add the loop to the experiment
    currentLoop = main_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMain_trial of main_trials) {
      snapshot = main_trials.getSnapshot();
      main_trialsLoopScheduler.add(importConditions(snapshot));
      main_trialsLoopScheduler.add(slots_presentationRoutineBegin(snapshot));
      main_trialsLoopScheduler.add(slots_presentationRoutineEachFrame());
      main_trialsLoopScheduler.add(slots_presentationRoutineEnd(snapshot));
      main_trialsLoopScheduler.add(selection_intervalRoutineBegin(snapshot));
      main_trialsLoopScheduler.add(selection_intervalRoutineEachFrame());
      main_trialsLoopScheduler.add(selection_intervalRoutineEnd(snapshot));
      main_trialsLoopScheduler.add(reward_presentationRoutineBegin(snapshot));
      main_trialsLoopScheduler.add(reward_presentationRoutineEachFrame());
      main_trialsLoopScheduler.add(reward_presentationRoutineEnd(snapshot));
      main_trialsLoopScheduler.add(main_trialsLoopEndIteration(main_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function main_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(main_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function main_trialsLoopEndIteration(scheduler, snapshot) {
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
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var textMsg;
var endMsg;
var endTrial;
var _key_resp_practice_slots_allKeys;
var practice_slotsComponents;
function practice_slotsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_slots' ---
    t = 0;
    practice_slotsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from Code_practice_slots
    psychoJS.experiment.addData("practice_trial_started", globalClock.getTime());
    textMsg = ("Total reward: " + nCorr.toString());
    endMsg = " ";
    endTrial = false;
    psychoJS.experiment.addData("practice_trial_num", practice_trials.thisN);
    
    text_practice_slots.setText(textMsg);
    key_resp_practice_slots.keys = undefined;
    // key_resp_practice_slots.keys = [];
    // key_resp_practice_slots.keys = 999;
    key_resp_practice_slots.rt = undefined;
    // key_resp_practice_slots.rt = [];
    _key_resp_practice_slots_allKeys = undefined; 
    // _key_resp_practice_slots_allKeys = [];
    // keep track of which components have finished
    practice_slotsComponents = [];
    practice_slotsComponents.push(card_circ);
    practice_slotsComponents.push(card_pent);
    practice_slotsComponents.push(card_sqr);
    
    if (show_trial_history == true) {
      image.setPos(consReward_pos[0]);
      image.setImage(consRewardImgs[4]);
      image_18.setPos(consReward_pos[1]);
      image_18.setImage(consRewardImgs[3]);
      image_19.setPos(consReward_pos[2]);
      image_19.setImage(consRewardImgs[2]);
      image_20.setPos(consReward_pos[3]);
      image_20.setImage(consRewardImgs[1]);
      image_21.setPos(consReward_pos[4]);
      image_21.setImage(consRewardImgs[0]);
      practice_slotsComponents.push(arrow_4);
      practice_slotsComponents.push(image);
      practice_slotsComponents.push(image_18);
      practice_slotsComponents.push(image_19);
      practice_slotsComponents.push(image_20);
      practice_slotsComponents.push(image_21);
      practice_slotsComponents.push(polygon); // dark grey square marking current trial
    }
    
    practice_slotsComponents.push(text_practice_slots);
    practice_slotsComponents.push(text_practice_slots_2);
    practice_slotsComponents.push(key_resp_practice_slots);
    
    for (const thisComponent of practice_slotsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_slotsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_slots' ---
    // get current time
    t = practice_slotsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from Code_practice_slots
    if (((t > 5.0) && (key_resp_practice_slots.getKeys().length === 0))) {
      endMsg = "Too slow";
      endTrial = true;
      if (((t > 5.5) && (key_resp_practice_slots.getKeys().length === 0))) {
          continueRoutine = false;
      }
    }
    
    // Check if a key is pressed too soon (< 200ms)
    if (t < 0.5 && key_resp_practice_slots.getKeys().length > 0) {
      // do not register key response
      // allow trial to continue
      console.log("Pressed too soon")
      // endMsg = "You pressed too soon";
      // endTrial = true;
    }
    
    // *card_circ* updates
    if (t >= 0.0 && card_circ.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_circ.tStart = t;  // (not accounting for frame time here)
      card_circ.frameNStart = frameN;  // exact frame index
      
      card_circ.setAutoDraw(true);
    }

    
    // *card_pent* updates
    if (t >= 0.0 && card_pent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_pent.tStart = t;  // (not accounting for frame time here)
      card_pent.frameNStart = frameN;  // exact frame index
      
      card_pent.setAutoDraw(true);
    }

    
    // *card_sqr* updates
    if (t >= 0.0 && card_sqr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_sqr.tStart = t;  // (not accounting for frame time here)
      card_sqr.frameNStart = frameN;  // exact frame index
      card_sqr.setAutoDraw(true);
    }

    if (show_trial_history) {
      // *arrow_4* updates
      if (t >= 0.0 && arrow_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_4.tStart = t;  // (not accounting for frame time here)
        arrow_4.frameNStart = frameN;  // exact frame index
        arrow_4.setAutoDraw(true);
      }
      // *image* updates
      if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image.tStart = t;  // (not accounting for frame time here)
        image.frameNStart = frameN;  // exact frame index
        image.setAutoDraw(true);
      }
      // *image_18* updates
      if (t >= 0.0 && image_18.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_18.tStart = t;  // (not accounting for frame time here)
        image_18.frameNStart = frameN;  // exact frame index
        image_18.setAutoDraw(true);
      }
      // *image_19* updates
      if (t >= 0.0 && image_19.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_19.tStart = t;  // (not accounting for frame time here)
        image_19.frameNStart = frameN;  // exact frame index
        image_19.setAutoDraw(true);
      }
      // *image_20* updates
      if (t >= 0.0 && image_20.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_20.tStart = t;  // (not accounting for frame time here)
        image_20.frameNStart = frameN;  // exact frame index
        image_20.setAutoDraw(true);
      }
      // *image_21* updates
      if (t >= 0.0 && image_21.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_21.tStart = t;  // (not accounting for frame time here)
        image_21.frameNStart = frameN;  // exact frame index 
        image_21.setAutoDraw(true);
      }
      // *polygon* updates
      if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        polygon.tStart = t;  // (not accounting for frame time here)
        polygon.frameNStart = frameN;  // exact frame index
        polygon.setAutoDraw(true);
      }
    }
   

    
    // *text_practice_slots* updates
    if (t >= 0.0 && text_practice_slots.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_practice_slots.tStart = t;  // (not accounting for frame time here)
      text_practice_slots.frameNStart = frameN;  // exact frame index
      
      text_practice_slots.setAutoDraw(true);
    }

    
    // *text_practice_slots_2* updates
    if (t >= 0.0 && text_practice_slots_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_practice_slots_2.tStart = t;  // (not accounting for frame time here)
      text_practice_slots_2.frameNStart = frameN;  // exact frame index
      
      text_practice_slots_2.setAutoDraw(true);
    }

    
    if (text_practice_slots_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_practice_slots_2.setText(endMsg, false);
    }

    
    // *key_resp_practice_slots* updates
    if (t >= 0.5 && key_resp_practice_slots.status === PsychoJS.Status.NOT_STARTED) {
      console.log("this is a valid response")
      // keep track of start time/frame for later
      key_resp_practice_slots.tStart = t;  // (not accounting for frame time here)
      key_resp_practice_slots.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_practice_slots.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_practice_slots.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_practice_slots.clearEvents(); });
    }

    if (key_resp_practice_slots.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_practice_slots.getKeys({keyList: ['1', '2', '3', 'left', 'up', 'right'], waitRelease: false});
      _key_resp_practice_slots_allKeys = _key_resp_practice_slots_allKeys.concat(theseKeys);
      if (_key_resp_practice_slots_allKeys.length > 0) {
        key_resp_practice_slots.keys = _key_resp_practice_slots_allKeys[_key_resp_practice_slots_allKeys.length - 1].name;  // just the last key pressed
        key_resp_practice_slots.rt = _key_resp_practice_slots_allKeys[_key_resp_practice_slots_allKeys.length - 1].rt;
        key_resp_practice_slots.duration = _key_resp_practice_slots_allKeys[_key_resp_practice_slots_allKeys.length - 1].duration;
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
    for (const thisComponent of practice_slotsComponents)
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


function practice_slotsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_slots' ---
    for (const thisComponent of practice_slotsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_practice_slots.corr, level);
    }
    
    if (typeof key_resp_practice_slots.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practice_resp_rt', key_resp_practice_slots.rt);
        psychoJS.experiment.addData('practice_resp_duration', key_resp_practice_slots.duration);
        psychoJS.experiment.addData('practice_resp_keys', key_resp_practice_slots.keys);
        routineTimer.reset();
    }
    
    key_resp_practice_slots.stop();
    // the Routine "practice_slots" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    
    return Scheduler.Event.NEXT;
  }
}


var presentationInterval;
var boxPos;
var practice_intervalComponents;
function practice_intervalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_interval' ---
    t = 0;
    practice_intervalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from Code_practice_interval
    if (endTrial) {
        continueRoutine = false;
    }
    
    if (key_resp_practice_slots){
      if (((key_resp_practice_slots.keys === keyboardNumbers[0]) || (key_resp_practice_slots.keys === keyboardArrows[0]))) {
        boxPos = cardPositions[0];
      } else {
        if (((key_resp_practice_slots.keys === keyboardNumbers[1]) || (key_resp_practice_slots.keys === keyboardArrows[1]))) {
            boxPos = cardPositions[1];
        } else {
            if (((key_resp_practice_slots.keys === keyboardNumbers[2]) || (key_resp_practice_slots.keys === keyboardArrows[2]))) {
                boxPos = cardPositions[2];
            }
        }
      }
    }
    
    presentationInterval = util.randchoice(intervalAfterSelection);
    psychoJS.experiment.addData("prac_presentationInterval", presentationInterval);
    
    
    text_practice_interval.setText(textMsg);
    polygon_practice_interval.setPos(boxPos);
    // keep track of which components have finished
    practice_intervalComponents = [];
    practice_intervalComponents.push(card_circ_6);
    practice_intervalComponents.push(card_pent_6);
    practice_intervalComponents.push(card_sqr_6);
    
    if (show_trial_history == true) {
      image_22.setPos(consReward_pos[0]);
      image_22.setImage(consRewardImgs[4]);
      image_23.setPos(consReward_pos[1]);
      image_23.setImage(consRewardImgs[3]);
      image_24.setPos(consReward_pos[2]);
      image_24.setImage(consRewardImgs[2]);
      image_25.setPos(consReward_pos[3]);
      image_25.setImage(consRewardImgs[1]);
      image_26.setPos(consReward_pos[4]);
      image_26.setImage(consRewardImgs[0]);
      practice_intervalComponents.push(arrow_5);
      practice_intervalComponents.push(image_22);
      practice_intervalComponents.push(image_23);
      practice_intervalComponents.push(image_24);
      practice_intervalComponents.push(image_25);
      practice_intervalComponents.push(image_26);
      practice_intervalComponents.push(polygon_2);
    }

    practice_intervalComponents.push(text_practice_interval);
    practice_intervalComponents.push(polygon_practice_interval);
    
    for (const thisComponent of practice_intervalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function practice_intervalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_interval' ---
    // get current time
    t = practice_intervalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *card_circ_6* updates
    if (t >= 0.0 && card_circ_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_circ_6.tStart = t;  // (not accounting for frame time here)
      card_circ_6.frameNStart = frameN;  // exact frame index
      
      card_circ_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (card_circ_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      card_circ_6.setAutoDraw(false);
    }
    
    // *card_pent_6* updates
    if (t >= 0.0 && card_pent_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_pent_6.tStart = t;  // (not accounting for frame time here)
      card_pent_6.frameNStart = frameN;  // exact frame index
      
      card_pent_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (card_pent_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      card_pent_6.setAutoDraw(false);
    }
    
    // *card_sqr_6* updates
    if (t >= 0.0 && card_sqr_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_sqr_6.tStart = t;  // (not accounting for frame time here)
      card_sqr_6.frameNStart = frameN;  // exact frame index
      
      card_sqr_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (card_sqr_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      card_sqr_6.setAutoDraw(false);
    }
    
    if (show_trial_history == true) {
       // *arrow_5* updates
      if (t >= 0.0 && arrow_5.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_5.tStart = t;  // (not accounting for frame time here)
        arrow_5.frameNStart = frameN;  // exact frame index 
        arrow_5.setAutoDraw(true);
      }
      frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (arrow_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        arrow_5.setAutoDraw(false);
      }
      
      // *image_22* updates
      if (t >= 0.0 && image_22.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_22.tStart = t;  // (not accounting for frame time here)
        image_22.frameNStart = frameN;  // exact frame index
        image_22.setAutoDraw(true);
      }
      frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_22.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_22.setAutoDraw(false);
      }
      
      // *image_23* updates
      if (t >= 0.0 && image_23.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_23.tStart = t;  // (not accounting for frame time here)
        image_23.frameNStart = frameN;  // exact frame index 
        image_23.setAutoDraw(true);
      }
      frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_23.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_23.setAutoDraw(false);
      }
    
      // *image_24* updates
      if (t >= 0.0 && image_24.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_24.tStart = t;  // (not accounting for frame time here)
        image_24.frameNStart = frameN;  // exact frame index
        image_24.setAutoDraw(true);
      }
      frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_24.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_24.setAutoDraw(false);
      }
      
      // *image_25* updates
      if (t >= 0.0 && image_25.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_25.tStart = t;  // (not accounting for frame time here)
        image_25.frameNStart = frameN;  // exact frame index  
        image_25.setAutoDraw(true);
      }
      frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_25.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_25.setAutoDraw(false);
      }
      
      // *image_26* updates
      if (t >= 0.0 && image_26.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_26.tStart = t;  // (not accounting for frame time here)
        image_26.frameNStart = frameN;  // exact frame index
        image_26.setAutoDraw(true);
      }
      frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_26.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_26.setAutoDraw(false);
      }

      // *polygon_2* updates
      if (t >= 0.0 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      polygon_2.setAutoDraw(true);
    }
    frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_2.setAutoDraw(false);
    }
    }
   
    
    // *text_practice_interval* updates
    if (t >= 0.0 && text_practice_interval.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_practice_interval.tStart = t;  // (not accounting for frame time here)
      text_practice_interval.frameNStart = frameN;  // exact frame index
      
      text_practice_interval.setAutoDraw(true);
    }

    frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_practice_interval.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_practice_interval.setAutoDraw(false);
    }
    
    
    // *polygon_practice_interval* updates
    if (t >= 0.0 && polygon_practice_interval.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_practice_interval.tStart = t;  // (not accounting for frame time here)
      polygon_practice_interval.frameNStart = frameN;  // exact frame index
      
      polygon_practice_interval.setAutoDraw(true);
    }

    frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_practice_interval.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_practice_interval.setAutoDraw(false);
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
    for (const thisComponent of practice_intervalComponents)
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


function practice_intervalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_interval' ---
    for (const thisComponent of practice_intervalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "practice_interval" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_rewardsComponents;
var practice_reward_seq;
function practice_rewardsRoutineBegin(snapshot) { 
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_rewards' ---
    t = 0;
    practice_rewardsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_practice_rewards
    // keep checking which trial to switch reward sequence assignments
    if (practice_trials.thisN + 1 > practiceSwitchTrial) {
      if (practice_reward_seqs.length > 1){
        practice_reward_seqs.shift(); // shift to the next slot reward sequence
        console.log("practice_reward_seqs shifted")
      }
      if (practiceCondition.length > 1) {
        practiceCondition.shift(); // shift to the next switch trial
        console.log("practiceCondition shifted")
        console.log("practiceCondition: " + practiceCondition)
      }
    }
    // get this trial's slot reward sequence
    practice_reward_seq = practice_reward_seqs[0]; 
    console.log("practice_reward_seq: " + practice_reward_seq)
    psychoJS.experiment.addData("practice_reward_seq: " + practice_reward_seq)
    // get the upcoming switch trial number (Note: trial number, not trial index)
    practiceSwitchTrial = practiceCondition[0];
    console.log("practiceSwitchTrial: " + practiceSwitchTrial)

    if (endTrial) {
        consRewardImgs.push("stimuli/blank_transparent.png");
        if ((consRewardImgs.length > 5)) {
            consRewardImgs.shift();
        }
        continueRoutine = false;
  
    } else { // below code only runs if user presses key input
        currentTrialReward = 0;
        rand_val = Math.random();
        x = util.index(practice_reward_seq, 1);
        y = util.index(practice_reward_seq, 2);
        z = util.index(practice_reward_seq, 3);
        if (((key_resp_practice_slots.keys === keyboardNumbers[x]) || (key_resp_practice_slots.keys === keyboardArrows[x]))) {
            if ((rand_val >= 0.2)) {
                currentTrialReward = 100;
                nCorr += 100;
                rewPos = rewardImagePostions[x];
                rewImg = rewardImageLocations[0];
            } else {
                if ((rand_val >= 0.1)) {
                    currentTrialReward = 10;
                    nCorr += 10;
                    rewPos = rewardImagePostions[x];
                    rewImg = rewardImageLocations[1];
                } else {
                    currentTrialReward = 0;
                    nCorr += 0;
                    rewPos = rewardImagePostions[x];
                    rewImg = rewardImageLocations[2];
                }
            }
        } else {
            if (((key_resp_practice_slots.keys === keyboardNumbers[y]) || (key_resp_practice_slots.keys === keyboardArrows[y]))) {
                if ((rand_val >= 0.2)) {
                    currentTrialReward = 10;
                    nCorr += 10;
                    rewPos = rewardImagePostions[y];
                    rewImg = rewardImageLocations[1];
                } else {
                    if ((rand_val >= 0.1)) {
                        currentTrialReward = 100;
                        nCorr += 100;
                        rewPos = rewardImagePostions[y];
                        rewImg = rewardImageLocations[0];
                    } else {
                        currentTrialReward = 0;
                        nCorr += 0;
                        rewPos = rewardImagePostions[y];
                        rewImg = rewardImageLocations[2];
                    }
                }
            } else {
                if (((key_resp_practice_slots.keys === keyboardNumbers[z]) || (key_resp_practice_slots.keys === keyboardArrows[z]))) {
                    if ((rand_val >= 0.2)) {
                        currentTrialReward = 0;
                        nCorr += 0;
                        rewPos = rewardImagePostions[z];
                        rewImg = rewardImageLocations[2];
                    } else {
                        if ((rand_val >= 0.1)) {
                            currentTrialReward = 10;
                            nCorr += 10;
                            rewPos = rewardImagePostions[z];
                            rewImg = rewardImageLocations[1];
                        } else {
                            currentTrialReward = 100;
                            nCorr += 100;
                            rewPos = rewardImagePostions[z];
                            rewImg = rewardImageLocations[0];
                        }
                    }
                }
            }
        }
        image_27.setPos(rewPos);
        image_27.setImage(rewImg);
        psychoJS.experiment.addData("reward_img", rewImg);
        psychoJS.experiment.addData("cumulative_reward", nCorr);
        psychoJS.experiment.addData("trial_reward", currentTrialReward);
        consRewardImgs.push(rewImg);
        
        if ((consRewardImgs.length > 5)) {
            consRewardImgs.shift();
        }
        
    }
    textMsg = ("Total reward: " + nCorr.toString());
    text_practice_rewards.setText(textMsg);
    
    // keep track of which components have finished
    practice_rewardsComponents = [];
    practice_rewardsComponents.push(card_circ_7);
    practice_rewardsComponents.push(card_pent_7);
    practice_rewardsComponents.push(card_sqr_7);
    practice_rewardsComponents.push(image_27); // reward display
    
    if (show_trial_history == true) {
      image_28.setImage(consRewardImgs[4]);
      image_29.setImage(consRewardImgs[3]);
      image_30.setImage(consRewardImgs[2]);
      image_31.setImage(consRewardImgs[1]);
      image_32.setImage(consRewardImgs[0]);
      practice_rewardsComponents.push(arrow_6);
      practice_rewardsComponents.push(image_28);
      practice_rewardsComponents.push(image_29);
      practice_rewardsComponents.push(image_30);
      practice_rewardsComponents.push(image_31);
      practice_rewardsComponents.push(image_32);
      practice_rewardsComponents.push(polygon_3);
    }
    practice_rewardsComponents.push(text_practice_rewards);
    
    for (const thisComponent of practice_rewardsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_rewardsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_rewards' ---
    // get current time
    t = practice_rewardsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *card_circ_7* updates
    if (t >= 0 && card_circ_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_circ_7.tStart = t;  // (not accounting for frame time here)
      card_circ_7.frameNStart = frameN;  // exact frame index
      
      card_circ_7.setAutoDraw(true);
    }

    frameRemains = 0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (card_circ_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      card_circ_7.setAutoDraw(false);
    }
    
    // *card_pent_7* updates
    if (t >= 0 && card_pent_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_pent_7.tStart = t;  // (not accounting for frame time here)
      card_pent_7.frameNStart = frameN;  // exact frame index
      
      card_pent_7.setAutoDraw(true);
    }

    frameRemains = 0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (card_pent_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      card_pent_7.setAutoDraw(false);
    }
    
    // *card_sqr_7* updates
    if (t >= 0 && card_sqr_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_sqr_7.tStart = t;  // (not accounting for frame time here)
      card_sqr_7.frameNStart = frameN;  // exact frame index
      
      card_sqr_7.setAutoDraw(true);
    }

    frameRemains = 0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (card_sqr_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      card_sqr_7.setAutoDraw(false);
    }
    
    // *image_27* updates
    if (t >= 0 && image_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_27.tStart = t;  // (not accounting for frame time here)
      image_27.frameNStart = frameN;  // exact frame index
      
      image_27.setAutoDraw(true);
    }

    frameRemains = 0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_27.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_27.setAutoDraw(false);
    }
    
    if (show_trial_history == true) {
      // *arrow_6* updates
      if (t >= 0.0 && arrow_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_6.tStart = t;  // (not accounting for frame time here)
        arrow_6.frameNStart = frameN;  // exact frame index
        arrow_6.setAutoDraw(true);
      }
      frameRemains = 0.0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (arrow_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        arrow_6.setAutoDraw(false);
      }
      
      // *image_28* updates
      if (t >= 0.0 && image_28.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_28.tStart = t;  // (not accounting for frame time here)
        image_28.frameNStart = frameN;  // exact frame index 
        image_28.setAutoDraw(true);
      }
      frameRemains = 0.0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_28.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_28.setAutoDraw(false);
      }
      
      // *image_29* updates
      if (t >= 0.0 && image_29.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_29.tStart = t;  // (not accounting for frame time here)
        image_29.frameNStart = frameN;  // exact frame index 
        image_29.setAutoDraw(true);
      }
      frameRemains = 0.0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_29.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_29.setAutoDraw(false);
      }
      
      // *image_30* updates
      if (t >= 0.0 && image_30.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_30.tStart = t;  // (not accounting for frame time here)
        image_30.frameNStart = frameN;  // exact frame index
        image_30.setAutoDraw(true);
      }
      frameRemains = 0.0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_30.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_30.setAutoDraw(false);
      }
      
      // *image_31* updates
      if (t >= 0.0 && image_31.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_31.tStart = t;  // (not accounting for frame time here)
        image_31.frameNStart = frameN;  // exact frame index
        image_31.setAutoDraw(true);
      }
      frameRemains = 0.0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_31.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_31.setAutoDraw(false);
      }
      
      // *image_32* updates
      if (t >= 0.0 && image_32.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_32.tStart = t;  // (not accounting for frame time here)
        image_32.frameNStart = frameN;  // exact frame index 
        image_32.setAutoDraw(true);
      }
      frameRemains = 0.0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_32.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_32.setAutoDraw(false);
      }
      
      // *polygon_3* updates
      if (t >= 0.0 && polygon_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        polygon_3.tStart = t;  // (not accounting for frame time here)
        polygon_3.frameNStart = frameN;  // exact frame index
        polygon_3.setAutoDraw(true);
      }
      frameRemains = 0.0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (polygon_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        polygon_3.setAutoDraw(false);
      }
    }
    
    // *text_practice_rewards* updates
    if (t >= 0 && text_practice_rewards.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_practice_rewards.tStart = t;  // (not accounting for frame time here)
      text_practice_rewards.frameNStart = frameN;  // exact frame index
      
      text_practice_rewards.setAutoDraw(true);
    }

    frameRemains = 0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_practice_rewards.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_practice_rewards.setAutoDraw(false);
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
    for (const thisComponent of practice_rewardsComponents)
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


function practice_rewardsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_rewards' ---
    
    for (const thisComponent of practice_rewardsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
  
    // the Routine "practice_rewards" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_practice_end_allKeys;
var practice_endComponents;
function practice_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_end' ---
    t = 0;
    practice_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_practice_end.keys = undefined;
    key_resp_practice_end.rt = undefined;
    _key_resp_practice_end_allKeys = [];
    // Run 'Begin Routine' code from code_3
    psychoJS.experiment.addData("practice_end_time", globalClock.getTime());
    
    // keep track of which components have finished
    practice_endComponents = [];
    practice_endComponents.push(text_practice_end);
    practice_endComponents.push(key_resp_practice_end);
    
    for (const thisComponent of practice_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_end' ---
    // get current time
    t = practice_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_practice_end* updates
    if (t >= 0.0 && text_practice_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_practice_end.tStart = t;  // (not accounting for frame time here)
      text_practice_end.frameNStart = frameN;  // exact frame index
      
      text_practice_end.setAutoDraw(true);
    }

    
    // *key_resp_practice_end* updates
    if (t >= 0.0 && key_resp_practice_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_practice_end.tStart = t;  // (not accounting for frame time here)
      key_resp_practice_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_practice_end.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_practice_end.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_practice_end.clearEvents(); });
    }

    if (key_resp_practice_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_practice_end.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_practice_end_allKeys = _key_resp_practice_end_allKeys.concat(theseKeys);
      if (_key_resp_practice_end_allKeys.length > 0) {
        key_resp_practice_end.keys = _key_resp_practice_end_allKeys[_key_resp_practice_end_allKeys.length - 1].name;  // just the last key pressed
        key_resp_practice_end.rt = _key_resp_practice_end_allKeys[_key_resp_practice_end_allKeys.length - 1].rt;
        key_resp_practice_end.duration = _key_resp_practice_end_allKeys[_key_resp_practice_end_allKeys.length - 1].duration;
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
    for (const thisComponent of practice_endComponents)
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


function practice_endRoutineEnd(snapshot) {
  return async function () {
    console.log("this code gets run: practice_endRoutineEnd")
    //--- Ending Routine 'practice_end' ---
    for (const thisComponent of practice_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_practice_end.corr, level);
    }
    psychoJS.experiment.addData('practice_end_keys', key_resp_practice_end.keys);
    if (typeof key_resp_practice_end.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practice_end_rt', key_resp_practice_end.rt);
        psychoJS.experiment.addData('practice_end_duration', key_resp_practice_end.duration);
        routineTimer.reset();
        }
    
    key_resp_practice_end.stop();
    // the Routine "practice_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var _key_resp_main_instruction_allKeys;
var Main_InstructionComponents;
function Main_InstructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Main_Instruction' ---
    t = 0;
    Main_InstructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_main_instruction
    psychoJS.experiment.addData("main_instruction_text_started", globalClock.getTime());
    psychoJS.experiment.addData('block_condition',block_option);
    psychoJS.experiment.addData('block_order_indices',block_order);
    
    key_resp_main_instruction.keys = undefined;
    key_resp_main_instruction.rt = undefined;
    _key_resp_main_instruction_allKeys = [];
    // keep track of which components have finished
    Main_InstructionComponents = [];
    Main_InstructionComponents.push(text_main_instruction);
    Main_InstructionComponents.push(key_resp_main_instruction);
    
    for (const thisComponent of Main_InstructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Main_InstructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Main_Instruction' ---
    // get current time
    t = Main_InstructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_main_instruction* updates
    if (t >= 0.0 && text_main_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_main_instruction.tStart = t;  // (not accounting for frame time here)
      text_main_instruction.frameNStart = frameN;  // exact frame index
      
      text_main_instruction.setAutoDraw(true);
    }

    
    // *key_resp_main_instruction* updates
    if (t >= 0.0 && key_resp_main_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_main_instruction.tStart = t;  // (not accounting for frame time here)
      key_resp_main_instruction.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_main_instruction.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_main_instruction.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_main_instruction.clearEvents(); });
    }

    if (key_resp_main_instruction.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_main_instruction.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_main_instruction_allKeys = _key_resp_main_instruction_allKeys.concat(theseKeys);
      if (_key_resp_main_instruction_allKeys.length > 0) {
        key_resp_main_instruction.keys = _key_resp_main_instruction_allKeys[_key_resp_main_instruction_allKeys.length - 1].name;  // just the last key pressed
        key_resp_main_instruction.rt = _key_resp_main_instruction_allKeys[_key_resp_main_instruction_allKeys.length - 1].rt;
        key_resp_main_instruction.duration = _key_resp_main_instruction_allKeys[_key_resp_main_instruction_allKeys.length - 1].duration;
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
    for (const thisComponent of Main_InstructionComponents)
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


function Main_InstructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Main_Instruction' ---
    for (const thisComponent of Main_InstructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_main_instruction.corr, level);
    }
    psychoJS.experiment.addData('main_instruction_keys', key_resp_main_instruction.keys);
    if (typeof key_resp_main_instruction.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('main_instruction_rt', key_resp_main_instruction.rt);
        psychoJS.experiment.addData('main_instruction_duration', key_resp_main_instruction.duration);
        routineTimer.reset();
        }
    
    key_resp_main_instruction.stop();
    // the Routine "Main_Instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var currentCondition;
var reward_resetComponents;
var current_block_index;
var mainSwitchTrial;
var block_counter = 0; // main blocks start at 1
var block_assignment;
function reward_resetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reward_reset' ---
    t = 0;
    reward_resetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    nCorr = 0;
    consRewardImgs = ["stimuli/blank_transparent.png", "stimuli/blank_transparent.png", "stimuli/blank_transparent.png", "stimuli/blank_transparent.png", "stimuli/blank_transparent.png"];
    // psychoJS.experiment.addData("mainConditions", mainConditions); // print all available conditions, in order: Block 1 to 15
    console.log("mainConditions: " + mainConditions)
    // update component parameters for each repeat

    // Run 'Begin Routine' code from code_reward_reset
    // Save block number
    block_counter += 1;
    console.log("Current block: " + block_counter)
    psychoJS.experiment.addData("block_number", block_counter)
    // Determine which block to run this time
    current_block_index = block_order[0]; // take first index of block numbers for this session
    block_assignment = current_block_index + 1;
    console.log("Block assignment: " + block_assignment)
    psychoJS.experiment.addData("block_assignment", block_assignment)

    block_order.shift(); // remove the first index block number to prepare for the next block in the experiment
    // Get conditions for this block
    currentCondition = mainConditions[current_block_index]; // array that provides trial indices at which the winning slot changes
    mainSwitchTrial = currentCondition[0];
    psychoJS.experiment.addData("current_condition", currentCondition);
    console.log("This block currentCondition: " + currentCondition)
    // Get reward sequences for this block
    main_reward_seqs = mainRewardSeqs[current_block_index];
    psychoJS.experiment.addData("main_reward_seqs", main_reward_seqs);
    console.log("This block main_reward_seqs: " + main_reward_seqs)
    
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


var _key_resp_slots_presentation_allKeys;
var slots_presentationComponents;
function slots_presentationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'slots_presentation' ---
    t = 0;
    slots_presentationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from Code_slots_presentation
    psychoJS.experiment.addData("main_trial_started", globalClock.getTime());
    textMsg = ("Total reward: " + nCorr.toString());
    endMsg = " ";
    endTrial = false;
    
    psychoJS.experiment.addData("block_number", block_counter)
    psychoJS.experiment.addData("block_assignment", block_assignment)
    psychoJS.experiment.addData("main_trial_num", main_trials.thisN)
    
    text_slots_presentation.setText(textMsg);
    key_resp_slots_presentation.keys = undefined;
    key_resp_slots_presentation.rt = undefined;
    _key_resp_slots_presentation_allKeys = undefined;
    // keep track of which components have finished
    slots_presentationComponents = [];
    slots_presentationComponents.push(card_circ_3);
    slots_presentationComponents.push(card_pent_3);
    slots_presentationComponents.push(card_sqr_3);
    
    if (show_trial_history == true) {
      image_3.setPos(consReward_pos[0]);
      image_3.setImage(consRewardImgs[4]);
      image_6.setPos(consReward_pos[1]);
      image_6.setImage(consRewardImgs[3]);
      image_9.setPos(consReward_pos[2]);
      image_9.setImage(consRewardImgs[2]);
      image_12.setPos(consReward_pos[3]);
      image_12.setImage(consRewardImgs[1]);
      image_15.setPos(consReward_pos[4]);
      image_15.setImage(consRewardImgs[0]);
      slots_presentationComponents.push(arrow);
      slots_presentationComponents.push(image_3);
      slots_presentationComponents.push(image_6);
      slots_presentationComponents.push(image_9);
      slots_presentationComponents.push(image_12);
      slots_presentationComponents.push(image_15);
      slots_presentationComponents.push(polygon_4);
    }

    slots_presentationComponents.push(text_slots_presentation);
    slots_presentationComponents.push(text_slots_presentation_2);
    slots_presentationComponents.push(key_resp_slots_presentation);
    
    for (const thisComponent of slots_presentationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function slots_presentationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'slots_presentation' ---
    // get current time
    t = slots_presentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from Code_slots_presentation
    if (((t > 5.0) && (key_resp_slots_presentation.getKeys().length === 0))) {
        endMsg = "Too Slow";
        endTrial = true;
        if (((t > 5.5) && (key_resp_slots_presentation.getKeys().length === 0))) {
            continueRoutine = false;
        }
    }

    // Check if a key is pressed too soon (< 200ms)
    if (t < 0.5 && key_resp_slots_presentation.getKeys().length > 0) {
      // do not register key response
      // allow trial to continue
      console.log("Pressed too soon")
      // endMsg = "You pressed too soon";
      // endTrial = true;
    }
    
    // *card_circ_3* updates
    if (t >= 0.0 && card_circ_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_circ_3.tStart = t;  // (not accounting for frame time here)
      card_circ_3.frameNStart = frameN;  // exact frame index
      
      card_circ_3.setAutoDraw(true);
    }

    // *card_pent_3* updates
    if (t >= 0.0 && card_pent_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_pent_3.tStart = t;  // (not accounting for frame time here)
      card_pent_3.frameNStart = frameN;  // exact frame index
      
      card_pent_3.setAutoDraw(true);
    }
    
    // *card_sqr_3* updates
    if (t >= 0.0 && card_sqr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_sqr_3.tStart = t;  // (not accounting for frame time here)
      card_sqr_3.frameNStart = frameN;  // exact frame index
      
      card_sqr_3.setAutoDraw(true);
    }

    if (show_trial_history == true) {
      // *arrow* updates
      if (t >= 0.0 && arrow.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow.tStart = t;  // (not accounting for frame time here)
        arrow.frameNStart = frameN;  // exact frame index 
        arrow.setAutoDraw(true);
      }
      // *image_3* updates
      if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_3.tStart = t;  // (not accounting for frame time here)
        image_3.frameNStart = frameN;  // exact frame index
        image_3.setAutoDraw(true);
      }
      // *image_6* updates
      if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_6.tStart = t;  // (not accounting for frame time here)
        image_6.frameNStart = frameN;  // exact frame index
        image_6.setAutoDraw(true);
      }
      // *image_9* updates
      if (t >= 0.0 && image_9.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_9.tStart = t;  // (not accounting for frame time here)
        image_9.frameNStart = frameN;  // exact frame index 
        image_9.setAutoDraw(true);
      }
      // *image_12* updates
      if (t >= 0.0 && image_12.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_12.tStart = t;  // (not accounting for frame time here)
        image_12.frameNStart = frameN;  // exact frame index
        image_12.setAutoDraw(true);
      }
      // *image_15* updates
      if (t >= 0.0 && image_15.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_15.tStart = t;  // (not accounting for frame time here)
        image_15.frameNStart = frameN;  // exact frame index 
        image_15.setAutoDraw(true);
      }
      // *polygon_4* updates
      if (t >= 0.0 && polygon_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        polygon_4.tStart = t;  // (not accounting for frame time here)
        polygon_4.frameNStart = frameN;  // exact frame index 
        polygon_4.setAutoDraw(true);
      }
    }
    
    // *text_slots_presentation* updates
    if (t >= 0.0 && text_slots_presentation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_slots_presentation.tStart = t;  // (not accounting for frame time here)
      text_slots_presentation.frameNStart = frameN;  // exact frame index

      text_slots_presentation.setAutoDraw(true);
    }

    
    // *text_slots_presentation_2* updates
    if (t >= 0.0 && text_slots_presentation_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_slots_presentation_2.tStart = t;  // (not accounting for frame time here)
      text_slots_presentation_2.frameNStart = frameN;  // exact frame index
      
      text_slots_presentation_2.setAutoDraw(true);
    }

    if (text_slots_presentation_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_slots_presentation_2.setText(endMsg, false);
    }


    
    // *key_resp_slots_presentation* updates
    if (t >= 0.5 && key_resp_slots_presentation.status === PsychoJS.Status.NOT_STARTED) {
      console.log("this is a valid response")
      // keep track of start time/frame for later
      key_resp_slots_presentation.tStart = t;  // (not accounting for frame time here)
      key_resp_slots_presentation.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_slots_presentation.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_slots_presentation.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_slots_presentation.clearEvents(); });
    }

    if (key_resp_slots_presentation.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_slots_presentation.getKeys({keyList: ['1', '2', '3', 'left', 'up', 'right'], waitRelease: false});
      _key_resp_slots_presentation_allKeys = _key_resp_slots_presentation_allKeys.concat(theseKeys);
      if (_key_resp_slots_presentation_allKeys.length > 0) {
        key_resp_slots_presentation.keys = _key_resp_slots_presentation_allKeys[_key_resp_slots_presentation_allKeys.length - 1].name;  // just the last key pressed
        key_resp_slots_presentation.rt = _key_resp_slots_presentation_allKeys[_key_resp_slots_presentation_allKeys.length - 1].rt;
        key_resp_slots_presentation.duration = _key_resp_slots_presentation_allKeys[_key_resp_slots_presentation_allKeys.length - 1].duration;
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
    for (const thisComponent of slots_presentationComponents)
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


function slots_presentationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'slots_presentation' ---
    for (const thisComponent of slots_presentationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_slots_presentation.corr, level);
    }
    psychoJS.experiment.addData('main_trial_keys', key_resp_slots_presentation.keys);
    if (typeof key_resp_slots_presentation.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('main_trial_rt', key_resp_slots_presentation.rt);
        psychoJS.experiment.addData('main_trial_duration', key_resp_slots_presentation.duration);
        psychoJS.experiment.addData('main_trial_keys', key_resp_slots_presentation.keys);
        routineTimer.reset();
        }
    
    key_resp_slots_presentation.stop();
    // the Routine "slots_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var selection_intervalComponents;
function selection_intervalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'selection_interval' ---
    t = 0;
    selection_intervalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from Code_selection_interval
    if (endTrial) {
        continueRoutine = false;
    }
    presentationInterval = util.randchoice(intervalAfterSelection);
    psychoJS.experiment.addData("main_presentationInterval", presentationInterval);
    if (((key_resp_slots_presentation.keys === keyboardNumbers[0]) || (key_resp_slots_presentation.keys === keyboardArrows[0]))) {
        boxPos = cardPositions[0];
    } else {
        if (((key_resp_slots_presentation.keys === keyboardNumbers[1]) || (key_resp_slots_presentation.keys === keyboardArrows[1]))) {
            boxPos = cardPositions[1];
        } else {
            if (((key_resp_slots_presentation.keys === keyboardNumbers[2]) || (key_resp_slots_presentation.keys === keyboardArrows[2]))) {
                boxPos = cardPositions[2];
            }
        }
    }
    
    
    polygon_selection_interval.setPos(boxPos);
    text_selection_interval.setText(textMsg);
    // keep track of which components have finished
    selection_intervalComponents = [];
    selection_intervalComponents.push(card_circ_5);
    selection_intervalComponents.push(card_pent_5);
    selection_intervalComponents.push(card_sqr_5);
    
    if (show_trial_history == true) {
      image_4.setPos(consReward_pos[0]);
      image_4.setImage(consRewardImgs[4]);
      image_7.setPos(consReward_pos[1]);
      image_7.setImage(consRewardImgs[3]);
      image_10.setPos(consReward_pos[2]);
      image_10.setImage(consRewardImgs[2]);
      image_13.setPos(consReward_pos[3]);
      image_13.setImage(consRewardImgs[1]);
      image_16.setPos(consReward_pos[4]);
      image_16.setImage(consRewardImgs[0]);
      selection_intervalComponents.push(arrow_2);
      selection_intervalComponents.push(image_4);
      selection_intervalComponents.push(image_7);
      selection_intervalComponents.push(image_10);
      selection_intervalComponents.push(image_13);
      selection_intervalComponents.push(image_16);
      selection_intervalComponents.push(polygon_5);
    }

    selection_intervalComponents.push(polygon_selection_interval);
    selection_intervalComponents.push(text_selection_interval);
    
    for (const thisComponent of selection_intervalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function selection_intervalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'selection_interval' ---
    // get current time
    t = selection_intervalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *card_circ_5* updates
    if (t >= 0.0 && card_circ_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_circ_5.tStart = t;  // (not accounting for frame time here)
      card_circ_5.frameNStart = frameN;  // exact frame index
      
      card_circ_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (card_circ_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      card_circ_5.setAutoDraw(false);
    }
    
    // *card_pent_5* updates
    if (t >= 0.0 && card_pent_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_pent_5.tStart = t;  // (not accounting for frame time here)
      card_pent_5.frameNStart = frameN;  // exact frame index
      
      card_pent_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (card_pent_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      card_pent_5.setAutoDraw(false);
    }
    
    // *card_sqr_5* updates
    if (t >= 0.0 && card_sqr_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_sqr_5.tStart = t;  // (not accounting for frame time here)
      card_sqr_5.frameNStart = frameN;  // exact frame index
      
      card_sqr_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (card_sqr_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      card_sqr_5.setAutoDraw(false);
    }
    
    if (show_trial_history == true) {
        // *arrow_2* updates
      if (t >= 0.0 && arrow_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_2.tStart = t;  // (not accounting for frame time here)
        arrow_2.frameNStart = frameN;  // exact frame index
        arrow_2.setAutoDraw(true);
      }
      frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (arrow_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        arrow_2.setAutoDraw(false);
      }
      
      // *image_4* updates
      if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_4.tStart = t;  // (not accounting for frame time here)
        image_4.frameNStart = frameN;  // exact frame index 
        image_4.setAutoDraw(true);
      }
      frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_4.setAutoDraw(false);
      }
      
      // *image_7* updates
      if (t >= 0.0 && image_7.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_7.tStart = t;  // (not accounting for frame time here)
        image_7.frameNStart = frameN;  // exact frame index 
        image_7.setAutoDraw(true);
      }
      frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_7.setAutoDraw(false);
      }
      
      // *image_10* updates
      if (t >= 0.0 && image_10.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_10.tStart = t;  // (not accounting for frame time here)
        image_10.frameNStart = frameN;  // exact frame index
        image_10.setAutoDraw(true);
      }
      frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_10.setAutoDraw(false);
      }
      
      // *image_13* updates
      if (t >= 0.0 && image_13.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_13.tStart = t;  // (not accounting for frame time here)
        image_13.frameNStart = frameN;  // exact frame index
        image_13.setAutoDraw(true);
      }
      frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_13.setAutoDraw(false);
      }
      
      // *image_16* updates
      if (t >= 0.0 && image_16.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_16.tStart = t;  // (not accounting for frame time here)
        image_16.frameNStart = frameN;  // exact frame index
        image_16.setAutoDraw(true);
      }
      frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_16.setAutoDraw(false);
      }

      // *polygon_5* updates
      if (t >= 0.0 && polygon_5.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        polygon_5.tStart = t;  // (not accounting for frame time here)
        polygon_5.frameNStart = frameN;  // exact frame index 
        polygon_5.setAutoDraw(true);
      }
      frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (polygon_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        polygon_5.setAutoDraw(false);
      }
    }
    
    
    // *polygon_selection_interval* updates
    if (t >= 0.0 && polygon_selection_interval.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_selection_interval.tStart = t;  // (not accounting for frame time here)
      polygon_selection_interval.frameNStart = frameN;  // exact frame index
      
      polygon_selection_interval.setAutoDraw(true);
    }

    frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_selection_interval.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_selection_interval.setAutoDraw(false);
    }
    
    
    // *text_selection_interval* updates
    if (t >= 0.0 && text_selection_interval.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_selection_interval.tStart = t;  // (not accounting for frame time here)
      text_selection_interval.frameNStart = frameN;  // exact frame index
      
      text_selection_interval.setAutoDraw(true);
    }

    frameRemains = 0.0 + presentationInterval - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_selection_interval.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_selection_interval.setAutoDraw(false);
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
    for (const thisComponent of selection_intervalComponents)
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


function selection_intervalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'selection_interval' ---
    for (const thisComponent of selection_intervalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "selection_interval" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var reward_presentationComponents;
function reward_presentationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reward_presentation' ---
    t = 0;
    reward_presentationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    psychoJS.experiment.addData("reward_presentation_time", rewardPresentationTime);
    
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_reward_presentation
    if (endTrial) {
        consRewardImgs.push("stimuli/blank_transparent.png");
        if ((consRewardImgs.length > 5)) {
            consRewardImgs.shift();
        }
        continueRoutine = false;
    } else {
        if (main_trials.thisN + 1 > mainSwitchTrial) {
          main_reward_seqs.shift(); // shift to the next slot reward sequence
          currentCondition.shift(); // shift to the next switch trial
        }
        // get this trial's slot reward sequence
        main_reward_seq = main_reward_seqs[0]; 
        console.log("main_reward_seq: " + main_reward_seq)
        // get the upcoming switch trial number (Note: trial number, not trial index)
        mainSwitchTrial = currentCondition[0];
        console.log("mainSwitchTrial: " + mainSwitchTrial)
    
        psychoJS.experiment.addData("main_reward_seq", main_reward_seq);
        rand_val = Math.random();
        psychoJS.experiment.addData("reward_rand_val", rand_val);
        currentTrialReward = 0;
        x = util.index(main_reward_seq, 1);
        y = util.index(main_reward_seq, 2);
        z = util.index(main_reward_seq, 3);
        if (((key_resp_slots_presentation.keys === keyboardNumbers[x]) || (key_resp_slots_presentation.keys === keyboardArrows[x]))) {
            if ((rand_val >= 0.2)) {
                currentTrialReward = 100;
                nCorr += 100;
                rewPos = rewardImagePostions[x];
                rewImg = rewardImageLocations[0];
            } else {
                if ((rand_val >= 0.1)) {
                    nCorr += 10;
                    currentTrialReward = 10;
                    rewPos = rewardImagePostions[x];
                    rewImg = rewardImageLocations[1];
                } else {
                    currentTrialReward = 0;
                    nCorr += 0;
                    rewPos = rewardImagePostions[x];
                    rewImg = rewardImageLocations[2];
                }
            }
        } else {
            if (((key_resp_slots_presentation.keys === keyboardNumbers[y]) || (key_resp_slots_presentation.keys === keyboardArrows[y]))) {
                if ((rand_val >= 0.2)) {
                    currentTrialReward = 10;
                    nCorr += 10;
                    rewPos = rewardImagePostions[y];
                    rewImg = rewardImageLocations[1];
                } else {
                    if ((rand_val >= 0.1)) {
                        currentTrialReward = 100;
                        nCorr += 100;
                        rewPos = rewardImagePostions[y];
                        rewImg = rewardImageLocations[0];
                    } else {
                        currentTrialReward = 0;
                        nCorr += 0;
                        rewPos = rewardImagePostions[y];
                        rewImg = rewardImageLocations[2];
                    }
                }
            } else {
                if (((key_resp_slots_presentation.keys === keyboardNumbers[z]) || (key_resp_slots_presentation.keys === keyboardArrows[z]))) {
                    if ((rand_val >= 0.2)) {
                        currentTrialReward = 0;
                        nCorr += 0;
                        rewPos = rewardImagePostions[z];
                        rewImg = rewardImageLocations[2];
                    } else {
                        if ((rand_val >= 0.1)) {
                            currentTrialReward = 10;
                            nCorr += 10;
                            rewPos = rewardImagePostions[z];
                            rewImg = rewardImageLocations[1];
                        } else {
                            currentTrialReward = 100;
                            nCorr += 100;
                            rewPos = rewardImagePostions[z];
                            rewImg = rewardImageLocations[0];
                        }
                    }
                }
            }
        }
        psychoJS.experiment.addData("main_reward_img", rewImg);
        psychoJS.experiment.addData("cumulative_reward", nCorr);
        psychoJS.experiment.addData("current_reward", currentTrialReward);
        consRewardImgs.push(rewImg);
        if ((consRewardImgs.length > 5)) {
            consRewardImgs.shift();
        }
    }
    textMsg = ("Total reward: " + nCorr.toString());
    
    image_2.setPos(rewPos);
    image_2.setImage(rewImg);
    text_reward_presentation.setText(textMsg);
    // keep track of which components have finished
    reward_presentationComponents = [];
    reward_presentationComponents.push(card_circ_4);
    reward_presentationComponents.push(card_pent_4);
    reward_presentationComponents.push(card_sqr_4);
    reward_presentationComponents.push(image_2); // reward display
    
    if (show_trial_history == true) {
      image_5.setImage(consRewardImgs[4]);
      image_8.setImage(consRewardImgs[3]);
      image_11.setImage(consRewardImgs[2]);
      image_14.setImage(consRewardImgs[1]);
      image_17.setImage(consRewardImgs[0]);
      reward_presentationComponents.push(arrow_3);
      reward_presentationComponents.push(image_5);
      reward_presentationComponents.push(image_8);
      reward_presentationComponents.push(image_11);
      reward_presentationComponents.push(image_14);
      reward_presentationComponents.push(image_17);
      reward_presentationComponents.push(polygon_6);
    }
    
    reward_presentationComponents.push(text_reward_presentation);
    
    for (const thisComponent of reward_presentationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function reward_presentationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reward_presentation' ---
    // get current time
    t = reward_presentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *card_circ_4* updates
    if (t >= 0 && card_circ_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_circ_4.tStart = t;  // (not accounting for frame time here)
      card_circ_4.frameNStart = frameN;  // exact frame index
      
      card_circ_4.setAutoDraw(true);
    }

    frameRemains = 0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (card_circ_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      card_circ_4.setAutoDraw(false);
    }
    
    // *card_pent_4* updates
    if (t >= 0 && card_pent_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_pent_4.tStart = t;  // (not accounting for frame time here)
      card_pent_4.frameNStart = frameN;  // exact frame index
      
      card_pent_4.setAutoDraw(true);
    }

    frameRemains = 0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (card_pent_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      card_pent_4.setAutoDraw(false);
    }
    
    // *card_sqr_4* updates
    if (t >= 0 && card_sqr_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      card_sqr_4.tStart = t;  // (not accounting for frame time here)
      card_sqr_4.frameNStart = frameN;  // exact frame index
      
      card_sqr_4.setAutoDraw(true);
    }

    frameRemains = 0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (card_sqr_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      card_sqr_4.setAutoDraw(false);
    }
    
    // *image_2* updates
    if (t >= 0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    frameRemains = 0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
    }

    if (show_trial_history == true) {
      // *arrow_3* updates
      if (t >= 0.0 && arrow_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_3.tStart = t;  // (not accounting for frame time here)
        arrow_3.frameNStart = frameN;  // exact frame index
        arrow_3.setAutoDraw(true);
      }
      frameRemains = 0.0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (arrow_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        arrow_3.setAutoDraw(false);
      }
      
      // *image_5* updates
      if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_5.tStart = t;  // (not accounting for frame time here)
        image_5.frameNStart = frameN;  // exact frame index 
        image_5.setAutoDraw(true);
      }
      frameRemains = 0.0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_5.setAutoDraw(false);
      }
      
      // *image_8* updates
      if (t >= 0.0 && image_8.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_8.tStart = t;  // (not accounting for frame time here)
        image_8.frameNStart = frameN;  // exact frame index
        image_8.setAutoDraw(true);
      }
      frameRemains = 0.0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_8.setAutoDraw(false);
      }
      
      // *image_11* updates
      if (t >= 0.0 && image_11.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_11.tStart = t;  // (not accounting for frame time here)
        image_11.frameNStart = frameN;  // exact frame index
        image_11.setAutoDraw(true);
      }
      frameRemains = 0.0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_11.setAutoDraw(false);
      }
      
      // *image_14* updates
      if (t >= 0.0 && image_14.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_14.tStart = t;  // (not accounting for frame time here)
        image_14.frameNStart = frameN;  // exact frame index
        image_14.setAutoDraw(true);
      }
      frameRemains = 0.0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_14.setAutoDraw(false);
      }
      
      // *image_17* updates
      if (t >= 0.0 && image_17.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_17.tStart = t;  // (not accounting for frame time here)
        image_17.frameNStart = frameN;  // exact frame index
        image_17.setAutoDraw(true);
      }
      frameRemains = 0.0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (image_17.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        image_17.setAutoDraw(false);
      }
      
      // *polygon_6* updates
      if (t >= 0.0 && polygon_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        polygon_6.tStart = t;  // (not accounting for frame time here)
        polygon_6.frameNStart = frameN;  // exact frame index
        polygon_6.setAutoDraw(true);
      }
      frameRemains = 0.0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (polygon_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        polygon_6.setAutoDraw(false);
      }
    }
    
    // *text_reward_presentation* updates
    if (t >= 0 && text_reward_presentation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_reward_presentation.tStart = t;  // (not accounting for frame time here)
      text_reward_presentation.frameNStart = frameN;  // exact frame index
      
      text_reward_presentation.setAutoDraw(true);
    }

    frameRemains = 0 + rewardPresentationTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_reward_presentation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_reward_presentation.setAutoDraw(false);
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
    for (const thisComponent of reward_presentationComponents)
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


function reward_presentationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reward_presentation' ---
    for (const thisComponent of reward_presentationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "reward_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blockMsg;
var Block_breakComponents;
function Block_breakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Block_break' ---
    t = 0;
    Block_breakClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_block_break
    psychoJS.experiment.addData("block_break_started", globalClock.getTime());
    block_reward.push(nCorr);
    blockMsg = (("Total reward for this day: " + nCorr.toString()) + "\n You now have a break of 5 seconds.");
    
    text_block_break.setText(blockMsg);
    // keep track of which components have finished
    Block_breakComponents = [];
    Block_breakComponents.push(text_block_break);
    
    for (const thisComponent of Block_breakComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Block_breakRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Block_break' ---
    // get current time
    t = Block_breakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_block_break* updates
    if (t >= 0.0 && text_block_break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_block_break.tStart = t;  // (not accounting for frame time here)
      text_block_break.frameNStart = frameN;  // exact frame index
      
      text_block_break.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_block_break.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_block_break.setAutoDraw(false);
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
    for (const thisComponent of Block_breakComponents)
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


function Block_breakRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Block_break' ---
    for (const thisComponent of Block_breakComponents) {
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


var End_insComponents;
function End_insRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End_ins' ---
    t = 0;
    End_insClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    End_insComponents = [];
    End_insComponents.push(text_end_ins);
    
    for (const thisComponent of End_insComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function End_insRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End_ins' ---
    // get current time
    t = End_insClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end_ins* updates
    if (t >= 0.0 && text_end_ins.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end_ins.tStart = t;  // (not accounting for frame time here)
      text_end_ins.frameNStart = frameN;  // exact frame index
      
      text_end_ins.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_end_ins.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_end_ins.setAutoDraw(false);
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
    for (const thisComponent of End_insComponents)
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


function End_insRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End_ins' ---
    for (const thisComponent of End_insComponents) {
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
  
  // Run 'End Experiment' code from code
  reward_score = util.randchoice(util.range(block_reward.length));
  reward_amt = (reward_score + 1);
  psychoJS.experiment.addData("reward_amount", reward_amt);
  
  // Save end task time
  end_task_time = util.MonotonicClock.getDateStr();
  psychoJS.experiment.addData("date_end_task", end_task_time);
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  // redirect to the new URL after finished
  if (redirect_url) {
    window.location.replace(redirect_url)
  } else {
    window.location.replace("http://prolific.com")
  }
  
  return Scheduler.Event.QUIT;
}
