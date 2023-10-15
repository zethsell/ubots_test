import {cards, loans} from "./src/main/config/queues";

await cards.resume()
await cards.add("job-test", {payload: 'card1'}, {removeOnComplete: true})
await cards.add("job-test", {payload: 'card2'}, {removeOnComplete: true})
await cards.add("job-test", {payload: 'card3'}, {removeOnComplete: true})
await cards.add("job-test", {payload: 'card4'}, {removeOnComplete: true})
await cards.pause()

await loans.add("job-test", {payload: 'loan5'}, {removeOnComplete: true})
await loans.add("job-test", {payload: 'loan6'}, {removeOnComplete: true})
await loans.add("job-test", {payload: 'loan7'}, {removeOnComplete: true})
await loans.add("job-test", {payload: 'loan8'}, {removeOnComplete: true})
await loans.add("job-test", {payload: 'loan9'}, {removeOnComplete: true})
await cards.resume()
await cards.add("job-test", {payload: 'card5'}, {removeOnComplete: true})
await cards.add("job-test", {payload: 'card6'}, {removeOnComplete: true})