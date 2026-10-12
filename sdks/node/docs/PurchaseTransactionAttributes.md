# PurchaseTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the transaction was created. Common to all transaction types. | [default to undefined]
**direction** | **string** | The direction in which the funds flow. Common to all transaction types. | [default to undefined]
**amount** | **number** | The amount (cents) of the transaction. Common to all transaction types. | [default to undefined]
**balance** | **number** | The account balance (cents) after the transaction. Common to all transaction types. | [default to undefined]
**summary** | **string** | Summary of the transaction. Common to all transaction types. | [default to undefined]
**cardLast4Digits** | **string** | The last 4 digits of the debit card involved in the transaction. | [default to undefined]
**coordinates** | [**CoordinatesType**](CoordinatesType.md) | Coordinates (latitude, longitude) of where the purchase took place. | [optional] [default to undefined]
**recurring** | **boolean** | Indicates whether the transaction is recurring. | [default to undefined]
**interchange** | **string** | The interchange share for this transaction. Calculated at the end of each day, see the transaction.updated event. | [optional] [default to undefined]
**grossInterchange** | **string** | The gross interchange share for this transaction. | [optional] [default to undefined]
**ecommerce** | **boolean** | Indicates whether the transaction was created over an electronic network (primarily the internet). | [default to undefined]
**cardPresent** | **boolean** | Indicates whether the card was present when the transaction was created. | [default to undefined]
**paymentMethod** | **string** | The payment method used, one of: Manual, Swipe, Contactless, ChipAndPin, Stored, Other. | [optional] [default to undefined]
**digitalWallet** | **string** | The type of digital wallet used, one of: Google, Apple, Other. | [optional] [default to undefined]
**cardNetwork** | **string** | The card network used, one of: Visa, Interlink, Accel, Allpoint, Other. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. Inherited from the authorization request tags (see Tag Inheritance). | [default to undefined]
**cashWithdrawalAmount** | **number** | Cash withdrawal amount | [optional] [default to undefined]
**richMerchantData** | [**RichMerchantDataType**](RichMerchantDataType.md) | Full merchant information. See Transaction Enrichment. | [optional] [default to undefined]
**currencyConversion** | [**CurrencyConversionType**](CurrencyConversionType.md) | When original currency for transaction is not USD. | [optional] [default to undefined]
**cardDecisionSource** | **string** | Who made the final card authorization decision. See Understanding authorization decisions. One of Org, Unit, Network, TimeoutApprove, TimeoutDecline, DefaultApprove, InternalError, IssuerStandIn. | [optional] [default to undefined]
**merchant** | [**PurchaseTransactionAttributesMerchant**](PurchaseTransactionAttributesMerchant.md) |  | [optional] [default to undefined]
**cardVerificationData** | [**CardTransactionAttributesCardVerificationData**](CardTransactionAttributesCardVerificationData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PurchaseTransactionAttributes } from 'unit-openapi-node-sdk';

const instance: PurchaseTransactionAttributes = {
    createdAt,
    direction,
    amount,
    balance,
    summary,
    cardLast4Digits,
    coordinates,
    recurring,
    interchange,
    grossInterchange,
    ecommerce,
    cardPresent,
    paymentMethod,
    digitalWallet,
    cardNetwork,
    tags,
    cashWithdrawalAmount,
    richMerchantData,
    currencyConversion,
    cardDecisionSource,
    merchant,
    cardVerificationData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
