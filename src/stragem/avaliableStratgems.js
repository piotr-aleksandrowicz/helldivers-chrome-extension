// Support Weapons SVG's
import anitMaterialRifleLogo from '../assets/supportWeapons/machine-gun.svg';
import autocannonLogo from '../assets/supportWeapons/autocannon.svg';
import expandableAtniTankLogo from '../assets/supportWeapons/expendable.svg';
import flamethrowerLogo from '../assets/supportWeapons/flamethrower.svg';
import heavyMachineGunLogo from '../assets/supportWeapons/heavy-machine-gun.svg';
import machineGunLogo from '../assets/supportWeapons/machine-gun.svg';
import railgunLogo from '../assets/supportWeapons/railgun.svg';
import recoillesRifleLogo from '../assets/supportWeapons/recoilles.svg';
import spearLogo from '../assets/supportWeapons/spear.svg';
import stalwartLogo from '../assets/supportWeapons/stalwart.svg';
// Orbital Weapons SVG's
import gatlingBarrageLogo from '../assets/supportWeapons/orbital-gatling-barrage.svg';
import airbustStrikeLogo from '../assets/supportWeapons/orbital-airbust-strike.svg';
import hm120HeBarrageLogo from '../assets/supportWeapons/orbital-120hm-he-barrage.svg';
import hm380HeBarrageLogo from '../assets/supportWeapons/orbital-380hm-he-barrage.svg';
import walkingBarrageLogo from '../assets/supportWeapons/orbital-walking-barrage.svg';
import laserLogo from '../assets/supportWeapons/orbital-laser.svg';
import railcannonStrikeLogo from '../assets/supportWeapons/orbital-railcannon-strike.svg';
// Hangar SVG's
import eagleStrafingRunLogo from '../assets/supportWeapons/eagle-strafing-run.svg';
import eagleAirstrikeLogo from '../assets/supportWeapons/eagle-airstrike.svg';
import eagleClusterBombLogo from '../assets/supportWeapons/eagle-cluster-bomb.svg';
import eagleNapalmAirstrikeLogo from '../assets/supportWeapons/eagle-napalm-airstrike.svg';
import eagleSmokeStrikeLogo from '../assets/supportWeapons/eagle-smoke-strike.svg';
import eagle110mmRocketPodsLogo from '../assets/supportWeapons/eagle-110mm-rocket-pods.svg';
import eagle500kgBombLogo from '../assets/supportWeapons/eagle-500kg-bomb.svg';
import jumpPackLogo from '../assets/supportWeapons/jump-pack.svg';
//Bridge SVG's
import precisionStrikeLogo from '../assets/supportWeapons/orbital-precision-strike.svg';
import gasStrikeLogo from '../assets/supportWeapons/orbital-gas-strike.svg';
import emsStrikeLogo from '../assets/supportWeapons/orbital-ems-strike.svg';
import smokeStrikeLogo from '../assets/supportWeapons/orbital-smoke-strike.svg';
import hmgEmplacementLogo from '../assets/supportWeapons/hmg-emplacement.svg';
import shieldGeneratorRelayLogo from '../assets/supportWeapons/shield-generator-relay.svg';
import teslaTowerLogo from '../assets/supportWeapons/tesla-tower.svg';
// Engineering Bay SVG's
import antiPersonnelMinefieldLogo from '../assets/supportWeapons/anti-personnel-minefield.svg';
import supplyPackLogo from '../assets/supportWeapons/supply-pack.svg';
import grenadeLauncherLogo from '../assets/supportWeapons/grenade-launcher.svg';
import laserCanonLogo from '../assets/supportWeapons/laser-canon.svg';
import indendiaryMinesLogo from '../assets/supportWeapons/incendiary-mines.svg';
import guardDogRoverLogo from '../assets/supportWeapons/guard-dog-rover.svg';
import ballisticShieldBackpackLogo from '../assets/supportWeapons/ballistic-shield-backpack.svg';
import arcThrowerLogo from '../assets/supportWeapons/arc-thrower.svg';
import quasarCannonLogo from '../assets/supportWeapons/quasar-cannon.svg';
import shieldGeneratorPackLogo from '../assets/supportWeapons/shield-generator-pack.svg';
// Robotics Workshop SVG's
import machineGunSentryLogo from '../assets/supportWeapons/machine-gun-sentry.svg';
import gatlingSentryLogo from '../assets/supportWeapons/gatling-sentry.svg';
import mortarSentryLogo from '../assets/supportWeapons/mortar-sentry.svg';
import guardDogLogo from '../assets/supportWeapons/guard-dog.svg';
import autocannonSentryLogo from '../assets/supportWeapons/autocannon-sentry.svg';
import rocketSentryLogo from '../assets/supportWeapons/rocket-sentry.svg';
import emsMortarSentryLogo from '../assets/supportWeapons/ems-mortar-sentry.svg';
import patriotExosuitLogo from '../assets/supportWeapons/patriot-exosuit.svg';
// Mission Stratagems SVG's
import reinforceLogo from '../assets/supportWeapons/reinforce.svg';
import sosBeaconLogo from '../assets/supportWeapons/sos-beacon.svg';
import resupplyLogo from '../assets/supportWeapons/resupply.svg';
import superEarthFlagLogo from '../assets/supportWeapons/super-earth-flag.svg';
import uploadDataLogo from '../assets/supportWeapons/upload-data.svg';
import hellbombLogo from '../assets/supportWeapons/hellbomb.svg';

