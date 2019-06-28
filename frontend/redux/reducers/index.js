import { combineReducers } from "redux"

import auth from "./auth"
import booking from "./booking"
import hotel from "./hotel"
import priceList from "./priceList"
import room from "./room"
import roomType from "./roomType"

const appReducer = combineReducers({
	auth,
	booking,
	hotel,
	priceList,
	room,
	roomType
})

export default appReducer
