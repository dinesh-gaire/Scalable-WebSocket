import Redis from 'ioredis';
import { Server } from 'socket.io'
import prismaClient from './prisma';
import { produceMessage } from './kafka';
import { log } from 'console';

const pub = new Redis({
    host: "localhost",
    port: 6379,
    username: "default",
    password: "",
});

const sub = new Redis({
    host: "localhost",
    port: 6379,
    username: "default",
    password: "",
});

class SocketService {
    private _io: Server;

    constructor() {
        console.log("Init Socket Service...");
        this._io = new Server({
            cors: {
                allowedHeaders: ["*"],
                origin: "*",
            }
        });
        sub.subscribe("MESSAGES");
    }

    public initListeners() {
        const io = this.io;
        console.log('Init Socket Listeners...')

        io.on("connect", (socket) => {
            console.log(`New Socket Connected`, socket.id);
            socket.on("event:message", async ({ message }: { message: string }) => {
                console.log("New Message Rec.", message);
                // publish this message to redis
                await pub.publish("MESSAGES", JSON.stringify({ message }));
            });
        });

        sub.on("message", async (channel, message) => {
            if (channel === "MESSAGES") {
                console.log("new message from redis", message);
                io.emit("message", message);
                // message produced to kafka broker
                await produceMessage(message);
                console.log("message produced to kafka broker");

            }
        });

    }

    get io() {
        return this._io;
    }
}

export default SocketService;