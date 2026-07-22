# AccountHold

`AccountHold` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**AccountHoldAttributes**](AccountHoldAttributes.md) |  | [default to undefined]
**relationships** | [**FeeRelationships**](FeeRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AccountHold } from '@unit-finance/unit-node-sdk';

const instance: AccountHold = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
