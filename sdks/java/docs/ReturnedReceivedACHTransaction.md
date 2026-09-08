

# ReturnedReceivedACHTransaction

The transaction represents a received ACH that has been returned, automatically by Unit (e.g insufficient funds), by a dispute, or manually via a Return Received ACH.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**id** | **String** |  |  |
|**attributes** | [**ReturnedReceivedACHTransactionAttributes**](ReturnedReceivedACHTransactionAttributes.md) |  |  |
|**relationships** | [**ReturnedReceivedACHTransactionRelationships**](ReturnedReceivedACHTransactionRelationships.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| RETURNED_RECEIVED_ACH_TRANSACTION | &quot;returnedReceivedAchTransaction&quot; |



