# Dispute

`Dispute` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**DisputeAttributes**](DisputeAttributes.md) |  | [default to undefined]
**relationships** | [**DisputeRelationships**](DisputeRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Dispute } from '@unit-finance/unit-openapi-node-sdk';

const instance: Dispute = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
