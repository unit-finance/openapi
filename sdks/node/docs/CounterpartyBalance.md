# CounterpartyBalance

`CounterpartyBalance` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**CounterpartyBalanceAttributes**](CounterpartyBalanceAttributes.md) |  | [default to undefined]
**relationships** | [**CounterpartyBalanceRelationships**](CounterpartyBalanceRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CounterpartyBalance } from 'unit-openapi-node-sdk';

const instance: CounterpartyBalance = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
