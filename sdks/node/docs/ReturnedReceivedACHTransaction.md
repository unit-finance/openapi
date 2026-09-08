# ReturnedReceivedACHTransaction

The transaction represents a received ACH that has been returned, automatically by Unit (e.g insufficient funds), by a dispute, or manually via a Return Received ACH.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**ReturnedReceivedACHTransactionAttributes**](ReturnedReceivedACHTransactionAttributes.md) |  | [default to undefined]
**relationships** | [**ReturnedReceivedACHTransactionRelationships**](ReturnedReceivedACHTransactionRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ReturnedReceivedACHTransaction } from '@unit-finance/unit-node-sdk';

const instance: ReturnedReceivedACHTransaction = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
