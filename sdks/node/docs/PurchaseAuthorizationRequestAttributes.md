# PurchaseAuthorizationRequestAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the authorization request was created. | [default to undefined]
**amount** | **number** | The amount (cents) of the authorization request. | [default to undefined]
**status** | **string** | The status of the authorization request. Either Pending, Approved or Declined. | [default to undefined]
**outcome** | **string** | What your programmatic integration produced when the request reached a terminal decision. See Understanding authorization decisions. One of Approved, Declined, PostTimeout, PostError, WaitTimeout. | [optional] [default to undefined]
**partialApprovalAllowed** | **boolean** | Indicates whether the authorization request supports partial amount approval. | [default to undefined]
**approvedAmount** | **number** | The amount (cents) that was approved. Available only when status is Approved. | [optional] [default to undefined]
**declineReason** | **string** | The reason the authorization request was declined. One of AccountClosed, CardExceedsAmountLimit, DoNotHonor, InsufficientFunds, InvalidMerchant, ReferToCardIssuer, RestrictedCard, Timeout, TransactionNotPermittedToCardholder. Available only when status is Declined | [optional] [default to undefined]
**merchant** | [**PurchaseTransactionAttributesMerchant**](PurchaseTransactionAttributesMerchant.md) |  | [optional] [default to undefined]
**recurring** | **boolean** | Indicates whether the authorization is recurring | [default to undefined]
**ecommerce** | **boolean** | Indicates whether the transaction was created over an electronic network (primarily the internet). | [optional] [default to undefined]
**cardPresent** | **boolean** | Indicates whether the card was present when the transaction was created. | [optional] [default to undefined]
**paymentMethod** | **string** | The payment method used, one of: Manual, Swipe, Contactless, ChipAndPin, Stored, Other. | [optional] [default to undefined]
**digitalWallet** | **string** | The type of digital wallet used, one of: Google, Apple, Other. | [optional] [default to undefined]
**cardVerificationData** | [**CardTransactionAttributesCardVerificationData**](CardTransactionAttributesCardVerificationData.md) |  | [optional] [default to undefined]
**cardNetwork** | **string** | The card network used, one of: Visa, Interlink, Accel, Allpoint, Other. | [optional] [default to undefined]
**healthcareAmounts** | [**HealthcareAmountsType**](HealthcareAmountsType.md) | IIAS related data for FSA/HRA enabled cards. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional, See Tags. If specified when approving the authorization request. | [default to undefined]
**cashWithdrawalAmount** | **number** | Cash withdrawal amount | [optional] [default to undefined]
**currencyConversion** | [**CurrencyConversionType**](CurrencyConversionType.md) | When original currency for transaction is not USD. | [optional] [default to undefined]
**isInternational** | **boolean** | Indicates whether the transaction is international. | [optional] [default to undefined]

## Example

```typescript
import { PurchaseAuthorizationRequestAttributes } from 'unit-openapi-node-sdk';

const instance: PurchaseAuthorizationRequestAttributes = {
    createdAt,
    amount,
    status,
    outcome,
    partialApprovalAllowed,
    approvedAmount,
    declineReason,
    merchant,
    recurring,
    ecommerce,
    cardPresent,
    paymentMethod,
    digitalWallet,
    cardVerificationData,
    cardNetwork,
    healthcareAmounts,
    tags,
    cashWithdrawalAmount,
    currencyConversion,
    isInternational,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
