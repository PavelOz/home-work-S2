import { UserType } from '../HW8';

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number };

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    function compareByName(a: UserType, b: UserType) {
        return a.name.localeCompare(b.name);
    }

    switch (action.type) {
        case 'sort': {
            // Clone the state array to avoid mutating the original state directly
            const sortedState = [...state].sort(compareByName);
            if (action.payload === 'up') {
                return sortedState; // Already sorted in ascending order
            }
            if (action.payload === 'down') {
                return sortedState.reverse(); // Reverse for descending order
            }
            return state; // In case of unexpected payload, return original state
        }
        case 'check': {
            // Returns a new array containing elements that meet the condition
            return state.filter(el => el.age >= action.payload);
        }
        default:
            return state; // Returns the current state for any undefined actions
    }
}
