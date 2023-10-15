import {Worker} from "bullmq";
import {options, queuesNames} from "./config/queues.js";


queuesNames.map(async queue => {
    new Worker(queue, async job => {
        console.log(queue)
    }, options)
})
