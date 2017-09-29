import "/imports/api/server/publications"
import "/imports/api/server/methods"

import { createRouter } from "meteor/rangeoshun:ssr"

import MainServer from "/imports/ui/components/MainServer"
import appReducers from "/imports/reducers"

createRouter({
  MainApp: MainServer,
  appReducers
})
