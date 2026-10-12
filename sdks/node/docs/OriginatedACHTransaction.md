# OriginatedACHTransaction

`OriginatedAchTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**OriginatedACHTransactionAttributes**](OriginatedACHTransactionAttributes.md) |  | [default to undefined]
**relationships** | [**OriginatedACHTransactionRelationships**](OriginatedACHTransactionRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OriginatedACHTransaction } from 'unit-openapi-node-sdk';

const instance: OriginatedACHTransaction = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
