# ACHCounterparty

`ACHCounterparty` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**ACHCounterpartyAttributes**](ACHCounterpartyAttributes.md) |  | [default to undefined]
**relationships** | [**CreditAccountRelationships**](CreditAccountRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ACHCounterparty } from '@unit-finance/unit-openapi-node-sdk';

const instance: ACHCounterparty = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
