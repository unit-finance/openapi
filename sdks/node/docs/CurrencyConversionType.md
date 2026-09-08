# CurrencyConversionType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**originalCurrency** | **string** | ISO 4217 currency code of original currency. | [default to undefined]
**amountInOriginalCurrency** | **number** | The amount in original currency in \&#39;cents\&#39; (i.e. 50 euros will be written 5000) | [default to undefined]
**fxRate** | **string** | The conversion rate for the currency conversion to USD. | [optional] [default to undefined]

## Example

```typescript
import { CurrencyConversionType } from '@unit-finance/unit-node-sdk';

const instance: CurrencyConversionType = {
    originalCurrency,
    amountInOriginalCurrency,
    fxRate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
