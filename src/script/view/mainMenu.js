import { basicVersion, bonusVersion } from '../utils/versions.js'
import { createChoiceBoard } from './choiceBoards.js'
import { getStartingPoints } from '../utils/functions.js'

getStartingPoints();

const startBasicVersionButton = document.getElementById('startBasicVersionButton');
const basicVersionRulesButton = document.getElementById('basicVersionRulesButton');

const startBonusVersionButton = document.getElementById('startBonusVersionButton');
const bonusVersionRulesButton = document.getElementById('bonusVersionRulesButton');

startBasicVersionButton.addEventListener('click', () => createChoiceBoard( basicVersion ));
startBonusVersionButton.addEventListener('click', () => createChoiceBoard( bonusVersion ));