// Types
const supportWeaponsType = { value: 'supportWeapons', label: 'Support Weapons' };
const orbitalCannonsType = { value: 'orbitalCannons', label: 'Orbital Cannons' };
const hangarType = { value: 'hangar', label: 'Hangar' };
const bridgeType = { value: 'bridge', label: 'Bridge' };
const engineeringBayType = { value: 'engineeringBay', label: 'Engineering Bay' };
const roboticsWorkshopType = { value: 'roboticsWorkshopType', label: 'Robotics Workshop' };
const missionType = { value: 'mission', label: 'Mission Stratagems' };

// Support Weapons
const machineGun = ['arrowDown','arrowLeft','arrowDown','arrowUp','arrowRight'];
const antiMaterialRifle = ['arrowDown','arrowLeft','arrowRight','arrowUp','arrowDown'];
const stalwart = ['arrowDown','arrowLeft','arrowDown','arrowUp','arrowUp','arrowLeft'];
const expendableAntiTank = ['arrowDown','arrowDown','arrowLeft','arrowUp','arrowRight'];
const recoillesRifle = ['arrowDown','arrowLeft','arrowRight','arrowRight','arrowLeft'];
const flamethrower = ['arrowDown','arrowLeft','arrowUp','arrowDown','arrowUp'];
const autocannon = ['arrowDown','arrowLeft','arrowDown','arrowUp','arrowUp','arrowLeft'];
const heavyMachineGun = ['arrowDown','arrowLeft','arrowUp','arrowDown','arrowDown'];
const railgun = ['arrowDown','arrowRight','arrowDown','arrowUp','arrowLeft', 'arrowRight'];
const spear = ['arrowDown','arrowDown','arrowUp','arrowDown','arrowDown'];

// Orbital Cannons
const gatlingBarrage = ['arrowRight','arrowDown','arrowLeft','arrowUp','arrowUp'];
const airbustStrike = ['arrowRight','arrowRight','arrowRight'];
const hm120HeBarrage = ['arrowRight','arrowRight','arrowDown', 'arrowLeft', 'arrowRight', 'arrowDown'];
const hm380HeBarrage = ['arrowRight','arrowDown','arrowUp', 'arrowUp', 'arrowLeft', 'arrowDown', 'arrowDown'];
const walkingBarrage = ['arrowRight','arrowDown','arrowRight', 'arrowDown', 'arrowRight', 'arrowDown'];
const laser = ['arrowRight','arrowDown','arrowUp', 'arrowRight', 'arrowDown'];
const railcannonStrike = ['arrowRight','arrowUp','arrowDown', 'arrowDown', 'arrowRight'];

