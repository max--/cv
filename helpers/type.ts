import { trim } from '@/string'

export const isDefined = (entity: any) => entity !== undefined
export const isUndefined = (entity: any): entity is undefined => !isDefined(entity)
export const isNull = (entity: any): entity is null => entity === null
export const isNotNull = (entity: any) => !isNull(entity)
export const isBoolean = (entity: any): entity is boolean => typeof entity === 'boolean'
export const isNumber = (entity: any): entity is number => typeof entity === 'number'
export const isString = (entity: any): entity is string => typeof entity === 'string'
export const isArray = <T>(entity: any): entity is Array<T> => Array.isArray(entity)
export const isObject = (entity: any): entity is Object => isNotNull(entity) && !isArray(entity) && typeof entity === 'object'
export const isCollection = (entity: any): entity is Object[] => isArray(entity) && entity.some(element => isObject(element))
export const isFunction = (entity: any): entity is Function => typeof entity === 'function'
export const isDate = (entity: any): entity is Date => entity instanceof Date

export const isPositiveNumber = (entity: any): entity is number => isNumber(entity) && entity > 0
export const isInteger = (entity: any): entity is number => Number.isInteger(entity)
export const isPositiveInteger = (entity: any): entity is number => isInteger(entity) && entity > 0
export const isFloat = (entity: any): entity is number => isNumber(entity) && !isInteger(entity)
export const isPositiveFloat = (entity: any): entity is number => isFloat(entity) && entity > 0
export const isValidString = (entity: any): entity is string => isString(entity) && trim(entity).length > 0
export const isEmptyObject = (entity: any) => Object.keys(entity).length === 0

export const isURL = (url?: any) => {
  try {
    return isString(url) && Boolean(new URL(url))
  } catch (error) {
    return false
  }
}

export const asInteger = (entity: any, radix: number = 10): number =>
  parseInt(`${entity}`, radix)

export const asFloat = (entity: any): number =>
  parseFloat(`${entity}`)

export const asArray = <T>(entity: any, validator?: (item: any) => boolean): Array<T> => {
  if (isArray<T>(entity)) {
    if (!validator) {
      return entity
    }
    return entity.filter(validator)
  }
  if (!validator || validator(entity)) {
    return [entity]
  }

  return []
}

export const isStringifiedInteger = (entity: any) => {
  const parsed = asInteger(entity)
  // eslint-disable-next-line eqeqeq
  return isInteger(parsed) && parsed == entity
}

export const getTypeOf = (entity: any) => {
  if (isArray(entity)) {
    return entity.length === 0 || !isObject(entity[0])
      ? 'array'
      : 'collection'
  }
  return typeof entity
}
