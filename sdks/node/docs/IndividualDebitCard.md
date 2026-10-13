# IndividualDebitCard

`IndividualDebitCard` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**IndividualDebitCardAttributes**](IndividualDebitCardAttributes.md) |  | [default to undefined]
**relationships** | [**CashDepositBarcodeRelationships**](CashDepositBarcodeRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { IndividualDebitCard } from '@unit-finance/unit-openapi-node-sdk';

const instance: IndividualDebitCard = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
