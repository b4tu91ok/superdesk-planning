/**
* @param { newEvents, toEvents }
* newEvents: events to add/update,
* toEvents: original events list to return updated
* @description Add or update events in a given array. Compares with event _id.
*/
const addToEvents = ({ newEvents, toEvents }) => {
    newEvents.forEach((event) => {
        let old = toEvents.find((e) => e._id === event._id)
        // if it was present we update ...
        if (old) {
            let index = toEvents.indexOf(old)
            // replace the old event by the new one
            toEvents.splice(index, 1, event)
            return
        }
        // ... if not we add
        toEvents.push(event)
    })
    // and we order by date
    return toEvents.sort((a, b) => (a.dates.start > b.dates.start))
}

const events = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EVENTS':
            return addToEvents({ newEvents: action.events, toEvents: state.slice() })
        case 'RECEIVE_EVENTS':
            return action.events
        case 'REQUEST_EVENTS':
            return state
        default:
            return state
    }
}

export default events
