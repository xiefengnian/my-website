'use server'
import path, {join} from'path'
import {readdir, readdirSync} from 'fs'


export async function listPosts(){
    'use server'
    const list = readdirSync(path.join(process.cwd(),'./posts'));
    return list;
}