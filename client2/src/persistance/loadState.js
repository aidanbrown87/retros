export const loadState = () => {
    try {
        const serialisedState = localStorage.getItem("state");
        if (serialisedState === null) {
            return {};
        }
        return JSON.parse(serialisedState);
    } catch (error) {
        return {};
    }
};

export const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("state", serialisedState);
    } catch (error) {
        
    }
};