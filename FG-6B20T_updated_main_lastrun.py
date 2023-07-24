#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.1.3),
    on Mon Jul 24 16:00:39 2023
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# Run 'Before Experiment' code from mainCode
import random
#stimuli locations 
pond_loc = [0,0.25]
boy_loc = [0.75,-0.30]
arrow_loc = [0.50,-0.30]
fish_loc = [[0.2,-0.30],[0,-0.30],[-0.2,-0.30],[-0.4,-0.30],[-0.6,-0.30]]
box_loc = [[-0.32,0.25],[0,0.25],[0.32,0.25]]

#stimuli onset time
fish_interval = [0.5,1.0,1.5]
block_correct = []
msg='doh!'#if this comes up we forgot to update the msg!

#condition folder directory
conditionfolder = ''


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2023.1.3'
expName = 'FishGame'  # from the Builder filename that created this script
expInfo = {
    'participant': '99',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/janet/Desktop/Sinai_Projects/Code/fish-task-6B20T/FG-6B20T_updated_main_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1536, 864], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=(1.0000, 1.0000, 1.0000), colorSpace='rgb',
    backgroundImage='', backgroundFit='none',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "ins1" ---
text_1a = visual.TextStim(win=win, name='text_1a',
    text='The Fishing Game\n\nImagine a boy that goes fishing for 6 days. There are three ponds, each containing fish of different colors: blue, yellow, and green. In each pond the majority of the fish are of a single color.',
    font='Open Sans',
    pos=(0, 0.35), height=0.035, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
ins1_key = keyboard.Keyboard()
ins1_image = visual.ImageStim(
    win=win,
    name='ins1_image', 
    image='stimuli/instruction_image.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.05), size=(0.6, 0.35),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
text_1b = visual.TextStim(win=win, name='text_1b',
    text='Each day, the boy catches 20 fish. He will show you the fish he catches one by one, shown in the black square. Each turn, you will guess from which pond he is fishing. \n\nThe boy will pick a different pond at the beginning of a new day, and he may or may not change ponds within the same day.\n\nPress any key to continue',
    font='Open Sans',
    pos=(0, -0.3), height=0.035, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# --- Initialize components for Routine "ins2" ---
text_2 = visual.TextStim(win=win, name='text_2',
    text='A correct guess is rewarded with $0.50, while an incorrect guess earns $0. \n\nAt the end of the game, you will receive the total bonus from one randomly selected session. The maximum bonus you can receive from this game is $10.\n\nPress any key to continue',
    font='Open Sans',
    pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
ins2_key = keyboard.Keyboard()
inst2_image = visual.ImageStim(
    win=win,
    name='inst2_image', 
    image='stimuli/instruction_image.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.25), size=(0.6, 0.35),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

# --- Initialize components for Routine "ins3" ---
text_3 = visual.TextStim(win=win, name='text_3',
    text='Press LEFT, UP or RIGHT arrows to select your pond.\n\nThe game will start with a quick practice. During the practice, you will see whether you chose the right pond or not. But during the actual game, you will not get this feedback. The game takes approximately 10 minutes to complete.\n\nPress any key to start the practice',
    font='Open Sans',
    pos=(0, -0.2), height=0.045, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
ins3_key = keyboard.Keyboard()
inst3_image = visual.ImageStim(
    win=win,
    name='inst3_image', 
    image='stimuli/instruction_image.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.25), size=(0.6, 0.35),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

# --- Initialize components for Routine "option_practice" ---
pond_label_2 = visual.TextStim(win=win, name='pond_label_2',
    text='',
    font='Open Sans',
    pos=(0, -0.1), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
jars_2 = visual.ImageStim(
    win=win,
    name='jars_2', 
    image='stimuli/jars.PNG', mask=None, anchor='center',
    ori=0.0, pos=pond_loc, size=(1, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=False, depth=-2.0)
arrow_2 = visual.ImageStim(
    win=win,
    name='arrow_2', 
    image='stimuli/arrow.png', mask=None, anchor='center',
    ori=0.0, pos=arrow_loc, size=(0.20, 0.20),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
boy_2 = visual.ImageStim(
    win=win,
    name='boy_2', 
    image='stimuli/clear-jar.PNG', mask=None, anchor='center',
    ori=0.0, pos=boy_loc, size=(0.20, 0.20),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
F1_2 = visual.ImageStim(
    win=win,
    name='F1_2', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[0]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
F2_2 = visual.ImageStim(
    win=win,
    name='F2_2', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[1]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-6.0)
F3_2 = visual.ImageStim(
    win=win,
    name='F3_2', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[2]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
F4_2 = visual.ImageStim(
    win=win,
    name='F4_2', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[3]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-8.0)
F5_2 = visual.ImageStim(
    win=win,
    name='F5_2', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[4]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-9.0)
box_outline_2 = visual.Rect(
    win=win, name='box_outline_2',
    width=(0.20,0.20)[0], height=(0.20,0.20)[1],
    ori=0.0, pos=[fish_loc[0]], anchor='center',
    lineWidth=5.0,     colorSpace='rgb',  lineColor='black', fillColor=None,
    opacity=None, depth=-10.0, interpolate=True)
box_show_2 = visual.Rect(
    win=win, name='box_show_2',
    width=(0.20,0.20)[0], height=(0.20,0.20)[1],
    ori=0.0, pos=[fish_loc[0]], anchor='center',
    lineWidth=5.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=-11.0, interpolate=True)
key_resp_2 = keyboard.Keyboard()

# --- Initialize components for Routine "response_practice" ---
pond_label2_2 = visual.TextStim(win=win, name='pond_label2_2',
    text='',
    font='Open Sans',
    pos=(0, -0.1), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
jars2_2 = visual.ImageStim(
    win=win,
    name='jars2_2', 
    image='stimuli/jars.PNG', mask=None, anchor='center',
    ori=0.0, pos=pond_loc, size=(1, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=False, depth=-2.0)
arrow2_2 = visual.ImageStim(
    win=win,
    name='arrow2_2', 
    image='stimuli/arrow.png', mask=None, anchor='center',
    ori=0.0, pos=arrow_loc, size=(0.20, 0.20),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
boy2_2 = visual.ImageStim(
    win=win,
    name='boy2_2', 
    image='stimuli/clear-jar.PNG', mask=None, anchor='center',
    ori=0.0, pos=boy_loc, size=(0.20, 0.20),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
f1_2 = visual.ImageStim(
    win=win,
    name='f1_2', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[0]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
f2_2 = visual.ImageStim(
    win=win,
    name='f2_2', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[1]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-6.0)
f3_2 = visual.ImageStim(
    win=win,
    name='f3_2', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[2]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
f4_2 = visual.ImageStim(
    win=win,
    name='f4_2', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[3]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-8.0)
f5_2 = visual.ImageStim(
    win=win,
    name='f5_2', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[4]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-9.0)
boxB_2 = visual.Rect(
    win=win, name='boxB_2',
    width=(0.30, 0.45)[0], height=(0.30, 0.45)[1],
    ori=0.0, pos=[box_loc[0]], anchor='center',
    lineWidth=5.0,     colorSpace='rgb',  lineColor=None, fillColor=None,
    opacity=None, depth=-10.0, interpolate=True)
boxY_2 = visual.Rect(
    win=win, name='boxY_2',
    width=(0.30, 0.45)[0], height=(0.30, 0.45)[1],
    ori=0.0, pos=[box_loc[1]], anchor='center',
    lineWidth=5.0,     colorSpace='rgb',  lineColor=None, fillColor=None,
    opacity=None, depth=-11.0, interpolate=True)
boxG_2 = visual.Rect(
    win=win, name='boxG_2',
    width=(0.30, 0.45)[0], height=(0.30, 0.45)[1],
    ori=0.0, pos=[box_loc[2]], anchor='center',
    lineWidth=5.0,     colorSpace='rgb',  lineColor=None, fillColor=None,
    opacity=None, depth=-12.0, interpolate=True)
box_outline2_2 = visual.Rect(
    win=win, name='box_outline2_2',
    width=(0.20,0.20)[0], height=(0.20,0.20)[1],
    ori=0.0, pos=[fish_loc[0]], anchor='center',
    lineWidth=5.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=-13.0, interpolate=True)

# --- Initialize components for Routine "wait" ---
Begin_txt = visual.TextStim(win=win, name='Begin_txt',
    text='You have successfully completed the practice.\n\nNow you are ready to start the game.\n\nPress SPACE key to continue. ',
    font='Open Sans',
    pos=(0, 0), height=0.07, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
ExpStart_key = keyboard.Keyboard()

# --- Initialize components for Routine "reward_reset" ---

# --- Initialize components for Routine "option_fish" ---
# Run 'Begin Experiment' code from mainCode
#if expInfo.get('condition') == '1':
#    conditionfolder = '1condition/Blocks.xlsx'
#
#if expInfo.get('condition') == '2':
#    conditionfolder = '2condition/Blocks.xlsx'
pond_label = visual.TextStim(win=win, name='pond_label',
    text='',
    font='Open Sans',
    pos=(0, -0.1), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
jars = visual.ImageStim(
    win=win,
    name='jars', 
    image='stimuli/jars.PNG', mask=None, anchor='center',
    ori=0.0, pos=pond_loc, size=(1, 0.5),
    color=(1.0000, 1.0000, 1.0000), colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=False, depth=-2.0)
arrow = visual.ImageStim(
    win=win,
    name='arrow', 
    image='stimuli/arrow.png', mask=None, anchor='center',
    ori=0.0, pos=arrow_loc, size=(0.20, 0.20),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
boy = visual.ImageStim(
    win=win,
    name='boy', 
    image='stimuli/clear-jar.PNG', mask=None, anchor='center',
    ori=0.0, pos=boy_loc, size=(0.20, 0.20),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
F1 = visual.ImageStim(
    win=win,
    name='F1', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[0]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
F2 = visual.ImageStim(
    win=win,
    name='F2', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[1]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-6.0)
F3 = visual.ImageStim(
    win=win,
    name='F3', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[2]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
F4 = visual.ImageStim(
    win=win,
    name='F4', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[3]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-8.0)
F5 = visual.ImageStim(
    win=win,
    name='F5', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[4]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-9.0)
box_outline = visual.Rect(
    win=win, name='box_outline',
    width=(0.20,0.20)[0], height=(0.20,0.20)[1],
    ori=0.0, pos=[fish_loc[0]], anchor='center',
    lineWidth=5.0,     colorSpace='rgb',  lineColor='black', fillColor=None,
    opacity=None, depth=-10.0, interpolate=True)
box_show = visual.Rect(
    win=win, name='box_show',
    width=(0.20,0.20)[0], height=(0.20,0.20)[1],
    ori=0.0, pos=[fish_loc[0]], anchor='center',
    lineWidth=5.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=-11.0, interpolate=True)
fish_key_button = keyboard.Keyboard()

# --- Initialize components for Routine "response_fish" ---
jars2 = visual.ImageStim(
    win=win,
    name='jars2', 
    image='stimuli/jars.PNG', mask=None, anchor='center',
    ori=0.0, pos=pond_loc, size=(1, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=False, depth=-1.0)
arrow2 = visual.ImageStim(
    win=win,
    name='arrow2', 
    image='stimuli/arrow.png', mask=None, anchor='center',
    ori=0.0, pos=arrow_loc, size=(0.20, 0.20),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
boy2 = visual.ImageStim(
    win=win,
    name='boy2', 
    image='stimuli/clear-jar.PNG', mask=None, anchor='center',
    ori=0.0, pos=boy_loc, size=(0.20, 0.20),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
f1 = visual.ImageStim(
    win=win,
    name='f1', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[0]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
f2 = visual.ImageStim(
    win=win,
    name='f2', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[1]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
f3 = visual.ImageStim(
    win=win,
    name='f3', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[2]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-6.0)
f4 = visual.ImageStim(
    win=win,
    name='f4', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[3]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
f5 = visual.ImageStim(
    win=win,
    name='f5', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=[fish_loc[4]], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-8.0)
boxB = visual.Rect(
    win=win, name='boxB',
    width=(0.30, 0.45)[0], height=(0.30, 0.45)[1],
    ori=0.0, pos=[box_loc[0]], anchor='center',
    lineWidth=5.0,     colorSpace='rgb',  lineColor=None, fillColor=None,
    opacity=None, depth=-9.0, interpolate=True)
boxY = visual.Rect(
    win=win, name='boxY',
    width=(0.30, 0.45)[0], height=(0.30, 0.45)[1],
    ori=0.0, pos=[box_loc[1]], anchor='center',
    lineWidth=5.0,     colorSpace='rgb',  lineColor=None, fillColor=None,
    opacity=None, depth=-10.0, interpolate=True)
boxG = visual.Rect(
    win=win, name='boxG',
    width=(0.30, 0.45)[0], height=(0.30, 0.45)[1],
    ori=0.0, pos=[box_loc[2]], anchor='center',
    lineWidth=5.0,     colorSpace='rgb',  lineColor=None, fillColor=None,
    opacity=None, depth=-11.0, interpolate=True)
box_outline2 = visual.Rect(
    win=win, name='box_outline2',
    width=(0.20,0.20)[0], height=(0.20,0.20)[1],
    ori=0.0, pos=[fish_loc[0]], anchor='center',
    lineWidth=5.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=-12.0, interpolate=True)

# --- Initialize components for Routine "block_break" ---
breakStart_txt = visual.TextStim(win=win, name='breakStart_txt',
    text='End of the day.\n\nNew day starts soon.',
    font='Open Sans',
    pos=(0, 0), height=0.07, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "reward" ---
reward_txt = visual.TextStim(win=win, name='reward_txt',
    text='Thank you!',
    font='Open Sans',
    pos=(0, 0), height=0.07, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "ins1" ---
continueRoutine = True
# update component parameters for each repeat
ins1_key.keys = []
ins1_key.rt = []
_ins1_key_allKeys = []
# keep track of which components have finished
ins1Components = [text_1a, ins1_key, ins1_image, text_1b]
for thisComponent in ins1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ins1" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_1a* updates
    
    # if text_1a is starting this frame...
    if text_1a.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_1a.frameNStart = frameN  # exact frame index
        text_1a.tStart = t  # local t and not account for scr refresh
        text_1a.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_1a, 'tStartRefresh')  # time at next scr refresh
        # update status
        text_1a.status = STARTED
        text_1a.setAutoDraw(True)
    
    # if text_1a is active this frame...
    if text_1a.status == STARTED:
        # update params
        pass
    
    # *ins1_key* updates
    waitOnFlip = False
    
    # if ins1_key is starting this frame...
    if ins1_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ins1_key.frameNStart = frameN  # exact frame index
        ins1_key.tStart = t  # local t and not account for scr refresh
        ins1_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ins1_key, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'ins1_key.started')
        # update status
        ins1_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(ins1_key.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(ins1_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if ins1_key.status == STARTED and not waitOnFlip:
        theseKeys = ins1_key.getKeys(keyList=None, waitRelease=False)
        _ins1_key_allKeys.extend(theseKeys)
        if len(_ins1_key_allKeys):
            ins1_key.keys = _ins1_key_allKeys[-1].name  # just the last key pressed
            ins1_key.rt = _ins1_key_allKeys[-1].rt
            ins1_key.duration = _ins1_key_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # *ins1_image* updates
    
    # if ins1_image is starting this frame...
    if ins1_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ins1_image.frameNStart = frameN  # exact frame index
        ins1_image.tStart = t  # local t and not account for scr refresh
        ins1_image.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ins1_image, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'ins1_image.started')
        # update status
        ins1_image.status = STARTED
        ins1_image.setAutoDraw(True)
    
    # if ins1_image is active this frame...
    if ins1_image.status == STARTED:
        # update params
        pass
    
    # *text_1b* updates
    
    # if text_1b is starting this frame...
    if text_1b.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_1b.frameNStart = frameN  # exact frame index
        text_1b.tStart = t  # local t and not account for scr refresh
        text_1b.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_1b, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_1b.started')
        # update status
        text_1b.status = STARTED
        text_1b.setAutoDraw(True)
    
    # if text_1b is active this frame...
    if text_1b.status == STARTED:
        # update params
        pass
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ins1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ins1" ---
for thisComponent in ins1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if ins1_key.keys in ['', [], None]:  # No response was made
    ins1_key.keys = None
thisExp.addData('ins1_key.keys',ins1_key.keys)
if ins1_key.keys != None:  # we had a response
    thisExp.addData('ins1_key.rt', ins1_key.rt)
    thisExp.addData('ins1_key.duration', ins1_key.duration)
thisExp.nextEntry()
# the Routine "ins1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "ins2" ---
continueRoutine = True
# update component parameters for each repeat
ins2_key.keys = []
ins2_key.rt = []
_ins2_key_allKeys = []
# keep track of which components have finished
ins2Components = [text_2, ins2_key, inst2_image]
for thisComponent in ins2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ins2" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_2* updates
    
    # if text_2 is starting this frame...
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_2.started')
        # update status
        text_2.status = STARTED
        text_2.setAutoDraw(True)
    
    # if text_2 is active this frame...
    if text_2.status == STARTED:
        # update params
        pass
    
    # *ins2_key* updates
    waitOnFlip = False
    
    # if ins2_key is starting this frame...
    if ins2_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ins2_key.frameNStart = frameN  # exact frame index
        ins2_key.tStart = t  # local t and not account for scr refresh
        ins2_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ins2_key, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'ins2_key.started')
        # update status
        ins2_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(ins2_key.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(ins2_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if ins2_key.status == STARTED and not waitOnFlip:
        theseKeys = ins2_key.getKeys(keyList=None, waitRelease=False)
        _ins2_key_allKeys.extend(theseKeys)
        if len(_ins2_key_allKeys):
            ins2_key.keys = _ins2_key_allKeys[-1].name  # just the last key pressed
            ins2_key.rt = _ins2_key_allKeys[-1].rt
            ins2_key.duration = _ins2_key_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # *inst2_image* updates
    
    # if inst2_image is starting this frame...
    if inst2_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        inst2_image.frameNStart = frameN  # exact frame index
        inst2_image.tStart = t  # local t and not account for scr refresh
        inst2_image.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(inst2_image, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'inst2_image.started')
        # update status
        inst2_image.status = STARTED
        inst2_image.setAutoDraw(True)
    
    # if inst2_image is active this frame...
    if inst2_image.status == STARTED:
        # update params
        pass
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ins2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ins2" ---
for thisComponent in ins2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "ins2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "ins3" ---
continueRoutine = True
# update component parameters for each repeat
ins3_key.keys = []
ins3_key.rt = []
_ins3_key_allKeys = []
# keep track of which components have finished
ins3Components = [text_3, ins3_key, inst3_image]
for thisComponent in ins3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ins3" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_3* updates
    
    # if text_3 is starting this frame...
    if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_3.frameNStart = frameN  # exact frame index
        text_3.tStart = t  # local t and not account for scr refresh
        text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_3.started')
        # update status
        text_3.status = STARTED
        text_3.setAutoDraw(True)
    
    # if text_3 is active this frame...
    if text_3.status == STARTED:
        # update params
        pass
    
    # *ins3_key* updates
    waitOnFlip = False
    
    # if ins3_key is starting this frame...
    if ins3_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ins3_key.frameNStart = frameN  # exact frame index
        ins3_key.tStart = t  # local t and not account for scr refresh
        ins3_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ins3_key, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'ins3_key.started')
        # update status
        ins3_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(ins3_key.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(ins3_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if ins3_key.status == STARTED and not waitOnFlip:
        theseKeys = ins3_key.getKeys(keyList=None, waitRelease=False)
        _ins3_key_allKeys.extend(theseKeys)
        if len(_ins3_key_allKeys):
            ins3_key.keys = _ins3_key_allKeys[-1].name  # just the last key pressed
            ins3_key.rt = _ins3_key_allKeys[-1].rt
            ins3_key.duration = _ins3_key_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # *inst3_image* updates
    
    # if inst3_image is starting this frame...
    if inst3_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        inst3_image.frameNStart = frameN  # exact frame index
        inst3_image.tStart = t  # local t and not account for scr refresh
        inst3_image.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(inst3_image, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'inst3_image.started')
        # update status
        inst3_image.status = STARTED
        inst3_image.setAutoDraw(True)
    
    # if inst3_image is active this frame...
    if inst3_image.status == STARTED:
        # update params
        pass
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ins3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ins3" ---
for thisComponent in ins3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "ins3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
prac_trials = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('1condition/practice.xlsx'),
    seed=None, name='prac_trials')
thisExp.addLoop(prac_trials)  # add the loop to the experiment
thisPrac_trial = prac_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPrac_trial.rgb)
if thisPrac_trial != None:
    for paramName in thisPrac_trial:
        exec('{} = thisPrac_trial[paramName]'.format(paramName))

for thisPrac_trial in prac_trials:
    currentLoop = prac_trials
    # abbreviate parameter names if possible (e.g. rgb = thisPrac_trial.rgb)
    if thisPrac_trial != None:
        for paramName in thisPrac_trial:
            exec('{} = thisPrac_trial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "option_practice" ---
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_2
    fish_int = random.choice(fish_interval)
    
    endMsg = " "
    endTrial = False
    F1_2.setImage(fish1_p)
    F2_2.setImage(fish2_p)
    F3_2.setImage(fish3_p)
    F4_2.setImage(fish4_p)
    F5_2.setImage(fish5_p)
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    option_practiceComponents = [pond_label_2, jars_2, arrow_2, boy_2, F1_2, F2_2, F3_2, F4_2, F5_2, box_outline_2, box_show_2, key_resp_2]
    for thisComponent in option_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "option_practice" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # Run 'Each Frame' code from code_2
        if t > 5.0 and len(key_resp_2.getKeys()) == 0:
            endMsg = 'Too slow'
            endTrial = True
            if t > 5.5 and len(key_resp_2.getKeys()) == 0:
                continueRoutine = False
        
        
        # *pond_label_2* updates
        
        # if pond_label_2 is starting this frame...
        if pond_label_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pond_label_2.frameNStart = frameN  # exact frame index
            pond_label_2.tStart = t  # local t and not account for scr refresh
            pond_label_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pond_label_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            pond_label_2.status = STARTED
            pond_label_2.setAutoDraw(True)
        
        # if pond_label_2 is active this frame...
        if pond_label_2.status == STARTED:
            # update params
            pond_label_2.setText(endMsg, log=False)
        
        # *jars_2* updates
        
        # if jars_2 is starting this frame...
        if jars_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            jars_2.frameNStart = frameN  # exact frame index
            jars_2.tStart = t  # local t and not account for scr refresh
            jars_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(jars_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            jars_2.status = STARTED
            jars_2.setAutoDraw(True)
        
        # if jars_2 is active this frame...
        if jars_2.status == STARTED:
            # update params
            pass
        
        # *arrow_2* updates
        
        # if arrow_2 is starting this frame...
        if arrow_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            arrow_2.frameNStart = frameN  # exact frame index
            arrow_2.tStart = t  # local t and not account for scr refresh
            arrow_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(arrow_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            arrow_2.status = STARTED
            arrow_2.setAutoDraw(True)
        
        # if arrow_2 is active this frame...
        if arrow_2.status == STARTED:
            # update params
            pass
        
        # *boy_2* updates
        
        # if boy_2 is starting this frame...
        if boy_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            boy_2.frameNStart = frameN  # exact frame index
            boy_2.tStart = t  # local t and not account for scr refresh
            boy_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(boy_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            boy_2.status = STARTED
            boy_2.setAutoDraw(True)
        
        # if boy_2 is active this frame...
        if boy_2.status == STARTED:
            # update params
            pass
        
        # *F1_2* updates
        
        # if F1_2 is starting this frame...
        if F1_2.status == NOT_STARTED and tThisFlip >= fish_int-frameTolerance:
            # keep track of start time/frame for later
            F1_2.frameNStart = frameN  # exact frame index
            F1_2.tStart = t  # local t and not account for scr refresh
            F1_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(F1_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'F1_2.started')
            # update status
            F1_2.status = STARTED
            F1_2.setAutoDraw(True)
        
        # if F1_2 is active this frame...
        if F1_2.status == STARTED:
            # update params
            pass
        
        # *F2_2* updates
        
        # if F2_2 is starting this frame...
        if F2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            F2_2.frameNStart = frameN  # exact frame index
            F2_2.tStart = t  # local t and not account for scr refresh
            F2_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(F2_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            F2_2.status = STARTED
            F2_2.setAutoDraw(True)
        
        # if F2_2 is active this frame...
        if F2_2.status == STARTED:
            # update params
            pass
        
        # *F3_2* updates
        
        # if F3_2 is starting this frame...
        if F3_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            F3_2.frameNStart = frameN  # exact frame index
            F3_2.tStart = t  # local t and not account for scr refresh
            F3_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(F3_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            F3_2.status = STARTED
            F3_2.setAutoDraw(True)
        
        # if F3_2 is active this frame...
        if F3_2.status == STARTED:
            # update params
            pass
        
        # *F4_2* updates
        
        # if F4_2 is starting this frame...
        if F4_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            F4_2.frameNStart = frameN  # exact frame index
            F4_2.tStart = t  # local t and not account for scr refresh
            F4_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(F4_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            F4_2.status = STARTED
            F4_2.setAutoDraw(True)
        
        # if F4_2 is active this frame...
        if F4_2.status == STARTED:
            # update params
            pass
        
        # *F5_2* updates
        
        # if F5_2 is starting this frame...
        if F5_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            F5_2.frameNStart = frameN  # exact frame index
            F5_2.tStart = t  # local t and not account for scr refresh
            F5_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(F5_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            F5_2.status = STARTED
            F5_2.setAutoDraw(True)
        
        # if F5_2 is active this frame...
        if F5_2.status == STARTED:
            # update params
            pass
        
        # *box_outline_2* updates
        
        # if box_outline_2 is starting this frame...
        if box_outline_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            box_outline_2.frameNStart = frameN  # exact frame index
            box_outline_2.tStart = t  # local t and not account for scr refresh
            box_outline_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(box_outline_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            box_outline_2.status = STARTED
            box_outline_2.setAutoDraw(True)
        
        # if box_outline_2 is active this frame...
        if box_outline_2.status == STARTED:
            # update params
            pass
        
        # *box_show_2* updates
        
        # if box_show_2 is starting this frame...
        if box_show_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            box_show_2.frameNStart = frameN  # exact frame index
            box_show_2.tStart = t  # local t and not account for scr refresh
            box_show_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(box_show_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'box_show_2.started')
            # update status
            box_show_2.status = STARTED
            box_show_2.setAutoDraw(True)
        
        # if box_show_2 is active this frame...
        if box_show_2.status == STARTED:
            # update params
            pass
        
        # if box_show_2 is stopping this frame...
        if box_show_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > box_show_2.tStartRefresh + fish_int-frameTolerance:
                # keep track of stop time/frame for later
                box_show_2.tStop = t  # not accounting for scr refresh
                box_show_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'box_show_2.stopped')
                # update status
                box_show_2.status = FINISHED
                box_show_2.setAutoDraw(False)
        
        # *key_resp_2* updates
        waitOnFlip = False
        
        # if key_resp_2 is starting this frame...
        if key_resp_2.status == NOT_STARTED and tThisFlip >= fish_int-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_2.started')
            # update status
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['left','up','right'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                key_resp_2.duration = _key_resp_2_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in option_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "option_practice" ---
    for thisComponent in option_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
    prac_trials.addData('key_resp_2.keys',key_resp_2.keys)
    if key_resp_2.keys != None:  # we had a response
        prac_trials.addData('key_resp_2.rt', key_resp_2.rt)
        prac_trials.addData('key_resp_2.duration', key_resp_2.duration)
    # the Routine "option_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "response_practice" ---
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from boxChange_2
    #thisExp.addData('fish_present', fish_present)
    if endTrial:
        continueRoutine = False
    else:
        if key_resp_2.keys == '1' or key_resp_2.keys == 'left':
            time = core.getTime()
            boxB_2.lineColor = 'black'
        elif key_resp_2.keys == '2' or key_resp_2.keys == 'up':
            time = core.getTime()
            boxY_2.lineColor = 'black'
        elif key_resp_2.keys == '3' or key_resp_2.keys == 'right':
            time = core.getTime()
            boxG_2.lineColor = 'black'
    
        #need to update exel for check correct
        if key_resp_2.keys == str(pond_p2) or key_resp_2.keys == pond_p3: #add key compare 
            practice_msg = 'Correct!'
            thisExp.addData('fish_key_2.corr', 1)
        else:
            practice_msg = 'Oops! Wrong pond.'
            thisExp.addData('fish_key_2.corr', 0)
    pond_label2_2.setText(practice_msg)
    f1_2.setImage(fish1_p)
    f2_2.setImage(fish2_p)
    f3_2.setImage(fish3_p)
    f4_2.setImage(fish4_p)
    f5_2.setImage(fish5_p)
    # keep track of which components have finished
    response_practiceComponents = [pond_label2_2, jars2_2, arrow2_2, boy2_2, f1_2, f2_2, f3_2, f4_2, f5_2, boxB_2, boxY_2, boxG_2, box_outline2_2]
    for thisComponent in response_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "response_practice" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 0.8:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *pond_label2_2* updates
        
        # if pond_label2_2 is starting this frame...
        if pond_label2_2.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
            # keep track of start time/frame for later
            pond_label2_2.frameNStart = frameN  # exact frame index
            pond_label2_2.tStart = t  # local t and not account for scr refresh
            pond_label2_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pond_label2_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            pond_label2_2.status = STARTED
            pond_label2_2.setAutoDraw(True)
        
        # if pond_label2_2 is active this frame...
        if pond_label2_2.status == STARTED:
            # update params
            pass
        
        # if pond_label2_2 is stopping this frame...
        if pond_label2_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pond_label2_2.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                pond_label2_2.tStop = t  # not accounting for scr refresh
                pond_label2_2.frameNStop = frameN  # exact frame index
                # update status
                pond_label2_2.status = FINISHED
                pond_label2_2.setAutoDraw(False)
        
        # *jars2_2* updates
        
        # if jars2_2 is starting this frame...
        if jars2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            jars2_2.frameNStart = frameN  # exact frame index
            jars2_2.tStart = t  # local t and not account for scr refresh
            jars2_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(jars2_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            jars2_2.status = STARTED
            jars2_2.setAutoDraw(True)
        
        # if jars2_2 is active this frame...
        if jars2_2.status == STARTED:
            # update params
            pass
        
        # if jars2_2 is stopping this frame...
        if jars2_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > jars2_2.tStartRefresh + 0.8-frameTolerance:
                # keep track of stop time/frame for later
                jars2_2.tStop = t  # not accounting for scr refresh
                jars2_2.frameNStop = frameN  # exact frame index
                # update status
                jars2_2.status = FINISHED
                jars2_2.setAutoDraw(False)
        
        # *arrow2_2* updates
        
        # if arrow2_2 is starting this frame...
        if arrow2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            arrow2_2.frameNStart = frameN  # exact frame index
            arrow2_2.tStart = t  # local t and not account for scr refresh
            arrow2_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(arrow2_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            arrow2_2.status = STARTED
            arrow2_2.setAutoDraw(True)
        
        # if arrow2_2 is active this frame...
        if arrow2_2.status == STARTED:
            # update params
            pass
        
        # if arrow2_2 is stopping this frame...
        if arrow2_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > arrow2_2.tStartRefresh + 0.8-frameTolerance:
                # keep track of stop time/frame for later
                arrow2_2.tStop = t  # not accounting for scr refresh
                arrow2_2.frameNStop = frameN  # exact frame index
                # update status
                arrow2_2.status = FINISHED
                arrow2_2.setAutoDraw(False)
        
        # *boy2_2* updates
        
        # if boy2_2 is starting this frame...
        if boy2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            boy2_2.frameNStart = frameN  # exact frame index
            boy2_2.tStart = t  # local t and not account for scr refresh
            boy2_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(boy2_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            boy2_2.status = STARTED
            boy2_2.setAutoDraw(True)
        
        # if boy2_2 is active this frame...
        if boy2_2.status == STARTED:
            # update params
            pass
        
        # if boy2_2 is stopping this frame...
        if boy2_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > boy2_2.tStartRefresh + 0.8-frameTolerance:
                # keep track of stop time/frame for later
                boy2_2.tStop = t  # not accounting for scr refresh
                boy2_2.frameNStop = frameN  # exact frame index
                # update status
                boy2_2.status = FINISHED
                boy2_2.setAutoDraw(False)
        
        # *f1_2* updates
        
        # if f1_2 is starting this frame...
        if f1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            f1_2.frameNStart = frameN  # exact frame index
            f1_2.tStart = t  # local t and not account for scr refresh
            f1_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(f1_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            f1_2.status = STARTED
            f1_2.setAutoDraw(True)
        
        # if f1_2 is active this frame...
        if f1_2.status == STARTED:
            # update params
            pass
        
        # if f1_2 is stopping this frame...
        if f1_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > f1_2.tStartRefresh + 0.8-frameTolerance:
                # keep track of stop time/frame for later
                f1_2.tStop = t  # not accounting for scr refresh
                f1_2.frameNStop = frameN  # exact frame index
                # update status
                f1_2.status = FINISHED
                f1_2.setAutoDraw(False)
        
        # *f2_2* updates
        
        # if f2_2 is starting this frame...
        if f2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            f2_2.frameNStart = frameN  # exact frame index
            f2_2.tStart = t  # local t and not account for scr refresh
            f2_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(f2_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            f2_2.status = STARTED
            f2_2.setAutoDraw(True)
        
        # if f2_2 is active this frame...
        if f2_2.status == STARTED:
            # update params
            pass
        
        # if f2_2 is stopping this frame...
        if f2_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > f2_2.tStartRefresh + 0.8-frameTolerance:
                # keep track of stop time/frame for later
                f2_2.tStop = t  # not accounting for scr refresh
                f2_2.frameNStop = frameN  # exact frame index
                # update status
                f2_2.status = FINISHED
                f2_2.setAutoDraw(False)
        
        # *f3_2* updates
        
        # if f3_2 is starting this frame...
        if f3_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            f3_2.frameNStart = frameN  # exact frame index
            f3_2.tStart = t  # local t and not account for scr refresh
            f3_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(f3_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            f3_2.status = STARTED
            f3_2.setAutoDraw(True)
        
        # if f3_2 is active this frame...
        if f3_2.status == STARTED:
            # update params
            pass
        
        # if f3_2 is stopping this frame...
        if f3_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > f3_2.tStartRefresh + 0.8-frameTolerance:
                # keep track of stop time/frame for later
                f3_2.tStop = t  # not accounting for scr refresh
                f3_2.frameNStop = frameN  # exact frame index
                # update status
                f3_2.status = FINISHED
                f3_2.setAutoDraw(False)
        
        # *f4_2* updates
        
        # if f4_2 is starting this frame...
        if f4_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            f4_2.frameNStart = frameN  # exact frame index
            f4_2.tStart = t  # local t and not account for scr refresh
            f4_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(f4_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            f4_2.status = STARTED
            f4_2.setAutoDraw(True)
        
        # if f4_2 is active this frame...
        if f4_2.status == STARTED:
            # update params
            pass
        
        # if f4_2 is stopping this frame...
        if f4_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > f4_2.tStartRefresh + 0.8-frameTolerance:
                # keep track of stop time/frame for later
                f4_2.tStop = t  # not accounting for scr refresh
                f4_2.frameNStop = frameN  # exact frame index
                # update status
                f4_2.status = FINISHED
                f4_2.setAutoDraw(False)
        
        # *f5_2* updates
        
        # if f5_2 is starting this frame...
        if f5_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            f5_2.frameNStart = frameN  # exact frame index
            f5_2.tStart = t  # local t and not account for scr refresh
            f5_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(f5_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            f5_2.status = STARTED
            f5_2.setAutoDraw(True)
        
        # if f5_2 is active this frame...
        if f5_2.status == STARTED:
            # update params
            pass
        
        # if f5_2 is stopping this frame...
        if f5_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > f5_2.tStartRefresh + 0.8-frameTolerance:
                # keep track of stop time/frame for later
                f5_2.tStop = t  # not accounting for scr refresh
                f5_2.frameNStop = frameN  # exact frame index
                # update status
                f5_2.status = FINISHED
                f5_2.setAutoDraw(False)
        
        # *boxB_2* updates
        
        # if boxB_2 is starting this frame...
        if boxB_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            boxB_2.frameNStart = frameN  # exact frame index
            boxB_2.tStart = t  # local t and not account for scr refresh
            boxB_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(boxB_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            boxB_2.status = STARTED
            boxB_2.setAutoDraw(True)
        
        # if boxB_2 is active this frame...
        if boxB_2.status == STARTED:
            # update params
            pass
        
        # if boxB_2 is stopping this frame...
        if boxB_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > boxB_2.tStartRefresh + 0.8-frameTolerance:
                # keep track of stop time/frame for later
                boxB_2.tStop = t  # not accounting for scr refresh
                boxB_2.frameNStop = frameN  # exact frame index
                # update status
                boxB_2.status = FINISHED
                boxB_2.setAutoDraw(False)
        
        # *boxY_2* updates
        
        # if boxY_2 is starting this frame...
        if boxY_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            boxY_2.frameNStart = frameN  # exact frame index
            boxY_2.tStart = t  # local t and not account for scr refresh
            boxY_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(boxY_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            boxY_2.status = STARTED
            boxY_2.setAutoDraw(True)
        
        # if boxY_2 is active this frame...
        if boxY_2.status == STARTED:
            # update params
            pass
        
        # if boxY_2 is stopping this frame...
        if boxY_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > boxY_2.tStartRefresh + 0.8-frameTolerance:
                # keep track of stop time/frame for later
                boxY_2.tStop = t  # not accounting for scr refresh
                boxY_2.frameNStop = frameN  # exact frame index
                # update status
                boxY_2.status = FINISHED
                boxY_2.setAutoDraw(False)
        
        # *boxG_2* updates
        
        # if boxG_2 is starting this frame...
        if boxG_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            boxG_2.frameNStart = frameN  # exact frame index
            boxG_2.tStart = t  # local t and not account for scr refresh
            boxG_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(boxG_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            boxG_2.status = STARTED
            boxG_2.setAutoDraw(True)
        
        # if boxG_2 is active this frame...
        if boxG_2.status == STARTED:
            # update params
            pass
        
        # if boxG_2 is stopping this frame...
        if boxG_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > boxG_2.tStartRefresh + 0.8-frameTolerance:
                # keep track of stop time/frame for later
                boxG_2.tStop = t  # not accounting for scr refresh
                boxG_2.frameNStop = frameN  # exact frame index
                # update status
                boxG_2.status = FINISHED
                boxG_2.setAutoDraw(False)
        
        # *box_outline2_2* updates
        
        # if box_outline2_2 is starting this frame...
        if box_outline2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            box_outline2_2.frameNStart = frameN  # exact frame index
            box_outline2_2.tStart = t  # local t and not account for scr refresh
            box_outline2_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(box_outline2_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            box_outline2_2.status = STARTED
            box_outline2_2.setAutoDraw(True)
        
        # if box_outline2_2 is active this frame...
        if box_outline2_2.status == STARTED:
            # update params
            pass
        
        # if box_outline2_2 is stopping this frame...
        if box_outline2_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > box_outline2_2.tStartRefresh + 0.8-frameTolerance:
                # keep track of stop time/frame for later
                box_outline2_2.tStop = t  # not accounting for scr refresh
                box_outline2_2.frameNStop = frameN  # exact frame index
                # update status
                box_outline2_2.status = FINISHED
                box_outline2_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in response_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "response_practice" ---
    for thisComponent in response_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from boxClear_2
    boxB_2.lineColor = 'none'
    boxY_2.lineColor = 'none'
    boxG_2.lineColor = 'none'
    
    #thisExp.addData('fish_interval', fish_int)
    #thisExp.addData('key_time', time)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-0.800000)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'prac_trials'


# --- Prepare to start Routine "wait" ---
continueRoutine = True
# update component parameters for each repeat
ExpStart_key.keys = []
ExpStart_key.rt = []
_ExpStart_key_allKeys = []
# keep track of which components have finished
waitComponents = [Begin_txt, ExpStart_key]
for thisComponent in waitComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "wait" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Begin_txt* updates
    
    # if Begin_txt is starting this frame...
    if Begin_txt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Begin_txt.frameNStart = frameN  # exact frame index
        Begin_txt.tStart = t  # local t and not account for scr refresh
        Begin_txt.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Begin_txt, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Begin_txt.started')
        # update status
        Begin_txt.status = STARTED
        Begin_txt.setAutoDraw(True)
    
    # if Begin_txt is active this frame...
    if Begin_txt.status == STARTED:
        # update params
        pass
    
    # *ExpStart_key* updates
    waitOnFlip = False
    
    # if ExpStart_key is starting this frame...
    if ExpStart_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ExpStart_key.frameNStart = frameN  # exact frame index
        ExpStart_key.tStart = t  # local t and not account for scr refresh
        ExpStart_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ExpStart_key, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'ExpStart_key.started')
        # update status
        ExpStart_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(ExpStart_key.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(ExpStart_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if ExpStart_key.status == STARTED and not waitOnFlip:
        theseKeys = ExpStart_key.getKeys(keyList=['space'], waitRelease=False)
        _ExpStart_key_allKeys.extend(theseKeys)
        if len(_ExpStart_key_allKeys):
            ExpStart_key.keys = _ExpStart_key_allKeys[-1].name  # just the last key pressed
            ExpStart_key.rt = _ExpStart_key_allKeys[-1].rt
            ExpStart_key.duration = _ExpStart_key_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in waitComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "wait" ---
for thisComponent in waitComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if ExpStart_key.keys in ['', [], None]:  # No response was made
    ExpStart_key.keys = None
thisExp.addData('ExpStart_key.keys',ExpStart_key.keys)
if ExpStart_key.keys != None:  # we had a response
    thisExp.addData('ExpStart_key.rt', ExpStart_key.rt)
    thisExp.addData('ExpStart_key.duration', ExpStart_key.duration)
thisExp.nextEntry()
# the Routine "wait" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
block = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('1condition/Blocks.xlsx'),
    seed=None, name='block')
thisExp.addLoop(block)  # add the loop to the experiment
thisBlock = block.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in block:
    currentLoop = block
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "reward_reset" ---
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from rewardReset
    nCorr = 0
    # keep track of which components have finished
    reward_resetComponents = []
    for thisComponent in reward_resetComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "reward_reset" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in reward_resetComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "reward_reset" ---
    for thisComponent in reward_resetComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "reward_reset" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(condsFile),
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "option_fish" ---
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from mainCode
        fish_int = random.choice(fish_interval)
        
        endMsg = " "
        endTrial = False
        F1.setImage(fish1)
        F2.setImage(fish2)
        F3.setImage(fish3)
        F4.setImage(fish4)
        F5.setImage(fish5)
        fish_key_button.keys = []
        fish_key_button.rt = []
        _fish_key_button_allKeys = []
        # keep track of which components have finished
        option_fishComponents = [pond_label, jars, arrow, boy, F1, F2, F3, F4, F5, box_outline, box_show, fish_key_button]
        for thisComponent in option_fishComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "option_fish" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # Run 'Each Frame' code from mainCode
            if t > 5.0 and len(fish_key_button.getKeys()) == 0:
                endMsg = 'Too slow'
                endTrial = True
                if t > 5.2 and len(fish_key_button.getKeys()) == 0:
                    continueRoutine = False
                    
            
            
            # *pond_label* updates
            
            # if pond_label is starting this frame...
            if pond_label.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                pond_label.frameNStart = frameN  # exact frame index
                pond_label.tStart = t  # local t and not account for scr refresh
                pond_label.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(pond_label, 'tStartRefresh')  # time at next scr refresh
                # update status
                pond_label.status = STARTED
                pond_label.setAutoDraw(True)
            
            # if pond_label is active this frame...
            if pond_label.status == STARTED:
                # update params
                pond_label.setText(endMsg, log=False)
            
            # *jars* updates
            
            # if jars is starting this frame...
            if jars.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                jars.frameNStart = frameN  # exact frame index
                jars.tStart = t  # local t and not account for scr refresh
                jars.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(jars, 'tStartRefresh')  # time at next scr refresh
                # update status
                jars.status = STARTED
                jars.setAutoDraw(True)
            
            # if jars is active this frame...
            if jars.status == STARTED:
                # update params
                pass
            
            # *arrow* updates
            
            # if arrow is starting this frame...
            if arrow.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                arrow.frameNStart = frameN  # exact frame index
                arrow.tStart = t  # local t and not account for scr refresh
                arrow.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(arrow, 'tStartRefresh')  # time at next scr refresh
                # update status
                arrow.status = STARTED
                arrow.setAutoDraw(True)
            
            # if arrow is active this frame...
            if arrow.status == STARTED:
                # update params
                pass
            
            # *boy* updates
            
            # if boy is starting this frame...
            if boy.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                boy.frameNStart = frameN  # exact frame index
                boy.tStart = t  # local t and not account for scr refresh
                boy.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(boy, 'tStartRefresh')  # time at next scr refresh
                # update status
                boy.status = STARTED
                boy.setAutoDraw(True)
            
            # if boy is active this frame...
            if boy.status == STARTED:
                # update params
                pass
            
            # *F1* updates
            
            # if F1 is starting this frame...
            if F1.status == NOT_STARTED and tThisFlip >= fish_int-frameTolerance:
                # keep track of start time/frame for later
                F1.frameNStart = frameN  # exact frame index
                F1.tStart = t  # local t and not account for scr refresh
                F1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(F1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'F1.started')
                # update status
                F1.status = STARTED
                F1.setAutoDraw(True)
            
            # if F1 is active this frame...
            if F1.status == STARTED:
                # update params
                pass
            
            # *F2* updates
            
            # if F2 is starting this frame...
            if F2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                F2.frameNStart = frameN  # exact frame index
                F2.tStart = t  # local t and not account for scr refresh
                F2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(F2, 'tStartRefresh')  # time at next scr refresh
                # update status
                F2.status = STARTED
                F2.setAutoDraw(True)
            
            # if F2 is active this frame...
            if F2.status == STARTED:
                # update params
                pass
            
            # *F3* updates
            
            # if F3 is starting this frame...
            if F3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                F3.frameNStart = frameN  # exact frame index
                F3.tStart = t  # local t and not account for scr refresh
                F3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(F3, 'tStartRefresh')  # time at next scr refresh
                # update status
                F3.status = STARTED
                F3.setAutoDraw(True)
            
            # if F3 is active this frame...
            if F3.status == STARTED:
                # update params
                pass
            
            # *F4* updates
            
            # if F4 is starting this frame...
            if F4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                F4.frameNStart = frameN  # exact frame index
                F4.tStart = t  # local t and not account for scr refresh
                F4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(F4, 'tStartRefresh')  # time at next scr refresh
                # update status
                F4.status = STARTED
                F4.setAutoDraw(True)
            
            # if F4 is active this frame...
            if F4.status == STARTED:
                # update params
                pass
            
            # *F5* updates
            
            # if F5 is starting this frame...
            if F5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                F5.frameNStart = frameN  # exact frame index
                F5.tStart = t  # local t and not account for scr refresh
                F5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(F5, 'tStartRefresh')  # time at next scr refresh
                # update status
                F5.status = STARTED
                F5.setAutoDraw(True)
            
            # if F5 is active this frame...
            if F5.status == STARTED:
                # update params
                pass
            
            # *box_outline* updates
            
            # if box_outline is starting this frame...
            if box_outline.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                box_outline.frameNStart = frameN  # exact frame index
                box_outline.tStart = t  # local t and not account for scr refresh
                box_outline.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(box_outline, 'tStartRefresh')  # time at next scr refresh
                # update status
                box_outline.status = STARTED
                box_outline.setAutoDraw(True)
            
            # if box_outline is active this frame...
            if box_outline.status == STARTED:
                # update params
                pass
            
            # *box_show* updates
            
            # if box_show is starting this frame...
            if box_show.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                box_show.frameNStart = frameN  # exact frame index
                box_show.tStart = t  # local t and not account for scr refresh
                box_show.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(box_show, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'box_show.started')
                # update status
                box_show.status = STARTED
                box_show.setAutoDraw(True)
            
            # if box_show is active this frame...
            if box_show.status == STARTED:
                # update params
                pass
            
            # if box_show is stopping this frame...
            if box_show.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > box_show.tStartRefresh + fish_int-frameTolerance:
                    # keep track of stop time/frame for later
                    box_show.tStop = t  # not accounting for scr refresh
                    box_show.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'box_show.stopped')
                    # update status
                    box_show.status = FINISHED
                    box_show.setAutoDraw(False)
            
            # *fish_key_button* updates
            waitOnFlip = False
            
            # if fish_key_button is starting this frame...
            if fish_key_button.status == NOT_STARTED and tThisFlip >= fish_int-frameTolerance:
                # keep track of start time/frame for later
                fish_key_button.frameNStart = frameN  # exact frame index
                fish_key_button.tStart = t  # local t and not account for scr refresh
                fish_key_button.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fish_key_button, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'fish_key_button.started')
                # update status
                fish_key_button.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(fish_key_button.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(fish_key_button.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if fish_key_button.status == STARTED and not waitOnFlip:
                theseKeys = fish_key_button.getKeys(keyList=['left','up','right'], waitRelease=False)
                _fish_key_button_allKeys.extend(theseKeys)
                if len(_fish_key_button_allKeys):
                    fish_key_button.keys = _fish_key_button_allKeys[-1].name  # just the last key pressed
                    fish_key_button.rt = _fish_key_button_allKeys[-1].rt
                    fish_key_button.duration = _fish_key_button_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
                if eyetracker:
                    eyetracker.setConnectionState(False)
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in option_fishComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "option_fish" ---
        for thisComponent in option_fishComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if fish_key_button.keys in ['', [], None]:  # No response was made
            fish_key_button.keys = None
        trials.addData('fish_key_button.keys',fish_key_button.keys)
        if fish_key_button.keys != None:  # we had a response
            trials.addData('fish_key_button.rt', fish_key_button.rt)
            trials.addData('fish_key_button.duration', fish_key_button.duration)
        # the Routine "option_fish" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "response_fish" ---
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from boxChange
        if endTrial:
            continueRoutine = False
        else:
            if fish_key_button.keys == '1' or fish_key_button.keys == 'left':
                time = core.getTime()
                boxB.lineColor = 'black'
            elif fish_key_button.keys == '2' or fish_key_button.keys == 'up':
                time = core.getTime()
                boxY.lineColor = 'black'
            elif fish_key_button.keys == '3' or fish_key_button.keys == 'right':
                time = core.getTime()
                boxG.lineColor = 'black'
        
            if fish_key_button.keys == str(pond2) or fish_key_button.keys == pond3:
                nCorr += 1
                thisExp.addData('fish_key.corr', 1)
            else:
                thisExp.addData('fish_key.corr', 0)
        f1.setImage(fish1)
        f2.setImage(fish2)
        f3.setImage(fish3)
        f4.setImage(fish4)
        f5.setImage(fish5)
        # keep track of which components have finished
        response_fishComponents = [jars2, arrow2, boy2, f1, f2, f3, f4, f5, boxB, boxY, boxG, box_outline2]
        for thisComponent in response_fishComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "response_fish" ---
        routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.5:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *jars2* updates
            
            # if jars2 is starting this frame...
            if jars2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                jars2.frameNStart = frameN  # exact frame index
                jars2.tStart = t  # local t and not account for scr refresh
                jars2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(jars2, 'tStartRefresh')  # time at next scr refresh
                # update status
                jars2.status = STARTED
                jars2.setAutoDraw(True)
            
            # if jars2 is active this frame...
            if jars2.status == STARTED:
                # update params
                pass
            
            # if jars2 is stopping this frame...
            if jars2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > jars2.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    jars2.tStop = t  # not accounting for scr refresh
                    jars2.frameNStop = frameN  # exact frame index
                    # update status
                    jars2.status = FINISHED
                    jars2.setAutoDraw(False)
            
            # *arrow2* updates
            
            # if arrow2 is starting this frame...
            if arrow2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                arrow2.frameNStart = frameN  # exact frame index
                arrow2.tStart = t  # local t and not account for scr refresh
                arrow2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(arrow2, 'tStartRefresh')  # time at next scr refresh
                # update status
                arrow2.status = STARTED
                arrow2.setAutoDraw(True)
            
            # if arrow2 is active this frame...
            if arrow2.status == STARTED:
                # update params
                pass
            
            # if arrow2 is stopping this frame...
            if arrow2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > arrow2.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    arrow2.tStop = t  # not accounting for scr refresh
                    arrow2.frameNStop = frameN  # exact frame index
                    # update status
                    arrow2.status = FINISHED
                    arrow2.setAutoDraw(False)
            
            # *boy2* updates
            
            # if boy2 is starting this frame...
            if boy2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                boy2.frameNStart = frameN  # exact frame index
                boy2.tStart = t  # local t and not account for scr refresh
                boy2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(boy2, 'tStartRefresh')  # time at next scr refresh
                # update status
                boy2.status = STARTED
                boy2.setAutoDraw(True)
            
            # if boy2 is active this frame...
            if boy2.status == STARTED:
                # update params
                pass
            
            # if boy2 is stopping this frame...
            if boy2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > boy2.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    boy2.tStop = t  # not accounting for scr refresh
                    boy2.frameNStop = frameN  # exact frame index
                    # update status
                    boy2.status = FINISHED
                    boy2.setAutoDraw(False)
            
            # *f1* updates
            
            # if f1 is starting this frame...
            if f1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                f1.frameNStart = frameN  # exact frame index
                f1.tStart = t  # local t and not account for scr refresh
                f1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(f1, 'tStartRefresh')  # time at next scr refresh
                # update status
                f1.status = STARTED
                f1.setAutoDraw(True)
            
            # if f1 is active this frame...
            if f1.status == STARTED:
                # update params
                pass
            
            # if f1 is stopping this frame...
            if f1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > f1.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    f1.tStop = t  # not accounting for scr refresh
                    f1.frameNStop = frameN  # exact frame index
                    # update status
                    f1.status = FINISHED
                    f1.setAutoDraw(False)
            
            # *f2* updates
            
            # if f2 is starting this frame...
            if f2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                f2.frameNStart = frameN  # exact frame index
                f2.tStart = t  # local t and not account for scr refresh
                f2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(f2, 'tStartRefresh')  # time at next scr refresh
                # update status
                f2.status = STARTED
                f2.setAutoDraw(True)
            
            # if f2 is active this frame...
            if f2.status == STARTED:
                # update params
                pass
            
            # if f2 is stopping this frame...
            if f2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > f2.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    f2.tStop = t  # not accounting for scr refresh
                    f2.frameNStop = frameN  # exact frame index
                    # update status
                    f2.status = FINISHED
                    f2.setAutoDraw(False)
            
            # *f3* updates
            
            # if f3 is starting this frame...
            if f3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                f3.frameNStart = frameN  # exact frame index
                f3.tStart = t  # local t and not account for scr refresh
                f3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(f3, 'tStartRefresh')  # time at next scr refresh
                # update status
                f3.status = STARTED
                f3.setAutoDraw(True)
            
            # if f3 is active this frame...
            if f3.status == STARTED:
                # update params
                pass
            
            # if f3 is stopping this frame...
            if f3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > f3.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    f3.tStop = t  # not accounting for scr refresh
                    f3.frameNStop = frameN  # exact frame index
                    # update status
                    f3.status = FINISHED
                    f3.setAutoDraw(False)
            
            # *f4* updates
            
            # if f4 is starting this frame...
            if f4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                f4.frameNStart = frameN  # exact frame index
                f4.tStart = t  # local t and not account for scr refresh
                f4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(f4, 'tStartRefresh')  # time at next scr refresh
                # update status
                f4.status = STARTED
                f4.setAutoDraw(True)
            
            # if f4 is active this frame...
            if f4.status == STARTED:
                # update params
                pass
            
            # if f4 is stopping this frame...
            if f4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > f4.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    f4.tStop = t  # not accounting for scr refresh
                    f4.frameNStop = frameN  # exact frame index
                    # update status
                    f4.status = FINISHED
                    f4.setAutoDraw(False)
            
            # *f5* updates
            
            # if f5 is starting this frame...
            if f5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                f5.frameNStart = frameN  # exact frame index
                f5.tStart = t  # local t and not account for scr refresh
                f5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(f5, 'tStartRefresh')  # time at next scr refresh
                # update status
                f5.status = STARTED
                f5.setAutoDraw(True)
            
            # if f5 is active this frame...
            if f5.status == STARTED:
                # update params
                pass
            
            # if f5 is stopping this frame...
            if f5.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > f5.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    f5.tStop = t  # not accounting for scr refresh
                    f5.frameNStop = frameN  # exact frame index
                    # update status
                    f5.status = FINISHED
                    f5.setAutoDraw(False)
            
            # *boxB* updates
            
            # if boxB is starting this frame...
            if boxB.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                boxB.frameNStart = frameN  # exact frame index
                boxB.tStart = t  # local t and not account for scr refresh
                boxB.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(boxB, 'tStartRefresh')  # time at next scr refresh
                # update status
                boxB.status = STARTED
                boxB.setAutoDraw(True)
            
            # if boxB is active this frame...
            if boxB.status == STARTED:
                # update params
                pass
            
            # if boxB is stopping this frame...
            if boxB.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > boxB.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    boxB.tStop = t  # not accounting for scr refresh
                    boxB.frameNStop = frameN  # exact frame index
                    # update status
                    boxB.status = FINISHED
                    boxB.setAutoDraw(False)
            
            # *boxY* updates
            
            # if boxY is starting this frame...
            if boxY.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                boxY.frameNStart = frameN  # exact frame index
                boxY.tStart = t  # local t and not account for scr refresh
                boxY.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(boxY, 'tStartRefresh')  # time at next scr refresh
                # update status
                boxY.status = STARTED
                boxY.setAutoDraw(True)
            
            # if boxY is active this frame...
            if boxY.status == STARTED:
                # update params
                pass
            
            # if boxY is stopping this frame...
            if boxY.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > boxY.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    boxY.tStop = t  # not accounting for scr refresh
                    boxY.frameNStop = frameN  # exact frame index
                    # update status
                    boxY.status = FINISHED
                    boxY.setAutoDraw(False)
            
            # *boxG* updates
            
            # if boxG is starting this frame...
            if boxG.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                boxG.frameNStart = frameN  # exact frame index
                boxG.tStart = t  # local t and not account for scr refresh
                boxG.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(boxG, 'tStartRefresh')  # time at next scr refresh
                # update status
                boxG.status = STARTED
                boxG.setAutoDraw(True)
            
            # if boxG is active this frame...
            if boxG.status == STARTED:
                # update params
                pass
            
            # if boxG is stopping this frame...
            if boxG.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > boxG.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    boxG.tStop = t  # not accounting for scr refresh
                    boxG.frameNStop = frameN  # exact frame index
                    # update status
                    boxG.status = FINISHED
                    boxG.setAutoDraw(False)
            
            # *box_outline2* updates
            
            # if box_outline2 is starting this frame...
            if box_outline2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                box_outline2.frameNStart = frameN  # exact frame index
                box_outline2.tStart = t  # local t and not account for scr refresh
                box_outline2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(box_outline2, 'tStartRefresh')  # time at next scr refresh
                # update status
                box_outline2.status = STARTED
                box_outline2.setAutoDraw(True)
            
            # if box_outline2 is active this frame...
            if box_outline2.status == STARTED:
                # update params
                pass
            
            # if box_outline2 is stopping this frame...
            if box_outline2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > box_outline2.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    box_outline2.tStop = t  # not accounting for scr refresh
                    box_outline2.frameNStop = frameN  # exact frame index
                    # update status
                    box_outline2.status = FINISHED
                    box_outline2.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
                if eyetracker:
                    eyetracker.setConnectionState(False)
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in response_fishComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "response_fish" ---
        for thisComponent in response_fishComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from boxClear
        boxB.lineColor = 'none'
        boxY.lineColor = 'none'
        boxG.lineColor = 'none'
        
        thisExp.addData('fish_interval', fish_int)
        thisExp.addData('key_time', time)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.500000)
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'trials'
    
    
    # --- Prepare to start Routine "block_break" ---
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from reward_list
    block_correct.append(nCorr)
    # keep track of which components have finished
    block_breakComponents = [breakStart_txt]
    for thisComponent in block_breakComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "block_break" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 5.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *breakStart_txt* updates
        
        # if breakStart_txt is starting this frame...
        if breakStart_txt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            breakStart_txt.frameNStart = frameN  # exact frame index
            breakStart_txt.tStart = t  # local t and not account for scr refresh
            breakStart_txt.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(breakStart_txt, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'breakStart_txt.started')
            # update status
            breakStart_txt.status = STARTED
            breakStart_txt.setAutoDraw(True)
        
        # if breakStart_txt is active this frame...
        if breakStart_txt.status == STARTED:
            # update params
            pass
        
        # if breakStart_txt is stopping this frame...
        if breakStart_txt.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > breakStart_txt.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                breakStart_txt.tStop = t  # not accounting for scr refresh
                breakStart_txt.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'breakStart_txt.stopped')
                # update status
                breakStart_txt.status = FINISHED
                breakStart_txt.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in block_breakComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "block_break" ---
    for thisComponent in block_breakComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-5.000000)
# completed 1.0 repeats of 'block'


# --- Prepare to start Routine "reward" ---
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
rewardComponents = [reward_txt]
for thisComponent in rewardComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "reward" ---
routineForceEnded = not continueRoutine
while continueRoutine and routineTimer.getTime() < 2.0:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *reward_txt* updates
    
    # if reward_txt is starting this frame...
    if reward_txt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        reward_txt.frameNStart = frameN  # exact frame index
        reward_txt.tStart = t  # local t and not account for scr refresh
        reward_txt.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(reward_txt, 'tStartRefresh')  # time at next scr refresh
        # update status
        reward_txt.status = STARTED
        reward_txt.setAutoDraw(True)
    
    # if reward_txt is active this frame...
    if reward_txt.status == STARTED:
        # update params
        pass
    
    # if reward_txt is stopping this frame...
    if reward_txt.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > reward_txt.tStartRefresh + 2.0-frameTolerance:
            # keep track of stop time/frame for later
            reward_txt.tStop = t  # not accounting for scr refresh
            reward_txt.frameNStop = frameN  # exact frame index
            # update status
            reward_txt.status = FINISHED
            reward_txt.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in rewardComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "reward" ---
for thisComponent in rewardComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
if routineForceEnded:
    routineTimer.reset()
else:
    routineTimer.addTime(-2.000000)
# Run 'End Experiment' code from reward_pay
final_pay = randchoice(range(len(block_correct)))
blockID = final_pay + 1 

#print("correct per block", block_correct)
#print('block number: ', blockID)
#print('You earned: ', block_correct[final_pay])
thisExp.addData('reward_block_chosen', blockID)

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
