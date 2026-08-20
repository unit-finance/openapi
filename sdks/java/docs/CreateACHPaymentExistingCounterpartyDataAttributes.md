

# CreateACHPaymentExistingCounterpartyDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**amount** | **Integer** | The amount (in cents). |  |
|**direction** | **String** | The direction in which the funds flow. |  |
|**description** | **String** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. |  |
|**addenda** | **String** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. |  [optional] |
|**idempotencyKey** | **String** | Optional. See Idempotency. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). |  [optional] |
|**verifyCounterpartyBalance** | **Boolean** | Optional, default is false. Verify the counterparty balance, if balance verification fails the payment will be rejected with reason set to CounterpartyInsufficientFunds. |  [optional] |
|**sameDay** | **Boolean** | Optional, default is false. See Same Day ACH. |  [optional] |
|**secCode** | **String** | Optional. See Use a custom SEC Code. |  [optional] |
|**clearingDaysOverride** | **Integer** | Optional. See Dynamic Clearing Period. |  [optional] |



