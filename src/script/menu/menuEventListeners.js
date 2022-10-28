import { basicVersion, bonusVersion } from "../utils/versions.js"
import { createStepOneView } from "./../steps/stepOne.js"

const startBasicVersionButton = document.getElementById('startBasicVersionButton')
const basicVersionRulesButton = document.getElementById('basicVersionRulesButton')

const startBonusVersionButton = document.getElementById('startBonusVersionButton')
const bonusVersionRulesButton = document.getElementById('bonusVersionRulesButton')

startBasicVersionButton.addEventListener('click', () => createStepOneView(basicVersion))

startBonusVersionButton.addEventListener('click', () => createStepOneView(bonusVersion))

