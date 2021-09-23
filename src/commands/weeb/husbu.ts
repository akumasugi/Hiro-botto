import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import  axios  from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'neko',
            description: 'Will provide a random anime Neko images',
            category: 'Weeb',
            usage: `${client.config.prefix}neko`,
            
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {


        const husbu = await axios.get('https://zxbott.herokuapp.com/husbu')

return void M.reply(await request.buffer(neko.data.url), MessageType.image, undefined, undefined, `*Here we go ~*`)



    }








}
