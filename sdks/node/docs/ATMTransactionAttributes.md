# ATMTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the transaction was created. Common to all transaction types. | [default to undefined]
**direction** | **string** | The direction in which the funds flow. Common to all transaction types. | [default to undefined]
**amount** | **number** | The amount (cents) of the transaction, including the surcharge fee. Common to all transaction types. | [default to undefined]
**balance** | **number** | The account balance (cents) after the transaction. Common to all transaction types. | [default to undefined]
**summary** | **string** | Summary of the transaction. Common to all transaction types. | [default to undefined]
**cardLast4Digits** | **string** | The last 4 digits of the debit card involved in the transaction. | [default to undefined]
**atmName** | **string** | The name of the ATM. | [default to undefined]
**atmLocation** | **string** | The location (city, state, etc.) of the ATM. | [optional] [default to undefined]
**surcharge** | **number** | The surcharge fee (cents) for the transaction. | [default to undefined]
**interchange** | **string** | The interchange share for this transaction. Calculated at the end of each day, see the transaction.updated event. | [optional] [default to undefined]
**grossInterchange** | **string** | The gross interchange share for this transaction. | [optional] [default to undefined]
**cardNetwork** | **string** | The card network used, one of: Visa, Interlink, Accel, Allpoint, Other. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [default to undefined]
**currencyConversion** | [**CurrencyConversionType**](CurrencyConversionType.md) | When original currency for transaction is not USD. | [optional] [default to undefined]
**cardDecisionSource** | **string** | Who made the final card authorization decision. See Understanding authorization decisions. One of Org, Unit, Network, TimeoutApprove, TimeoutDecline, DefaultApprove, InternalError, IssuerStandIn. | [optional] [default to undefined]

## Example

```typescript
import { ATMTransactionAttributes } from 'unit-openapi-node-sdk';

const instance: ATMTransactionAttributes = {
    createdAt,
    direction,
    amount,
    balance,
    summary,
    cardLast4Digits,
    atmName,
    atmLocation,
    surcharge,
    interchange,
    grossInterchange,
    cardNetwork,
    tags,
    currencyConversion,
    cardDecisionSource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
