# ReceivedACHDebitPositivePay

`Received ACH Debit Positive Pay` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**ReceivedACHDebitPositivePayAttributes**](ReceivedACHDebitPositivePayAttributes.md) |  | [default to undefined]
**relationships** | [**FeeRelationships**](FeeRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ReceivedACHDebitPositivePay } from '@unit-finance/unit-node-sdk';

const instance: ReceivedACHDebitPositivePay = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
