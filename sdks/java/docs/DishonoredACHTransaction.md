

# DishonoredACHTransaction

A dishonored ACH transaction is a relatively uncommon transaction type, that happens when Unit attempts to return a received ACH, but the originating bank decides not to return the funds. This typically happens when the return is not in compliance with the NACHA rules (e.g. 3 days after the payment took place when the network rules define a maximum of 2 days).

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**id** | **String** |  |  |
|**attributes** | [**DishonoredACHTransactionAttributes**](DishonoredACHTransactionAttributes.md) |  |  |
|**relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| DISHONORED_ACH_TRANSACTION | &quot;dishonoredAchTransaction&quot; |



