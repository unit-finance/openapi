

# PurchaseAuthorizationRequestAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the authorization request was created. |  |
|**amount** | **Integer** | The amount (cents) of the authorization request. |  |
|**status** | **String** | The status of the authorization request. Either Pending, Approved or Declined. |  |
|**outcome** | **String** | What your programmatic integration produced when the request reached a terminal decision. See Understanding authorization decisions. One of Approved, Declined, PostTimeout, PostError, WaitTimeout. |  [optional] |
|**partialApprovalAllowed** | **Boolean** | Indicates whether the authorization request supports partial amount approval. |  |
|**approvedAmount** | **Integer** | The amount (cents) that was approved. Available only when status is Approved. |  [optional] |
|**declineReason** | **String** | The reason the authorization request was declined. One of AccountClosed, CardExceedsAmountLimit, DoNotHonor, InsufficientFunds, InvalidMerchant, ReferToCardIssuer, RestrictedCard, Timeout, TransactionNotPermittedToCardholder. Available only when status is Declined |  [optional] |
|**merchant** | [**PurchaseTransactionAttributesMerchant**](PurchaseTransactionAttributesMerchant.md) |  |  [optional] |
|**recurring** | **Boolean** | Indicates whether the authorization is recurring |  |
|**ecommerce** | **Boolean** | Indicates whether the transaction was created over an electronic network (primarily the internet). |  [optional] |
|**cardPresent** | **Boolean** | Indicates whether the card was present when the transaction was created. |  [optional] |
|**paymentMethod** | **String** | The payment method used, one of: Manual, Swipe, Contactless, ChipAndPin, Stored, Other. |  [optional] |
|**digitalWallet** | **String** | The type of digital wallet used, one of: Google, Apple, Other. |  [optional] |
|**cardVerificationData** | [**CardTransactionAttributesCardVerificationData**](CardTransactionAttributesCardVerificationData.md) |  |  [optional] |
|**cardNetwork** | **String** | The card network used, one of: Visa, Interlink, Accel, Allpoint, Other. |  [optional] |
|**healthcareAmounts** | [**HealthcareAmountsType**](HealthcareAmountsType.md) | IIAS related data for FSA/HRA enabled cards. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | Optional, See Tags. If specified when approving the authorization request. |  |
|**cashWithdrawalAmount** | **Integer** | Cash withdrawal amount |  [optional] |
|**currencyConversion** | [**CurrencyConversionType**](CurrencyConversionType.md) | When original currency for transaction is not USD. |  [optional] |
|**isInternational** | **Boolean** | Indicates whether the transaction is international. |  [optional] |



