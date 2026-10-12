# InterestShareTransaction

`interestShareTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**CheckDepositTransactionAttributes**](CheckDepositTransactionAttributes.md) |  | [default to undefined]
**relationships** | [**InterestShareTransactionRelationships**](InterestShareTransactionRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InterestShareTransaction } from 'unit-openapi-node-sdk';

const instance: InterestShareTransaction = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
