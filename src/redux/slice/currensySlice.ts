import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyState {
    selectedCurrency: string;
    conversionRates: {
        USD: number;
        UZS: number;
        EUR: number;
        GBP: number;
        RUB: number;
    };
}

const initialState: CurrencyState = {
    selectedCurrency: 'USD',
    conversionRates: {
        USD: 1,
        UZS: 12800,
        EUR: 0.91,
        GBP: 0.76,
        RUB: 90,
    },
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setCurrency(state, action: PayloadAction<string>) {
            state.selectedCurrency = action.payload;
        },
        setConversionRates(state, action: PayloadAction<{ [key: string]: number }>) {
            state.conversionRates = {
                ...state.conversionRates,  
                ...action.payload          
            };
        }
    }
});

export const { setCurrency, setConversionRates } = currencySlice.actions;

export default currencySlice.reducer;
