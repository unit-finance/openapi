# BusinessVirtualCreditCard

`BusinessVirtualCreditCard` is a JSON:API resource returned by the Create Business Virtual Credit Card operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | **{ [key: string]: any; }** | Attributes of the business virtual credit card. | [default to undefined]
**relationships** | [**CashDepositBarcodeRelationships**](CashDepositBarcodeRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BusinessVirtualCreditCard } from '@unit-finance/unit-openapi-node-sdk';

const instance: BusinessVirtualCreditCard = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
