
export default class CheckHelper {
    static isNotNullOrUndefined(value) {
        return typeof value !== 'undefined' || value !== null
    }
    static hasArrayItem(value) {
        return value?.length > 0
    }

    static isRouteAvailable(currentScope) {
        return currentScope
            && ((currentScope.location && currentScope.location.href) || (currentScope.__NEXT_DATA__ && currentScope.__NEXT_DATA__.page))
    }
}

