const url = document.referrer
const pathName = url.pathName
const pos = url.indexOf(pathName)
const root = url.substring(0, pos)

/* eslint-disable */
export const home = root + '/home.json'
export const project = root + '/project.json'
export const about = root + '/about.json'
