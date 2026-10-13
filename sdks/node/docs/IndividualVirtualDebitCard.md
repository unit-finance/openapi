# IndividualVirtualDebitCard

`IndividualVirtualDebitCard` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**IndividualVirtualDebitCardAttributes**](IndividualVirtualDebitCardAttributes.md) |  | [default to undefined]
**relationships** | [**CashDepositBarcodeRelationships**](CashDepositBarcodeRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { IndividualVirtualDebitCard } from '@unit-finance/unit-openapi-node-sdk';

const instance: IndividualVirtualDebitCard = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
