import { Meteor } from "meteor/meteor"

import { TASKS_SUB } from "/imports/constants/collections"
import Tasks from "/imports/api/tasks"

Meteor.startup(() => Meteor.publish(TASKS_SUB, () => Tasks.find()))
