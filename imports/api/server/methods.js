import uuid from "uuid"

import { Meteor } from "meteor/meteor"
import { check } from "meteor/check"

import Tasks from "/imports/api/tasks"

import {
	ADD_TASK_METHOD,
	REMOVE_TASK_METHOD,
	UPDATE_TASK_METHOD
} from "/imports/constants/methods"

Meteor.methods({
	[ADD_TASK_METHOD]({ text }) {
		check(text, String)
		this.unblock()

		Tasks.insert({
			_id: uuid.v4(),
			done: false,
			text
		})
	},
	[REMOVE_TASK_METHOD]({ _id }) {
		check(_id, String)
		this.unblock()

		Tasks.remove({ _id })
	},
	[UPDATE_TASK_METHOD]({ _id, done }) {
		check(_id, String)
		check(done, Boolean)
		this.unblock()

		Tasks.update({ _id }, { $set: { done } })
	}
})
