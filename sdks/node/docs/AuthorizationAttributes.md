# AuthorizationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the authorization was created. | [default to undefined]
**amount** | **number** | The amount (cents) of the authorization. | [default to undefined]
**cardLast4Digits** | **string** | The last 4 digits of the debit card involved in the authorization. | [default to undefined]
**status** | **string** | One of Authorized, Completed, Canceled, Declined, see Authorization Statuses. | [default to undefined]
**cardDecisionSource** | **string** | Who made the final card authorization decision. See Understanding authorization decisions. One of Org, Unit, Network, TimeoutApprove, TimeoutDecline, DefaultApprove, InternalError, IssuerStandIn. | [optional] [default to undefined]
**declineReason** | **string** | The reason the authorization was declined. Available only when status is Declined | [optional] [default to undefined]
**declineDescription** | **string** | A human-readable description providing additional detail about the decline. Only present on some declined authorizations. | [optional] [default to undefined]
**declinedBy** | **string** | The entity that declined the authorization. One of Visa, Org, or Unit. Available only when status is Declined. | [optional] [default to undefined]
**merchant** | [**PurchaseTransactionAttributesMerchant**](PurchaseTransactionAttributesMerchant.md) |  | [optional] [default to undefined]
**recurring** | **boolean** | Indicates whether the authorization is recurring | [default to undefined]
**paymentMethod** | **string** | The payment method used, one of: Manual, Swipe, Contactless, ChipAndPin, Stored, Other. | [optional] [default to undefined]
**digitalWallet** | **string** | The type of digital wallet used, one of: Google, Apple, Other. | [optional] [default to undefined]
**cardVerificationData** | [**CardTransactionAttributesCardVerificationData**](CardTransactionAttributesCardVerificationData.md) |  | [optional] [default to undefined]
**cardNetwork** | **string** | The card network used, one of: Visa, Interlink, Accel, Allpoint, Other. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. Inherited from the authorization request tags (see Tag Inheritance). | [default to undefined]
**cashWithdrawalAmount** | **number** | Cash withdrawal amount | [optional] [default to undefined]
**summary** | **string** | Summary of the authorization. | [optional] [default to undefined]
**richMerchantData** | [**RichMerchantDataType**](RichMerchantDataType.md) | Full merchant information. | [optional] [default to undefined]
**currencyConversion** | [**CurrencyConversionType**](CurrencyConversionType.md) | When original currency for transaction is not USD | [optional] [default to undefined]

## Example

```typescript
import { AuthorizationAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: AuthorizationAttributes = {
    createdAt,
    amount,
    cardLast4Digits,
    status,
    cardDecisionSource,
    declineReason,
    declineDescription,
    declinedBy,
    merchant,
    recurring,
    paymentMethod,
    digitalWallet,
    cardVerificationData,
    cardNetwork,
    tags,
    cashWithdrawalAmount,
    summary,
    richMerchantData,
    currencyConversion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
