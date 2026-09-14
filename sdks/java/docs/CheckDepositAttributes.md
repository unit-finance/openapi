

# CheckDepositAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**status** | **String** | One of AwaitingImages, AwaitingFrontImage, AwaitingBackImage, Pending, PendingReview, Rejected, Clearing, Sent, Canceled, Returned. |  |
|**reason** | **String** | More information about the status. |  [optional] |
|**description** | **String** | Check Deposit description (maximum of 50 characters). |  |
|**amount** | **String** | The amount (cents) of the check deposit. |  |
|**checkNumber** | **String** | The serial number printed at the bottom of the check |  [optional] |
|**counterparty** | [**CheckCounterpartyType**](CheckCounterpartyType.md) | The party the check belongs to. |  [optional] |
|**clearingDaysOverride** | **Integer** | The amount of days it will take a check deposit to clear if a clearingDaysOverride was provided. See Dynamic Clearing Period |  [optional] |
|**settlementDate** | **OffsetDateTime** | Optional, For Pending or Clearing, shows the date on which the check will be settled. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |



