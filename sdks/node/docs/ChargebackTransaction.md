# ChargebackTransaction

`chargebackTransaction` is a type of transaction that is generated when a Chargeback request is initiated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**ChargebackTransactionAttributes**](ChargebackTransactionAttributes.md) |  | [default to undefined]
**relationships** | [**ChargebackTransactionRelationships**](ChargebackTransactionRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChargebackTransaction } from 'unit-openapi-node-sdk';

const instance: ChargebackTransaction = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
