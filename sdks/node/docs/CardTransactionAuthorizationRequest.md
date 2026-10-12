# CardTransactionAuthorizationRequest

`CardTransactionAuthorizationRequest` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**CardTransactionAuthorizationRequestAttributes**](CardTransactionAuthorizationRequestAttributes.md) |  | [default to undefined]
**relationships** | [**PurchaseAuthorizationRequestRelationships**](PurchaseAuthorizationRequestRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CardTransactionAuthorizationRequest } from 'unit-openapi-node-sdk';

const instance: CardTransactionAuthorizationRequest = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
