

# AuthorizationAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the authorization was created. |  |
|**amount** | **Integer** | The amount (cents) of the authorization. |  |
|**cardLast4Digits** | **String** | The last 4 digits of the debit card involved in the authorization. |  |
|**status** | **String** | One of Authorized, Completed, Canceled, Declined, see Authorization Statuses. |  |
|**cardDecisionSource** | **String** | Who made the final card authorization decision. See Understanding authorization decisions. One of Org, Unit, Network, TimeoutApprove, TimeoutDecline, DefaultApprove, InternalError, IssuerStandIn. |  [optional] |
|**declineReason** | **String** | The reason the authorization was declined. Available only when status is Declined |  [optional] |
|**declineDescription** | **String** | A human-readable description providing additional detail about the decline. Only present on some declined authorizations. |  [optional] |
|**declinedBy** | **String** | The entity that declined the authorization. One of Visa, Org, or Unit. Available only when status is Declined. |  [optional] |
|**merchant** | [**PurchaseTransactionAttributesMerchant**](PurchaseTransactionAttributesMerchant.md) |  |  [optional] |
|**recurring** | **Boolean** | Indicates whether the authorization is recurring |  |
|**paymentMethod** | **String** | The payment method used, one of: Manual, Swipe, Contactless, ChipAndPin, Stored, Other. |  [optional] |
|**digitalWallet** | **String** | The type of digital wallet used, one of: Google, Apple, Other. |  [optional] |
|**cardVerificationData** | [**CardTransactionAttributesCardVerificationData**](CardTransactionAttributesCardVerificationData.md) |  |  [optional] |
|**cardNetwork** | **String** | The card network used, one of: Visa, Interlink, Accel, Allpoint, Other. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. Inherited from the authorization request tags (see Tag Inheritance). |  |
|**cashWithdrawalAmount** | **Integer** | Cash withdrawal amount |  [optional] |
|**summary** | **String** | Summary of the authorization. |  [optional] |
|**richMerchantData** | [**RichMerchantDataType**](RichMerchantDataType.md) | Full merchant information. |  [optional] |
|**currencyConversion** | [**CurrencyConversionType**](CurrencyConversionType.md) | When original currency for transaction is not USD |  [optional] |