//Hnagar
const eagleStrafingRun = ['arrowUp','arrowRight','arrowRight'];
const eagleAirstrike = ['arrowUp','arrowRight','arrowDown', 'arrowRight'];
const eagleClusterBomb = ['arrowUp','arrowRight','arrowDown', 'arrowDown', 'arrowRight'];
const eagleNapalmAirstrike = ['arrowUp','arrowRight','arrowDown', 'arrowUp'];
const eagleSmokeStrike = ['arrowUp','arrowRight','arrowUp', 'arrowDown'];
const eagle110mmRocketPods = ['arrowUp','arrowRight','arrowUp', 'arrowLeft'];
const eagle500kgBomb = ['arrowUp','arrowRight','arrowDown', 'arrowDown', 'arrowDown'];
const jumpPack = ['arrowDown','arrowUp','arrowUp', 'arrowDown', 'arrowUp'];

//Bridge
const precisionStrike = ['arrowRight','arrowRight','arrowUp'];
const gasStrike = ['arrowRight','arrowRight','arrowDown', 'arrowRight'];
const emsStrike = ['arrowRight','arrowRight','arrowLeft', 'arrowDown'];
const smokeStrike = ['arrowRight','arrowRight','arrowDown', 'arrowUp'];
const hmgEmplacement = ['arrowDown','arrowUp','arrowLeft', 'arrowRight', 'arrowRight', 'arrowLeft'];
const shieldGeneratorRelay = ['arrowDown','arrowUp','arrowLeft', 'arrowDown', 'arrowRight', 'arrowRight'];
const teslaTower = ['arrowDown','arrowUp','arrowRight', 'arrowUp', 'arrowLeft', 'arrowRight'];

// Engineering Bay
const antiPersonnelMinefield = ['arrowDown','arrowLeft','arrowUp', 'arrowRight'];
const supplyPack = ['arrowDown','arrowLeft','arrowDown', 'arrowUp', 'arrowUp', 'arrowDown'];
const grenadeLauncher = ['arrowDown','arrowLeft','arrowUp', 'arrowLeft', 'arrowDown'];
const laserCanon = ['arrowDown','arrowLeft','arrowDown', 'arrowUp', 'arrowLeft'];
const indendiaryMines = ['arrowDown','arrowLeft','arrowLeft', 'arrowDown'];
const guardDogRover = ['arrowDown','arrowUp','arrowLeft', 'arrowUp', 'arrowRight', 'arrowRight'];
const ballisticShieldBackpack = ['arrowDown','arrowLeft','arrowUp', 'arrowUp', 'arrowRight'];
const arcThrower = ['arrowDown','arrowRight','arrowDown', 'arrowUp', 'arrowLeft', 'arrowLeft'];
const quasarCannon = ['arrowDown','arrowDown','arrowUp', 'arrowLeft', 'arrowLeft'];
const shieldGeneratorPack = ['arrowDown','arrowUp','arrowLeft', 'arrowRight', 'arrowLeft', 'arrowRight'];

// Robotics Workshop
const machineGunSentry = ['arrowDown', 'arrowUp', 'arrowRight', 'arrowRight', 'arrowUp'];
const gatlingSentry = ['arrowDown', 'arrowUp', 'arrowRight', 'arrowLeft'];
const mortarSentry = ['arrowDown', 'arrowUp', 'arrowRight', 'arrowRight', 'arrowDown'];
const guardDog = ['arrowDown', 'arrowUp', 'arrowLeft', 'arrowUp', 'arrowRight', 'arrowDown'];
const autocannonSentry = ['arrowDown', 'arrowUp', 'arrowRight', 'arrowUp', 'arrowLeft', 'arrowUp'];
const rocketSentry = ['arrowDown', 'arrowUp', 'arrowRight', 'arrowRight', 'arrowLeft'];
const emsMortarSentry = ['arrowDown', 'arrowUp', 'arrowRight', 'arrowDown', 'arrowRight'];
const patriotExosuit = ['arrowLeft', 'arrowDown', 'arrowRight', 'arrowUp', 'arrowLeft', 'arrowDown', 'arrowDown'];

