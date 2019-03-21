import { Module } from '../dao/module-dao'

export async function moduleGetHandler() {
    return await Module.query().orderBy('name', 'ASC')
}