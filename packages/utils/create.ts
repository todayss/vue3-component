// bem规范

export function _bem(prefix: string,blockSuffix: string, element: string, modifier: string) {
  if(blockSuffix) {
    prefix += '-' + blockSuffix;
  }
  if(element) {
    prefix += '__' + element;
  }
  if(modifier) {
    prefix += '--' + modifier;
  }
  return prefix
}

export function createBem(prefixName: string) {
  const b = (blockSuffix: string = '') => _bem(prefixName, blockSuffix, '', '')
  const e = (element: string = '') => element ? _bem(prefixName, '', element, '') : ''
  const m = (modifier: string = '') => modifier ? _bem(prefixName, '', '', modifier) : ''
  const be = (blockSuffix: string = '', element: string = '') => blockSuffix && element ? _bem(prefixName, '', element, '') : ''
  const bm = (blockSuffix: string = '', modifier: string = '') => blockSuffix && modifier ? _bem(prefixName, '', '', modifier) : ''
  const em = ( element: string = '', modifier: string = '',) => modifier && element ? _bem(prefixName, '', element, modifier) : ''
  const bem = (blockSuffix: string = '', element: string = '', modifier: string = '') => blockSuffix && element && modifier ? _bem(prefixName, blockSuffix, element, modifier) : ''
  const is = (name: string, state:any) => state ? `is-${name}`: ''
  return {
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is
  }
}

export default function createNamespace(name:string) {
  const prefixName = `wx-${name}`;
  return createBem(prefixName)
}

