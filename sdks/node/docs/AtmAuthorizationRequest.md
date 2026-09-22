# AtmAuthorizationRequest

`AtmAuthorizationRequest` is a JSON:API resource representing an ATM authorization request. Top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**AtmAuthorizationRequestAttributes**](AtmAuthorizationRequestAttributes.md) |  | [default to undefined]
**relationships** | [**AtmAuthorizationRequestRelationships**](AtmAuthorizationRequestRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AtmAuthorizationRequest } from '@unit-finance/unit-node-sdk';

const instance: AtmAuthorizationRequest = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
