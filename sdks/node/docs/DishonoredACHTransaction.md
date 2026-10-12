# DishonoredACHTransaction

A dishonored ACH transaction is a relatively uncommon transaction type, that happens when Unit attempts to return a received ACH, but the originating bank decides not to return the funds. This typically happens when the return is not in compliance with the NACHA rules (e.g. 3 days after the payment took place when the network rules define a maximum of 2 days).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**DishonoredACHTransactionAttributes**](DishonoredACHTransactionAttributes.md) |  | [default to undefined]
**relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DishonoredACHTransaction } from 'unit-openapi-node-sdk';

const instance: DishonoredACHTransaction = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
