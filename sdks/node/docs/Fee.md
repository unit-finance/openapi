# Fee

`Fee` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**FeeAttributes**](FeeAttributes.md) |  | [default to undefined]
**relationships** | [**FeeRelationships**](FeeRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Fee } from '@unit-finance/unit-openapi-node-sdk';

const instance: Fee = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