// Mission Stratagems
const reinforce = ['arrowUp', 'arrowDown', 'arrowRight', 'arrowLeft', 'arrowUp'];
const sosBeacon = ['arrowUp', 'arrowDown', 'arrowRight', 'arrowUp'];
const resupply = ['arrowDown', 'arrowDown', 'arrowUp', 'arrowRight'];
const superEarthFlag = ['arrowDown', 'arrowUp', 'arrowDown', 'arrowUp'];
const uploadData = ['arrowLeft', 'arrowRight', 'arrowUp', 'arrowUp', 'arrowUp'];
const hellbomb = ['arrowDown', 'arrowUp', 'arrowLeft', 'arrowDown', 'arrowUp', 'arrowRight', 'arrowDown', 'arrowUp'];

function mapArrows(stratagem) {
  return stratagem.map((arrow, index) => {
    return { id: index + 1, class: arrow, active: index === 0 ? true : false, completed: false, failed: false }
  })
}

export const availableStratagems = [
  { value: 'machineGun', label: 'Machine Gun', arrows: mapArrows(machineGun), logo: machineGunLogo, type: supportWeaponsType.value },
  { value: 'antiMaterialRifle', label: 'Anti-Material Riffle', arrows: mapArrows(antiMaterialRifle), logo: anitMaterialRifleLogo, type: supportWeaponsType.value },
  { value: 'stalwart', label: 'Stalwart', arrows: mapArrows(stalwart), logo: stalwartLogo, type: supportWeaponsType.value },
  { value: 'expendableAntiTank', label: 'Expendable Anti-Tank', arrows: mapArrows(expendableAntiTank), logo: expandableAtniTankLogo, type: supportWeaponsType.value },
  { value: 'recoillesRifle', label: 'Recoilless Rifle', arrows: mapArrows(recoillesRifle), logo: recoillesRifleLogo, type: supportWeaponsType.value },
  { value: 'flamethrower', label: 'Flamethrower', arrows: mapArrows(flamethrower), logo: flamethrowerLogo, type: supportWeaponsType.value },
  { value: 'autocannon', label: 'Autocannon', arrows: mapArrows(autocannon), logo: autocannonLogo, type: supportWeaponsType.value },
  { value: 'heavyMachineGun', label: 'Heavy Machinge Gun', arrows: mapArrows(heavyMachineGun), logo: heavyMachineGunLogo, type: supportWeaponsType.value },
  { value: 'railgun', label: 'Railgun', arrows: mapArrows(railgun), logo: railgunLogo, type: supportWeaponsType.value },
  { value: 'spear', label: 'Spear', arrows: mapArrows(spear), logo: spearLogo, type: supportWeaponsType.value },
  { value: 'gatlingBarrage', label: 'Orbital Gatling Barrage', arrows: mapArrows(gatlingBarrage), logo: gatlingBarrageLogo, type: orbitalCannonsType.value },
  { value: 'airbustStrike', label: 'Orbital Airbust Strike', arrows: mapArrows(airbustStrike), logo: airbustStrikeLogo, type: orbitalCannonsType.value },
  { value: 'hm120HeBarrageLogo', label: 'Orbital 120mm HE Barrage', arrows: mapArrows(hm120HeBarrage), logo: hm120HeBarrageLogo, type: orbitalCannonsType.value },
  { value: 'hm380HeBarrageLogo', label: 'Orbital 380mm HE Barrage', arrows: mapArrows(hm380HeBarrage), logo: hm380HeBarrageLogo, type: orbitalCannonsType.value },
  { value: 'walkingBarrage', label: 'Orbital Walking Barrage', arrows: mapArrows(walkingBarrage), logo: walkingBarrageLogo, type: orbitalCannonsType.value },
  { value: 'laser', label: 'Orbital Laser', arrows: mapArrows(laser), logo: laserLogo, type: orbitalCannonsType.value },
  { value: 'railcannonStrike', label: 'Orbital Railcannon Strike', arrows: mapArrows(railcannonStrike), logo: railcannonStrikeLogo, type: orbitalCannonsType.value },
  { value: 'eagleStrafingRun', label: 'Eagle Strafing Run', arrows: mapArrows(eagleStrafingRun), logo: eagleStrafingRunLogo, type: hangarType.value },
  { value: 'eagleAirstrike', label: 'Eagle Airstrike', arrows: mapArrows(eagleAirstrike), logo: eagleAirstrikeLogo, type: hangarType.value },
  { value: 'eagleClusterBomb', label: 'Eagle Cluster Bomb', arrows: mapArrows(eagleClusterBomb), logo: eagleClusterBombLogo, type: hangarType.value },
  { value: 'eagleNapalmAirstrike', label: 'Eagle Napalm Airstrike', arrows: mapArrows(eagleNapalmAirstrike), logo: eagleNapalmAirstrikeLogo, type: hangarType.value },
  { value: 'eagleSmokeStrike', label: 'Eagle Smoke Strike', arrows: mapArrows(eagleSmokeStrike), logo: eagleSmokeStrikeLogo, type: hangarType.value },
  { value: 'eagle110mmRocketPods', label: 'Eagle 110mm Rocket Pods', arrows: mapArrows(eagle110mmRocketPods), logo: eagle110mmRocketPodsLogo, type: hangarType.value },
  { value: 'eagle500kgBomb', label: 'Eagle 500kg Bomb', arrows: mapArrows(eagle500kgBomb), logo: eagle500kgBombLogo, type: hangarType.value },
  { value: 'jumpPack', label: 'Jump Pack', arrows: mapArrows(jumpPack), logo: jumpPackLogo, type: hangarType.value },
  { value: 'precisionStrike', label: 'Orbital Precision Strike', arrows: mapArrows(precisionStrike), logo: precisionStrikeLogo, type: bridgeType.value },
  { value: 'gasStrike', label: 'Orbital Gas Strike', arrows: mapArrows(gasStrike), logo: gasStrikeLogo, type: bridgeType.value },
  { value: 'emsStrike', label: 'Orbital EMS Strike', arrows: mapArrows(emsStrike), logo: emsStrikeLogo, type: bridgeType.value },
  { value: 'smokeStrike', label: 'Orbital Smoke Strike', arrows: mapArrows(smokeStrike), logo: smokeStrikeLogo, type: bridgeType.value },
  { value: 'hmgEmplacement', label: 'HMG Emplacement', arrows: mapArrows(hmgEmplacement), logo: hmgEmplacementLogo, type: bridgeType.value },
  { value: 'shieldGeneratorRelay', label: 'Shield Generator Relay', arrows: mapArrows(shieldGeneratorRelay), logo: shieldGeneratorRelayLogo, type: bridgeType.value },
  { value: 'teslaTower', label: 'Tesla Tower', arrows: mapArrows(teslaTower), logo: teslaTowerLogo, type: bridgeType.value },
  { value: 'antiPersonnelMinefield', label: 'Anti-Personnel Minefield', arrows: mapArrows(antiPersonnelMinefield), logo: antiPersonnelMinefieldLogo, type: engineeringBayType.value },
  { value: 'supplyPack', label: 'Supply Pack', arrows: mapArrows(supplyPack), logo: supplyPackLogo, type: engineeringBayType.value },
  { value: 'grenadeLauncher', label: 'Grenade Launcher', arrows: mapArrows(grenadeLauncher), logo: grenadeLauncherLogo, type: engineeringBayType.value },
  { value: 'laserCanon', label: 'Laser Canon', arrows: mapArrows(laserCanon), logo: laserCanonLogo, type: engineeringBayType.value },
  { value: 'indendiaryMines', label: 'Incendiary Mines', arrows: mapArrows(indendiaryMines), logo: indendiaryMinesLogo, type: engineeringBayType.value },
  { value: 'guardDogRover', label: 'Guard Dog Rover', arrows: mapArrows(guardDogRover), logo: guardDogRoverLogo, type: engineeringBayType.value },
  { value: 'ballisticShieldBackpack', label: 'Ballistic Shield Backpack', arrows: mapArrows(ballisticShieldBackpack), logo: ballisticShieldBackpackLogo, type: engineeringBayType.value },
  { value: 'arcThrower', label: 'Arc Thrower', arrows: mapArrows(arcThrower), logo: arcThrowerLogo, type: engineeringBayType.value },
  { value: 'quasarCannon', label: 'Quasar Cannon', arrows: mapArrows(quasarCannon), logo: quasarCannonLogo, type: engineeringBayType.value },
  { value: 'shieldGeneratorPack', label: 'Shield Generator Pack', arrows: mapArrows(shieldGeneratorPack), logo: shieldGeneratorPackLogo, type: engineeringBayType.value },
  { value: 'machineGunSentry', label: 'Machine Gun Sentry', arrows: mapArrows(machineGunSentry), logo: machineGunSentryLogo, type: roboticsWorkshopType.value },
  { value: 'gatlingSentry', label: 'Gatling Sentry', arrows: mapArrows(gatlingSentry), logo: gatlingSentryLogo, type: roboticsWorkshopType.value },
  { value: 'mortarSentry', label: 'Mortar Sentry', arrows: mapArrows(mortarSentry), logo: mortarSentryLogo, type: roboticsWorkshopType.value },
  { value: 'guardDog', label: 'Guard Dog', arrows: mapArrows(guardDog), logo: guardDogLogo, type: roboticsWorkshopType.value },
  { value: 'autocannonSentry', label: 'Autocannon Sentry', arrows: mapArrows(autocannonSentry), logo: autocannonSentryLogo, type: roboticsWorkshopType.value },
  { value: 'rocketSentry', label: 'Autocannon Sentry', arrows: mapArrows(rocketSentry), logo: rocketSentryLogo, type: roboticsWorkshopType.value },
  { value: 'emsMortarSentry', label: 'EMS Mortar Sentry', arrows: mapArrows(emsMortarSentry), logo: emsMortarSentryLogo, type: roboticsWorkshopType.value },
  { value: 'patriotExosuit', label: 'Patriot Exosuit', arrows: mapArrows(patriotExosuit), logo: patriotExosuitLogo, type: roboticsWorkshopType.value },
  { value: 'reinforce', label: 'Reinforce', arrows: mapArrows(reinforce), logo: reinforceLogo, type: missionType.value },
  { value: 'sosBeacon', label: 'SOS Beacon', arrows: mapArrows(sosBeacon), logo: sosBeaconLogo, type: missionType.value },
  { value: 'resupply', label: 'Ressuply', arrows: mapArrows(resupply), logo: resupplyLogo, type: missionType.value },
  { value: 'superEarthFlag', label: 'Super Earth Flag', arrows: mapArrows(superEarthFlag), logo: superEarthFlagLogo, type: missionType.value },
  { value: 'uploadData', label: 'Upload Data', arrows: mapArrows(uploadData), logo: uploadDataLogo, type: missionType.value },
  { value: 'hellbomb', label: 'Hellbomb', arrows: mapArrows(hellbomb), logo: hellbombLogo, type: missionType.value },
];

export const groupedStratagems = Object.groupBy(availableStratagems, ({ type }) => type);
export const stratagemTypes = [supportWeaponsType, orbitalCannonsType, hangarType, bridgeType, engineeringBayType, roboticsWorkshopType, missionType];
