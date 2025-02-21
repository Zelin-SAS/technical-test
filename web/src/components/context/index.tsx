import { createContext, useContext, useReducer } from "react";


const DataContext = createContext<any>({});

const initialState = {
    user: {},
    users: [],
    books: [],
    isLoading: false,
    error: null,
};

const dataReducer = (state: any, action: any) => {
    switch (action?.type) {
        case "USERS_PROCESS_REQUEST":
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case "USERS_PROCESS_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case "USERS_FETCH":
            return {
                ...state,
                isLoading: false,
                users: action.payload,
            };
        case "USERS_CLEAR":
            return {
                ...state,
                users: [],
            };
        case "BOOKS_PROCESS_REQUEST":
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case "BOOKS_PROCESS_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case "BOOKS_FETCH":
            return {
                ...state,
                isLoading: false,
                books: action.payload,
            };
        case "BOOKS_CLEAR":
            return {
                ...state,
                books: [],
            };
        case "USER_PROCESS_REQUEST":
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case "USER_PROCESS_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case "USER_FETCH":
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            };
        case "USER_CLEAR":
            return {
                ...state,
                user: {},
            };
        case "LOGOUT":
            return initialState;
        default:
            return state;
    }
}

export const DataProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);
    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
}

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
}