import { addAlias } from 'module-alias'
import { resolve } from 'path'

addAlias('@', resolve(Bun.env.TS_NODE_DEV === undefined ? 'dist' : 'src'))
