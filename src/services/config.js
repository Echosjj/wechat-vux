/**
 * Created by sunjinjin on 2018/3/23.
 */
const IS_DEV = process.env.NODE_ENV !== 'production'

export const BASE_URL = IS_DEV ? '/' : ''
export const OK = 0
