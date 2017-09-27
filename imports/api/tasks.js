import { Mongo } from "meteor/mongo"

import { TASKS_COLLECTION } from "/imports/constants/collections"

const Tasks = new Mongo.Collection(TASKS_COLLECTION)

export default Tasks
