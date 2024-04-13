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

const machineGun = ['arrowDown','arrowLeft','arrowDown','arrowUp','arrowRight'];
const antiMaterialRifle = ['arrowDown','arrowLeft','arrowRight','arrowUp','arrowDown']
const stalwart = ['arrowDown','arrowLeft','arrowDown','arrowUp','arrowUp','arrowLeft']
const expendableAntiTank = ['arrowDown','arrowDown','arrowLeft','arrowUp','arrowRight']
const recoillesRifle = ['arrowDown','arrowLeft','arrowRight','arrowRight','arrowLeft']
const flamethrower = ['arrowDown','arrowLeft','arrowUp','arrowDown','arrowUp']
const autocannon = ['arrowDown','arrowLeft','arrowDown','arrowUp','arrowUp','arrowLeft']
const heavyMachineGun = ['arrowDown','arrowLeft','arrowUp','arrowDown','arrowDown']
const railgun = ['arrowDown','arrowRight','arrowDown','arrowUp','arrowLeft', 'arrowRight']
const spear = ['arrowDown','arrowDown','arrowUp','arrowDown','arrowDown']

function mapArrows(stratagem) {
  return stratagem.map((arrow, index) => {
    return { id: index + 1, class: arrow, active: index === 0 ? true : false, completed: false, failed: false }
  })
}

export const availableStratagems = [
  { value: 'machineGun', label: 'Machine Gun', arrows: mapArrows(machineGun), logo: machineGunLogo },
  { value: 'antiMaterialRifle', label: 'Anti-Material Riffle', arrows: mapArrows(antiMaterialRifle), logo: anitMaterialRifleLogo },
  { value: 'stalwart', label: 'Stalwart', arrows: mapArrows(stalwart), logo: stalwartLogo },
  { value: 'expendableAntiTank', label: 'Expendable Anti-Tank', arrows: mapArrows(expendableAntiTank), logo: expandableAtniTankLogo },
  { value: 'recoillesRifle', label: 'Recoilless Rifle', arrows: mapArrows(recoillesRifle), logo: recoillesRifleLogo },
  { value: 'flamethrower', label: 'Flamethrower', arrows: mapArrows(flamethrower), logo: flamethrowerLogo },
  { value: 'autocannon', label: 'Autocannon', arrows: mapArrows(autocannon), logo: autocannonLogo },
  { value: 'heavyMachineGun', label: 'Heavy Machinge Gun', arrows: mapArrows(heavyMachineGun), logo: heavyMachineGunLogo },
  { value: 'railgun', label: 'Railgun', arrows: mapArrows(railgun), logo: railgunLogo },
  { value: 'spear', label: 'Spear', arrows: mapArrows(spear), logo: spearLogo },
];
