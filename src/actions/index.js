import { elder, younger, anglo } from '../constants/RuneMap'

export const setSpacing = (spacing) => {
  return {
    type: 'SET_SPACING',
    spacing
  }
}

export const setRunes = (runes) => {
  return {
    type: 'SET_RUNES',
    runes
  }
}

export const setValue = (value) => {
  return {
    type: 'SET_VALUE',
    value
  }
}

export const setTranslation = (value, spacing, runes) => {
  let characters;
  let values;

  if(runes === 'younger') {
    characters = Object.assign({}, younger, {' ' : spacing});
    values = value.toLowerCase().replace(/th/g, 'ᚦ').replace(/ng/g, 'ᚴ').split('');
  } else if(runes === 'anglo') {
    characters = Object.assign({}, anglo, {' ' : spacing});
    values = value.toLowerCase().replace(/th/g, 'ᚦ').replace(/ng/g, 'ᛝ').split('');
  } else {
    characters = Object.assign({}, elder, {' ' : spacing});
    values = value.toLowerCase().replace(/th/g, 'ᚦ').replace(/ng/g, 'ᛜ').split('');
  }

  const translation = values.map(letter => characters[letter]).join('');

  return {
    type: 'SET_TRANSLATION',
    translation
  }
}
