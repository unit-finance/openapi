# BatchRelease

`BatchRelease` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**BatchReleaseAttributes**](BatchReleaseAttributes.md) |  | [default to undefined]
**relationships** | [**BatchReleaseRelationships**](BatchReleaseRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BatchRelease } from '@unit-finance/unit-openapi-node-sdk';

const instance: BatchRelease = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
