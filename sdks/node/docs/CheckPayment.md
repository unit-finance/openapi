# CheckPayment

`CheckPayment` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**CheckPaymentAttributes**](CheckPaymentAttributes.md) |  | [default to undefined]
**relationships** | [**CheckDepositRelationships**](CheckDepositRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CheckPayment } from '@unit-finance/unit-node-sdk';

const instance: CheckPayment = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
